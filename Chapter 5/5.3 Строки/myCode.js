// В JS любые текстовые данные являются строами
// Внутренний формат для строк всегда UTF-16

() => {
  let guestList = `Guests: 
* John
* Pete
* mary`;
  console.log(guestList);
  //   Guests:
  //  * John
  //  * Pete
  //  * mary
};

() => {
  let guestList = "Guests:\n * John\n * Mary";
  console.log(guestList);
  //   Guests:
  //  * John
  //  * Mary
};

/** 
\n - перевод строки
\' , \" , \`- кавычки
\\ - обратный слэш
\t - знак табуляции
*/

() => {
  console.log(`Hello \tworld`); // Hello 	world
  let str = "Hello\tworld";
  let str1 = "Hello \n world";
  console.log(str, str1, str === str1); // false
};

// у строк есть свойство length - содержит длину строки

// Доступ к символам
// Можно получить доступ к символу по его позиции
() => {
  let str = "Hello";
  console.log(str[0]); // H
  console.log(str.at(0)); //H
  console.log(str.at(-1)); //o
};

// Содержимое строки в JS нельзя изменить. Нельзять взять символ посредине и заменить его.
() => {
  let srt = "Hi";
  str[0] = "h";
};

// Поиск подстроки
// существует несколько способов поиска подстроки

// str.indexOf
// Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию на которой
// распологается совпадение, либо '-1' при отсутствии совпадений.
() => {
  let str = "Widget with id";
  console.log(str.indexOf("Widget")); // 0, потому что подстрока 'Widget найдена в начале
  console.log(str.indexOf("widget")); // -1, совпадений нет
  console.log(str.indexOf("id")); // 1
};
// Необязательный второй аргумент позволяет начать поиск с определенной позиции
// Например, первое вхождение 'id' - на позиции 1. Для того чтобы найти следующее, начнем поиск
// с позиции 2:
() => {
  let str = "Widget with id";
  console.log(str.indexOf("id", 2)); // 12
};

() => {
  // ЧТобы найти все вхождения подстроки, нужно запустить indexOf в цикле. Каждый раз,
  // Получив очередную позицию, начинаем поиск со следующей.
  let str = "Ослик Иа-Иа посмотрел на виадук";
  let target = "Иа";

  let pos = 0;
  while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos === -1) break;

    console.log(`Найдено тут: ${foundPos}`);
    pos = foundPos + 1;
  }
};

// ИЛИ
() => {
  let str = "Ослик Иа-Иа посмотрел на виадук";
  let target = "Иа";
  let pos = -1;
  while ((pos = str.indexOf(target, pos + 1)) != -1) {
    console.log(pos);
  }
};

// Побитовый НЕ
() => {
  console.log(~2); // -3  -(2+1)
  console.log(~1); // -2  -(1+1)
  console.log(~0); // -1  -(0+1)
  console.log(~-1); // 0  -(-1+1)
  //   if (~str.indexOf(…)) означает «если найдено».
};

// includes, startsWith, endsWith
// Более современный метод str.includes(substr, pos) возвращает true, если
// в строке str есть подстрока substr, либо false, если нет.
() => {
  let str = "Widget with id";
  console.log(str.includes("Widget")); // true
  console.log(str.includes("Bye")); // false
  // Необязательный второй аргумент позволяет начать поиск с определенной позиции
  console.log("Midget".includes("id")); //true
  console.log("Midget".includes("id", 3)); // false
  //
  // Методы str.startsWith и str.endsWith проверяют, начинается ли и заканчивается ли
  // строка определенной строкой
  console.log("Widget".startsWith("Wid")); // true
  console.log("Widget".endsWith("get")); // true
};

// Получение подстроки
// В JS есть 3 метода для получения подстроки substring, substr и slice

// * str.slice(start [, end]) - возвращает часть строки от start до (не включая) end.
() => {
  let str = "stringify";
  // 'strin' , символы от 0 до 5 (не включая 5)
  console.log(str.slice(0, 5));
  // 's' , от 0 до 1, не включая 1, т.е. только один символ на позиции 0.
  console.log(str.slice(0, 1));
  // если аргумент end отсутствует, slice возвращает символы до конца строки
  let str1 = "stringify";
  console.log(str1.slice(2)); // ringify
  // также для start/end можно задавать отрицательные значения. Это означает,
  // Что позиция определена как заданое количество символов с конца строки:
  let str2 = "stringify";
  console.log(str2.slice(-4, -1)); // gif
};

() => {
  // str.substring(start, [, end])
  // Возвращает часть строки между start и end (не включая) end.
  // Это - почти то же, что и slice, но можно задавать start больше end.
  // Если start больше end, то метод substring сработает так, как если бы
  // аргументы были поменяны местами.
  let str = "stringify";
  console.log(str.substring(2, 6)); // ringify
  console.log(str.substring(6, 2)); // ringify
  // отрицательные значения substring не поддерживает, они интерпретируются как 0.
};

() => {
  // str.substr(start [, length])
  // Возвращает часить строки от start длины length
  // В противоположность предыдущим методам позволяет задать длину конечной позиции:
  let str = "stringify";
  console.log(str.substr(2, 4)); //ring
  console.log(str.substr(-4, 2)); // gi
};

// Сравнение строк

// 1. Строчные буквы больше заглавных
() => {
  console.log("a" > "Z"); // true
};
// 2. Буквы, имеющие диакритические знаки, идут «не по порядку»:
() => {
  console.log("Österreich" > "Zealand"); // true
  // Строки кодируются в UTF-16. Таким образом, у любого символа есть соответствующий код.
  // Есть специальные методы, позволяющие получить символ по его коду и наоборот.
  // str.codePointAt(pos) - возвращает код для символа, находящего на pos:
  console.log("z".codePointAt(0)); // 122
  console.log("Z".codePointAt(0)); // 90
  let str = "stringify";
  console.log(str[4], str[4].codePointAt(0));
};

() => {
  // String.fromCodePoint(code) - возвращает символ по коду
  console.log(String.fromCodePoint(90)); // Z
};

// Правильное сравнение

// Правильный алгоритм сравения строк сложнее чем может показаться, тк разные языки используют разные
// алфавиты.

// Поэтому браузеру нужно знать какой язык использовать для сравнения.String
// К счастью все современные браузеры поддерживают ECMA 402, обеспечивающий правильное сравнение
// строк на раных языках с учетом их правильное

// Для этого есть соответствующий метод.

// Вызов str.localeCompare(str2) возвращает число, которое показывает какая строка больше
// в соответствии с правилами языках

// - Отрицательное число, если str меньше str2
// - Положительное число, если str больше str2
// - 0, если строки равны
() => {
  console.log("Österreich".localeCompare("Zealand")); // -1
};

// ИТОГО:
// - Есть три типа кавычек '', "", ``
// - Строки в JS кодируются в UTF-16
// - Есть специальные символы, такие как \n разрыв строки
// - Для получения символа из строки используем [] или метод at(index)
// - Для получения подстроки используем slice или substring
// - Для поиска подстроки используйте indexOf или includes/startsWith/endsWith, когда
//   надо только проверить есть ли вхождение.
// - Чтобы сравнить строки с учетом правил языка, используйте localCompare.
