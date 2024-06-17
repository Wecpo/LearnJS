// Деструктурировать объект как массив = >
() => {
  const obj = {
    name: "Max",
    age: 28,
    sayName() {
      console.log("My name is " + this.name);
    },
    [Symbol.iterator]() {
      this.current = 0;
      this.objLength = Object.keys(this).length;
      return this;
    },
    next() {
      if (this.current <= this.objLength) {
        return { done: false, value: this[Object.keys(this)[this.current++]] };
      } else {
        return { done: true };
      }
    },
  };

  const [name, age, sayName] = obj;
  console.log(name, age, sayName);
};

// Деструктурировать массив как объект = >
() => {
  //   const arr = ["Max"];
  //   arr["name"] = "Max";
  //   const { name } = arr;
  //   console.log(name);

  const arr = ["Max", 99, "Prog"];
  const { 0: name, 1: age, 2: work } = arr;
  console.log(name, age, work);
};
