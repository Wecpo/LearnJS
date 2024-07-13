// У стрелочных функций нет «this»
// Как мы помним из главы Методы объекта, "this", у стрелочных функций нет this.
// Если происходит обращение к this, его значение берётся снаружи.

// Например, мы можем использовать это для итерации внутри метода объекта:

() => {
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
      this.students.forEach((student) => alert(this.title + ": " + student));
    },
  };

  group.showList();
};
// Здесь внутри forEach использована стрелочная функция, таким образом this.title
// в ней будет иметь точно такое же значение, как в методе showList: group.title.

// Если бы мы использовали «обычную» функцию, была бы ошибка:
() => {
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
      this.students.forEach(function (student) {
        // Error: Cannot read property 'title' of undefined
        alert(this.title + ": " + student);
      });
    },
  };

  group.showList();
};

// Стрелочные функции нельзя использовать с new
// Отсутствие this естественным образом ведёт к другому ограничению:
// стрелочные функции не могут быть использованы как конструкторы. Они не могут быть вызваны с new.

// Стрелочные функции VS bind
// Существует тонкая разница между стрелочной функцией => и обычной функцией,
//  вызванной с .bind(this):
//  .bind(this) создаёт «связанную версию» функции.

//  Стрелка => ничего не привязывает. У функции просто нет this.
//  При получении значения this – оно, как обычная переменная,
//  берётся из внешнего лексического окружения.

// Стрелочные функции не имеют «arguments»
// У стрелочных функций также нет переменной arguments.

// Это отлично подходит для декораторов, когда нам нужно пробросить вызов с текущими this и arguments.

// Например, defer(f, ms) принимает функцию и возвращает обёртку над ней,
//  которая откладывает вызов на ms миллисекунд:
() => {
  function defer(f, ms) {
    return function () {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  }

  function sayHi(who) {
    alert("Hello, " + who);
  }

  let sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred("John"); // выводит "Hello, John" через 2 секунды
};
// То же самое без стрелочной функции выглядело бы так:
() => {
  function defer(f, ms) {
    return function (...args) {
      let ctx = this;
      setTimeout(function () {
        return f.apply(ctx, args);
      }, ms);
    };
  }
};

// Здесь мы были вынуждены создать дополнительные переменные args и ctx,
//  чтобы функция внутри setTimeout могла получить их.

//
//
//
//
// Итого
// Стрелочные функции:

// - Не имеют this.
// - Не имеют arguments.
// - Не могут быть вызваны с new.
// - У них также нет super
