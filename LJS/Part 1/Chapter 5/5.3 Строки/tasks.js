// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

() => {
  function ucFirst(string) {
    let newString =
      string.charAt(0).toUpperCase() + string.slice(1, string.length);
    return newString;
  }
  ucFirst("вася");
};

// Проверка на спам
// важность: 5
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

() => {
  function checkSpam(str) {
    let checkingStr = str.toUpperCase();
    if (checkingStr.includes("XXX") || checkingStr.includes("VIAGRA")) {
      return true;
    }
    return false;
  }
  console.log(checkSpam("buy ViAgRA now"));
  console.log(checkSpam("free xxxxx"));
  console.log(checkSpam("innocent rabbit"));
};

// Усечение строки
// важность: 5
// // Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
//  если она превосходит maxlength, заменяет конец str на "…", так,
//   чтобы её длина стала равна maxlength.

// // Результатом функции должна быть та же строка, если усечение не требуется,
//  либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"

() => {
  function truncate(str, maxlength) {
    if (str.length > maxlength) {
      return str.slice(0, maxlength - 1) + "...";
    }
    return str;
  }
  console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
  console.log(truncate(("Всем привет!", 20)));
};

// Выделить число
// важность: 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str),
//  которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true

() => {
  function extractCurrencyValue(str) {
    return +str.slice(1);
  }
  console.log(extractCurrencyValue(`$120`));
};
