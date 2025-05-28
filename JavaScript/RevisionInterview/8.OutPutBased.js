//1.
console.log(a); // undefined because val is hoisted on top of the scope but initialize  with undefined until value declare
var a = 10;

//2..
function outer() {
  let a = 10;
  return function inner() {
    console.log(a);
  };
}
outer()(); //10 : because of closure it remembers the outer scope variable after it completed it's execution

//3.
console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");

//output: because it uses the event loop where sync code run first then it goes in
// start
//end
//promise=>microtask
//timeout=>macrotask

//4.
const obj = {
  value: 100,
  getValue: function () {
    return this.value;
  },
};
console.log(obj.getValue()); //100: because getValue is the key of obj so we can access the key using obj.getValue and getValue is a function so we have to use the parenthesis to call or invoke the function

//5.
console.log(typeof undefined); // undefined
console.log(typeof null); //object because it's the mistake of js

//6.
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a); //[1,2,3,4]: because b reference to a which contains array element and when we have reference of any ds so can change the original ds and access and modified it's value

//7.
const x = Promise.resolve(10);
x.then(console.log); //10: I don't know the reason why so?
//✅ Explanation:
// Promise.resolve(10) creates a resolved promise with the value 10.

// .then(console.log) registers a callback that logs the resolved value when the promise is fulfilled.

// Since the promise is already resolved, the .then() is executed in the microtask queue, after the current call stack is cleared.

// So the output is:
// 10

// //8.
function greet(name) {
  console.log(name);
  console.log(`Hello ${name}`);
}
setTimeout(greet, 1000, "John"); //

//✅ Explanation:
// setTimeout is used to delay the execution of a function.

// The syntax:

// setTimeout(callback, delayInMilliseconds, arg1, arg2, ...)
// allows you to pass arguments ("John" in this case) to the function being called.

// greet is scheduled to run after 1000ms (i.e., 1 second), and the value "John" is passed as an argument.

// So after 1 second, it effectively runs:

// greet("John"); // -> "Hello John"
// ✅ In Summary:
// This is a correct and valid use of setTimeout.

// It delays execution of greet by 1 second and passes "John" as the argument.

// The output appears after 1 second:

// Hello John

//9.
const a = [1, 2, 3];
const b1 = a.map((x) => x * 2).filter((x) => x > 4);
console.log(b1); //[6] : because first it map the value and replace with squares and then filter out which is greater than 4

//10.
let foo = "bar";
function test() {
  console.log(foo);
  var foo = "baz";
}
test(); //undefined: it is because foo is defined with var keyword and it is hoisted to it's lexical scope and initialize with undefined and let is block scope that's why the value of foo is not bar

//11.
const a = [1, 2, 3];
const b2 = [...a];
b2.push(4);
console.log(a); //[1,2,3] //b2 is a shallow copy of a using the spread operator
//Changing b2 doesn’t affect a

//12.
let x1 = 10;
function changeX() {
  x1 = 20;
}
console.log(x1); //10: because x1=10 in outer scope or lexical scope
changeX(); // but after calling this function
console.log(x1); //20 : because value will be reassigned  as 20 in function

//13.
let a = { name: "John" };
let b3 = Object.assign({}, a);
b3.name = "Doe";
console.log(a.name); //John
// ✅ Explanation (improved version):
// Object.assign({}, a) creates a shallow copy of object a into b3.

// Since the property name is a primitive value (string), it's copied by value, not by reference.

// Changing b3.name does not affect a.name.

//14.
function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2);
console.log(double(5)); //10
//🔍 Explanation:
// Function.prototype.bind() creates a new function with the first argument (a) preset to 2.

// null is passed as the first argument to bind because multiply does not use this, so this context is irrelevant.

// double(5) is equivalent to calling multiply(2, 5), so it returns 10.

//15.
const obj1 = {
  foo: function () {
    setTimeout(() => console.log(this), 1000);
  },
};
obj1.foo(); //{ foo: [Function: foo] }

//🔍 Explanation:
// obj1.foo() is called, so this inside foo refers to obj1.

// Inside foo, a setTimeout is used with an arrow function as the callback.

// Arrow functions do not have their own this. Instead, they lexically bind this — they inherit this from their enclosing scope.

// The enclosing scope is the foo method, where this is obj1.

// ✅ So, this inside the arrow function is obj1.
// Hence, after 1 second, console.log(this) prints the obj1 object.

//16.
let result = (function (a, b) {
  return a + b;
})(2, 3);
console.log(result); //5 : because of IIFE
//🔍 Explanation:
// This is an Immediately Invoked Function Expression (IIFE):

// let result = (function (a, b) {
//   return a + b;
// })(2, 3);
// The function (function(a, b) { return a + b; }) is defined and immediately executed with arguments 2 and 3.

// Inside the function:
// return a + b; // 2 + 3 = 5
// The result 5 is assigned to the variable result.

//17.
var a = 5;
(function () {
  var a = 10;
  console.log(a); //10
})();
console.log(a); //5
//🔍 Explanation:
// var a = 5;
// Global variable a is assigned the value 5.

// (function () { var a = 10; console.log(a); })();
// This is an Immediately Invoked Function Expression (IIFE).
// Inside the function, a new local a variable is declared with var and set to 10.
// So console.log(a) inside the function logs 10.

// console.log(a);
// This is outside the IIFE, so it logs the global a, which is still 5.

//18.
console.log(typeof typeof 1); // string
//Because:
// typeof 1 → "number"
// typeof "number" → "string"

//19.
console.log(0.1 + 0.2 === 0.3); //false
//✅ Output:
// false
// 🔍 Explanation:
// This is a classic example of floating-point precision error in JavaScript (and many other programming languages).

// 💡 Here's what happens:

// 0.1 + 0.2 === 0.3
// You'd expect this to be true, but it isn't. Why?

// Internally:

// 0.1 + 0.2 = 0.30000000000000004
// So:

// 0.30000000000000004 === 0.3 // false
// 🤯 Why does this happen?
// JavaScript uses IEEE 754 double-precision floating-point numbers.

// Some decimal fractions cannot be represented exactly in binary.

// Numbers like 0.1 and 0.2 have repeating binary representations, so their sum results in a tiny rounding error.

// ✅ Correct approach for comparison:
// If you need to compare floating-point numbers:

// Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON // true

//20.
console.log("5" - 3); //2
// 🔍 Explanation:
// 1. console.log("5" - 3);
// JavaScript uses type coercion when operators involve mixed types.

// The - operator forces both operands to be numbers.

// "5" is a string, but it's coerced into a number: Number("5") → 5

// So: 5 - 3 → 2
// ✅ Output: 2
console.log("5" + 3);
// 2. console.log("5" + 3);
// The + operator behaves differently:

// If either operand is a string, it performs string concatenation.

// "5" is a string, so:

// "5" + 3 → "5" + "3" → "53"

// ✅ Output: "53"
