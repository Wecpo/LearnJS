// splice
// добавляет, удаляет и заменяет элементы в массиве. Возвращает массив из удаленных элементов
// мутирует массив
() => {
  let arr = ["Я", "изучаю", "JavaScript"];
  arr.splice(1, 1);
  console.log(arr); // удаляет один элемент (второй аргумент), с первой позиции (первый аргумент)
};

() => {
  let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
  let removed = arr.splice(0, 2); // 'Я', 'изучаю'
  console.log(removed);
  console.log(arr);
};

() => {
  let arr = ["Я", "изучаю", "JavaScript"];

  // с индекса 2
  // удалить 0 элементов
  // вставить "сложный", "язык"
  arr.splice(2, 0, "сложный", "язык");

  console.log(arr); // "Я", "изучаю", "сложный", "язык", "JavaScript"
};

() => {
  //     Отрицательные индексы разрешены
  // В этом и в других методах массива допускается использование отрицательных индексов.
  // Они определяют позицию с конца массива, как тут:

  let arr = [1, 2, 5];
  let arr2 = [1, 2, 5];
  // начиная с индекса -1 (перед последним элементом)
  // удалить 0 элементов,
  // затем вставить числа 3 и 4
  arr.splice(-1, 0, 3, 4); // 1,2,3,4,5
  console.log(arr);
  arr2.splice(-2, 0, 3, 4);
  console.log(arr2); // 1, 3, 4, 2, 5
};

// slice возвращает новый массив в который копирует все индексы со 'a' до 'b' (не включительно).
() => {
  let arr = ["t", "e", "s", "t"];
  console.log(arr.slice(1, 3)); // 'e', 's'
  console.log(arr.slice(-2)); // 's', 't' копирует с -2 до конца
  let arr2 = arr.slice();
  console.log(arr2); //["t", "e", "s", "t"] без аргументов, копирует массив
};

// concat - создает новый массив, в который копирует данные из других массивов и доп. значения.
// arr.concat(arg1, arg2...)
() => {
  let arr = [1, 2];
  console.log(arr.concat([3, 4])); // [1, 2, 3, 4]
  console.log(arr.concat([3, 4], [5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(arr.concat([3, 4], 5, 6)); // [1, 2, 3, 4, 5, 6]
};

() => {
  let arr = [1, 2];
  let arrayLike = {
    0: "что-то",
    length: 1,
  };
  console.log(arr.concat(arrayLike)); // [1,2, {...}]
};

() => {
  let arr = [1, 2];

  let arrayLike = {
    0: "что-то",
    1: "ещё",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
  };

  console.log(arr.concat(arrayLike)); // 1,2,что-то,ещё
};

() => {
  let arr = [1, 2, 3];
  arr.forEach(alert);
  arr.forEach(console.log);
};

// find, findIndex, findLastIndex // find - возвращает true / false если элемент найден / не найден
// findIndex / findLastIndex - возвращают позицию если найден, -1 если не найден
// Все прерываются при первом нахождении
// filter - возвращает новый массив с элементами подходящими под фильтр
// map - возвращает новый массив результатов выполнения переданной функции

// sort
// arr.sort() - сортирует массив на месте, меняя в нем порядок элементов.
// Он также возвращет отсортированный массив, но обычно это игнорируется, тк изменяется сам arr.
() => {
  let arr = [1, 2, 15];
  let arr2 = arr.sort();
  console.log(arr, arr2);
};

// По умолчанию элементы сортируются как строки.
() => {
  [1, -2, 15, 2, 0, 8].sort(function (a, b) {
    alert(a + " <> " + b);
    return a - b;
  });
};
() => {
  let arr = [5, 3, 9, 4, -5, 2];
  console.log(arr.sort((a, b) => b - a));
};

// reverse
// возвращает новый массив // мутирует массив
() => {
  let arr = [1, 2, 3, 4, 5];
  let arr2 = arr.reverse();
  console.log(arr2);
  console.log(arr);
};

// split // Разбивает строку на массив по заданному разделителю (1й аргумент), второй аргумент
//          Обозначает ограничение на длину массива
() => {
  let names = "Вася, Петя, Даша";
  let arr = names.split(", ");
  console.log(arr);
  let str = "тест";

  console.log(str.split("")); // [т,е,с,т]
};

// join // делает в точности наоборот, те создает строку из массива, первый аргумент -
//         Задает разделитель между элементами (glue)
() => {
  let arr = ["Вася", "Петя", "Даша"];
  let str = arr.join(", ");
  console.log(str);
  let arr1 = [["Вася"], ["Петя"], ["Даша"]];
  let str1 = arr1.join(";");
  console.log(str1);
};

// reduce, reduceRight
// используются для вычисления единого значения на основе всего массива

() => {
  let value = arr.reduce(
    function (acc, item, index, array) {
      // ...
    },
    [initial]
  );
  /// accumulator - результат предыдущего вызова, равен initial при первом вызове, если он передан
  // item - очередной элемент массива
  // index - его позиция
  // array - сам массив
  // при отсутствии initial - в качестве первого значения берется первый элемент массива,
  // а перебор начинается со второго
};

() => {
  let arr = [1, 2, 3, 5];
  let res = arr.reduce((acc, item) => acc + item);
  console.log(res);
};
