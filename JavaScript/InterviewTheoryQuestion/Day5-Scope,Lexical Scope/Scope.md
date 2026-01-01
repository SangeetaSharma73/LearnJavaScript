# 🔍 What is Scope in JavaScript?

Scope determines the accessibility or visibility of variables in different parts of your code.

---

## ✅ 1. Global Scope

A variable declared outside of any function or block is in the global scope. It can be accessed from anywhere in the code (inside functions, blocks, etc.).

**Example:**

```javascript
let globalVar = "I'm global";

function sayHello() {
  console.log(globalVar); // ✅ Accessible here
}

sayHello();
console.log(globalVar); // ✅ Also accessible here
```

**Notes:**

- Be cautious when using global variables—they stay in memory throughout the lifetime of your app.
- Avoid polluting the global scope when possible.

---

## ✅ 2. Local Scope (Function Scope)

A variable declared inside a function using `var`, `let`, or `const` is local to that function. You cannot access it from outside the function.

**Example:**

```javascript
function greet() {
  let message = "Hello!";
  console.log(message); // ✅ Works
}

greet();
console.log(message); // ❌ Error: message is not defined
```

**Notes:**

- This scope is created when the function is called, and destroyed after the function execution completes.
- Local scope helps in encapsulation and modular code.

---

## ✅ 3. Block Scope

A block is any code inside `{}`—like in `if`, `for`, or `{}` by itself.

Variables declared with `let` or `const` inside a block are block-scoped: only available within that `{}`.

⚠️ `var` is not block-scoped; it is function-scoped!

**Example:**

```javascript
{
  let blockVar = "Inside block";
  console.log(blockVar); // ✅ Accessible inside
}
console.log(blockVar); // ❌ Error: blockVar is not defined
```

🚫 `var` inside a block:

```javascript
{
  var test = "Not block scoped";
}
console.log(test); // ✅ Accessible, because `var` ignores block
```

---

## ✅ Summary Table

| Type   | Accessible From            | Declared With                           |
| ------ | -------------------------- | --------------------------------------- |
| Global | Anywhere in the code       | var, let, const (outside all functions) |
| Local  | Only inside the function   | var, let, const (inside function)       |
| Block  | Only inside the `{}` block | let, const only (not var)               |

---

## ✅ Real-World Analogy

Think of scope like rooms in a house:

- **Global Scope** = The entire house. Anyone (function) can access things here.
- **Local Scope** = A private room. Only the person in that room (function) can see its contents.
- **Block Scope** = A locked cabinet inside a room (block). Only the code inside that cabinet can access what's inside.
