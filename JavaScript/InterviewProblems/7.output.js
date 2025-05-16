//1.
// console.log(a); //undefined because of hoisting
// var a = 10;

//2.
// function outer() {
//   let a = 10;
//   return function inner() {
//     console.log(a);
//   };
// }
// outer()(); //output:10 because of closure it remember the outer scope variable value if it already done the invoke

//3.
// 🔁 Event Loop Execution Order:
// Synchronous code runs first:
// → start
// → end
// Microtasks (like .then of a Promise):
// → promise
// Macrotasks (like setTimeout):
// → timeout
// console.log("start");
// setTimeout(() => console.log("timeout"), 0);
// Promise.resolve().then(() => console.log("promise"));
// console.log("end");

//4.
const obj = {
  value: 100,
  getValueFunctionExpression: function () {
    return this.value;
  },
  getValueArrowFunction: () => {
    return this.value;
  },
  getValueNormalFunction: function NormalFunction() {
    return this.value;
  },
  nestedArrow: () => {
    name: "siya";
    return () => {
      return this.name;
    };
  },
  nestedFunExp: function () {
    let clg = "bsc";
    return function () {
      return this.clg;
    };
  },
};
console.log(obj.getValueFunctionExpression()); //this refers to obj.
// So it returns obj.value = 100.
// ✅ Output: 100

console.log(obj.getValueArrowFunction()); //Arrow functions do not bind their own this. They inherit it from the lexical scope, which in this case is the global context (outside obj).
// In the global scope, there’s no value property.
//✅Output: undefined;

console.log(obj.getValueNormalFunction());
// It behaves the same as getValueFunctionExpression.
// this refers to obj.
// ✅ Output: 100

console.log(obj.nestedArrow()());
// Outer nestedArrow is an arrow function, so this refers to global scope.
// Inner returned function is also an arrow function → again, inherits this from global.
// this.name is not defined in the global context.
// ✅ Output: undefined
// Also, note that this:
// name: "siya";
//Does nothing. It’s just a label in JS (like in loops).

console.log(obj.nestedFunExp()());
// nestedFunExp is a normal function, so this is obj.
// But the inner returned function is not bound, so when invoked, this becomes the global object (or undefined in strict mode).
// clg = "bsc"; creates a global variable (implicitly, because no let, const, or var).
// So this.clg inside the inner function does not refer to "bsc", because "bsc" is a global variable, not a property of the global object in strict mode.
// ✅ Output: undefined

// ✅ 1. getValueArrowFunction — Fix Arrow Function this issue

// getValueArrowFunction: function () {
//   return this.value;
// }

// 📌 Fix: Use a normal function instead of an arrow function.

// ✅ 2. nestedArrow — Fix arrow function this and return value
// Original:

// nestedArrow: () => {
//   name: "siya"; // does nothing
//   return () => {
//     return this.name;
//   };
// }

// 📌 Fix: Replace outer arrow function with normal function, and store name properly:

// nestedArrow: function () {
//   this.name = "siya";
//   return () => {
//     return this.name;
//   };
// }
// ✅ Now obj.nestedArrow()() will return "siya".

// ✅ 3. nestedFunExp — Fix context of this in inner function
// Original:

// nestedFunExp: function () {
//   clg = "bsc"; // creates a global variable
//   return function () {
//     return this.clg;
//   };
// }

// 📌 Fix Option 1: Use an arrow function to preserve outer this:

// nestedFunExp: function () {
//   this.clg = "bsc";
//   return () => {
//     return this.clg;
//   };
// }
// ✅ Now obj.nestedFunExp()() will return "bsc".

// 📌 Fix Option 2: Use .bind(this) to manually bind the inner function:

// nestedFunExp: function () {
//   this.clg = "bsc";
//   return function () {
//     return this.clg;
//   }.bind(this);
// }
// ✅ Same output: "bsc"

// 🔁 Updated, Working Example:

const obj1 = {
  value: 100,
  name: "default",

  getValueFunctionExpression: function () {
    return this.value;
  },

  getValueArrowFunction: function () {
    return this.value;
  },

  getValueNormalFunction: function NormalFunction() {
    return this.value;
  },

  nestedArrow: function () {
    this.name = "siya";
    return () => {
      return this.name;
    };
  },

  nestedFunExp: function () {
    this.clg = "bsc";
    return () => {
      return this.clg;
    };
  },
};

console.log(obj1.getValueFunctionExpression()); // 100
console.log(obj1.getValueArrowFunction()); // 100
console.log(obj1.getValueNormalFunction()); // 100
console.log(obj1.nestedArrow()()); // "siya"
console.log(obj1.nestedFunExp()()); // "bsc"

//5.
console.log(typeof undefined); //undefined
console.log(typeof null); //object

// ✅ What is the type of null in JavaScript?

// typeof null; // 🔸 "object"
// Yes, typeof null returns "object" — and this is considered a bug in JavaScript.

// ❓ Why is the type of null an object?
// This goes all the way back to the early days of JavaScript.

// JavaScript represents values using type tags internally.

// The type tag for objects was 0.

// null was represented with the same tag (0) — as a special value.

// So, typeof null was set to return "object".

// 🔴 This behavior is now well-known but not changed because it would break a lot of old code.

//6.
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);

//7.
const x = Promise.resolve(10);
x.then(console.log);

//🔍 Explanation:
Promise.resolve(10); //creates a resolved promise with the value 10.

// const x1 = Promise.resolve(10); // => Promise that is already resolved with value 10
// .then(console.log) attaches a callback to the promise. When the promise resolves, it calls:

// console.log(10);
// Since the promise is already resolved, the callback is scheduled to run asynchronously (i.e., after the current call stack is empty, in the microtask queue).
