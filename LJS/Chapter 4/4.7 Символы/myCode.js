() => {
  let id = Symbol();
  console.log(id);
};

() => {
  let id1 = Symbol();
  let id2 = Symbol();
  console.log(id1 == id2); // false
  id1 = id2;
  console.log(id1 == id2); // true
};

() => {
  // Symbol автоматически не преобразуется в строку!
  let symbol = Symbol("1");
  alert(symbol); // Uncaught TypeError: Cannot convert a Symbol value to a string

  alert(String(symbol));
  alert(symbol.description); // 1
};

() => {
  //     «Скрытые» свойства
  // Символы позволяют создавать «скрытые» свойства объектов,
  // к которым нельзя нечаянно обратиться и перезаписать их из других частей программы.

  let user = {
    name: "Вася",
  };

  let id = Symbol("id");

  user[id] = 1;

  alert(user[id]); // мы можем получить доступ к данным по ключу-символу
  user.id = 3;
  console.log(user);

  () => {
    let user = { name: "Вася" };

    // Объявляем в нашем скрипте свойство "id"
    user.id = "Наш идентификатор";

    // ...другой скрипт тоже хочет свой идентификатор...

    user.id = "Их идентификатор";
    // Ой! Свойство перезаписано сторонней библиотекой!
  };
};
