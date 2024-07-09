// TypeScript Умеет выводить тип массивов, как и в случае с примитивными типами данных
() => {
    const fruits = ['banana', 'mango', 'apple'];
    // Все работает
    const upperFruits = fruits.map((name) => name.toUpperCase());
    () => {
    // А так уже нет
    // Property 'key' does not exist on type 'string'.
        // const upperFruits = fruits.map((name) => name.key);
    }
}

const fruits1: string[] = ['Apple', 'Orange', 'Lemon']
const numbers1: number[] = [1,2,3,4]

// Задание
// Анаграммы — это слова, которые состоят из одинаковых букв. Например:

// спаниель — апельсин
// карат — карта — катар
// топор — ропот — отпор
// Реализуйте функцию filterAnagrams(), которая находит все анаграммы слова.
//  Функция принимает исходное слово и список для проверки — массив. 
//  А возвращает функция массив всех анаграмм. 
//  Если в списке нет анаграммы, то возвращается пустой массив:

function filterAnagrams(mainWord: string, stringArr: string[]) {
    const newMainWord = mainWord.split('').sort().join('')
    return stringArr.filter(word => word.split('').sort().join('') === newMainWord)
}

filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

filterAnagrams('laser', ['lazing', 'lazy',  'lacer']);
// []