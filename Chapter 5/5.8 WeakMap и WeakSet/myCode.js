// WeakMap
// Первое его отличие от Map в том, что ключи в WeakMap должны быть объектами,
//  а не примитивными значениями:

() => {
  let weakMap = new WeakMap();

  let obj = {};

  weakMap.set(obj, "ok"); // работает (объект в качестве ключа)
  weakMap.set("test", "Whoops"); // Ошибка, потому что "test" не объект
};
// // нельзя использовать строку в качестве ключа

// Теперь, если мы используем объект в качестве ключа и если больше нет ссылок на этот объект
//  то он будет удалён из памяти (и из объекта WeakMap) автоматически.

() => {
  let weakMap = new WeakMap();
  let obj = {
    name: "max",
  };

  weakMap.set(obj, "1");
  console.log(weakMap);
  console.log(weakMap);
  setTimeout(() => {
    console.log(weakMap);
  }, 500);
  console.log(`lastweak`, weakMap.get(obj));
};

// WeakSet
// Коллекция WeakSet ведёт себя похоже:

// Она аналогична Set, но мы можем добавлять в WeakSet только объекты (не примитивные значения).
// Объект присутствует в множестве только до тех пор, пока доступен где-то ещё.
// Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой.
// Будучи «слабой» версией оригинальной структуры данных,
//  она тоже служит в качестве дополнительного хранилища. Но не для произвольных данных,
//   а скорее для значений типа «да/нет». Присутствие во множестве WeakSet может что-то сказать нам
//    об объекте.

// Например, мы можем добавлять пользователей в WeakSet для учёта тех, кто посещал наш сайт:

() => {
  let obj1 = {
    name: "obj1",
  };
  let obj2 = {
    name: "obj2",
  };

  let weakSet = new WeakSet();
  weakSet.add({ name: "asdd" });
  console.log(weakSet.has({ name: "asdd" }));
};
() => {
  let visitedSet = new WeakSet();

  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };

  visitedSet.add(john); // John заходил к нам
  visitedSet.add(pete); // потом Pete
  visitedSet.add(john); // John снова

  // visitedSet сейчас содержит двух пользователей

  // проверим, заходил ли John?
  alert(visitedSet.has(john)); // true

  // проверим, заходила ли Mary?
  alert(visitedSet.has(mary)); // false

  john = null;
};
// структура данных visitedSet будет очищена автоматически (объект john будет удалён из visitedSet)
// Наиболее значительным ограничением WeakMap и WeakSet является то,
//  что их нельзя перебрать или взять всё содержимое. Это может доставлять неудобства, но не мешает WeakMap/WeakSet выполнять их главную задачу – быть дополнительным хранилищем данных для объектов, управляемых из каких-то других мест в коде.

// Итого
// WeakMap – это Map-подобная коллекция, позволяющая использовать в качестве ключей только объекты,
//  и автоматически удаляющая их вместе с соответствующими значениями, как только они становятся недостижимыми иными путями.

// WeakSet – это Set-подобная коллекция, которая хранит только объекты и удаляет их,
//  как только они становятся недостижимыми иными путями.

// Обе этих структуры данных не поддерживают методы и свойства, работающие
// со всем содержимым сразу или возвращающие информацию о размере коллекции. Возможны только операции на отдельном элементе коллекции.

// WeakMap и WeakSet используются как вспомогательные структуры данных в дополнение к
//  «основному» месту хранения объекта. Если объект удаляется из основного хранилища и
//  нигде не используется, кроме как в качестве ключа в WeakMap или в WeakSet, то он будет удалён
//  автоматически.
