// 1. Создание простого промиса:
//    Напишите функцию `makePromise`, которая возвращает промис.
//    Этот промис должен выполняться через 2 секунды и возвращать строку "Успех!" или отклоняться с ошибкой "Ошибка!" с вероятностью 50%.

() => {
  function makePromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let isSuccess = Boolean(Math.round(Math.random()));

        if (isSuccess) {
          resolve("Успех!");
        }
        reject("Ошибка!");
      }, 2000);
    });
  }

  makePromise()
    .then((result) => alert(result))
    .catch((result) => alert(result));
};

// 2. Цепочка промисов:
//    Напишите функцию `fetchData`, которая возвращает промис, выполняющийся через 1 секунду и с возвращаемым значением
// { data: "Данные" }.
//    Затем создайте цепочку промисов, которая преобразует данные в верхний регистр и выводит итоговое значение в консоль.

() => {
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ data: "Данные" }));
    });
  }

  fetchData()
    .then((result) => result.data.toUpperCase())
    .then((result) => console.log(result));
};

// 3. Обработка ошибок:
//    Создайте функцию `requestWithError`, которая будет возвращать промис, который отклоняется с ошибкой
//   "Что-то пошло не так" через 500 мс. Обработайте эту ошибку с помощью метода `.catch()`,
//    чтобы выдавало сообщение в консоль об ошибке.

() => {
  function requestWithError() {
    return new Promise((res, rej) => {
      setTimeout(() => rej(new Error("Что-то пошло не так")), 500);
    });
  }

  requestWithError().catch((error) => console.error(error.message));
};

// 4. Время выполнения:
//    Создайте промис, который будет выполняться случайное время от 1 до 3 секунд, и в зависимости от этого времени,
// выводите в консоль, выполнен он успешно или с ошибкой, используя метод `setTimeout`.

() => {
  new Promise((resolve, reject) => {
    const delay = (Math.floor(Math.random() * 3) + 1) * 1000;
    setTimeout(() => {
      if (delay > 1000) {
        resolve("RESOLVED!");
      }
      reject("REJECTED");
    }, delay);
  })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};
