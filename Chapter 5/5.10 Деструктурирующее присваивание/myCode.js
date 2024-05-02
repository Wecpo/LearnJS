// Деструктурирующее присваивание – это специальный синтаксис,
// который позволяет нам «распаковать» массивы или объекты в несколько переменных,
// так как иногда они более удобны.
// Деструктуризация никак не работает с правой частью. Только копирует значения в переменные.

// Деструктуризация массива

() => {
  let arr = ["Max", "Senin"];
  let [fistName, surName] = arr;
  console.log(fistName, surName); // Max Senin
};

() => {
  let [firstName, surname] = "Ilya Kantor".split(" ");
  console.log(firstName); // Ilya
  console.log(surname); // Kantor
};

() => {
  let [firstName, , title] = [
    "Julius",
    "Caesar",
    "Consul",
    "of the Roman Republic",
  ];

  console.log(firstName, title); // Consul
  let [a, b, c] = "abc";
  console.log(a, b, c);

  let [one, two, three] = new Set([1, 2, 3]);
  console.log(one, two, three);
};

() => {
  //     Присваивайте чему угодно с левой стороны
  // Мы можем использовать что угодно «присваивающее» с левой стороны.

  // Например, можно присвоить свойству объекта:

  let user = {};
  [user.name, user.surname] = "Ilya Kantor".split(" ");

  console.log(user.name); // Ilya
  console.log(user.surname); // Kantor
  console.log(user);
};

() => {
  //     Цикл с .entries()
  // В предыдущей главе мы видели метод Object.entries(obj).

  // Мы можем использовать его с деструктуризацией для цикличного перебора ключей и значений объекта:

  let user = {
    name: "John",
    age: 30,
  };

  // цикл по ключам и значениям
  for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`); // name: John, затем age: 30
  }

  let user1 = new Map();
  user1.set("name", "John");
  user1.set("age", "30");

  // Map перебирает как пары [ключ, значение], что очень удобно для деструктурирования
  for (let [key, value] of user1) {
    alert(`${key}: ${value}`); // name: John, затем age: 30
  }
};

() => {
  //     Трюк обмена переменных
  // Существует хорошо известный трюк для обмена значений двух переменных
  //  с использованием деструктурирующего присваивания:

  let guest = { type: "guest", name: "MASHS" };
  let admin = { type: "admin", name: "DASHA" };

  // Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"
  [guest, admin] = [admin, guest];

  console.log(guest, admin); // DASHA MASHA (успешно заменено!)
  // Здесь мы создаём временный массив из двух переменных и немедленно
  // деструктурируем его в порядке замены.

  // Таким образом, мы можем поменять местами даже более двух переменных.
};

// Остаточные параметры «…»
// Обычно, если массив длиннее, чем список слева, «лишние» элементы опускаются.

// Например, здесь берутся только первые два элемента, а остальные просто игнорируются:

// let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert(name1); // Julius
// alert(name2); // Caesar
// // Дальнейшие элементы нигде не присваиваются
// Если мы хотим не просто получить первые значения, но и собрать все остальные, то мы можем добавить ещё один параметр, который получает остальные значения, используя оператор «остаточные параметры» – троеточие ("..."):

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// // rest это массив элементов, начиная с 3-го
// alert(rest[0]); // Consul
// alert(rest[1]); // of the Roman Republic
// alert(rest.length); // 2
// Переменная rest является массивом из оставшихся элементов.

// Вместо rest можно использовать любое другое название переменной, просто убедитесь, что перед переменной есть три точки и она стоит на последнем месте в деструктурирующем присваивании.

// let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// // теперь titles = ["Consul", "of the Roman Republic"]
// Значения по умолчанию
