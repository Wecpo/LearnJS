// Декоратор-шпион
// важность: 5
// Создайте декоратор spy(func), который должен возвращать обёртку,
//  которая сохраняет все вызовы функции в своём свойстве calls.

// Каждый вызов должен сохраняться как массив аргументов.

// Например:

// function work(a, b) {
//   alert( a + b ); // произвольная функция или метод
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

() => {
  function work(a, b) {
    console.log(a + b); // произвольная функция или метод
  }

  work = spy(work);

  work(1, 2); // 3
  work(4, 5); // 9

  for (let args of work.calls) {
    console.log("call:" + args.join()); // "call:1,2", "call:4,5"
  }

  function spy(func) {
    wrapper.calls = [];
    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
    return wrapper;
  }
};
//
//
//
//
//
//
//
// Задерживающий декоратор
// важность: 5
// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

// function f(x) {
//   alert(x);
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс
// Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

// В приведённом выше коде f – функция с одним аргументом,
// но ваше решение должно передавать все аргументы и контекст this.

() => {
  function f(x) {
    console.log(x);
  }

  function delay(f, ms) {
    return function (...args) {
      setTimeout(() => f.apply(this, args), ms);
    };
  }

  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 4500);

  f1000("test"); // показывает "test" после 1000 мс
  f1500("test"); // показывает "test" после 1500 мс
};

// Декоратор debounce
// важность: 5

() => {
  function debounce(func, ms) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
  }
};

// Тормозящий (throttling) декоратор
// важность: 5
// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку.

() => {
  function throttle(func, ms) {
    let isThrottled = false,
      savedArgs,
      savedThis;

    function wrapper() {
      if (isThrottled) {
        // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }

      func.apply(this, arguments); // (1)

      isThrottled = true;

      setTimeout(function () {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }

    return wrapper;
  }
};
