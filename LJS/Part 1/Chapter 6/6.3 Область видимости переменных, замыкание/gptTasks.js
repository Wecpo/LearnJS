() => {
  // Задача 1:
  // Напишите функцию `counter` с замыканием, которое увеличивает
  //  внутренний счетчик при каждом вызове и возвращает текущее значение счетчика.

  function counter() {
    let count = 0;
    return function () {
      return ++count;
    };
  }

  const count = counter();
  console.log(count()); // 1
  console.log(count()); // 2
  console.log(count()); // 3
};

() => {
  // Напишите функцию `createMultiplier`, которая принимает один аргумент
  // `multiplier` и возвращает функцию, умножающую значение, переданное ей, на `multiplier`.

  function createMultiplier(multiplier) {
    return function (x) {
      return x * multiplier;
    };
  }

  const double = createMultiplier(2);
  console.log(double(5)); // 10
  console.log(double(10)); // 20

  const triple = createMultiplier(3);
  console.log(triple(3)); // 9
  console.log(triple(4)); // 12
};

() => {
  // Задача 3:
  // Напишите функцию `remember`, которая принимает одно значение и возвращает функцию,
  //  которая возвращает это значение при каждом вызове.

  function remember(val) {
    return function () {
      return val;
    };
  }

  const rememberHello = remember("Hello");
  console.log(rememberHello()); // 'Hello'
  console.log(rememberHello()); // 'Hello'

  const remember123 = remember(123);
  console.log(remember123()); // 123
  console.log(remember123()); // 123
};

() => {
  // Задача 4:
  // Создайте функцию `createBankAccount`, которая возвращает объект
  //  с двумя методами: `deposit` и `checkBalance`.
  //  Метод `deposit` добавляет значение к баланс,
  //   а метод `checkBalance` возвращает текущий баланс.

  function createBankAccount() {
    let balance = 0;
    return {
      deposit(sum) {
        return (balance += sum);
      },
      checkBalance() {
        return balance;
      },
    };
  }

  const myAccount = createBankAccount();
  myAccount.deposit(100);
  myAccount.deposit(50);
  console.log(myAccount.checkBalance()); // 150
};

() => {
  // Задача 5:
  // Напишите функцию `createPasswordChecker`, которая принимает пароль
  //  и возвращает функцию, проверяющую, совпадает ли введенный пароль с изначально заданным.

  function createPasswordChecker(password) {
    const currentPassword = password;
    return function checkPassword(newPassword) {
      return currentPassword === newPassword ? true : false;
    };
  }

  const checkPassword = createPasswordChecker("secret");
  console.log(checkPassword("secret")); // true
  console.log(checkPassword("wrongPassword")); // false
};

() => {
  //     Задача 6:
  // Напишите функцию `createUser`, которая принимает имя пользователя
  //  и возвращает объект с методами `getName`, `updateName` и `greet`.
  //  Метод `getName` возвращает текущее имя пользователя,
  //   `updateName` позволяет изменить имя пользователя,
  //    а `greet` возвращает строку приветствия с текущим именем.

  function createUser(name) {
    let currentName = name;
    return {
      getName() {
        return currentName;
      },
      updateName(newName) {
        currentName = newName;
      },
      greet() {
        return `Привет, ${currentName}`;
      },
    };
  }

  const user = createUser("Alice");
  console.log(user.getName()); // 'Alice'
  user.updateName("Bob");
  console.log(user.getName()); // 'Bob'
  console.log(user.greet()); // 'Hello, Bob!'
};

() => {
  // Напишите функцию `createCache`, которая создает объект с методами
  //  `add` и `get`.
  //   Метод `add` сохраняет значение по заданному ключу, а
  //   метод `get` возвращает сохраненное значение по ключу.
  //   Если значение по ключу отсутствует,
  //    `get` должен возвращать `undefined`.

  function createCache() {
    let obj = {};
    return {
      add(key, value) {
        const tempObj = {
          [key]: value,
        };
        obj = { ...obj, ...tempObj };
      },
      get(key) {
        return obj[key];
      },
    };
  }

  const cache = createCache();
  cache.add("a", 100);
  cache.add("b", 200);
  console.log(cache.get("a")); // 100
  console.log(cache.get("b")); // 200
  console.log(cache.get("c")); // undefined
};

() => {
  // Напишите функцию `createLimitedCounter`, которая принимает лимит
  // `limit` и возвращает функцию-счетчик, увеличивающуюся каждый раз при вызове,
  //  но не превышающую заданный лимит.
  //  Если счетчик достиг лимита, дальнейшие вызовы функции должны возвращать
  //   текущее значение лимита.

  function createLimitedCounter(limit) {
    let counter = 0;
    return function () {
      if (counter === limit) {
        return counter;
      } else return ++counter;
    };
  }

  const limitedCounter = createLimitedCounter(3);
  console.log(limitedCounter()); // 1
  console.log(limitedCounter()); // 2
  console.log(limitedCounter()); // 3
  console.log(limitedCounter()); // 3
  console.log(limitedCounter()); // 3
};
