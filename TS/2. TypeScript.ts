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

 //
 //
 //
 //
 //
 //
 // Напишите функцию, которая находит произведение переданных чисел:
() => {
    
multiply(3, 8); // 24
multiply(1, 2); // 2

function multiply(a: number,b: number): number {
    return a * b
}
}