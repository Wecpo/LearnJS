// Декораторы и переадресация вызова, call/apply

// JavaScript предоставляет исключительно гибкие возможности по работе с функциями:
//  они могут быть переданы в другие функции, использованы как объекты,
//   и сейчас мы рассмотрим, как перенаправлять вызовы между ними и как их декорировать.
//
// Прозрачное кеширование
//
// Представим, что у нас есть функция slow(x), выполняющая ресурсоемкие вычисления, но
// возвращающая стабильные результаты. Другими словами, для одного и того же 'x' она
// всегда возвращает один и тот же результат.
//
// Если функция вызывается часто, то, вероятно мы захотим кешировать (запоминать)
// возвращаемые ею результаты, чтобы экономить на повторных вычислениях.
//
// Вместо того, чтобы усложнять slow(x) дополнительной функциональностью, мы заключим
// ее в функцию обертку - 'wrapper', которая добавит кеширование. Далее мы увидим,
// что в таком подхое масса преимуществ.
//
// Вот код с объяснением:
() => {
  function slow(x) {
    // Здесь могут быть ресурсоемкие вычисления
    console.log(`Called with ${x}`);
    return x;
  }

  function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
      if (cache.has(x)) {
        // если кеш содержит такой 'x'
        console.log(`res from cache`);
        return cache.get(x); // читаем из него результат
      }
      let result = func(x); // иначе, вызываем функцию

      cache.set(x, result); // и кешируем результат
      return result;
    };
  }

  slow = cachingDecorator(slow);

  console.log(slow(1)); // slow(1) кешируем
  console.log(`Again: ` + slow(1)); // возвращаем из кеша

  console.log(slow(2)); // slow(1) кешируем
  console.log(`Again: ` + slow(2)); // возвращаем из кеша
};

// В коде выше cachingDecorator – это декоратор, специальная функция,
// которая принимает другую функцию и изменяет её поведение.
//
// Идея состоит в том, что мы можем вызвать cachingDecorator с любой функцией,
// в результате чего мы получим кеширующую обёртку.
// Это здорово, т.к. у нас может быть множество функций,
// использующих такую функциональность, и всё,
// что нам нужно сделать – это применить к ним cachingDecorator.
//
// Отделяя кеширующий код от основного кода,
// мы также сохраняем чистоту и простоту последнего.
//
// С точки зрения внешнего кода, обёрнутая функция slow по-прежнему делает то же самое.
// Обёртка всего лишь добавляет к её поведению аспект кеширования.

// Подводя итог, можно выделить несколько преимуществ использования
//  отдельной cachingDecorator вместо изменения кода самой slow:
// - Функцию cachingDecorator можно использовать повторно. Мы можем применить
//   её к другой функции.

// - Логика кеширования является отдельной, она не увеличивает сложность самой
//   slow (если таковая была).

// - При необходимости мы можем объединить несколько декораторов
//   (речь об этом пойдёт позже).
//
//
// 'func.call' - для передачи контекста
//
// Декоратор сверху не подходит для работы с методами объектов.
//
// Например, в приведенном ниже worker.slow() перестает работать после применения декоратота:
() => {
  /// Сделаем worker.slow кеширующим
  let worker = {
    someMethod() {
      return 1;
    },
    slow(x) {
      // Здесь тяжелая задача для процессора
      console.log("called with " + x);
      return x + this.someMethod();
    },
  };

  function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
      if (cache.has(x)) {
        return cache.get(x);
      }

      let result = func(x);
      cache.set(x, result);
      return result;
    };
  }

  console.log(worker.slow(1)); // работает

  worker.slow = cachingDecorator(worker.slow); // теряем контекст в момент вызова func() worker.slow не имеет контекста

  console.log(worker.slow(2)); // Ошибка - someMethod is undefined

  //
};

() => {
  function sayHi() {
    alert(this.name);
  }

  let user = { name: "John" };
  let admin = { name: "Admin" };

  // используем 'call' для передачи различных объектов в качестве 'this'
  sayHi.call(user); // John
  sayHi.call(admin); // Admin
};

//
() => {
  let worker = {
    someMethod() {
      return 1;
    },

    slow(x) {
      alert("Called with " + x);
      return x * this.someMethod();
    },
  };

  function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
      console.log(this);
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x); // теперь 'this' передаётся правильно
      cache.set(x, result);
      return result;
    };
  }

  worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей

  alert(worker.slow(2)); // работает
  alert(worker.slow(2)); // работает, не вызывая первоначальную функцию (кешируется)
};

// Чтобы всё было понятно, давайте посмотрим глубже, как передаётся this:

// После декорации worker.slow становится обёрткой function (x) { ... }.
// Так что при выполнении worker.slow(2) обёртка получает 2
// в качестве аргумента и this=worker (так как это объект перед точкой).
// Внутри обёртки, если результат ещё не кеширован, func.call(this, x)
//  передаёт текущий this (=worker) и текущий аргумент (=2) в оригинальную функцию.

// func.apply
//
//

() => {
  let worker = {
    slow(min, max) {
      alert(`Called with ${min},${max}`);
      return min + max;
    },
  };

  function cachingDecorator(func, hash) {
    let cache = new Map();
    return function () {
      let key = hash(arguments); // (*)
      if (cache.has(key)) {
        return cache.get(key);
      }

      let result = func.call(this, ...arguments); // (**)

      cache.set(key, result);
      return result;
    };
  }

  function hash(args) {
    return args[0] + "," + args[1];
  }

  worker.slow = cachingDecorator(worker.slow, hash);

  alert(worker.slow(3, 5)); // работает
  alert("Again " + worker.slow(3, 5)); // аналогично (из кеша)
};

() => {
  //test
  function test() {
    console.log(arguments);
    for (let i of arguments) {
      console.log(i);
    }
  }
  const obj = {
    name: "max",
  };
  const arr = [1, 2, 3];
  const str = "445566";
  // test.apply(obj, arr);
  // test.call(obj, ...arr);
  test.apply(obj, Array.from(str));
  test.call(obj, str);
};
