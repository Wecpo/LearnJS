// Две функции - один объект
// важность: 2
// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true
// Если да – приведите пример вашего кода.

// Ответ: да, если оба конструктора возвращают один и тот же объект

let obj = {};

function A() {
  return obj;
}

function B() {
  return obj;
}

let a = new A();
let b = new B();

alert(a == b);

// ***************************************************************************************************
// Создайте калькулятор при помощи конструктора, new Calculator
// важность: 5
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {
  this.read = function read() {
    this.a = +prompt("Введите первое число");
    this.b = +prompt("Введите второе число");
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calc = new Calculator();
console.log(calc);

// ***************************************************************************************************
// Создайте new Accumulator
// важность: 5
// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:
() => {
  let accumulator = new Accumulator(1); // начальное значение 1

  accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
  accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

  alert(accumulator.value); // выведет сумму этих значений}
};

function Accumulator(startingValue = 0) {
  this.value = startingValue;
  this.read = function () {
    let acc = +prompt("Введите число для сложения");
    this.value += acc;
  };
}

let acc = new Accumulator();
acc.read();
acc.read();
alert(acc.value);
