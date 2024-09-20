// Перепишите, используя async/await
// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
() => {
  function loadJson(url) {
    return fetch(url).then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
  }

  loadJson("no-such-user.json") // (3)
    .catch(alert); // Error: 404
};

() => {
  async function loadJson(url) {
    const response = await fetch(url);
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(response.json);
    }
  }
};

// 2.
() => {
  class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = "HttpError";
      this.response = response;
    }
  }

  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  }

  // Запрашивать логин, пока github не вернёт существующего пользователя.
  async function demoGithubUser() {
    let user;
    while (true) {
      let name = prompt("Введите логин?", "iliakan");

      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break; // ошибок не было, выходим из цикла
      } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
          // после alert начнётся новая итерация цикла
          alert(
            "Такого пользователя не существует, пожалуйста, повторите ввод."
          );
        } else {
          // неизвестная ошибка, пробрасываем её
          throw err;
        }
      }
    }

    alert(`Полное имя: ${user.name}.`);
    return user;
  }

  demoGithubUser();
};

//

///
///
// Вызовите async–функцию из "обычной"
// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
  wait().then(alert);
}
