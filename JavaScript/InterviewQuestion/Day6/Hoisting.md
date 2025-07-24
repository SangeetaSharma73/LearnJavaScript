# Hoisting in JavaScript

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during compilation. This means you can use variables and functions before you declare them in your code.

## How Hoisting Works

### Function Hoisting

Function declarations are fully hoisted. You can call them before their definition:

```javascript
sayHello(); // Works!

function sayHello() {
  console.log("Hello!");
}
```

### Variable Hoisting

Variables declared with `var` are hoisted, but only their declaration, not their initialization:

```javascript
console.log(a); // undefined
var a = 5;
console.log(a); // 5
```

Variables declared with `let` and `const` are hoisted but not initialized. Accessing them before declaration causes a ReferenceError (Temporal Dead Zone):

```javascript
console.log(b); // ReferenceError
let b = 10;
```

## Summary

- **Function declarations** are hoisted completely.
- **`var` variables** are hoisted and initialized as `undefined`.
- **`let` and `const` variables** are hoisted but not initialized (Temporal Dead Zone).

Hoisting helps explain why you can use some identifiers before their declaration, but it can also lead to bugs
