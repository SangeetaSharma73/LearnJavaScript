// Optional chaining (?.) is an advanced feature in JavaScript that allows you to safely access properties and call methods on an object without worrying about whether the property or method exists. It is particularly useful when working with nested objects or when accessing properties that may be null or undefined.

// To understand how optional chaining works, let's consider an example. Imagine we have a person object with a name property and an address property that contains another object with a city property and a street property:

const person = {
  name: "John",
  address: {
    // city: "New York",
    street: "123 Main St",
  },
};

// Now, let's say we want to access the city property of the address object. Without optional chaining, we would typically write:

console.log(person.address.city);

// This code works fine as long as the address object and the city property exist. However, if either of them is missing, an error will be thrown. This is where optional chaining comes in handy. By using the ?. operator, we can rewrite the code as follows:

const city = person?.address?.city; // New York

// With optional chaining, if the `address` object or the `city` property doesn't exist, the result will be `undefined` instead of throwing an error. This allows us to safely access properties without having to manually check for their existence.

// Optional chaining can be used with multiple levels of nesting as well. For example, if we have an object with multiple nested objects like `person.address.street.name`, we can access the `name` property using:

const name = person.address?.street?.name;

// If any of the intermediate properties (`address`, `street`) are missing, the result will be `undefined`.

// By using optional chaining, you can write more resilient code that gracefully handles situations where certain properties may be absent. It helps to prevent runtime errors and makes your code more robust when dealing with complex data structures.
