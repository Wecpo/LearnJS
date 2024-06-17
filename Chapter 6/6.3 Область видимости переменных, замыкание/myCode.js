// Область видимости переменных, замыкание

// JavaScript - язык с сильным функционально-ориентированным уклоном. Он дает нам
// много свободы. Функция может быть динамически создана, скопирована в другую переменную
// или передана как аргумент другой функции и позже вызвана из другого места.

// Мы знаем, что функция может получить доступ к переменным из внешнего окружения, эта
// возможность используется очень часто.

// Но что произойдет, когда внешние переменные изменятся? Функция получит последнее
// значение или то, которое существовало на момент создания функции?

// И что произойдет, когда функция переместится в другое место в коде и будет вызвана
// оттуда - получит ли она доступ к внешним переменным своего нового местоположения?

// Разные языки ведут себя по разному в таких случаях, и в этой главе мы рассмотрим
// поведение JavaScript.

// В JavaScript есть три способа объявить переменую - let, const, var.

// Блоки кода
//
// Если переменная объявлена внутри блока кода {...}, то она видна только внутри
// этого блока.
//
// Например:
//
() => {
  () => {
    let message = "Hello";
    console.log(message); // Hello
  };

  console.log(message); // ReferenceError: message in not defined
};

// С помощью блоков {...} мы можем изолировать часть кода, выполняющую свою собственную
// задачу, с переменными, принадлежащими только ей:

() => {
  {
    let message = "Hello";
    console.log(message);
  }
  {
    let message = "Goodbye";
    console.log(message);
  }
  // Без отделения блоками была бы ошибка - SyntaxError: Identifier 'message' has already been declared
};

// Для if, for, while и т.д. переменные, объявленные в блоке кода {...}, также видны
// только внутри:
() => {
  if (true) {
    let phrase = "Hello";
    console.log(phrase); // Hello
  }
  console.log(phrase); // ReferenceError: phrase is not defined
};

// В этом случае после завершеничя работы if нижний alert не увидит phrase, что и приведет
// к ошибке.
//
// И это замечательно, т.к. это позволяет нам создавать блочно-локальные переменные,
// относящиеся только к ветви if
//
// То же самое можно сказать и про циклы for и while:
() => {
  for (let i = 0; i < 3; i++) {
    console.log(i); // 0 // 1 // 2
  }
  console.log(i); // referenceError: i is not defined
};

// Визуально let i = 0, находится вне блока кода {...}, однако здесь в случае с for
// есть особенность: переменная объявленная внутри (...) считается частью блока

// Вложенные функции.
//
// Функция называется вложенной, когда она создается внутри другой функции.
//
// Это очень легко создать в JavaScript.
//
// Мы можем использовать это для упорядочивания нашего кода, например:
() => {
  function sayHiBye(firstName, lastName) {
    function getFullName() {
      return firstName + " " + lastName;
    }
    console.log("Hello, " + getFullName());
    console.log("Bye, " + getFullName());
  }
  sayHiBye("Max", "Familia");
};

() => {
  function makeCounter() {
    let count = 0;

    return function () {
      return count++;
    };
  }

  let counter = makeCounter();
  let counter2 = makeCounter();

  console.log(counter()); // 0
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter2()); // 0
  console.log(counter2()); // 1
  console.log(counter2()); // 2
};

// Лексическое окружение

// Шаг 1. Переменные
// В JavaScript у каждой выполняемой функции, блока кода {...} и скрипта есть связанный
// с ними внутренний (скрытый) объект, называемый лексическим окружением LexcalEnvironment.
//
// Объект лексического окружения состоит из двух частей:
// - 1. Environment Record - объект, в котором как свойства хранятся все локальные переменные
//      (а также некоторая другая информация, такая как значение this)
// - 2. Ссылка на внешнее лексическое окружения - то есть то, которое соответствует коду
//      снаружи (снаружи от текущих фигурных скобок).
//
// "Переменная" - это просто свойство специального внутреннего объекта: Environment Record.
// "Получить или изменить переменную", означает, "получить или изменить свойство этого объекта"
//

() => {
  // Если вы объявляете функцию внутри другой функции,
  // первая получает доступ к переменным и аргументам последней:
  function outerFn(myArg) {
    var myVar;
    function innerFn() {
      //имеет доступ к myVar и myArg
    }
  }
  // При этом, такие переменные продолжают существовать и остаются доступными внутренней
  // функцией даже после того, как внешняя функция, в которой они определены, была исполнена.
};

() => {
  // Рассмотрим пример — функцию, возвращающую кол-во собственных вызовов:
  function createCounter() {
    var numberOfCalls = 0;
    return function () {
      return ++numberOfCalls;
    };
  }
  var fn = createCounter();
  fn(); //1
  fn(); //2
  fn(); //3
  // В данном примере функция, возвращаемая createCounter, использует переменную numberOfCalls,
  //  которая сохраняет нужное значение между ее вызовами
  //  (вместо того, чтобы сразу прекратить своё существование с возвратом createCounter).

  // Именно за эти свойства такие «вложенные» функции в JavaScript называют замыканиями
  //  (термином, пришедшим из функциональных языков программирования) — они
  //  «замыкают» на себя переменные и аргументы функции, внутри которой определены.
};

() => {
  // Применение замыканий

  // Упростим немножко пример выше — уберём необходимость отдельно вызывать функцию
  // createCounter, сделав ее аномимной и вызвав сразу же после ее объявления:
  var fn = (function () {
    var numberOfCalls = 0;
    return function () {
      return ++numberOfCalls;
    };
  })();
  // Такая конструкция позволила нам привязать к функции данные, сохраняющиеся
  //  между ее вызовами — это одно из применений замыканий. Иными словами,
  //   с помощью них мы можем создавать функции, имеющие своё изменяемое состояние.
};

() => {
  // Другое хорошее применение замыканий — создание функций,
  // в свою очередь тоже создающих функции — то, что некоторые назвали бы приёмом
  // т.н. метапрограммирования. Например:

  var createHelloFunction = function (name) {
    return function () {
      alert("Hello, " + name);
    };
  };

  var sayHelloHabrahabr = createHelloFunction("Habrahabr");
  sayHelloHabrahabr(); //alerts «Hello, Habrahabr»

  // Благодаря замыканию возвращаемая функция «запоминает» параметры,
  //  переданные функции создающей, что нам и нужно для подобного рода вещей.

  // Похожая ситуация возникает, когда мы внутреннюю функцию не возвращаем,
  // а вешаем на какое-либо событие — поскольку событие возникает уже после того,
  // как исполнилась функция, замыкание опять же помогает не потерять переданные
  // при создании обработчика данные.
};

let books = [
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    genre: "фантастика",
    pages: 328,
    status: "в наличии",
  },
  {
    title: "Преступление и наказание",
    author: "Федор Достоевский",
    year: 1866,
    genre: "роман",
    pages: 574,
    status: "в аренде",
    quantity: 3,
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1966,
    genre: "фэнтези",
    pages: 480,
    status: "в наличии",
  },
  {
    title: "Мартин Иден",
    author: "Джек Лондон",
    year: 1909,
    genre: "роман",
    pages: 368,
    status: "в аренде",
    quantity: 7,
  },
  {
    title: "Солярис",
    author: "Станислав Лем",
    year: 1961,
    genre: "научная фантастика",
    pages: 224,
    status: "в наличии",
  },
  {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    genre: "роман",
    pages: 1225,
    status: "в наличии",
  },
  {
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    year: 1997,
    genre: "фэнтези",
    pages: 432,
    status: "в аренде",
    quantity: 5,
  },
  {
    title: "Гарри Поттер и Кубок огня",
    author: "Джоан Роулинг",
    year: 2000,
    genre: "фэнтези",
    pages: 734,
    status: "в наличии",
  },
];
