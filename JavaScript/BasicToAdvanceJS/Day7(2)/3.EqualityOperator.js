// ### Equality Operator:

// The **equality** operator **==** lets you test if two values are equal or not. It accepts 2
// inputs of any type and outputs true if they are equal and false if they are not
// equal.
// **Example:**

// 1 == 1;
// 1 == 2;
// "Masai" == "Masai";
// "Masai" == "masai";

// Output: true;
// false;
// true;
// false;




// Inequality Operator:
// The inequality operator != performs the opposite function of the equality operator.
// It accepts 2 inputs of any type and outputs false if they are equal and true if they
// are not equal.
// Example:
// "Masai" != "Masai"
// "Masai" != "masai"

// Output:
// false
// true

// 1 != '1'
// 1 !== '1'

// Output:
// false
// true



// Write a function isEqual that takes three inputs and returns true if first two arguments are equal, and false otherwise. The third argument is a boolean value, if true, the equlity cheking is strict, else the checking is loose.

function isEqual(value1, value2, isStrict) {
  
}

// Test cases
console.log(isEqual(1, "1", false)); // Output: true
console.log(isEqual(1, "1", true)); // Output: false



// Coding Challenge 1:
// Write a function that takes two inputs and returns true if they are equal, and false otherwise.
function isEqual(value1, value2) {
  // your code here
}

// Test cases
console.log(isEqual(1, 1)); // Output: true
console.log(isEqual(1, 2)); // Output: false
console.log(isEqual("Masai", "Masai")); // Output: true
console.log(isEqual("Masai", "masai")); // Output: false



// ### Coding Challenge 2:

// Write a function that takes two inputs and returns true if they are not equal, and false if they are equal.

```jsx
function isNotEqual(value1, value2) {
  // your code here
}

// Test cases
console.log(isNotEqual("Masai", "Masai")); // Output: false
console.log(isNotEqual("Masai", "masai")); // Output: true
console.log(isNotEqual(1, '1')); // Output: false
console.log(isNotEqual(1, '1')); // Output: true

```


// Coding Challenge 3:
// Write a function that takes two inputs and returns true if their values and types are not equal, and false otherwise.
function isNotStrictEqual(value1, value2) {
  // your code here
}

// Test cases
console.log(isNotStrictEqual("Masai", "Masai")); // Output: false
console.log(isNotStrictEqual("Masai", "masai")); // Output: true
console.log(isNotStrictEqual(1, '1')); // Output: true
console.log(isNotStrictEqual(1, 1)); // Output: false