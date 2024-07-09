// TypeScript: Анонимные функции

// В этом уроке мы познакомимся с анонимными функциями. 
// Вместе со стрелочными они обычно используются в том же месте, где и определяются. 
// Благодаря этому TypeScript может вывести типы их параметров.

// Чтобы определить анонимные функции, указание типов опускают:
const fruits = ['banana', 'mango', 'apple'];
() => {
    const upperFruits = fruits.map((name) => name.toUpperCase());
    // ['BANANA', 'MANGO', 'APPLE']
}
// Этот процесс называется контекстная типизация (contextual typing), 
// так как контекст определения функции позволяет вывести типы входных параметров. 
// В итоге код выглядит идентично коду на JavaScript.

// Если функция определяется вне контекста, то к ней применяются те же правила,
//  что и к именованным функциям. То есть типы параметров должны быть заданы во время определения:

() => {
    const toUpper = (name: string): string => name.toUpperCase();
    const upperFruits = fruits.map(toUpper);
}

// Задание
// Напишите функцию, которая возвращает массив четных чисел из массива numbers.

const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

() => { 
    const evenNumbers = numbers.filter(item => !(item % 2))
    console.log(evenNumbers);
}

() => {
    const numbers = [1, 3, 8, 9, 100, 23, 55, 34];
    const isEven = (num: number): boolean => !(num % 2)
    const evenNumbers = numbers.filter(isEven) 
    console.log(evenNumbers);
}

() => {
    const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

    const getEvenNumbers = ( )   => 
        numbers.filter(num => !(num % 2))
    
}