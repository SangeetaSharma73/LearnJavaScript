// A shallow copy creates a new object or array, but for any nested objects or arrays, it only copies references to these nested structures.


// Example of a Shallow Copy
// Let's look at a simple example:
// Original array with a nested array
const original = [1, 2, [3, 4]];

// Creating a shallow copy using the spread operator
const shallowCopy = original;

// Modifying the shallow copy
shallowCopy[0] = 99;        // Modifying a top-level element
shallowCopy[2][0] = 100;    // Modifying an element in the nested array

console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);

// Original: [99, 2, [100, 4]]
// Shallow Copy: [99, 2, [100, 4]]

// - Changing `shallowCopy[0]` only affects the copy because it's a top-level element.
// - Changing `shallowCopy[2][0]` affects both the original and the copy because the nested array is shared between them.


// What is a Deep Copy?

// A deep copy creates a new object or array and also creates copies of any nested objects or arrays, resulting in a completely independent copy.


const original1 = [1, 2, [3, 4]];

// Creating a deep copy manually
const deepCopy = [
  original1[0],
  original1[1],
  [...original1[2]], // Create a new array for the nested array
];

// Modifying the deep copy
deepCopy[0] = 99; // Modifying a top-level element
deepCopy[2][0] = 100; // Modifying an element in the nested array

console.log("Original:", original1);
console.log("Deep Copy:", deepCopy);
