() => {
  // Создайте дату
  // Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
  console.log(new Date(2012, 1, 20, 3, 12));
};

() => {
  //     Покажите день недели
  // Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

  // Например:

  let date = new Date(2012, 0, 3); // 3 января 2012 года
  function getWeekDay(date) {
    let weekDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return weekDays[date.getDay()];
  }
  console.log(getWeekDay(date)); // нужно вывести "ВТ"
};

() => {
  //    День недели в европейской нумерации
  //   В Европейских странах неделя начинается с понедельника (день номер 1),
  //   затем идёт вторник (номер 2) и так до воскресенья (номер 7).
  //   Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели
  //   для даты date.

  let date = new Date(2024, 4, 5); // 5 мая 2024 года

  function getLocalDay(date) {
    const day = date.getDay();
    return day === 0 ? 7 : day;
  }

  console.log(getLocalDay(date)); //
};

() => {
  //     Какой день месяца был много дней назад?

  // Создайте функцию getDateAgo(date, days), возвращающую число,
  //  которое было days дней назад от даты date.

  // К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1)
  //  вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

  // Функция должна надёжно работать при значении days=365 и больших значениях:

  let date = new Date(2015, 0, 2);

  function getDateAgo(date, days) {
    return new Date(date - days * 24 * 3600 * 1000).getDate();
  }

  console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
  console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
  console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
  // P.S. Функция не должна изменять переданный ей объект date.
};

() => {
  //   Последнее число месяца?
  //  Напишите функцию getLastDayOfMonth(year, month),
  //  возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
  // Параметры:
  // year – год из четырёх цифр, например, 2012.
  // month – месяц от 0 до 11.
  // К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
  function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  console.log(getLastDayOfMonth(2024, 4));
};

() => {
  //   Сколько сегодня прошло секунд?
  // Напишите функцию getSecondsToday(), возвращающую количество секунд с начала
  // сегодняшнего дня.
  // Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
  // getSecondsToday() == 36000 // (3600 * 10)
  // Функция должна работать в любой день, т.е. в ней не должно быть
  //  конкретного значения сегодняшней даты.

  const getLSecondsToday = () => {
    let date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  };
  console.log(getLSecondsToday());
};

() => {
  //   Сколько секунд осталось до завтра?
  // Создайте функцию getSecondsToTomorrow(),
  // возвращающую количество секунд до завтрашней даты.
  // Например, если сейчас 23:00, то:
  // getSecondsToTomorrow() == 3600
  // P.S. Функция должна работать в любой день, т.е.
  // в ней не должно быть конкретного значения сегодняшней даты.
  const getSecondsToTomorrow = () => {
    const currentDate = new Date();
    const nextDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1
    );
    const diff = nextDate - currentDate;
    return Math.round(diff / 1000);
  };
  console.log(getSecondsToTomorrow());
};

() => {
  //   Форматирование относительной даты
  // Напишите функцию formatDate(date), форматирующую date по следующему принципу:

  // Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
  // В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
  // В противном случае, если меньше часа, вывести "m мин. назад".
  // В противном случае, полная дата в формате "DD.MM.YY HH:mm".
  //  А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

  const formatDate = (date) => {
    const diff = new Date() - date;

    if (diff < 1000) {
      return "прямо сейчас";
    }

    const secods = Math.floor(diff / 1000);
    if (secods < 60) {
      return secods + " сек. назад";
    }

    const minutes = Math.floor(diff / 60000);
    if (minutes < 60) {
      return minutes + " мин. назад";
    }

    let d = date;
    d = [
      "0" + d.getDate(),
      "0" + (d.getMonth() + 1),
      "" + d.getFullYear(),
      "0" + d.getHours(),
      "0" + d.getMinutes(),
    ].map((component) => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

    // соединить компоненты в дату
    return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
  };

  console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

  console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

  console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

  // вчерашняя дата вроде 31.12.2016, 20:00
  console.log(formatDate(new Date(new Date() - 86400 * 1000)));
};
