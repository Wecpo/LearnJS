/*
if (строка с нулём) 
Выведется ли alert?
*/

if ("0") {
  alert("Привет");
}

// Выведется, т.к. любое значение строки, кроме "" (пустой строки) будет приравнено к true

/*
Название JavaScript 
Используя конструкцию if..else, напишите код,
который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!»,
в противном случае – отобразить: «Не знаете? ECMAScript!» */

// const res = prompt('Какое "официальное" название JavaScript?');

// if (res === "ECMAScript") {
//   alert("Верно");
// } else {
//   alert("Не знаете? ECMAScript!");
// }

/*Покажите знак числа 

Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа. 
*/

// const res = prompt("Введите число");

// if (res > 0) {
//   alert(1);
// } else if (res < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

/*Перепишите 'if' в '?' 

Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
} */

// let result = a + b < 4 ? "Мало" : "Много";

/* Перепишите 'if..else' в '?'
важность: 5
Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости рекомендуется разбить код на несколько строк. */

// let message;

// if (login == "Сотрудник") {
//   message = "Привет";
// } else if (login == "Директор") {
//   message = "Здравствуйте";
// } else if (login == "") {
//   message = "Нет логина";
// } else {
//   message = "";
// }

let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
