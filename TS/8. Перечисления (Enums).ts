// Использование перечислений
// Перечисления используют вместо строк для постоянных значений:
() => {
  enum OrderStatus {
    Created,
    Paid,
    Shipped,
    Delivered,
  }

  const order = {
    items: 3,
    status: OrderStatus.Created,
  };
};

// Самый распространенный пример использования перечислений — хранение разных статусов.
// Но есть и другие случаи.
// Например, с их помощью хранят различные справочные данные и избавляются от магических значений:

// Направления движения
// Стороны света
// Дни недели
// Месяцы

enum CardinalDirection {
  North,
  South,
  East,
  West,
}

() => {
  const direction = CardinalDirection.North;

  //
  // Перечисление — это и значение, и тип. Его можно указывать как тип в параметрах функции:
  function setStatus(status: OrderStatus) {
    //..
  }
  // setStatus(status: OrderStatus)
  // Также перечисления после компиляции превращаются в JavaScript-объект,
  //  в котором каждому значению соответствует свойство. У этого свойства есть тип number и начинается он с 0:

  const status = OrderStatus.Created;
  console.log(status); // 0
  // Это позволяет в дальнейшем удобно использовать стандартные методы — например, Object.keys и Object.values:

  const statuses = Object.keys(OrderStatus);
  console.log(statuses); // ['0', '1', '2', '3', 'Created', 'Paid', 'Shipped', 'Delivered']
  // Среди ключей мы видим числа '0', '1', '2', '3'. Компилятор создает такие числовые ключи автоматически,
  //  а созданный объект выглядит так:

  console.log(OrderStatus); // =>
  // {
  //   '0': 'Created',
  //   '1': 'Paid',
  //   '2': 'Shipped',
  //   '3': 'Delivered',
  //   'Created': 0,
  //   'Paid': 1,
  //   'Shipped': 2,
  //   'Delivered': 3
  // }
  // Но можно избавиться от создания дополнительных ключей, если указать строковые значения:
};
enum OrderStatus {
  Created = "0",
  Paid = "1",
  Shipped = "2",
  Delivered = "3",
}

const statuses = Object.keys(OrderStatus);
console.log(statuses); // ['Created', 'Paid', 'Shipped', 'Delivered']

console.log(OrderStatus); // =>
//   'Created': '0',
//   'Paid': '1',
//   'Shipped': '2',
//   'Delivered': '3'
// }

// Задание
// Реализуйте перечисление ModalStatus с двумя значениями: Opened и Closed
// Реализуйте функцию buildModal(). Он возвращает объект, который описывает модальное окно. Параметры функции:
// Текст, который должен быть внутри окна после инициализации
// Статус, с которым надо создать объект окна
// Функция возвращает объект с двумя полями: text (здесь хранится переданный текст) и status (здесь хранится переданный статус)

enum ModalStatus {
  Opened,
  Closed,
}

function buildModal(
  text: string,
  status: ModalStatus
): { text: string; status: ModalStatus } {
  return { text, status };
}

const modal = buildModal("hexlet forever", ModalStatus.Opened);
// { text: 'hexlet forever', status: ModalStatus.Opened }
