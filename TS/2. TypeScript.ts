// TypeScript - статически типизированый язык. Перед запуском транспилируется в JS (Преобразование
// из TypeScript в JavaScript).
// Ошибки выявляются во время компиляции, т.е. код с ошибкой не скомпилируется.

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