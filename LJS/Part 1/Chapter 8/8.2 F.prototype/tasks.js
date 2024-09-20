// Изменяем "prototype"
// важность: 5
// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

// Сначала у нас есть такой код:

() => {
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();

  alert(rabbit.eats); // true
};

// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?
() => {
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();

  Rabbit.prototype = {};

  alert(rabbit.eats); // ? --- true // Мы изменили прототип после создания объекта. Поэтому этот
  // объект останется без изменений, а следующие будут иметь в прототипе {}.
};

// …А если код такой (заменили одну строчку)?

() => {
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();

  Rabbit.prototype.eats = false;

  console.log(rabbit.eats); // ? --- false --- меняем свойство eats у всех объектов
};

// Или такой (заменили одну строчку)?
() => {
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();

  delete rabbit.eats;

  console.log(rabbit.eats); // ? --- true
};

// Или, наконец, такой:

() => {
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true,
  };

  let rabbit = new Rabbit();

  delete Rabbit.prototype.eats;

  console.log(rabbit.eats); // ? --- undefined
};

// Создайте новый объект с помощью уже существующего
// важность: 5
// Представьте, что у нас имеется некий объект obj,
// созданный функцией-конструктором – мы не знаем какой именно,
// но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

() => {
  let obj2 = new obj.constructor();
};
// Приведите пример функции-конструктора для объекта obj,
// с которой такой вызов корректно сработает. И пример функции-конструктора,
// с которой такой код поведёт себя неправильно.

() => {
  function ObjConstructor() {}

  let obj = new ObjConstructor();
  let obj1 = new obj.constructor();
};

() => {
  function ObjConstructor() {}

  let obj = new ObjConstructor();

  ObjConstructor.prototype = {};

  let obj1 = new obj.constructor();
};
