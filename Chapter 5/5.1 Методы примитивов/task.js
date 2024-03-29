// Можно ли добавить свойство строке?
// важность: 5
// Взгляните на следующий код:

// let str = "Привет";

// str.test = 5;

// alert(str.test);
// Как вы думаете, это сработает? Что выведется на экран?

() => {
  let str = "Привет";

  str.test = 5;

  alert(str.test);

  // в момент обращения к свойству str создается объект обертка
  // в строгом режиме попытка изменения этого объекта выдаст ошибку
  // без строго режима операция продолжается, объект получает свойство test, но после этого он удаляется
  // так что на 17 строке у str уже нет свойства test.

  // use strict  ---- undefined
  // !use strict ----- Ошибка
};

() => {
  let num = Number(123);
  num.test = 10;
  console.log(num.test); // undefined

  let num1 = new Number(123);
  num1.test = 12;
  console.log(num1.test); //12
  console.log(num1);
};
