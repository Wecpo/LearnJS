() => {
  const obj2 = {
    age: 28,
  };

  alert(+obj2);
  console.log(+obj2);
};
() => {
  let obj = {};
  // вывод
  alert(obj);
  // используем объект в качестве ключа
  anotherObj[obj] = 123;
};

() => {
  // Как сделать, чтобы объект: был равен определенному числу или строке, obj > 0?
  let obj = {
    name: "max",
    age: 284,
    [Symbol.toPrimitive](hint) {
      return hint === "string" ? `{name: "${this.name}"}` : this.age;
    },
  };
  alert(+obj); // к числу
  alert(obj); // к строке
  alert(obj > 0); // obj > 0 // true
};

() => {
  // String(obj < 0) + String(obj < 0) // "truefalse". Как это сделать?
  let obj = {
    name: "max",
    age: -1,
    [Symbol.toPrimitive](hint) {
      return this.age++;
    },
  };
  console.log(String(obj < 0) + String(obj < 0));
};

/// ДОЛГ
() => {
  let user = {
    name: "Sashka",
    [Symbol.toPrimitive](hint) {
      console.log(hint);
      return () => console.log(this.name);
    },
  };
  const result = `123` + user;
  // Uncaught TypeError: Cannot convert object to primitive value
  // Если нужно вернуть объект или колбэк нужно реализовать метод valueOf
  // По дефолту вызывается toPrimitive(), который возвращает только примитив.
  // Для хинта string --- toString(), для хинта number или default --- valueOf()
};

() => {
  let user = {
    name: "Sashka",
    valueOf() {
      console.log(`valueOf()`);
      return () => console.log(this.name, `123`);
    },
  };
  const result = +user;
  const result1 = `123` + user;
  console.log(result);
  console.log(result1);
};
