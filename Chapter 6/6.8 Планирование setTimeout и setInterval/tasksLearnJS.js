// Вывод каждую секунду
// важность: 5
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
//  начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

() => {
  // setInterval
  function printNumbers(from, to) {
    let current = from;
    const intervalId = setInterval(() => {
      console.log(current);
      if (current === to) {
        clearInterval(intervalId);
      }
      current++;
    }, 1000);
  }

  printNumbers(1, 5);
};

() => {
  // setTimeout
  function printNumbers(from, to) {
    let current = from;
    setTimeout(function log() {
      console.log(current);
      if (current < to) {
        current++;
        setTimeout(log, 1000);
      }
      clearTimeout(setTimeoutId);
    }, 1000);
  }

  printNumbers(1, 5);
};

let counter = 0;

setTimeout(function log() {
  counter++;
  console.log(counter);
  setTimeout(log, 1000);
}, 1000);

setTimeout(() => {
  setTimeout(() => console.log(1), 1000);
}, 1000);
