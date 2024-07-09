() => {
  //sequenceSum
  //   Реализуйте (с использованием рекурсии) функцию sequenceSum, которая находит сумму последовательности
  //   целых чисел. Последовательность задается двумя значениями: begin - начало последовательности,
  //   end - конец последовательности. Например begin = 2 и end = 6 дают нам такую Последовательность
  //   2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.

  sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
  sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
  sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3

  //   Подсказки

  //   Последовательность, в которой begin > end, не содержит ни одного числа, т.е. является пустой.
  //   Вычислить сумму чисел такой последовательности не возможно. в этом случает возвращем NaN.
  //   Сумма чисел в последовательности, в которой begin === end, равна begin (или end)

  // NaN (т.к. это "пустая" последовательность)
  sequenceSum(7, 2);

  // 0 (т.к. это единственное число, входящее в последовательность)
  sequenceSum(0, 0);

  // 6 (т.к. это единственное число, входящее в последовательность)
  sequenceSum(6, 6);

  //   P.S. Для корректного прохождения проверки на рекурсию - вы должны вызывать именно функцию sequenceSum.

  function sequenceSum(a, b) {
    if (a === b) return a;
    if (a > b) return NaN;
    console.log(a);
    return a + sequenceSum(a + 1, b);
  }
  console.log(sequenceSum(1, 5));
};

() => {
  // getStringCount
  // Реализуйте (с использованием рекурсии) функцию getStringCount, которая должна принимать массив или объект
  // и считать кол-во строк в массиве / значениях объекта с учетом вложенности.

  getStringCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
  }); // 3

  getStringCount(["1", "2", ["3"]]); // 3

  function getStringCount(item) {
    let count = 0;
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        if (typeof item[i] === "string") {
          count++;
        }
        if (Array.isArray(item[i])) {
          return count + getStringCount(item[i]);
        }
      }
    }
    if (typeof item === "object" && !Array.isArray(item)) {
      for (let key in item) {
        if (typeof item[key] === "string") {
          count++;
        }
        if (Array.isArray(item[key])) {
          return count + getStringCount(item[key]);
        }
      }
    }
    return count;
  }
};
