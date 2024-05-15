() => {
  // 1. Sentence Smash

  // Напишите функцию, которая принимает массив слов и возвращет предложение

  // Пример:
  // ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

  function smash(words) {
    return "";
  }
};

() => {
  // 2. Sum of Minimums!

  //  Дан двумерный массив (вложенный) размером m * n, ваша задача найти сумму
  // минимальных значений каждого массива.

  // Пример:

  // [ [ 1, 2, 3, 4, 5 ]        #  Минимальное значение - 1
  // , [ 5, 6, 7, 8, 9 ]        #  Минимальное значение - 5
  // , [ 20, 21, 34, 56, 100 ]  #  Минимальное значение - 20
  // ]
  // Функция должна вернуть 26 потому что сумма минимальных значений - 1 + 5 + 20 = 26.

  // Примечание: В массиве всегда положительные, не нулевые, не пустые значения.

  function sumOfMinimums(arr) {
    const min = [];
    arr.map((arr) =>
      arr
        .sort((a, b) => a - b)
        .map((item, index) => {
          if (index === 0) {
            min.push(item);
          }
        })
    );
    return min.reduce((acc, item) => acc + item);
  }
};

() => {
  // 3. Stop gninnipS My sdroW!

  // Напишите функцию, которая принимает строку из одного или нескольких слов
  // и возращает ту же строку, но все слова содержащие 5 или более букв, меняются местами
  // (как в названии задачи).
  // Передаваемые строки будут состоять только из букв и пробелов.
  // Пробелы будут включены только в том случае, если присутствует более одного слова.

  //   Пример:
  // "Hey fellow warriors"  --> "Hey wollef sroirraw"
  // "This is a test        --> "This is a test"
  // "This is another test" --> "This is rehtona test"

  function spinWords(string) {
    const newString = string.split(" ");
    console.log(newString);
    return newString
      .map((word) => {
        if (word.length >= 5) {
          return word.split("").reverse().join("");
        }
        return word;
      })
      .join(" ");
  }
};

() => {
  // 4. Sort by Last Char

  // Учитывая данную строку, нужно вернуть массив слов, отсортированный в алфавитном
  // порядке по последнему символу каждого слова.
  // Если у двух слов одна и та же последняя буква, возрвращаемый массив должен отображать
  // их в том порядке, в котором они появляются в данной строке.

  //   Пример:
  // "man i need a taxi up to ubud"  -->  ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
  // 'what time are we climbing up the volcano'  -->  ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
  // 'take me to semynak'  -->  ['take', 'me', 'semynak', 'to']

  function last(x) {
    return x.split(" ").sort((a, b) => {
      const aLastChar = a[a.length - 1];
      const bLastChar = b[b.length - 1];
      if (aLastChar > bLastChar) {
        return 1;
      }
      if (aLastChar < bLastChar) {
        return -1;
      }
      return 0;
    });
  }
  last("man i need a taxi up to ubud");
};

() => {
  // 5. Isograms

  //  Изограмма - это слово, в котором нет повторяющихся букв, как последовательных, так и
  //  не последовательных. Реализуйте функцию, которая определяет, является ли строка
  //  (содержащая только буквы), изограммой.
  //  Не обращайте вниманеия на регистр букв!
  //  В данном случае пустая строка - изограмма.

  // Пример:
  // "Dermatoglyphics" --> true
  // "aba" --> false
  // "moOse" --> false (ignore letter case)

  function isIsogram(str) {
    let newStr = str.toLowerCase().trim();
    if (newStr === "" || !newStr) return true;
    newStr = str.toLowerCase().trim().split("");
    for (let i = 0; i < newStr.length; i++) {
      for (let j = i + 1; j < newStr.length; j++) {
        if (newStr[i] === newStr[j]) {
          return false;
        }
      }
    }
    return true;
  }
  isIsogram("Dermatoglyphics");
  isIsogram("isogram");
  isIsogram("aba");
};

() => {
  // 6. Likes Vs Dislikes

  //  На youtube есть кнопки 'нравится' и 'не нравится'.
  //  Они настроены таким образом, что видео не может нравиться и не нравиться одновременно.
  //  Нажатие кнопки которая уже активна, отменяет нажатие.
  //  Если вы нажмете кнопку "Нравится" после нажатия кнопки "не нравится",
  //  кнопка "нравится" перезапишет предыдущее состояние "Не нравится".
  //  То же самое верно и в обратном случае.
  //  Создайте функцию, котоая принимает список входных данных кнопок и возращает
  //  финальное значение.

  //  Пример:
  //  likeOrDislike([`Dislike`]) => `Dislike`
  //  likeOrDislike([`Like`,`Like`]) => `Nothing`
  //  likeOrDislike([`Dislike`,`Like`]) => `Like`
  //  likeOrDislike([`Like`,`Dislike`,`Dislike`]) => `Nothing`

  //  Примечание:
  //  Если ни одна кнопка в данный момент не активна, ничего не возвращайте (Nothing).
  //  Если список пуст, ничего не возвращайте (Nothing).

  function likeOrDislike(buttons) {
    if (!buttons.length) return "Nothing";
    // return Like || Dislike || Nothing;
    let currentReaction = "Nothing";
    buttons.map((reaction, index) => {
      console.log(currentReaction, index);
      if (currentReaction === "Nothing") {
        currentReaction = reaction;
        return currentReaction;
      }
      if (currentReaction === reaction) {
        currentReaction = "Nothing";
        return currentReaction;
      } else {
        currentReaction = reaction;
        return currentReaction;
      }
    });
    return currentReaction;
    //   return buttons.reduce((state, button) => button === state ? Nothing : button, Nothing)
  }
  likeOrDislike([`Dislike`, `Like`, `Dislike`]);
  likeOrDislike([
    `Like`,
    `Like`,
    `Dislike`,
    `Like`,
    `Like`,
    `Like`,
    `Like`,
    `Dislike`,
  ]);
  likeOrDislike([]);
};

() => {
  // 7. Sort the odd. (6 kyu)

  // Вам будет предоставлен массив чисел.
  // Необходимо отсортировать нечетные числа в порядке возрастания,
  // оставив четные числа на их первоначальных позициях.

  // Пример:
  // [7, 1]  =>  [1, 7]
  // [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
  // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

  function sortArray(array) {
    const evenNumbersIndexes = [];
    const oddsArray = array
      .map((item, index) => {
        if (item % 2) {
          return item;
        } else {
          evenNumbersIndexes.push(index);
        }
      })
      .sort((a, b) => a - b);
    let temp = 0;
    array.forEach((item, index) => {
      if (item % 2) {
        array[index] = oddsArray[temp];
        temp++;
      }
    });
    return array;
  }

  //   function sortArray(array) {
  //     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  //     return array.map((x) => x % 2 ? odd.shift() : x);
  //   }

  sortArray([5, 3, 2, 8, 1, 4]); // [1, 3, 2, 8, 5, 4]
};

() => {
  // 8. Create Phone Number (6 kyu)

  // Напишите функцию, которая принимает массив из 10 чисел (от 0 до 9)
  // И возвращает строку из этих чисел в виде телефонного номера.

  // Пример:
  // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"

  // Для выполнения этой задачи возвращаемый формат должен быть правильным.
  // Не забудьте поставить пробел после закрывающих скобок!

  function createPhoneNumber(numbers) {
    const firstPart = numbers
      .map((item, index) => {
        if (index > 2) {
          return;
        }
        return item.toString();
      })
      .join("");
    const secondPart = numbers
      .map((item, index) => {
        if (index > 2 && index < 6) {
          return item.toString();
        }
        return;
      })
      .join("");
    const thirdPart = numbers
      .map((item, index) => {
        if (index > 5 && index < 10) {
          return item.toString();
        }
        return;
      })
      .join("");
    return `(${firstPart})` + ` ${secondPart}-${thirdPart}`;
  }

  //   function createPhoneNumber(numbers){
  //     return '(' + numbers[0] + numbers[1] + numbers[2] + ') ' + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9];
  //   }
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
};
