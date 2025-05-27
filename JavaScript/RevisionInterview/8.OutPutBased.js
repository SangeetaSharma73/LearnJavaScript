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
console.log(b1); //[9] : because first it map the value and replace with squares and then filter out which is greater than 4

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
console.log(a); //[1,2,3] //because b2 contains the element same as a but not reference so what changes will be in b2 not affected to a

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
let b = Object.assign({}, a);
b.name = "Doe";
console.log(a.name);
