// В JavaScript функции – это объекты.

// Можно представить функцию как «объект, который может делать какое-то действие».
// Функции можно не только вызывать, но и использовать их как обычные объекты:
// добавлять/удалять свойства, передавать их по ссылке и т.д.

// Свойство 'name'
//
// Объект функции содержит несколько полезных свойств.
// Например, имя функции нам доступно как свойство 'name'
() => {
  function sayHi() {
    console.log("Hi");
  }
  console.log(sayHi.name);
};

() => {
  let sayHi = function () {
    console.log("Hi");
  };
  console.log(sayHi.name);
};

// В спецификации это называется «контекстное имя»: если функция не имеет name,
//  то JavaScript пытается определить его из контекста.

// Также имена имеют и методы объекта:

() => {
  let user = {
    sayHi() {
      // ...
    },

    sayBye: function () {
      // ...
    },
  };

  alert(user.sayHi.name); // sayHi
  alert(user.sayBye.name); // sayBye
};

// В этом нет никакой магии. Бывает, что корректное имя определить невозможно.
//  В таких случаях свойство name имеет пустое значение. Например:

// функция объявлена внутри массива
() => {
  let arr = [function () {}];

  alert(arr[0].name); // <пустая строка>
};
// здесь отсутствует возможность определить имя, поэтому его нет

//// Свойство length
//
/// Ещё одно встроенное свойство «length» содержит количество параметров функции
//  в её объявлении. Например:
() => {
  function f1(a) {}
  function f2(a, b) {}
  function many(a, b, ...more) {}

  alert(f1.length); // 1
  alert(f2.length); // 2
  alert(many.length); // 2
};

// Например, в коде ниже функция ask принимает в качестве параметров вопрос question
//  и произвольное количество функций-обработчиков ответа handler.

// Когда пользователь отвечает на вопрос, функция вызывает обработчики.
//  Мы можем передать два типа обработчиков:

// Функцию без аргументов, которая будет вызываться только в случае положительного ответа.
// Функцию с аргументами, которая будет вызываться в обоих случаях и возвращать ответ.
// Чтобы вызвать обработчик handler правильно, будем проверять свойство handler.length.

// Идея состоит в том, чтобы иметь простой синтаксис обработчика
//  без аргументов для положительных ответов (наиболее распространённый случай),
//   но также и возможность передавать универсальные обработчики:

() => {
  function ask(question, ...handlers) {
    let isYes = confirm(question);

    for (let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
  }

  // для положительных ответов вызываются оба типа обработчиков
  // для отрицательных - только второго типа
  ask(
    "Вопрос?",
    () => alert("Вы ответили да"),
    (result) => alert(result)
  );
};

// Пользовательские свойства
// Мы также можем добавить свои собственные свойства.

// Давайте добавим свойство counter для отслеживания общего количества вызовов:
() => {
  function sayHi() {
    alert("Hi");

    // давайте посчитаем, сколько вызовов мы сделали
    sayHi.counter++;
  }
  sayHi.counter = 0; // начальное значение

  sayHi(); // Hi
  sayHi(); // Hi

  alert(`Вызвана ${sayHi.counter} раза`); // Вызвана 2 раза
};
