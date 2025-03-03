// If the name of the key matches the name of the variable that's going into that key, you can get rid of the value and just use the variable name

const userData1 = (name, email) => ({
  name,
  email,
});


// In JavaScript, object shorthand is a fantastic feature that simplifies the creation of objects in your code. It allows you to write shorter and more readable syntax when you want to create an object with properties that have the same names as the variables you have defined.

// Let's imagine you are building a user management system, and you have variables for the name and email of a user. Traditionally, when creating an object, you would need to write something like `name: name` and `email: email` to assign the values of these variables to the corresponding properties of the object. However, with object shorthand, you can eliminate this redundancy and directly use the variable names as property names.

const name = 'John';
const email = 'john@example.com';

const userData = { name, email };

console.log(userData);
// Output: { name: 'John', email: 'john@example.com' }
