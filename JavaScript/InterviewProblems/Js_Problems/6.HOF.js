// Array Manipulation (HOFs)
// Use this mock data for all tasks in this subsection:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1. Use filter to return only even numbers from numbers.
let even = numbers.filter((e) => e % 2 == 0);
console.log(even);

//2.Use map to square each number in numbers.
let square = numbers.map((e) => e ** 2);
console.log(square);

//3.Use reduce to calculate the sum of all elements in numbers.

let sumOfAll = numbers.reduce((acc, val) => acc + val, 0);
console.log(sumOfAll);

//4.Chain map and filter on numbers to first double the values and then pick numbers greater than 10.

const doubleGreater10 = numbers.map((e) => e * 2).filter((e) => e > 10);
console.log(doubleGreater10);

//5. Use some on numbers to check if there is any number divisible by 7.
const divisible7 = numbers.some((e) => e % 7 == 0);
console.log(divisible7);
