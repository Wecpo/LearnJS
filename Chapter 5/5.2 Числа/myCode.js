() => {
  let billion = 1000000000;
  let billion1 = 1_000_000_000;
  let billion2 = 1e9;
  console.log(billion, billion1, billion2);
};

() => {
  let mcs = 0.000001;
  let ms = 1e-6;
  console.log(mcs, ms);
};

() => {
  // шестнадцатиричные, двоичные и восьмиричные числа
  console.log(0xff); // шестнадцатиричная система => 255
  console.log(0xff); // шестнадцатиричная система => 255
  let a = 0b11111111; // двоичная система => 255
  let b = 0o377; // восьмиричная система => 255
};

() => {
  // num.toString(base) => base = 16 , base = 2, base = 36
  let num = 255;
  console.log(num.toString(16)); //ff
  console.log(num.toString(2)); // 11111111
  // можно обратиться напрямую к числу через `..`
  console.log((123456).toString(36));
};

() => {
  // Округление
  console.log(Math.floor(12.4)); // округление к меньшему целому
  console.log(Math.ceil(12.4)); // округление к большему
  console.log(Math.round(12.4)); // окргуление к ближайшему
  console.log(Math.trunc(12.4)); // убирает после точки ** не поддерживается IE **
  console.log((12.444).toFixed(1)); // округляет как round
};

() => {
  // Неточные вычисления
  console.log(1e500); // infinity
  console.log(0.1 + 0.2 == 0.3); // false      ** 0.30000000000000004 **
  // Ошибка будет во всех языках где для чисел используется IEEE-754 (java, C, perl, ruby)
  // Проблема в двоичном представлении числа
  alert((0.1).toFixed(20)); // 0.10000000000000000555
  // Решение:
  let sum = 0.1 + 0.2;
  console.log(sum.toFixed(2)); // 0.3
  console.log(0 === -0); // true
};

// Проверка isFinite и IsNaN
() => {
  //     Infinity (и -Infinity) — особенное численное значение,
  //     которое ведёт себя в точности как математическая бесконечность ∞.
  //     NaN представляет ошибку.
  //   isNaN(value) преобразует значение в число и проверяет является ли оно NaN:
  console.log(isNaN(NaN)); // true
  console.log(isNaN("str")); // true
  console.log(NaN === NaN); // false
  //   isFinite(value) преобразует аргумент в число и возвращает true,
  //  если оно является обычным числом, т.е. не NaN/Infinity/-Infinity:
  console.log(isFinite("15")); // true
  console.log(isFinite("str")); // false, потому что специальное значение: NaN
  console.log(isFinite(Infinity)); // false, потому что специальное значение : Infinity
  //   Иногда isFinite используется для проверки, содержится ли в строке число:
  let num = +prompt("Введите число:");
  // вернет true всегда, кроме Infinity, -Infinity или не число
  console.log(isFinite(num));

  // Методы Number.isNaN и Number.isFinite - более строгие версии isNan и isFinite.
  // Они не преобразуют аргумент в число, а первым делом проверяют, является ли аргумент number.
  // Number.isNaN(value) возвращает true только в том случае, если аргумент принадлежит
  // к типу number и является NaN, в остальных случаях возвращает false
  console.log(Number.isNaN(NaN)); // true
  console.log(Number.isNaN("str" / 2)); // true
  // Number.isFinite(value) возвращает true только в том случае если аргумент === number
  // и не является NaN / Infinity / -Infinity. Во всех остальных случаях возвращает false.
  console.log(Number.isFinite(123)); // true
  console.log(Number.isFinite(Infinity)); // false
  console.log(Number.isFinite(2 / 0)); // false
  // Стоит обратить внимание на разный резульат
  console.log(Number.isFinite("123")); // false - Тк value - не число
  console.log(isFinite("123")); // true, тк метод приведет строку к числу
};

() => {
  // Сравнение Object.is
  // Существует специальный метод Object.is который сравнивает значения примерно как ===,
  // Но более надежен в двух особых ситуациях
  // 1. Работает с NaN:
  console.log(Object.is(NaN, NaN)); // true
  //2. Значения 0 и -0 разные:
  console.log(Object.is(0, -0)); // false

  // В остальных случая Object.is(a, b) идентичен a === b
};

() => {
  // parseInt и parseFloat
  // Для явного преобразования к числу можно использовать + или Number(). Если строка
  // не является в точности числом, то результат будет NaN:
  console.log(+"100px"); // NaN
  // Для получения числа из строк у нас есть parseInt и parseFloat:
  console.log(parseInt("100px")); // 100
  console.log(parseInt("100p123132131x")); // 100
  console.log(parseInt("100pasdsadsadsadx")); // 100
  console.log(parseInt("101.5px")); // 101
  console.log(parseFloat("12.5em")); // 12.5
  console.log(parseInt("12.3")); // 12
  console.log(parseFloat(`12.3.4`)); // 12.3
  console.log("a123"); // NaN
  // Второй аргумент определяет систему счисления:
  console.log(parseInt(`0xff`, 16)); // 255
  console.log(parseInt("ff", 16)); // 255, без 0x тоже работает
  console.log(parseInt("2n9", 36)); // 123456
};

() => {
  // ДРУГИЕ математические функции.
  // В JS встроен объект Math, который содержит различные математические функции и константы.
  // Math.random()
  console.log(Math.random()); //псевдослучайное число 0.1234567894322
  console.log(Math.max(3, 5, -10, 1, 0)); // 5
  console.log(Math.min(3, 5, -10, 1, 0)); // -10
  console.log(Math.pow(2, 10)); // 2 в степени 10 = 1024
};

() => {
  // Итого
  // Используйте краткую форму записи чисел - "e", с указаным количеством нулей.
  // Например 123e6 == 12300000
  // Отрицательное число после "e" приводит к делению числа на 1 с указанным кол-вом нулей
  //123e6 = 123 / 1000000 = 0.000123
};
