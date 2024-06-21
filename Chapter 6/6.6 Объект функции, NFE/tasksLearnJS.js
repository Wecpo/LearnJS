// Установка и уменьшение значения счётчика

// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика,
//  можно воспользоваться как замыканием, так и свойством функции.
//   Или сделать два варианта решения: и так, и так.

() => {
  function makeCounter() {
    let count = 0;

    return function () {
      counter.set = function (value) {
        count = value;
      };
      counter.decrease = function () {
        count--;
      };
      return count++;
    };
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
// Напишите функцию sum, которая бы работала следующим образом:

// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования
// в примитив для функции.

() => {
  function sum(a) {
    let currentSum = a;

    function cb(b) {
      currentSum += b;
      return cb;
    }

    cb.toString = function () {
      return currentSum;
    };

    return cb;
  }

  alert(sum(1)(2));
  alert(sum(1)(2)(3));
  alert(sum(0)(1)(2)(3)(4)(5));
};
