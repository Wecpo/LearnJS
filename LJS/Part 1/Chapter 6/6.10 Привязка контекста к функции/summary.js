// Привязка контекста к функции
// При передаче методов объекта в качестве колбэков,
//  например для setTimeout, возникает известная проблема – потеря this.

// В этой главе мы посмотрим, как её можно решить.

// Потеря «this»
// Мы уже видели примеры потери this. Как только метод передаётся отдельно от объекта – this теряется.

// Вот как это может произойти в случае с setTimeout:

() => {
  let user = {
    firstName: "Вася",
    sayHi() {
      console.log(`Yo, ${this.firstName}!`);
    },
  };

  setTimeout(user.sayHi, 1000); // OY undefined

  //   setTimeout(user.sayHi.bind(user), 1000)

  //   setTimeout(function () {
  //     user.sayHi();
  //   }, 1000);
};

() => {
  let user = {
    firstName: "Вася",
    sayHi() {
      console.log(`Yo, ${this.firstName}!`);
    },
  };

  let sayHi = user.sayHi.bind(user);

  setTimeout(sayHi, 1000);
};

() => {
  let user = {
    firstName: "Вася",
    say(phrase) {
      alert(`${phrase}, ${this.firstName}!`);
    },
  };

  let say = user.say.bind(user);

  say("Привет"); // Привет, Вася (аргумент "Привет" передан в функцию "say")
  say("Пока"); // Пока, Вася (аргумент "Пока" передан в функцию "say")
};

// Если у объекта много методов и мы планируем их активно передавать,
//  то можно привязать контекст для них всех в цикле:

() => {
  for (let key in user) {
    if (typeof user[key] == "function") {
      user[key] = user[key].bind(user);
    }
  }
};

//
//
//
//
// Частичное применение
//
//
//
// До сих пор мы говорили только о привязывании this. Давайте шагнём дальше.
//
// Мы можем привязать не только this, но и аргументы.
//  Это делается редко, но иногда может быть полезно.

// Полный синтаксис bind:

// let bound = func.bind(context, [arg1], [arg2], ...);

() => {
  function mul(a, b) {
    return a * b;
  }

  let double = mul.bind(null, 2);

  alert(double(3)); // = mul(2, 3) = 6
  alert(double(4)); // = mul(2, 4) = 8
  alert(double(5)); // = mul(2, 5) = 10
};

//
//
//Частичное применение без контекста
// Что если мы хотим зафиксировать некоторые аргументы, но не контекст this?
//  Например, для метода объекта.

// Встроенный bind не позволяет этого. Мы не можем просто опустить контекст и перейти к аргументам.

// К счастью, легко создать вспомогательную функцию partial, которая привязывает только аргументы.

() => {
  function partial(func, ...argsBound) {
    return function (...args) {
      // (*)
      return func.call(this, ...argsBound, ...args);
    };
  }

  // использование:
  let user = {
    firstName: "John",
    say(time, phrase) {
      alert(`[${time}] ${this.firstName}: ${phrase}!`);
    },
  };

  // добавляем частично применённый метод с фиксированным временем
  user.sayNow = partial(
    user.say,
    new Date().getHours() + ":" + new Date().getMinutes()
  );

  user.sayNow("Hello");
  // Что-то вроде этого:
  // [10:00] John: Hello!

  //   Результатом вызова partial(func[, arg1, arg2...]) будет обёртка (*), которая вызывает func с:

  // - Тем же this, который она получает (для вызова user.sayNow – это будет user)
  // - Затем передаёт ей ...argsBound – аргументы из вызова partial ("10:00")
  // - Затем передаёт ей ...args – аргументы, полученные обёрткой ("Hello")
};
