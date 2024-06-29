() => {
  // 6 kyu
  // Big Counting
  //
  // Напишите функцию, которая принимает число на вход и возращает кол-во битов, равное
  // Единице в двоичном представлении этого числа. Вы знаете, что входные данные не отриц.
  //
  // Пример:
  // Двоичное представление 1234 = 10011010010, поэтому функция должна вернуть 5

  function countBits(num) {
    return num
      .toString(2)
      .split("")
      .filter((item) => item === "1").length;
  }
  countBits(1234);
};

() => {
  // 5 kyu
  // Calculating with Functions
  // На этот раз мы хотим написать вычисления с использованием функций и получить результаты.
  //  Давайте посмотрим на несколько примеров:

  seven(times(five())); // must return 35
  four(plus(nine())); // must return 13
  eight(minus(three())); // must return 5
  six(dividedBy(two())); // must return 3
  // Для каждого числа от 0 («ноль») до 9 («девять») должна быть функция.
  // Должна существовать функция для каждой из следующих математических операций:
  //  плюс, минус, умножение, разделение на
  // Каждый расчет состоит ровно из одной операции и двух чисел.
  // Самая внешняя функция представляет левый операнд, самая внутренняя
  //  функция представляет правый операнд.
  // Деление должно быть целочисленным . Например, это должно возвращать 2, а не 2.666666...:
  // eight(dividedBy(three()));
  one(plus(zero()));

  function zero(cb) {
    const currentNum = 0;
    if (!cb) {
      return currentNum;
    }
    if (cb.hasOwnProperty("dividedBy")) {
      return Math.floor(currentNum / cb.dividedBy);
    }
    if (cb.hasOwnProperty("plus")) {
      console.log("plus");
      return currentNum + cb.plus;
    }
    if (cb.hasOwnProperty("minus")) {
      console.log("minus");
      return currentNum - cb.minus;
    }
    if (cb.hasOwnProperty("times")) {
      console.log("times");
      return currentNum * cb.times;
    }
  }
  function one(cb) {
    const currentNum = 1;
    if (!cb) {
      return currentNum;
    }
    if (cb.hasOwnProperty("dividedBy")) {
      return Math.floor(currentNum / cb.dividedBy);
    }
    if (cb.hasOwnProperty("plus")) {
      return currentNum + cb.plus;
    }
    if (cb.hasOwnProperty("minus")) {
      return currentNum - cb.minus;
    }
    if (cb.hasOwnProperty("times")) {
      return currentNum * cb.times;
    }
  }
  function two(cb) {
    const currentNum = 2;
    if (!cb) {
      return currentNum;
    }
    if (cb.hasOwnProperty("dividedBy")) {
      return Math.floor(currentNum / cb.dividedBy);
    }
    if (cb.hasOwnProperty("plus")) {
      return currentNum + cb.plus;
    }
    if (cb.hasOwnProperty("minus")) {
      return currentNum - cb.minus;
    }
    if (cb.hasOwnProperty("times")) {
      return currentNum * cb.times;
    }
  }
  function three(cb) {
    const currentNum = 3;
    if (!cb) {
      return currentNum;
    }
    if (cb.hasOwnProperty("dividedBy")) {
      return Math.floor(currentNum / cb.dividedBy);
    }
    if (cb.hasOwnProperty("plus")) {
      return currentNum + cb.plus;
    }
    if (cb.hasOwnProperty("minus")) {
      return currentNum - cb.minus;
    }
    if (cb.hasOwnProperty("times")) {
      return currentNum * cb.times;
    }
  }
  function four(cb) {
    const currentNum = 4;
    if (!cb) {
      return currentNum;
    }
    if (cb.hasOwnProperty("dividedBy")) {
      return Math.floor(currentNum / cb.dividedBy);
    }
    if (cb.hasOwnProperty("plus")) {
      return currentNum + cb.plus;
    }
    if (cb.hasOwnProperty("minus")) {
      return currentNum - cb.minus;
    }
    if (cb.hasOwnProperty("times")) {
      return currentNum * cb.times;
    }
  }
  function five(cb) {
    const currentNum = 5;
    if (!cb) {
      return currentNum;
    }
    if (cb.hasOwnProperty("dividedBy")) {
      return Math.floor(currentNum / cb.dividedBy);
    }
    if (cb.hasOwnProperty("plus")) {
      return currentNum + cb.plus;
    }
    if (cb.hasOwnProperty("minus")) {
      return currentNum - cb.minus;
    }
    if (cb.hasOwnProperty("times")) {
      return currentNum * cb.times;
    }
  }
  function six(cb) {
    const currentNum = 6;
    if (!cb) {
      return currentNum;
    }
    if (cb.hasOwnProperty("dividedBy")) {
      return Math.floor(currentNum / cb.dividedBy);
    }
    if (cb.hasOwnProperty("plus")) {
      return currentNum + cb.plus;
    }
    if (cb.hasOwnProperty("minus")) {
      return currentNum - cb.minus;
    }
    if (cb.hasOwnProperty("times")) {
      return currentNum * cb.times;
    }
  }
  function seven(cb) {
    const currentNum = 7;
    if (!cb) {
      return currentNum;
    }
    if (cb.hasOwnProperty("dividedBy")) {
      return Math.floor(currentNum / cb.dividedBy);
    }
    if (cb.hasOwnProperty("plus")) {
      return currentNum + cb.plus;
    }
    if (cb.hasOwnProperty("minus")) {
      return currentNum - cb.minus;
    }
    if (cb.hasOwnProperty("times")) {
      return currentNum * cb.times;
    }
  }
  function eight(cb) {
    const currentNum = 8;
    if (!cb) {
      return currentNum;
    }
    if (cb.hasOwnProperty("dividedBy")) {
      return Math.floor(currentNum / cb.dividedBy);
    }
    if (cb.hasOwnProperty("plus")) {
      return currentNum + cb.plus;
    }
    if (cb.hasOwnProperty("minus")) {
      return currentNum - cb.minus;
    }
    if (cb.hasOwnProperty("times")) {
      return currentNum * cb.times;
    }
  }
  function nine(cb) {
    const currentNum = 9;
    if (!cb) {
      return currentNum;
    }
    if (cb.hasOwnProperty("dividedBy")) {
      return Math.floor(currentNum / cb.dividedBy);
    }
    if (cb.hasOwnProperty("plus")) {
      return currentNum + cb.plus;
    }
    if (cb.hasOwnProperty("minus")) {
      return currentNum - cb.minus;
    }
    if (cb.hasOwnProperty("times")) {
      return currentNum * cb.times;
    }
  }

  function plus(int) {
    return { plus: int };
  }
  function minus(int) {
    return { minus: int };
  }
  function times(int) {
    return { times: int };
  }
  function dividedBy(int) {
    return { dividedBy: int };
  }

  //   const zero = a => a ? a(0) : 0
  // const one = a => a ? a(1) : 1
  // const two = a => a ? a(2) : 2
  // const three = a => a ? a(3) : 3
  // const four = a => a ? a(4) : 4
  // const five = a => a ? a(5) : 5
  // const six = a => a ? a(6) : 6
  // const seven = a => a ? a(7) : 7
  // const eight = a => a ? a(8) : 8
  // const nine = a => a ? a(9) : 9

  // const plus = a => b => a + b
  // const minus = a => b => b - a
  // const dividedBy = a => b => Math.floor(b / a)
  // const times = a => b => a * b
};

() => {
  // 5 kyu
  // Maximum subarray sum
  // Необходимо найти максимальную сумму непрерывной ПОДпоследовательности в массиве
  // или списке целых чисел:
  // максимальная последовательность([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  // должно быть 6: [4, -1, 2, 1]
  //
  // Простой случай, когда список состоит только из положительных чисел,
  // а максимальная сумма равна сумме всего массива.
  // Если список состоит только из отрицательных чисел, верните вместо этого 0.
  // Считается, что наибольшая сумма в пустом списке равна нулю.
  //
  // Обратите внимание, что пустой список или массив также является допустимым
  // подсписком/подмассивом.

  var maxSequence = function (arr) {
    let sum = 0;
    let maxSum = 0;
    let minSum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (sum > maxSum) {
        maxSum = sum;
      }
      if (sum < minSum) {
        sum = 0;
      }
    }
    return maxSum;
  };
  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]);
};

() => {
  // 4 kyu
  // Sum Strings as Numbers
  //
  // Учитывая строковые представления двух целых чисел,
  // верните строковое представление суммы этих целых чисел.
  //
  // Например:
  //
  // строки суммирования('1','2') // => '3'
  // Строковое представление целого числа не будет содержать никаких символов,
  // кроме десяти цифр от "0" до "9".
  function sumStrings(a, b) {
    const res = BigInt(a) + BigInt(b);

    return res.toString();
  }
  sumStrings("712569312664357328695151392", "8100824045303269669937");
};
