// Ошибка создания экземпляра класса

// В коде ниже класс Rabbit наследует Animal.

// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

() => {
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }

  class Rabbit extends Animal {
    constructor(name) {
      this.name = name;
      this.created = Date.now();
    }
  }

  let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
  alert(rabbit.name);
};

() => {
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }

  class Rabbit extends Animal {
    constructor(name) {
      super(name);
      this.name = name;
      this.created = Date.now();
    }
  }

  let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
  alert(rabbit.name);
};

//
//
//
//

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
