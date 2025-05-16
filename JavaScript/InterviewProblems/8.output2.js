//7.
// function greet(name) {
//   console.log(`Hello ${name}`);
// }
// setTimeout(greet, 1000, "siya");

//8.
// const a1 = [1, 2, 3];
// const b1 = a1.map((x) => x * 2).filter((x) => x > 4);
// console.log(b1);

//9.
// let foo = "bar";
// function test() {
//   console.log(foo);
//   var foo = "baz";
// }
// test(); //undefined;

//10.
// const a = [1, 2, 3];
// const b = [...a];
// b.push(4);
// console.log(a);
// ✅ Key Point:
// The spread operator ([...]) copies values into a new array. It does not create a reference to the original array.

//11. using rest operator in obj
// let obj = {
//   name: "siya",
//   clg: "bsc",
//   age: 22,
//   address: {
//     city: "Wonderland",
//   },
// };

// let obj2 = { ...obj };
// obj2.age = 23;
// obj2.address.city = "new york";
// console.log(obj2, obj);

//12.
// let obj1 = {
//   name: "siya",
//   clg: "bsc",
//   age: 22,
// };

// let obj3 = obj1;
// obj3.age = 23;
// console.log(obj3, obj1);

//13.
// let x = 10;
// function changeX() {
//   x = 20;
// }
// console.log(x);
// changeX();
// console.log(x);

//14.
// let a = { name: "John" };
// let b = Object.assign({}, a);
// b.name = "Doe";
// console.log(a.name);

// ✅ Shallow Copy
// A shallow copy copies only the top-level properties. If an object contains nested objects, they are shared between the original and the copy (not fully copied).

// ✅ Deep Copy
// A deep copy recursively copies all levels of the object, so the original and the copy are completely independent — changes in nested objects won't affect each other.

// const original = {
//   name: "Alice",
//   address: {
//     city: "Wonderland",
//   },
// };

// 🧪 Shallow Copy
// const shallowCopy = { ...original };
// shallowCopy.address.city = "New York";

// console.log(original.address.city); // "New York" 😲 (affected)

//deep
// const original1 = {
//   name: "Alice",
//   address: {
//     city: "Wonderland",
//   },
// };

// 🧪 Deep Copy
// const deepCopy = JSON.parse(JSON.stringify(original1));
// deepCopy.address.city = "New York";

// console.log(original.address.city); // "Wonderland" ✅ (not affected)

//15.
function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2);
console.log(double(5));
// 🤔 What’s happening?
// 1. multiply(a, b) is a function that multiplies a and b.
// 2. multiply.bind(null, 2):
// bind() creates a new function with the first argument (a) pre-set to 2.
// null is passed as the this value, which is irrelevant here since multiply doesn’t use this.
// Now, double becomes:
// function double(b) {
//   return multiply(2, b);
// }
// 3. double(5) → multiply(2, 5) → 10

// 🧠 Why Use .bind()?
// To create partially applied functions.

// To fix the value of this in object methods (more common in class-based code).

//16.
const obj = {
  foo: function () {
    setTimeout(() => console.log(this), 1000);
  },
};
obj.foo();

// 🔍 What’s happening?
// obj.foo() is called.
// Inside foo, setTimeout is used with an arrow function.
// Arrow functions do not have their own this. They inherit this from the surrounding scope, which in this case is the foo function.
// foo is called using obj.foo(), so the this inside foo refers to obj.
// 🧠 So the arrow function inside setTimeout inherits this = obj.
// ✅ Output:{ foo: [Function: foo] }
// This is the obj itself, printed after 1 second.

// 📝 Summary:
// Arrow functions don’t create their own this.
// this is taken from the enclosing context.
// So console.log(this) prints obj.

//17.
let result = (function (a, b) {
  return a + b;
})(2, 3);
console.log(result);

// 🔍 What's happening?
// This is an Immediately Invoked Function Expression (IIFE).

// The function (function(a, b) { return a + b; }) is defined and then immediately called with 2 and 3 as arguments.

// It returns 2 + 3 = 5, which is stored in the variable result.

//18.
var a = 5;
(function () {
  var a = 10;
  console.log("Q18->inside function", a);
})();
console.log("Quest18", a);

// 🧠 Why?
// Because var has function scope, not block scope. So the inner a = 10 doesn’t affect the outer a = 5.

//19.
console.log("19. ", typeof typeof 1);

// 🔍 Step-by-step Explanation:
// Inner typeof 1:
// typeof 1 evaluates to "number" (because 1 is a number).
// Outer typeof "number":
// Now we do typeof "number".
// "number" is a string, so typeof "number" returns "string".

//20.
console.log(0.1 + 0.2 === 0.3);

// ❓Expected Answer:
// You might expect this to print true because:

// 0.1 + 0.2 should equal 0.3, right?

// ❌ Actual Output:
// 🤔 Why?
// Because of floating-point precision errors in JavaScript (and most programming languages that follow IEEE 754 standard).

// 0.1 + 0.2 actually results in:

// 0.30000000000000004
// So:

// 0.30000000000000004 === 0.3 // false
// ✅ How to fix it (if needed)?
// You can round the result:

// console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true

//21.
console.log("5" - 3);
// console.log("5" + 3);
// 🤔 Why?
// JavaScript uses type coercion (automatic type conversion) in expressions with mixed types:

// 1️⃣ '5' - 3
// The - operator forces numeric conversion.

// '5' (a string) is converted to the number 5.

// 5 - 3 = 2

// ✔️ So:
// console.log('5' - 3); // 2

// 2️⃣ '5' + 3
// The + operator with a string performs string concatenation, not arithmetic.

// 3 is converted to '3'

// '5' + '3' = '53'

// ✔️ So:

console.log("5" + 3); // '53'
