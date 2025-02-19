// undefined is js is a falsey value. A variable that has been declared but has not been assigned a value is said to have an "undefined" value. It essentially means the variable exists but lacks a meaningful value.

var x; // Declares the variable x but leaves it undefined
console.log(x); // This will output "undefined"


// Null represents the intentional absence of any object value. It is often used to explicitly indicate that a variable should have no value or that an object property is empty.
var y = null; // Assigns the value null to the variable y
console.log(y); // This will output "null"


// ## Coding Challenges

// Challenge 1:
// Write a JavaScript function that checks if a variable is undefined. The function should return `true` if the variable is undefined, and `false` otherwise.

// Challenge 2:
// Write a JavaScript function that checks if a variable is null. The function should return `true` if the variable is null, and `false` otherwise.

// Challenge 3:
// Write a JavaScript function that checks if a variable is either undefined or null. The function should return `true` if the variable is undefined or null, and `false` otherwise.