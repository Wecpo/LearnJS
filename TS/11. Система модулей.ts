// Система модулей
//
// В этом уроке рассмотрим систему модулей TypeScript,
// которая была создана до стандартизации ESM-модулей.

// По умолчанию эта система модулей совместима с Node.js-модулями.
// Она использует идентичный алгоритм определения импортов и экспортов,
// при этом синтаксически похожа на ESM.
// В нем мы используем ключевые слова import/export для импортирования
// в текущий модуль и экспорта из него, при этом остается валидным использование CommonJS модулей.
//
// Для примера создадим два файла. Из одного будем экспортировать функцию,
// а в другом импортировать ее:

() => {
  //   @file helloWorld.ts
  //   export default function helloWorld() {
  //     console.log("Hello, world!");
  //   }

  // @file main.ts
  //   import helloWorld from "./helloWorld";

  //   В системе модулей TypeScript также поддерживается именованный экспорт/импорт и
  //   импорт всего экспортированного через import * as:

  () => {
    // @file helloWorld
  };
};

//
// Импорт типов
//
// TypeScript также как и JavaScript использует npm-пакеты для зависимостей.
// При этом важно помнить, что в некоторых пакетов типов может и не быть.
// Например, в пакете lodash нет типов, поэтому при импорте его функций TypeScript
// будет ругаться на отсутствие типов.
//
// Для решения этой проблемы нужно установить пакет @types/lodash, который содержит типы для lodash.
//
// Но верна и обратная ситуация, например, пакет type-fest содержит только типы.
// Чтобы создать такой пакет самому и случайно не импортировать реализацию функций,
// нужно использовать специальный синтаксис:

() => {
  // @file user.types.ts
  //   export type User = { name: string };
  // @file main.ts
  //   import type { User } from "./user.types";
};

// Пространство имен (Namespace)
//
// Модули решают проблему разнородных сущностей и коллизий с помощью разнесения
// кода по нескольким файлам. Чтобы коллизии не возникали в рамках одного файла,
// используют механизм пространств имен namespace:

namespace Hello {
  export function helloWorld() {
    console.log("Hello, world!");
  }
}

const helloWorld = Hello.helloWorld();

// Больше всего этот механизм полезен авторам библиотек и оберток с типами @types/.
// Они заключают все интерфейсы в один namespace, совпадающий с названием библиотеки.
// Это гарантирует отсутствие коллизий имен и упрощает пользователям слияние интерфейсов.
// О последнем пункте поговорим в одном из следующих уроков курса.

//
// Задание
//
() => {
  // Реализуйте namespace Company, в котором экспортируется функция isEmployeeEmail().
  // Функция принимает почту и домен. Если емейл пользователя содержит указанный домен,
  // то функция возвращает true:
  Company.isEmployeeEmail("tirion@hexlet.io", "hexlet.io");
  // true

  Company.isEmployeeEmail("user@example.com", "hexlet.io");
  // false
};

// Решение
type User = {
  email: string;
};

namespace Company {
  export function isEmployeeEmail(email: string, domain: string): boolean {
    return email.endsWith(`@${domain}`);
  }
}

function authorize(user: User | null): boolean {
  const companyDomain = "hexlet.io";

  const email = user?.email ?? "";

  return Company.isEmployeeEmail(email, companyDomain);
}
