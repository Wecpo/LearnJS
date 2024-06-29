// func(1,2,3,4)(3,4,5,6).valueOf()
// Создать функцию, которая складывает аргументы до тех пор
// пока не будет вызван ValueOf()

function func(...a) {
  let currentSum = a.reduce((acc, item) => (acc += item));

  function f(...b) {
    currentSum += b.reduce((acc, item) => (acc += item));
    return f;
  }

  f.valueOf = function () {
    return currentSum;
  };

  return f;
}

func(1, 2, 3, 4)(1).valueOf();
