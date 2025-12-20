// js - programming language
// 1. data types - primitive , non-primitive
// primitive - null , undefined , number , string , boolean , symbol,bigint

//1. we intentionally giving the null value to the variable it means it don't have any value (it's empty or null)- type of null is object.
//2. we declared a variable but yet we haven't given the value to the variable.
//3. number - it contains integer and float value
//4. string - it is sequence of character
//5. boolean - it contains true and false value
//6. symbol - it is unique data type
//7. bigint - it contains big number
//ex -
const n1 = 2344444444444444444444444n;
console.log(typeof n1);

const s1 = Symbol("name");
const s2 = Symbol("name");
console.log(s1 == s2); // false

//let , var and const are help us to declare the variable .

// 1. var - it is a functional scope

var name = "babita";
for (let i = 0; i < 5; i++) {
  console.log(name);
}
function greet(name) {
  console.log(`hi ${name} how are you?`);
}
greet(name);
//2. var is hoisted on the top - var can be hoisted on the top when we define value to a variable using var keyword
console.log(age);
var age;
//3. we can redeclare with the help of var keyword
var myName = "geeta";
var myName = "seeta";
console.log(myName);

// 2. let keyword

//1. let keyword is block scope.
let word = "distinct";

if (word) {
  let word = " siya";
  console.log(word); //siya
}
console.log(word); //distinct

//2.let can be hoisted but it will be in temporary dead zone
// console.log(a); // ReferenceError: Cannot access 'a' before initialization (TDZ active)
let a = 10; // TDZ ends here
console.log(a); // 10 (works)

//3. we can't redeclare the variable using let keyword

let bhagwan = "kanaji";
// let bhagwan = 'vishnu';// we can't redeclared a same variable in same scope

// 3. const -
//1. it is block scope
//2. it can't redeclare .
//3. it can hoisted but it will be in tdz .
//4. it can't change the value of variable after initialization.
// const n2 = 23;
// n2 = 45;
// console.log(n2);

//Non primitive -  object , array, function

//1. object - it is a collection of data which store in key - value pair format.
let obj = {
  name: "diya",
  age: 23,
};
console.log(typeof obj);

//2. array - it is a collection of data which store the data continuously and it has index .
let arr = [1, 2, 3];
console.log(typeof arr);

//3. function - it is a block of code which can be reuse many times in the code. it make the code manageable and reduce the code.

function welcome(name) {
  console.log(name);
}

console.log(typeof welcome);
