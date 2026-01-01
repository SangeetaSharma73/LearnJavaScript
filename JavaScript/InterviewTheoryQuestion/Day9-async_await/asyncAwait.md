# Understanding `async` and `await` in JavaScript

## What are `async` and `await`?

- `async` and `await` are keywords in JavaScript that make working with Promises easier and code more readable.
- They allow you to write asynchronous code that looks and behaves like synchronous code.

---

## The `async` Keyword

- Use `async` before a function to make it return a Promise automatically.
- Any value returned from an `async` function is wrapped in a Promise.

```js
async function greet() {
  return "Hello!";
}

greet().then(msg => console.log(msg)); // Output: Hello!

The await Keyword
Use await inside an async function to pause execution until a Promise resolves.
It makes your code wait for the result, then continues.

async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  console.log(data);
}

Example: Using async and await Together

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('Start');
  await delay(1000); // Waits 1 second
  console.log('1 second later');
}

main();

Key Points
Only use await inside async functions.
await pauses the function until the Promise resolves.
Makes asynchronous code easier to read and maintain.
```
