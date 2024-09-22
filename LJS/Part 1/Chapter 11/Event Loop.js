() => {
  setTimeout(function timeout() {
    console.log(1);
  }, 0);

  let p = new Promise(function (resolve, reject) {
    console.log(2);
    resolve();
  });

  p.then(function () {
    console.log(3);
  });

  console.log(4);

  // 2 4 3 1
};

() => {
  console.log(1);

  setTimeout(() => console.log(2));

  Promise.resolve().then(() => console.log(3));

  Promise.resolve().then(() => setTimeout(() => console.log(4)));

  Promise.resolve().then(() => console.log(5));

  setTimeout(() => console.log(6));

  console.log(7);

  // 1 7 3 5 2 6 4
};

() => {
  console.log(1);

  setTimeout(() => console.log(2));

  Promise.reject(3).catch(console.log);

  new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

  Promise.resolve(5).then(console.log);

  console.log(6);

  setTimeout(() => console.log(7), 0);

  // 1 6 3 5 2 4 7
};

() => {
  console.log("A");

  setTimeout(() => {
    console.log("B");
  }, 1000);

  console.log("C");

  Promise.resolve().then(() => {
    console.log("D");
  });

  console.log("E");

  // А C E D B
};

() => {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("3");
    })
    .then(() => {
      console.log("4");
    });

  console.log("5");

  // 1 5 3 4 2
};

() => {
  console.log("X");

  setTimeout(() => {
    console.log("Y");
  }, 1000);

  setTimeout(() => {
    console.log("Z");
  }, 0);

  console.log("W");

  // X W Z Y
};

() => {
  console.log("I");

  setTimeout(() => {
    console.log("II");
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("III");
      return Promise.resolve();
    })
    .then(() => {
      console.log("IV");
    });

  console.log("V");

  // 1 V III IV II
};

() => {
  console.log("alpha");

  setTimeout(() => {
    console.log("beta");
  }, 300);

  const promise = new Promise((resolve) => {
    console.log("gamma");
    resolve();
  });

  promise.then(() => {
    console.log("delta");
  });

  console.log("epsilon");

  // alpha gamma epsilon delta beta
};

() => {
  console.log("Start");

  setTimeout(() => {
    console.log("Timeout");
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("Promise1");
    })
    .then(() => {
      console.log("Promise2");
    });

  console.log("End");

  // Start End Promise1 Promise2 Timeout
};

() => {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  setTimeout(() => {
    console.log("3");
  }, 0);

  Promise.resolve().then(() => {
    setTimeout(() => {
      console.log("4");
    }, 0);
  });

  console.log("5");

  // 1 5 2 3 4
};

() => {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 100);

  setTimeout(() => {
    console.log("3");
  }, 0);

  Promise.resolve().then(() => {
    setTimeout(() => {
      console.log("4");
    }, 50);
  });

  console.log("5");

  // 1 5 3 4 2
};

() => {
  console.log("First");

  setTimeout(() => {
    console.log("Second");
  }, 0);

  new Promise((resolve) => {
    console.log("Third");
    resolve();
  }).then(() => {
    console.log("Fourth");
  });

  console.log("Fifth");

  // First Third Fifth Fourth Second
};

() => {
  console.log("A");

  setTimeout(() => {
    console.log("B");
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("C");
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("D");
          resolve();
        }, 0);
      });
    })
    .then(() => {
      console.log("E");
    });

  console.log("F");

  // A F C B D E
};

() => {
  console.log("A");

  setTimeout(() => {
    console.log("B");
  }, 200);

  Promise.resolve()
    .then(() => {
      console.log("C");
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("D");
          resolve();
        }, 100);
      });
    })
    .then(() => {
      console.log("E");
    });

  console.log("F");

  // A F C D E B
};

() => {
  setTimeout(() => {
    console.log("1");
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("2");
      setTimeout(() => {
        console.log("3");
      }, 0);
      return Promise.resolve();
    })
    .then(() => {
      console.log("4");
    });

  Promise.resolve().then(() => {
    console.log("5");
  });

  setTimeout(() => {
    console.log("6");
  }, 0);

  // 2 5 4 1 6 3
};

() => {
  console.log("x");

  setTimeout(() => {
    console.log("y");
  }, 0);

  for (let i = 0; i < 3; i++) {
    Promise.resolve().then(() => {
      console.log(i);
    });
  }

  console.log("z");

  // x z 0 1 2 y
};

() => {
  console.log("P");

  setTimeout(() => {
    console.log("Q");
    Promise.resolve().then(() => {
      console.log("R");
    });
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("S");
    })
    .then(() => {
      setTimeout(() => {
        console.log("T");
      }, 0);
    });

  console.log("U");

  // P U S Q R T
};

() => {
  console.log("Hello");

  setTimeout(() => {
    console.log("World");
    Promise.resolve().then(() => {
      console.log("!");
    });
  }, 100);

  Promise.resolve()
    .then(() => {
      console.log("this");
    })
    .then(() => {
      console.log("is");
    });

  console.log("JavaScript");

  // Hello JavaScript this is World !
};

() => {
  console.log("I");

  setTimeout(() => console.log("II"), 0);

  Promise.resolve()
    .then(() => {
      console.log("III");
      setTimeout(() => console.log("IV"), 0);
      return Promise.resolve("V");
    })
    .then((res) => console.log(res));

  console.log("VI");

  // I VI III V II IV
};

() => {
  console.log(1);

  const promise = new Promise((resolve) => {
    console.log(2);
    resolve();
  });

  promise
    .then(() => {
      console.log(3);
      setTimeout(() => {
        console.log(4);
      }, 0);
    })
    .then(() => {
      console.log(5);
    });

  setTimeout(() => {
    console.log(6);
  }, 0);

  console.log(7);

  // 1 2 7 3 5 6 4
};

() => {
  console.log("A");
  setTimeout(() => console.log("B"), 0);
  Promise.resolve().then(() => console.log("C"));
  Promise.resolve().then(() => {
    console.log("D");
    setTimeout(() => console.log("E"), 0);
  });
  console.log("F");

  // A F C D B E
};

() => {
  async function asyncFunc() {
    console.log("Async Start");
    await Promise.resolve();
    console.log("Async End");
  }

  console.log("Script Start");
  asyncFunc();

  setTimeout(() => {
    console.log("Timeout");
  }, 0);

  console.log("Script End");

  // Script Start Async Start Script End Async End Timeout
};

() => {
  async function foo() {
    console.log("foo1");
    await bar();
    console.log("foo2");
  }

  async function bar() {
    console.log("bar");
  }

  console.log("script start");
  foo();
  console.log("script end");

  // script start foo1 bar foo2 script end
};

() => {
  async function func1() {
    console.log("func1 start");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("func1 end");
  }

  async function func2() {
    console.log("func2 start");
    await func1();
    console.log("func2 end");
  }

  console.log("main start");
  func2();
  console.log("main end");
};
