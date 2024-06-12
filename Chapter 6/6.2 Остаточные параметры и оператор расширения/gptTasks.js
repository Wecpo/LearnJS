() => {
  // Задача 1: Напишите функцию `sumAll`, которая принимает неограниченное количество
  //  чисел и возвращает их сумму, используя остаточные параметры.

  function sumAll(...numbers) {
    return numbers.reduce((acc, item) => {
      return acc + item;
    }, 0);
  }

  console.log(sumAll(1, 2, 3)); // 6
  console.log(sumAll(1, 2, 3, 4, 5)); // 15
};

() => {
  // Задача 2: Напишите функцию `combineArrays`, которая принимает два массива и
  // возвращает новый массив, содержащий элементы обоих массивов, используя оператор
  // расширения.
  function combineArrays(array1, array2) {
    return [...array1, ...array2];
  }

  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];

  console.log(combineArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6]
};

() => {
  // Задача 3: Напишите функцию `maxOfRest`, которая принимает первый параметр `initialMax`
  //  и неограниченное количество дополнительных чисел.
  //   Функция должна вернуть максимальное значение между `initialMax` и остальными числами,
  //    используя остаточные параметры и `Math.max`.

  function maxOfRest(initialMax, ...restNumbers) {
    return Math.max(initialMax, ...restNumbers);
  }

  console.log(maxOfRest(10, 5, 20, 15)); // 20
  console.log(maxOfRest(0, -1, -2, -3)); // 0
};

() => {
  // Задача 4: Напишите функцию `cloneObject`, которая принимает объект и
  //  возвращает его клон, используя оператор расширения.

  function cloneObject(obj) {
    return { ...obj };
  }

  const original = { name: "Alice", age: 30 };
  const clone = cloneObject(original);

  console.log(clone); // { name: 'Alice', age: 30 }
  console.log(clone === original); // false
};

() => {
  // Задача 5: Напишите функцию `mergeObjects`, которая принимает любое количество
  //  объектов и возвращает новый объект, объединяющий все обрабатываемые объекты,
  //   используя оператор расширения.

  function mergeObjects(...objects) {
    return objects.reduce((acc, item) => {
      return { ...acc, ...item };
    }, {});
  }

  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  const obj3 = { c: 5, d: 6 };

  console.log(mergeObjects(obj1, obj2, obj3));
};
