// Есть явное и неявное указание типов
// Неявное указания типа - называется выводом типа.
// Т.е.
() => {
    let num = 4
    num = 5
   // num = 'a' - Ошибка

   // Так-же массив 
   const arr = [1,2,3]
   arr.push(5)
   // arr.push('a') - Ошибка

   // Объект
   const obj = {
    name: 'ASD',
    age: 300
   }
   obj.name = 'asdasd' 
   obj.age = 124914
   // obj.name = 123 - ОШибка
   // obj.asd - Ошибка
 }

// Задание
// Допишите тело функции repeat(), которая повторяет строку указанное количество раз. 
// Функция должна возвращать полученный результат.
// Постарайтесь не использовать встроенные методы, для такой реализации вам понадобится цикл.

function repeat(text: string, count: number): string{
    let res = ''
    for (let i = 0; i < count; i++) {
        res += text
    }

    return res
}

repeat('hexlet', 2); // hexlethexlet
repeat('wo', 3); // wowowo