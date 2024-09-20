() => {
  function Animal(name) {
    // this = {} (неявно)
    this.name = name;
    this.isWild = false;
    // return this; (неявно)
  }

  let cat = new Animal("dusya");
  console.log(cat);
};

() => {
  function Target() {
    alert(new.target);
    console.log(new.target);
  }
  Target(); // - вызов без new - undefined
  new Target(); // - вызов с new - возвращает функцию
  let target = new Target(); // - тоже самое
  let targetF = Target(); // - тоже самое
  console.log(target, targetF);
};

() => {
  function NewUser(name, age) {
    // если функция возвращает свой объект, то она вернет его (этот объект)
    this.name = name;
    this.age = age;
    return { name: "Max" };
  }

  function NewUser1(name, age) {
    // если функция возвращает примитив либо пустой return, то он игнорируется (return)
    this.name = name;
    this.age = age;
    return 1;
  }

  const user = new NewUser("alex", 25); // {name: 'Max'}
  const user1 = new NewUser1("alex", 26); // {name: 'alex, age: 26}
  console.log(user, user1);
  console.log(NewUser.arguments);
};

//////////////////// СОЗДАНИЕ МЕТОДОВ В КОНСТРУКТОРЕ \\\\\\\\\\\\\\\\
() => {
  function User(name) {
    this.name = name;
    this.sayName = function () {
      alert(`My name is ${this.name}`);
    };
  }

  let user = new User("max");
  user.sayName();
};

//////////////////////////////////////////////////////////////////////

() => {
  function Animal(name, age, asd) {}
  console.log(Animal.length);
};

() => {
  function User() {}
  let user = new User();
  console.log(user);
};
