// JSON общий формат для представления значенйий и объектов для обмена данными между клиентом
// и сервером
() => {
  // Есть методы JSON.stringify() и JSON.parse()
  // Например, здесь мы преобразуем через JSON.stringify данные студента:

  let student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    wife: null,
  };
  console.log(typeof student);

  let json = JSON.stringify(student);

  console.log(typeof json); // мы получили строку!

  console.log(json);
  /* выведет объект в формате JSON:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
  const sym = Symbol("123");
  console.log(sym);
  console.log(JSON.stringify(sym));
  console.log(JSON.stringify([1, 2, 3]));
  //   console.log(JSON.stringify(new Symbol(1)));
  console.log(JSON.stringify({ name: undefined, age: 30 }));
};

() => {
  //     Метод JSON.stringify(student) берёт объект и преобразует его в строку.

  // Полученная строка json называется JSON-форматированным или сериализованным объектом.
  // Мы можем отправить его по сети или поместить в обычное хранилище данных.

  // Обратите внимание, что объект в формате JSON имеет несколько важных отличий
  //  от объектного литерала:

  // Строки используют двойные кавычки. Никаких одинарных кавычек или обратных кавычек в JSON.
  //  Так 'John' становится "John".
  // Имена свойств объекта также заключаются в двойные кавычки. Это обязательно.
  //  Так age:30 становится "age":30.
  // JSON.stringify может быть применён и к примитивам.

  // JSON поддерживает следующие типы данных:

  // Объекты { ... }
  // Массивы [ ... ]
  // Примитивы:
  // строки,
  // числа,
  // логические значения true/false,
  // null.
  // Например:

  // число в JSON остаётся числом
  console.log(JSON.stringify(1)); // 1

  // строка в JSON по-прежнему остаётся строкой, но в двойных кавычках
  console.log(JSON.stringify(`test`)); // "test"

  console.log(JSON.stringify(true)); // true

  console.log(JSON.stringify([1, 2, 3])); // [1,2,3]
};

() => {
  //     Самое замечательное, что вложенные объекты поддерживаются и
  // конвертируются автоматически.

  // Например:

  let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"],
    },
  };

  console.log(JSON.stringify(meetup));
  /* вся структура преобразована в строку:
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}
*/
};

() => {
  //     Важное ограничение: не должно быть циклических ссылок.

  // Например:

  let room = {
    number: 23,
  };

  let meetup = {
    title: "Conference",
    participants: ["john", "ann"],
  };

  meetup.place = room; // meetup ссылается на room
  room.occupiedBy = meetup; // room ссылается на meetup

  JSON.stringify(meetup); // Ошибка: Преобразование цикличной структуры в JSON
};

() => {
  //     Исключаем и преобразуем: replacer
  // Полный синтаксис JSON.stringify:
  // let json = JSON.stringify(value[, replacer, space])
  // value
  // Значение для кодирования.
  // replacer
  // Массив свойств для кодирования или функция соответствия function(key, value).
  // space
  // Дополнительное пространство (отступы), используемое для форматирования.
  // В большинстве случаев JSON.stringify используется только с первым аргументом.
  //  Но если нам нужно настроить процесс замены, например, отфильтровать циклические ссылки, то можно использовать второй аргумент JSON.stringify.
  // Если мы передадим ему массив свойств, будут закодированы только эти свойства.
  () => {
    let room = {
      number: 23,
    };

    let meetup = {
      title: "Conference",
      participants: [{ name: "John" }, { name: "Alice" }],
      place: room, // meetup ссылается на room
    };

    room.occupiedBy = meetup; // room ссылается на meetup

    alert(JSON.stringify(meetup, ["title", "participants"]));
  }; // {"title":"Conference","participants":[{},{}]}
};
