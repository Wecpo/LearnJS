// Ошибка в setTimeout
// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// catch не выполнится, тк ошибка не синхронная, скрипт упадет
