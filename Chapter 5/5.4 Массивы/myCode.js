() => {
  let arr = [];
  let arr1 = new Array();
  console.log(arr);
  console.log(arr1);
  let arr2 = ["apple", "orange", "lemon"];
  let arr3 = new Array("yabloko", "apelsin", "limon");
  console.log(arr2);
  console.log(arr3);
  console.log(arr2.at(-1));

  console.log(arr2.at(-2));
};

() => {
  // *** Методы работающие с концом массива ***
  // pop - удаляет последний элемент из массива и возвращает его // мутирует массив
  // push - добавляет новый элемент в конец массива и возвращает length // мутирует массив
  // *** Методы работающие с началом массива ***
  // shift - удаляет из массивая первый элемент и возращает его // мутирует массив
  // unshift - добавляет элемент в начало массива и возвращет length// мутирует массив
};
() => {
  // *** Методы работающие с концом массива ***
  let arr1 = [1, 2, 3, 4, 5];
  console.log(arr1.pop()); // 5
  console.log(arr1);
  let arr2 = [5, 4, 3, 2, 1];
  console.log(arr2.push(0));
  arr2.push(0);
  console.log(arr2);
};

() => {
  // *** Методы работающие с началом массива ***
  let arr1 = [1, 2, 3, 4, 5];
  console.log(arr1.shift(), arr1);
  let arr2 = [7, 4, 3, 2, 1];
  console.log(arr2.unshift(12), arr2);
  alert(arr1.push(12));
  alert(arr1);
};

() => {
  let myArray = [1, 2, 3, 4];
  myArray.name = () => {
    console.log(123);
  };
  console.log(myArray.name()); // 123
};

() => {
  let array = [1, 2, 3, 4, 5, 6];
  for (let item in array) {
    console.log(typeof item); // string
  }
  for (let item of array) {
    console.log(typeof item); // number
  }
};

() => {
  let fruits = [1, 2, 3, 4, 5];
  fruits[100] = "apple";
  console.log(fruits.length);
  fruits.length = 3;
  console.log(fruits);
  fruits.length = 6;
  console.log(fruits);
};

// Итого
// Массив - это особый тип объекта, предназначенный для работы с упорядоченным набором элементов
// Вызов new Array(number) создает массив с заданной длиной, но без элементов
// - Свойство length отражает длину массива или, если точнее, его последний цифровой индекс + 1.
// - Если мы уменьшаем length вручную, массив укорачивается.
// ** Получение элементов:
// - Мы можем получить элемент по его индксу, например array[0]
// - Также мы можем использовать метод at(i) для получения элементов с отрицательным индексом,
//   для отрицательных значений i, он отступает с конца массива. В остальном работает так же,
//   как array[i], если i > 0.
