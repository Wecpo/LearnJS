// Представим программу, в которой есть объект пользователя.
// Этот объект используется повсеместно.
// В такой ситуации описание типа этого объекта будет повторяться в каждом определении функции:

() => {
  function doSomething(user: { firstName: string; lastName: number }) {}
  function doSomethingElse(user: { firstName: string; lastName: number }) {}
  function doSomethingAnother(user: { firstName: string; lastName: number }) {}
};

// Во-первых, здесь много дублирования.
// Во-вторых, значительно усложняется изменение структуры,
// так как придется руками править все места, где встречается это определение.
// В этом уроке разберем, как избежать таких проблем.
//
//
// Задаем псевдоним типа
//
//
// Чтобы не делать одну и ту же работу, TypeScript позволяет задавать псевдоним
// для составных типов. Так мы не будем повторяться:

() => {
  type User = {
    firstName: string;
    pointsCount: number;
  };
};

// Теперь можно провести замену во всех функциях:

() => {
  type User = {
    firstName: string;
    pointsCount: number;
  };

  function doSomething(user: User) {
    // ...
  }
};

// Псевдоним — это не создание нового типа данных.
// Это способ сокращенно записать определение типа.
// Поэтому следующие примеры будут работать без проблем:

() => {
  type User = {
    firstName: string;
    pointsCount: number;
  };
  function doSomething(user: User) {}

  const user = {
    firstName: "Mike",
    pointsCount: 1000,
  };

  // Оба вызова работают
  doSomething(user);
  doSomething({ firstName: "Bob", pointsCount: 1800 });
};

// При этом разработчики на TypeScript говорят «создал тип»,
//  а не «создал псевдоним типа». Поэтому в этом курсе мы будем придерживаться общепринятого формата.

// Типы можно задавать для любых типов данных, например, для простых:

() => {
  type SomeType = string;
};

// А также для составных:

() => {
  // union тип из трех возможных значений
  type SomeType = string | number | null;

  // Функция
  type Countable = (coll: number[]) => number;
};

//
// Объекты и функции
//

// Описание типа функции вне объекта и внутри отличается.
// Когда функция записывается самостоятельно, используется формат стрелочной функции:

() => {
  type Countable = (coll: number[]) => number;

  // Внутри типа, который описывает объект, формат меняется на используемый для обычных свойств:

  type User = {
    firstName: string;
    pointsCount: number;
    count(coll: number[]): number;
  };

  () => {
    //   Но это не касается колбеков, которые могут быть использованы внутри:

    type User = {
      firstName: string;
      pointsCount: number;
      // Типы взяты для примера
      count(coll: (v: string) => string): number;
    };
  };
};

// В этом уроке мы научились использовать псевдонимы типов.
// Также мы узнали, как задавать псевдоним для составных типов.

//
//
//
//
// Задание
// Реализуйте функцию getOlderUser(), которая принимает на вход двух пользователей
// и возвращает того, который старше. Если пользователи являются ровесниками, то возвращается null:

const user1 = { name: "Petr", age: 8 };
// Определите для пользователя псевдоним, чтобы не дублировать определение его типа в параметрах функции.

() => {
  type User = {
    name: string;
    age: number;
  };

  function getOlderUser(user1: User, user2: User): User | null {
    if (user1.age > user2.age) return user1;
    if (user1.age === user2.age) return null;
    else return user2;
  }
};
