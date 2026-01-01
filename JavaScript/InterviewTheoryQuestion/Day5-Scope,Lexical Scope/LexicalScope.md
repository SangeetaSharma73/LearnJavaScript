# 🔍 What is Lexical Scope?

Lexical Scope means that a function’s scope is determined by its location in the source code. In other words, functions can access variables from the scope in which they were defined, not where they are called.

---

## ✅ Key Point

JavaScript uses **lexical scoping**, not dynamic scoping.

This means the structure of your code (the nesting of blocks and functions) determines what variables are accessible.

---

## 🧠 Example: Lexical Scope in Action

```javascript
function outer() {
  let outerVar = "I'm from outer";

  function inner() {
    console.log(outerVar); // ✅ inner can access outerVar
  }

  inner();
}

outer();
```

**What’s happening?**

- The function `inner()` is defined inside `outer()`.
- It lexically inherits access to all variables in `outer()`'s scope.
- So `outerVar` is accessible inside `inner()`.
- Even if `inner()` was called elsewhere, it would still retain access to `outerVar` because of where it was defined, not where it's called.

---

## ❌ Counter-Example: Dynamic Scope (Not JavaScript)

If JS had dynamic scoping (which it doesn’t), it would behave like this (just conceptual):

```javascript
let name = "global";

function sayName() {
  console.log(name);
}

function run() {
  let name = "local";
  sayName(); // Still logs "global" in JS, because sayName was defined in global scope
}

run();
```

**Output:**

```
global
```

Because `sayName()` was defined in the global scope, it doesn't care that `run()` has a `name` variable. That's Lexical Scope.

---

## ✅ Lexical Scope Visualized (Scope Chain)

When a function executes, JavaScript looks for variables in this order:

1. Current Function Scope
2. Parent Scope
3. Global Scope

```javascript
let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c); // ✅ Has access to all variables in its lexical scope
  }

  inner();
}

outer();
```

**Output:**

```
10 20 30
```

---

## 🚀 Lexical Scope + Closures

Lexical scope enables closures in JavaScript.

```javascript
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer(); // `inner` is returned
counter(); // 1
counter(); // 2
```

Here, `inner()` has lexical access to `count`, even after `outer()` has finished executing. That's closure powered by lexical scope.

---

## ✅ Summary

| Concept          | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| Lexical Scope    | Variables are accessible based on where the function was written, not called    |
| Scope Chain      | JS looks up the variable through nested scopes                                  |
| Enables Closures | Functions retain access to their lexical scope even after the outer function is |

const boundGreet = greet.bind(student2, 14);

boundGreet(); // Hello Diya, Age: 14
