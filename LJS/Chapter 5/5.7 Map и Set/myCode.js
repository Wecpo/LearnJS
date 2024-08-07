// Сейчас мы знаем о следующих сложных структурах данных:
// - Объекты для хранения именованных коллекция.
// - Массивы для хранения упорядоченных коллекций.
// Но этого не всегда достаточно для решения повседневных задач. Поэтому также существуют
// Map и Set.

// Map
() => {
  // Map - это коллекция ключ / значение, как и Object. Но основное отличие в том, что Map
  // позволяет использовать ключи любого типа.
  // Методы и свойства:
  // - new Map() - создает коллекцию.
  // - map.set(key, value) - записывает по ключу key значение value
  // - map.get(key, value) - возвращает значение по ключу или undefined, если ключа нет.
  // - map.has(key) - true / false соответственно, если ключ есть или ключа нет.
  // - map.delete(key) - удаляет пару ключ / значение по ключу key.
  // - map.clear() - полностью очищает коллекцию.
  // - map.size - возвращает текущее количество элементов.

  let map = new Map();
  map.set("1", "str1"); // строка в качестве ключа
  map.set(1, "num1"); // цифра как ключ
  map.set(true, "bool1"); // boolean как ключ

  // Помните, обычный объект Object приводит ключи к строкам?
  // Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
  console.log(map.get(1)); // num1
  console.log(map.get("1")); // str1
  console.log(map.size); // 3

  // Как мы видим, в отличие от объектов, ключи не были приведены к строкам. Можно использовать
  // любые типы данных для ключеей.
  // map[key] - сработает, но получит соответствующие ограничения, как при обращении к объекту.
  // Поэтому нам следует использовать методы map: set, get, etc..
  // Т.е создаст в map обычно свойство объекта
  // Настоящие map свойства хранятся Entries[index]: {key => value}
};

() => {
  // Map может использовать объекты в качестве ключей.
  let john = { name: "John" };
  let visitsCountMap = new Map();
  visitsCountMap.set(john, 123);
  console.log(visitsCountMap.get(john)); // 123

  // Map сравнивает ключи по алгоритму SameValueZero. Это тоже что и ===, только NaN равен NaN.
};

() => {
  // Для перебора Map есть 3 метода:
  // - map.keys() - возвращает итерируемый объект по ключам.
  // - map.values() - возвращает итерируемый объект по значениям.
  // - map.entries() - возвращает итерируемый объект по парам вида [ключ, значение], этот
  //   вариан используется по умолчанию в for .. of
  let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50],
  ]);

  // перебор по ключам (овощи)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // огурец, помидор, лук
  }

  // перебор по значениям (числа)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }

  // перебор по элементам в формате [ключ, значение]
  for (let entry of recipeMap) {
    // то же самое, что и recipeMap.entries()
    console.log(entry); // огурец,500 (и так далее)
  }
};

// Создание Map из обычного объекта
() => {
  let obj = {
    name: "John",
    age: 30,
  };
  let map = new Map(Object.entries(obj));
  console.log(map);
};

// Создание обычного объекта из Map
() => {
  let prices = Object.fromEntries([
    ["banana", 1],
    ["orange", 2],
    ["meat", 4],
  ]);

  console.log(prices);

  let map = new Map();
  map.set("banana", 1);
  map.set("orange", 2);
  map.set("meat", 4);

  let obj = Object.fromEntries(map.entries()); // создаём обычный объект (*)
  // ИЛИ
  //  let obj = Object.fromEntries(map); // создаём обычный объект (*)
  // готово!
  // obj = { banana: 1, orange: 2, meat: 4 }

  console.log(obj.orange); // 2
};

// Set
// Объект Set – это особый вид коллекции: «множество» значений (без ключей),
//  где каждое значение может появляться только один раз.

// Его основные методы это:

// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект
//  (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает),
//  возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true,
// если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве,
//  иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.
// Основная «изюминка» – это то, что при повторных вызовах set.add() с одним и тем же
//  значением ничего не происходит, за счёт этого как раз и получается, что каждое значение появляется один раз.

// Например, мы ожидаем посетителей, и нам необходимо составить их список.
// Но повторные визиты не должны приводить к дубликатам. Каждый посетитель должен появиться в списке только один раз.

// Множество Set – как раз то, что нужно для этого:
() => {
  let set = new Set();

  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };

  // // считаем гостей, некоторые приходят несколько раз
  set.add(john);
  set.add(pete);
  set.add(mary);
  set.add(john);
  set.add(mary);

  // // set хранит только 3 уникальных значения
  alert(set.size); // 3

  for (let user of set) {
    alert(user.name); // John (потом Pete и Mary)
  }
};
// Альтернативой множеству Set может выступать массив для хранения гостей и
//  дополнительный код для проверки уже имеющегося элемента с помощью arr.find.
//   Но в этом случае будет хуже производительность, потому что arr.find проходит весь массив
//    для проверки наличия элемента.
//    Множество Set лучше оптимизировано для добавлений, оно автоматически проверяет на уникальность.

// Перебор объекта Set
// Мы можем перебрать содержимое объекта set как с помощью метода for..of, так и используя forEach:
() => {
  let set = new Set(["апельсин", "яблоко", "банан"]);

  for (let value of set) alert(value);

  // то же самое с forEach:
  set.forEach((value, valueAgain, set) => {
    alert(value);
  });
};
// Заметим забавную вещь. Функция в forEach у Set имеет 3 аргумента:
//  значение value, потом снова то же самое значение valueAgain,
//   и только потом целевой объект. Это действительно так,
//    значение появляется в списке аргументов дважды.

// Это сделано для совместимости с объектом Map,
//  в котором колбэк forEach имеет 3 аргумента.
//  Выглядит немного странно, но в некоторых случаях может помочь легко заменить
//   Map на Set и наоборот.

// Set имеет те же встроенные методы, что и Map:

// set.values() – возвращает перебираемый объект для значений,
// set.keys() – то же самое, что и set.values(), присутствует для обратной совместимости с Map,
// set.entries() – возвращает перебираемый объект для пар вида [значение, значение],
//  присутствует для обратной совместимости с Map.

// Итого
// Map – коллекция пар ключ-значение.

// Методы и свойства:

// new Map([iterable]) – создаёт коллекцию, можно указать перебираемый объект (обычно массив)
//  из пар [ключ,значение] для инициализации.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.
// Отличия от обычного объекта Object:

// Что угодно может быть ключом, в том числе и объекты.
// Есть дополнительные методы, свойство size.
// Set – коллекция уникальных значений, так называемое «множество».

// Методы и свойства:

// new Set(iterable) – создаёт Set, можно указать перебираемый объект со значениями для инициализации.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает),
//  возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true если value было в множестве на момент вызова,
//  иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.
// Перебор Map и Set всегда осуществляется в порядке добавления элементов, так что нельзя сказать,
//  что это – неупорядоченные коллекции, но поменять порядок элементов
//   или получить элемент напрямую по его номеру нельзя.
