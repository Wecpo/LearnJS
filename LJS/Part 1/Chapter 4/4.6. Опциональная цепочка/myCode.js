// Опциональная цепочка ?. — это безопасный способ доступа к свойствам вложенных объектов,
//  даже если какое-либо из промежуточных свойств не существует.
() => {
  let user = {}; // пользователь без свойства "address"

  alert(user.address.street); // Ошибка!
  alert(user?.address); // undefined
};
// Опциональная цепочка ?. останавливает вычисление и возвращает undefined,
//  если значение перед ?. равно undefined или null.
() => {
  let userAdmin = {
    admin() {
      alert("Я админ");
    },
  };

  let userGuest = {};

  userAdmin.admin?.(); // Я админ
  userGuest.admin?.(); // ничего не произойдет (такого метода нет)
};

() => {
  let user = {
    address: {
      street: "Petrovka",
    },
  };

  let user1 = {
    address: "Petrovskaya",
  };

  console.log(user.address); // Petrovka
  console.log(user1?.address.street); // undefined
};

() => {
  let user = {
    address: {
      sayAddress: function () {
        console.log("address");
      },
    },
  };
  user.address.sayAddress();
  user.address.sayAddress1(); // Uncaught TypeError: user.address.sayAddress1 is not a function
  console.log(user.address.sayAddress1); // undefined
  console.log(user.address.sayAddress1?.()); // undefined, такого метода нет
};

() => {
  let key = "firstName";

  let user1 = {
    firstName: "John",
  };

  let user2 = null;

  alert(user2[key]);
  alert(user1?.[key]); // John
  alert(user2?.[key]); // undefined
  alert(user2[key]);
};

// Итого
// Синтаксис опциональной цепочки ?. имеет три формы:

// obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined.
// obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined.
// obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined.
// Как мы видим, все они просты и понятны в использовании. ?. проверяет левую часть на null/undefined и позволяет продолжить вычисление, если это не так.

// Цепочка ?. позволяет безопасно получать доступ к вложенным свойствам.

// Тем не менее, мы должны использовать ?. осторожно, только там, где по логике кода допустимо, что левая часть не существует. Чтобы он не скрывал от нас ошибки программирования, если они возникнут.
