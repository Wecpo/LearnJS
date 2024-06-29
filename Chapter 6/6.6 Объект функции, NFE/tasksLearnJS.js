// Установка и уменьшение значения счётчика
// важность: 5
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика,
//  можно воспользоваться как замыканием, так и свойством функции.
//  Или сделать два варианта решения: и так, и так.

//
// Вариант с хранением переменной через локальную переменную.
() => {
  function makeCounter() {
    let count = 0;

    function counter() {
      return count++;
    }

    counter.set = function (value) {
      count = value;
    };
    counter.decrease = function () {
      count--;
    };
    return counter;
  }

  let counter = makeCounter();

  alert(counter()); // 0
  alert(counter()); // 1

  counter.set(10); // установить новое значение счётчика

  alert(counter()); // 10

  counter.decrease(); // уменьшить значение счётчика на 1

  alert(counter()); // 10 (вместо 11)
};

//
// Вариант с хранением переменной через свойство функции.
() => {
  function makeCounter() {
    counter.count = 0;

    function counter() {
      return counter.count++;
    }

    counter.set = function (value) {
      counter.count = value;
    };
    counter.decrease = function () {
      counter.count--;
    };
    return counter;
  }

  let counter = makeCounter();

  alert(counter()); // 0
  alert(counter()); // 1

  counter.set(10); // установить новое значение счётчика

  alert(counter()); // 10

  counter.decrease(); // уменьшить значение счётчика на 1

  alert(counter()); // 10 (вместо 11)
};

// Сумма с произвольным количеством скобок
// важность: 2
// Напишите функцию sum, которая бы работала следующим образом:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования
//  в примитив для функции.

() => {
  function sum(a) {
    let currentSum = a;
    function foo(b) {
      currentSum += b;
      return foo;
    }
    foo[Symbol.toPrimitive] = function (hint) {
      if (hint === "default") {
        return currentSum;
      }
    };
    return foo;
  }

  sum(1)(2) == 3; // 1 + 2
  sum(1)(2)(3) == 6; // 1 + 2 + 3
  sum(5)(-1)(2) == 6;
  sum(6)(-1)(-2)(-3) == 0;
  sum(0)(1)(2)(3)(4)(5) == 15;
};
