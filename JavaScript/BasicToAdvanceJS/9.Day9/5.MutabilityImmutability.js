// # Mutability vs Immutability

// ## Definitions

// - **Mutability**: The property of a value that allows it to be changed in its **original memory** **location** after creation. This means that the value can be modified without creating a new instance.
// - **Immutability**: The characteristic of a value that cannot be altered in its original memory location after it is created. Any operation that seems to modify an immutable value results in the creation of a new value in a new memory location.

// ## JavaScript Data Types and Memory

// JavaScript categorizes data types into two main groups based on their mutability:

// ### Primitive Types (Immutable)

// - **Types**: String, Number, Boolean, Null, Undefined, Symbol, BigInt
// - **Memory**: Stored in stack memory
// - **Characteristics**: Fixed size, fast access, cannot be changed once created

// ### Reference Types (Mutable)

// - **Types**: Object, Array, Function
// - **Memory**: Stored in heap memory
// - **Characteristics**: Dynamic size, slower access compared to stack, can be changed after creation

// Memory Management in JavaScript

// JavaScript manages memory using two primary structures:

// 1. **Stack Memory**:
//     - Used for storing primitive values and references to objects in the heap.
//     - Operates on a Last In, First Out (LIFO) basis.
//     - Automatically managed by the JavaScript engine.
// 2. **Heap Memory**:
//     - Used for storing objects and functions.
//     - Provides a larger and more flexible memory area.
//     - Managed through garbage collection.

// In this system, primitive types are directly stored in the stack, while reference types are allocated in the heap, with the stack holding only a reference to their location.

// Immutability in Action: Primitive Types

// Example with Strings

let str = "Hello";
console.log(str); // Output: Hello

str[0] = "J"; // This operation is ignored
console.log(str); // Output: Hello

let newStr = str + " World"; // Creates a new string
console.log(newStr); // Output: Hello World

// In this example, attempts to change the string str fail because strings are immutable. The operation str + " World" creates a new string in a new memory location.


let str1 = " Hello, World! ";
let uppercaseStr = str1.toUpperCase();
console.log(str1 === uppercaseStr); // false

let trimmedStr = str1.trim();
console.log(str1 === trimmedStr); // false

let replacedStr = str1.replace("World", "JavaScript");
console.log(str1=== replacedStr); // false




// ## Mutability in Action: Reference Types

// ### Example with Objects

let person = {
    name: "Alice",
    age: 30
};

person.age = 31; // Modifies the original object
person.city = "New York"; // Adds a new property
let p1=person;
console.log(person===p1); // Output: { name: "Alice", age: 31, city: "New York" }

// Here, the person object is mutable. Modifications directly affect the original object stored in heap memory.


// Memory Behavior: Primitives vs Objects
// Primitives (Stack Memory)

let a = 5;
let b = a; // 'b' gets a copy of the value 5
a = 10; // 'a' is now 10, 'b' remains 5
console.log(a, b); // Output: 10 5


// Objects (Heap Memory)

let obj1 = { x: 1 };
let obj2 = obj1; // obj2 references the same object
obj1.x = 2; // Changes the object in heap memory
console.log(obj1.x, obj2.x); // Output: 2 2


// This illustrates how primitive types are copied by value, while reference types are copied by reference.

// ## Implications and Best Practices

// 1. **Performance Considerations**:
//     - Immutable types can be memory-intensive due to the creation of new values.
//     - For large-scale string manipulations, consider using arrays or libraries to optimize memory usage.
// 2. **Predictability in Code**:
//     - Immutability leads to more predictable code, reducing unexpected changes.
//     - Be cautious with mutable objects passed as function arguments to avoid unintended modifications.
// 3. **Copying Objects**:
//     - Use `Object.assign()` or the spread operator for shallow copying.
//     - For deep copying, consider using JSON methods or libraries.

// Shallow copy
let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };

// Deep copy
let deepCopy = JSON.parse(JSON.stringify(original));


// 1. **Immutable Update Patterns**:
//     - In state management (e.g., React), use immutable update patterns to create new objects instead of modifying existing ones.


let state = { count: 0, user: { name: "Alice" } };
let newState = {
  ...state,
  count: state.count + 1,
  user: { ...state.user, name: "Bob" },
};
