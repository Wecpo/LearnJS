() => {
  //=================================================================
  /**
   *
   *
   * Simple Fun #152: Invite More Women?
   *
   * Король Артур и его рыцари устраивают новогоднюю вечеринку.
   *
   * В прошлом году Ланселот приревновал Артура,
   * потому что у Артура было свидание,
   * а у Ланселота нет, и они затеяли дуэль.
   *
   * Чтобы этого больше не повторилось,
   * Артур хочет убедиться, что в этом году на вечеринке будет
   * как минимум столько же женщин, сколько и мужчин.
   *
   * Он дал вам список целых чисел всех тусовщиков.
   *
   * Артуру нужно, чтобы вы вернули true,
   * если ему нужно пригласить больше женщин,
   * или false, если все готово.
   *
   * Дан массив, представляющий пол участников,
   * где -1 представляет женщин, а 1 представляет мужчин.
   *
   * Вернуть булево значение:
   *
   * true, если Артуру нужно пригласить больше женщин,
   * иначе false
   */
  //------------------------------------------------------------------
  // решение
  // -1 - жен
  // 1 - муж
  let guests1 = [1, -1, 1]; // true
  let guests2 = [1, 1, 1]; // true

  function inviteMoreWomen(L) {
    let men = 0;
    let women = 0;
    L.forEach((item) => {
      if (item === 1) {
        men++;
      }
      if (item === -1) {
        women++;
      }
    });
    return women < men;
  }
  console.log(inviteMoreWomen([-1, -1, -1]));
  console.log(inviteMoreWomen(guests1)); // true
  console.log(inviteMoreWomen(guests2)); // true
};

() => {
  //=================================================================
  //=================================================================
  //=================================================================
  //=================================================================
  /**
   *
   *
   * The Office III - Broken Photocopier
   *
   * Проклятый копировальный аппарат сломался...
   *
   * Как раз в тот момент, когда ты крался по офису,
   * чтобы распечатать свой любимый двоичный код!
   *
   * Вместо копирования оригинала он переворачивает его:
   * «1» становится «0» и наоборот.
   *
   * Учитывая строку двоичного кода, верните версию,
   * которую копировальный аппарат дает вам в виде строки.
   */
  //-----------------------------------------------------------------
  // решение
  let binaryCode1 = "1"; // 0
  let binaryCode2 = "10000000101101111110011001000"; // "01111111010010000001100110111"
  let binaryCode3 = "100010"; // "011101"

  function broken(x) {
    return x
      .split("")
      .map((item) => (item === "1" ? "0" : "1"))
      .join("");
  }

  console.log(broken(binaryCode1)); // 0
  console.log(broken(binaryCode2)); // 01111111010010000001100110111
  console.log(broken(binaryCode3)); // 011101
};

() => {
  //=================================================================
  //=================================================================
  //=================================================================
  //=================================================================
  /**
   *
   *
   * The Office IV - Find a Meeting Room
   *
   * Твоя работа в E-Corp скучна и трудна.
   * Не легче от того, что все постоянно хотят с тобой встретиться,
   * а переговорные всегда заняты!
   *
   * В этом ката вам будет дан массив.
   *
   * Каждое значение представляет конференц-зал.
   *
   * Твоя работа?
   *
   * Найдите первую пустую комнату и верните ее индекс
   * В некоторых тестовых случаях может быть более одной пустой комнаты.
   *
   * 'X' --> busy
   * 'O' --> empty
   *
   * Если все комнаты заняты, вернуть: "None available!"
   */
  //------------------------------------------------------------------
  // решение
  let rooms1 = ["X", "O", "X"]; // 1
  let rooms2 = ["X", "X", "O", "X", "X"]; // 0
  let rooms3 = ["X", "X", "X", "X", "X"]; //  'None available!'

  function meeting12(x) {
    const emptyRoomIndex = x.indexOf("O");
    if (emptyRoomIndex >= 0) return emptyRoomIndex;
    return "None available";
  }

  console.log(meeting12(rooms1)); // 1
  console.log(meeting12(rooms2)); // 0
  console.log(meeting12(rooms3)); // None available!
};

() => {
  // Создайте вызываемую функцию encode() для замены всех строчных гласных в данной строке цифрами в соответствии со следующим шаблоном:
  // a -> 1
  // e -> 2
  // i -> 3
  // o -> 4
  // u -> 5
  // Например, encode("hello") вернет "h2ll4"

  function encode(str) {
    const codes = ["", "a", "e", "i", "o", "u"];
    return str
      .split("")
      .map((item) => {
        const code = codes.indexOf(item);
        if (code !== -1) {
          item = code;
        }
        return item;
      })
      .join("");
  }

  // // Примеры использования функции
  console.log(encode("hello")); // Выведет: "h2ll4"
  console.log(encode("beautiful")); // Выведет: "b215t3f5l"
  console.log(encode("programming")); // Выведет: "pr4gr1mm3ng"
};

() => {
  // Учитывая массив чисел и индекс, верните либо индекс наименьшего числа, которое больше элемента с заданным индексом, либо -1 если такого индекса нет

  function leastLarger(arr, index) {
    const min = arr[index];
    return arr.toSorted().findIndex((item) => item > min);
  }

  // Примеры использования функции
  console.log(leastLarger([4, 1, 3, 5, 6], 0)); // Выведет: 3
  console.log(leastLarger([4, 1, 3, 5, 6], 4)); // Выведет: -1
};

// Задача 1

// Напишите функцию factorial(n), которая возвращает n!, используя рекурсию.

// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

function factorial(n) {
  if (n === 1) {
    return n;
  }
  return factorial(n - 1) * n;
}

console.log(factorial(5));

// Задача 2
// Допустим, у нас есть объект, представляющий структуру древовидной иерархии каталогов:

let directory = {
  name: "Root",
  type: "directory",
  children: [
    {
      name: "Folder1",
      type: "directory",
      children: [
        {
          name: "Subfolder1",
          type: "directory",
          children: [],
        },
        {
          name: "Subfolder2",
          type: "directory",
          children: [],
        },
      ],
    },
    {
      name: "Folder2",
      type: "directory",
      children: [
        {
          name: "Subfolder3",
          type: "directory",
          children: [],
        },
        {
          name: "File1.txt",
          type: "file",
        },
      ],
    },
    {
      name: "File2.txt",
      type: "file",
    },
  ],
};

let count = 0;
function printDirectoryStructure(directory, count) {
  let fillArr = new Array(count).fill(" ").join("");
  console.log(fillArr + directory.name);
  if (directory.type === "directory") {
    count++;
    for (let structure of directory.children) {
      printDirectoryStructure(structure, count);
    }
  }
}

printDirectoryStructure(directory, count);

// Напишите функцию printDirectoryStructure, которая рекурсивно выводит структуру каталогов, начиная с корневого каталога.

// Пример:
// printDirectoryStructure(directory)
// вернет:
//    Root
//     Folder1
//      Subfolder1
//      Subfolder2
//     Folder2
//      Subfolder3
//      File1.txt
//     File2.txt

// Задача 3
// Напишите функцию, которая упрощает дроби до их наименьшей формы!
// Дроби будут представлены в виде массива строго положительных целых чисел,
// а упрощенная дробь должна быть возвращена также в виде массива:

// входные данные: [числитель, знаменатель]
// выходные данные: [упрощенный числитель, упрощенный знаменатель]

// Пример:
// fractions([45, 120]); // вернет [3, 8]

function fractions(arr) {}
