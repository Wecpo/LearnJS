// Флаги и дескрипторы свойств
//
// Как мы знаем объекты могут содержать свойства.
//
// До этого момента мы рассматривали свойство только как пару "ключ-начение". Но на самом деле
// свойство объекта гораздно мощнее и гибче.
//
// В этой главе мы изучим дополнительные флаги конфигурации для свойств, а в следующей
// увидим, как можно незаметно превратить их в специальные функции - геттеры и сеттеры.
//
//
// Флаги свойств
//
// Помимо значения value, свойства объекта имеют три специальных атрибута (флага)
// - writable - если true, свойство можно изменить, иначе оно только для чтения.
// - enumerable - если true, свойство перечисляется в циклах, в противом случае циклы его игнорируют.
// - configurable - если true, свойство можно удалить, а эти атрибуты можно изменять, иначе
//   этого делать нельзя.
//
// Обычно эти атрибуты скрыты. Когда мы создаем свойство обычным способом, все они имеют значение true.
//
// Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.
//
() => {
  let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
  //
  // obj - объект из которого мы получаем информацию.
  // propertyName - имя свойства.
  //
  // Возвращаемое значение - это объект, так называемый 'дескриптор свойства': он содержит
  // значение свойства и его флаги.
  //
  // Например:
  () => {
    let user = {
      name: "John",
    };

    let descriptor = Object.getOwnPropertyDescriptor(user, "name");
    console.log(JSON.stringify(descriptor, null, 2));
    /* дескриптор свойства:

        {
            "value": "John",
            "writable": true,
            "enumerable": true,
            "configurable": true
        }

    */
  };

  // Чтобы изменить флаги, мы можем использовать метод Object.defineProperty
  () => {
    Object.defineProperty(obj, propertyName, descriptor);

    // obj, propertyName - объект и свойство, для которого нужно применить дескриптор.
    // descriptor - применяемый дескриптор
    //
    // Если свойство существует, defineProperty обновит его флаги. В противом случае метод создает
    // новое свойство с указанным значением и флагами; если какой либо флаг не указан явно, ему
    // присваивается значение false.
    //
    // Например, здесь создается свойство name, все флаги которого имеют значением false:
    () => {
      let user = {};

      Object.defineProperty(user, "name", {
        value: "John",
      });

      let descriptor = Object.getOwnPropertyDescriptor(user, "name");

      console.log(JSON.stringify(descriptor, null, 2));

      /*
            {
                "value": "John",
                "writable": false,
                "enumerable": false,
                "configurable": false
            }
      */

      //
      // Сравните это с предыдущим примером, в котором мы создали свойство user.name обычным способом
      // в этот раз все флаги имеют значение false. Если это не то, что нам нужно, надо присвоить им
      // значения true в параметре descriptor.
      //
      // Теперь давайте рассмотрим на примерах, что нам дает использование флагов.
    };
  };
};

//
//
// Только для чтения
//
// Сделаем свойство user.name доступным только для чтения. Для этого изменим флаг 'writable':

() => {
  let user = {
    name: "John",
  };

  Object.defineProperty(user, "name", {
    writable: false,
  });

  user.name = "Pete"; // Ошибка: Невозможно изменить доступное только для чтения свойство 'name'
};

// Теперь никто не сможет изменить имя пользователя, если только не обновит соответствующий флаг
// новым вызовом 'defineProperty'
//
// Без 'use strict', мы не увидим никаких ошибок при записи в свойства 'только для чтения' и т.п.
// Но эти операции все равно не будут выполнены. Действия нарушающие ограничения флагов, в
// нестрогом режиме будут проигнорированы.
//
// Пример со свойство созданным с нуля:

() => {
  let user = {};

  Object.defineProperty(user, "name", {
    value: "John",
    enumerable: true,
    configurable: true,
  });

  console.log(user.name); // John
  user.name = "Pete"; //Uncaught TypeError: Cannot assign to read only property 'name'
};

//
// Неперечислимое свойство
//
// Теперь добавим собственный метод toString в объектах - неперечислимый, его не видно в цикле
// for..in. Но если мы напишем собственный метод toString, цикл for..in будет выводить его:

() => {
  let user = {
    name: "John",
    toString() {
      return this.name;
    },
  };

  for (let key in user) {
    console.log(key); // name, toString
  }

  // Если мы не хотим видеть свойство в цикле, можно установить enumerable: false. Тогда оно
  // перестанет появляться в цикле for..in аналогично встроенному toString:

  () => {
    let user = {
      name: "John",
      toString() {
        return this.name;
      },
    };

    Object.defineProperty(user, "toString", {
      enumerable: false,
    });

    for (let key in user) {
      console.log(key); // name
    }

    // Неперечисляемые свойства также не возвращаются Object.keys:
    console.log(Object.keys(user)); // name
  };
};

//
// Неконфигурируемое свойство
//
// Флаг неконфигурируемого свойства (configurable: false) иногда предустановлен для некоторых
// встроенных объектов и свойств.
//
// Неконфигурируемое свойство не может быть удалено, его атрибуты не могут быть изменены.
// Например, свойство Math.PI - только для чтения, неперечисляемое и неконфигурируемое:

() => {
  let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
  console.log(JSON.stringify(descriptor, null, 2));

  /*
    {
      "value": 3.141592653589793,
      "writable": false,
      "enumerable": false,
      "configurable": false
    }
  */

  // То есть программист не сможет изменить значение Math.PI или перезаписать его.
  Math.PI = 3; // Ошибка, потому что writable: false

  // delete Math.PI тоже не сработает
  // Мы также не можем изменить writable:
  Object.defineProperty(Math, "PI", { writable: true }); // Ошибка из-за configurable: false

  // Мы абсолютно ничего не можем сделать с Math.PI.
  //
  // Определение свойства как неконфигуриемоего - это дорога в один конец. Мы не можем изменить его
  // обратно с помощью defineProperty.
  //
  // Обратите внимание: configurable: false не даст изменить флаги свойства, а также не даст его
  // удалить. При этом можно изменить значение свойства.
  //
  // В коде ниже свойство user.name является неконфигуриремым, но мы все еще можем изменить его
  // значение (т.к. writable: true).

  () => {
    let user = {
      name: "John",
    };

    Object.defineProperty(user, "name", {
      configurable: false,
    });

    user.name = "Pete"; // ok
    delete user.name; // error
  };

  // А здесь мы делаем user.name 'навечно запечатанной' константой, как и встроенный Math.PI:

  () => {
    let user = {
      name: "John",
    };

    Object.defineProperty(user, "name", {
      writable: false,
      configurable: false,
    });

    // теперь невозможно изменить user.name или его флаги
    // всё это не будет работать:
    user.name = "Pete";
    delete user.name;
    Object.defineProperty(user, "name", { value: "Pete" });
  };
};

//
// Метод Object.defineProperties
//

// Существует метод Object.defineProperties(obj, descriptors), который позволяется определять
// множество свойств сразу.
//
// Его синтаксис:

() => {
  Object.defineProperties(obj, {
    prop1: descriptor1,
    prop2: descriptor2,
    // ...
  });
};

// Например:

() => {
  Object.defineProperties(user, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
  });

  // Таким образом, мы можем определить множество свойств одной операцией.
};

//
// Object.getOwnPropertyDescriptors
//

// Чтобы получить все дескрипторы свойств сразу, можно воспользоваться методом
// Object.defineProperties - этот метод можно использовать для клонирования объекта вместе
// с его флагами:

() => {
  let clone = Object.defineProperties(
    {},
    Object.getOwnPropertyDescriptors(obj)
  );

  // Обычно при клонировании объекта мы используем присваивание, чтобы скопировать его свойства:

  for (let key in user) {
    clone[key] = user[key];
  }

  // Но это не копирует флаги. Так что если нам нужен клон 'получше', предпочтительнее использовать
  // Object.defineProperties.
  //
  // Другое отличие в том, что for..in игнорирует символьные и неперечисляемые свойства, а
  // Object.getOwnProperties возвращает дескрипторы всех свойств.
};

//
// Глобальное запечатывание объекта
//

// Дескрипторы свойств работают на уровне конткретных свойств.
//
// Но еще есть методы, которые ограничивают доступ ко всему объекту:

// Object.preventExtensions(obj) - Запрещает добавлять новые свойства в объект.

// Object.seal(obj) - Запрещает добавлять/удалять свойства.
// Устанавливает configurable: false для всех существующих свойств.

// Object.freeze(obj) - Запрещает добавлять/удалять/изменять свойства.
// Устанавливает configurable: false, writable: false для всех существующих свойств.

// А также есть методы для их проверки:

// Object.isExtensible(obj) - Возвращает false, если добавление свойств запрещено, иначе true.

// Object.isSealed(obj) - Возвращает true, если добавление/удаление свойств запрещено
// и для всех существующих свойств установлено configurable: false.

// Object.isFrozen(obj) - Возвращает true, если добавление/удаление/изменение свойств запрещено,
// и для всех текущих свойств установлено configurable: false, writable: false.

// На практике эти методы используются редко.
