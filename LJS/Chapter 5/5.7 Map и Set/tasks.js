// Фильтрация уникальных элементов массива
// важность: 5
// Допустим, у нас есть массив arr.

// Создайте функцию unique(arr), которая вернёт массив уникальных,
//  не повторяющихся значений массива arr.

// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare,Krishna,:-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.

// P.P.S. Используйте Set для хранения уникальных значений.

() => {
  function unique(arr) {
    return Array.from(new Set(arr));
  }
  let values = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
  ];
  console.log(unique(values));
};

// Отфильтруйте анаграммы
// важность: 4
// Анаграммы – это слова, у которых те же буквы в том же количестве,
//  но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

() => {
  function aclean(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("").sort().join("").toLowerCase();
    }
    return Array.from(new Set(arr));
  }

  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  console.log(aclean(arr));
};

// Перебираемые ключи
// важность: 5
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними,
//  например, применить метод .push.

// Но это не выходит:

// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

() => {
  let map = new Map();
  map.set("name", "John");
  let keys = Array.from(map.keys());
  console.log(keys);
  // Error: keys.push is not a function
  // Ошибка: keys.push -- это не функция
  keys.push("more");
  console.log(keys);
};
