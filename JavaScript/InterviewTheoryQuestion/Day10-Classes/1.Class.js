/*
In JavaScript, a class is a blueprint for creating objects with shared properties and methods. Classes were introduced in ES6 (ECMAScript 2015) and provide a cleaner, more concise syntax for creating objects and dealing with inheritance.
*/
// Example: Defining a Class and Creating Objects
// Define a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Create objects (instances) from the class
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
/*
 Key Points:
- class keyword is used to define a class.
- The constructor method initializes object properties.
- Methods can be defined inside the class.
- Objects are created using the new keyword.
 */
