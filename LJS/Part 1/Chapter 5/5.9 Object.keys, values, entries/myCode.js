// Методы Object. keys / values / entries
// Поддерживаются для структур Map, Set, Array
// Object.keys(obj) - возвращает массив ключей
// Object.values(obj) - возвращает массив значений
// Object.entries(obj) - возвращает массив пар (ключ, значение)

// Трансформации объекта
// У объектов нет множества методов, которые есть в массивах, например map, filter и других.

// Если мы хотели бы их применить, то можно использовать Object.entries
//  с последующим вызовом Object.fromEntries:

// Вызов Object.entries(obj) возвращает массив пар ключ/значение для obj.
// На нём вызываем методы массива, например, map.
// Используем Object.fromEntries(array) на результате, чтобы преобразовать его обратно в объект.
// Например, у нас есть объект с ценами, и мы хотели бы их удвоить:
() => {
  let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };

  let doublePrices = Object.fromEntries(
    // преобразовать в массив, затем map, затем fromEntries обратно объект
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );

  console.log(doublePrices.meat); // 8
};
