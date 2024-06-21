// 1. Задача 1:
//     Напишите функцию, используя `new Function`, которая принимает два аргумента и возвращает их сумму.

let sum = new Function("a", "b", "return a + b;");
console.log(sum(5, 3)); // ?

// 2. Задача 2:
//     Создайте функцию с помощью `new Function`, которая принимает строковый аргумент и возвращает его в верхнем регистре.

let toUpperCase = new Function("str", "return str.toUpperCase();");
console.log(toUpperCase("hello")); // ?

// 3. Задача 3:
//     Напишите функцию, используя `new Function`, которая принимает число и возвращает его квадрат.

let square = new Function("n", "return n * n;");
console.log(square(4)); // ?

// 4. Задача 4:
//     Создайте функцию с помощью `new Function`, которая принимает объект и возвращает строку со значениями его свойств, разделенными пробелом.

let objectValues = new Function("obj", 'return Object.values(obj).join(" ");');
console.log(objectValues({ name: "John", age: 30 })); // ?
