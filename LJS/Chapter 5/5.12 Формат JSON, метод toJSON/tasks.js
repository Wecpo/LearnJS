() => {
  //     Преобразуйте объект в JSON, а затем обратно в обычный объект
  // важность: 5
  // Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

  let user = {
    name: "Василий Иванович",
    age: 35,
  };

  const jsonUser = JSON.stringify(user);
  const newUser = JSON.parse(jsonUser);
  console.log(newUser);
};
