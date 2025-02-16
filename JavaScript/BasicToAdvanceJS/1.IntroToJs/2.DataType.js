// string :The first type of data is a String. This is used to store a sequence of characters used to represent text.
let st = "this";
let mySt = "Focus Locus";
let MySt = `Hi`;


// - Numbers

//     The second type of data we want to know is a Number, which is used to store any kind of numbers. We have already seen this type of data in the variables example. Numbers can store both Whole Numbers/Integers and Decimals.
//     Example:

var num = 100;
var dec = 100.001;

// - Booleans
// This data type has only two values true and false.

var boolValue = true;
var boolValue2 = false;

// ## Objects

// Objects in a programming language are like an object in a real-world. An object has properties. **An object is simply a group of related variables.**

// ways to access properties:

// - dot notation
// - bracket notation

let obj = { name: "vivek", age: 23, sirname: "sharma" };
console.log(obj.name);
console.log(obj["age"]);

// ## Functions : a Function is a set of statements that either perform a task or calculates and returns a value;

// A function is a set of statements in JS which is

// - Callable (executable)
// - It can take arguments
// - has a set of statements that can either perform **tasks** or calculations
// - return a value

function add() {
  console.log("hey this is add fun");
  return 5;
}

add = add();
console.log(add);

function enterEmotions(name, emotion) {
  let parkEmotionData = {
    name: name,
    emotion: emotion,
  };
  console.log(parkEmotionData);
}

enterEmotions("vivek", "good");
enterEmotions("mahesh", "bad");
enterEmotions("babita", "great");

// function declaration - done for you!
// function add(x,y) {
//   return x + y;
// }

// problem 1. comment the above code and declare the same function as "function expression"
var add2 = function(x,y) {
    return x+y;
}
console.log(add2(3,4));

// problem 2. comment the above code and declare the same function as "arrow function"

let add1 = (x,y) => {
  return x+y;
}
console.log(add1(4,3))


// nuller is expected to return boolean value null 
function nuller() {

}

console.log(nuller());

// declare a function called giveMaxNumber
// it takes in two numbers as arguments
// returns the greater of the two
// invoke the function with 3 & 7 and print the output in the console.

// hint: 
// if (num1 > num2) {
//   // do something
// } else {
//   // do something else
// }

// 1. function declaration
function giveMaxNumber(num1, num2) {
  let ans = 0
  if (num1 > num2) {
    ans = num1
  } else {
    ans = num2
  }
  return ans
}

// 2. function expression
let giveMaxNumber2 = function(a,b){
    let ans = 0
    if(a>b){
        ans = a
    }else{
        ans = b
    }
    return ans
}

// 3. arrow function
var giveMaxNumber1 = (a,b) =>{
    let ans = 0
    if (a > b) {
      ans = a;
    } else {
      ans = b;
    }
    return ans;
}

console.log(giveMaxNumber(3,7))

console.log(giveMaxNumber1(5, 7));
console.log(giveMaxNumber2(7, 7));


// ## Array : An array is used to store a list of objects

// declare an array called students
// students should contain 3 objects
// each object should contain two properties - name & age
// console log it

let arr1 = [
  { name: "babita",
    age: 22,
  },
  { name: "sangeeta", age: 22 },
  { name: "sarita", age: 22 },
];
console.log(arr1[0].name,arr1[0]["age"]);


// in other words, store data of 3 students and finally console.log it!

let arr = [1,"babita",true]

console.log(arr[arr.length-1]);
console.log(arr[2])

// Write a JavaScript program to create an array named colors that contains three strings: "red", "green", and "blue".
// Example Output: ["red", "green", "blue"]




//  Access the second item in the colors array and log it to the console.
// Example Input: ["red", "green", "blue"]
// Example Output: green



// Replace "blue" with "orange" in the colors array and print the updated array to the console.

arr = ["red", "green", "blue"];

console.log(arr[1]);
arr[2] = "orange"
console.log(arr)

// Checking the type of data: 

// Let's say you have some data but you don't know what type it
// is. You can use the **typeof()** inbuilt code to find the type of the data.
var name = "Masai School"
console.log(typeof(name)) //output => string


// declare a function called getArrayOfColors()
// the function should take in 3 colors
// return an array of 3 colors supplied to it


// Coding Challenge 1

// Write a function named `reverseString` that takes a string as an argument and returns the reverse of that string. Do not use any built-in reverse methods.

// ## Coding Challenge 2

// Write a function named `sumArray` that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

// ## Coding Challenge 3

// Write a function named `findMax` that takes an array of numbers as an argument and returns the largest number in the array.



