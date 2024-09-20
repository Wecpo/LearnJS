// У string, number, bigInt, boolean, symbol - есть конструкторы, обертки дающие доступ к свойствам объекта
// у null и undefined таких оберток, (объектов) нет
// при обращении к свойству примитива создается объект обертка, который сразу удаляется.
// процесс хорошо оптимизиорован движком

() => {
  let maksim = {
    name: "Max",
    sayHi() {
      alert("Привет, дружище");
    },
  };
  maksim.sayHi();

  let str = maksim.name.toUpperCase();
  alert(str);
};

() => {
  let num = 9.1234912;
  alert(num.toFixed(2));
};

() => {
  let num = new Number(2);
  console.log(num);
  num.valueOf();
  console.log(typeof num); // object
};

() => {
  let obj = {
    name: "max",
  };

  console.log(Boolean(obj));
};
