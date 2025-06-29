# 📅 Day 3: Asynchronous Programming in Node.js

## ✅ Topics

### 1️⃣ Callbacks

- Node uses callbacks to handle asynchronous tasks.
- A callback is a function passed as an argument, called after the async task finishes.
- Pattern: (err, data) => { }

### 2️⃣ Promises

- Modern alternative to callbacks

- Avoids callback hell

- promise.then().catch() chains

- Can represent success or failure

### 3️⃣ Async/Await

- Built on top of Promises

- Syntactic sugar to write async code like synchronous code

- Uses async function keyword

- Uses await to pause execution until the promise resolves

### 4️⃣ Error Handling

- In callbacks: check for err first

- In Promises: .catch()

- In async/await: try/catch

## 📚 Day 3 Assignment

### ✅ Assignment

```txt
Convert a file reading example from a callback style to Promises, and then to Async/Await.
```

---

## 1️⃣ Callbacks in Node.js

### ✅ What is a callback?

- A callback is a function you pass to another function, so that function can call it later after it finishes its work.

- In Node, most I/O operations (like reading a file) are asynchronous, meaning they don’t block the program while they run.

- So you pass a callback to say “when you’re done, call this function with the result.”

### ✅ Node callback signature

The common Node pattern for callbacks is:

```js
function(err, data)
```

- If there was an error, err will be non-null (for example, an error object)
- If no error, err will be null and you get your result in data
- This is sometimes called the error-first callback style.

### ✅ Why use callbacks?

- **Non-blocking**: lets Node handle many operations in parallel

- **Performance**: doesn’t freeze the server while waiting for I/O

- **Simplicity**: allows you to do something after the task completes

### ✅ Example Pattern (no code solution)

Imagine you want to read a file:

- 1️⃣ you call a file-read function
- 2️⃣ you pass a callback function
- 3️⃣ once the reading finishes, your callback gets called with either:
  - err if something failed
  - data if it succeeded

Think of it like this, in English:

```txt
Hey Node, please read file.txt. When you’re done, run this function with the results.
```

### ✅ Callback Hell

One problem with callbacks is nesting.
If you have multiple asynchronous tasks depending on each other, you get code like this:

```js
task1(() => {
  task2(() => {
    task3(() => {
      // so deeply nested
    });
  });
});
```

That’s hard to read and maintain, so developers later introduced Promises and Async/Await to fix this.

### ✅ Summary of Callbacks

- Function you pass as an argument
- Called after an async task finishes
- Follows (err, data) style
- Can get messy with nested operations (callback hell)

---

## 2️⃣ Promises in Node.js

### ✅ What is a Promise?

- A Promise is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation.

Think of it like this:

“I promise I’ll give you a result in the future, either success or failure.”

### ✅ Promise states

A Promise can be in one of three states:

- Pending — still working
- Fulfilled — completed successfully (resolved)
- Rejected — failed with an error

### ✅ Why use Promises?

- Cleaner syntax than deeply nested callbacks
- Chaining: you can run multiple async steps in sequence
- Easier to read and reason about
- Great for complex workflows

### ✅ then() / catch() pattern

You handle promises using:

- .then(successHandler) to deal with a fulfilled value
- .catch(errorHandler) to handle rejections

You can chain .then() calls together

In English terms:

“When this promise finishes successfully, do this next thing.
If there’s an error, catch it here.”

### ✅ Example (conceptual)

Let’s say you read a file with a promise:

1. 1️⃣ the file-read returns a promise
2. 2️⃣ you attach a .then() to get the data
3. 3️⃣ you attach a .catch() to handle any errors

### ✅ Promise Chaining

One major advantage is you can chain:

```js
promise1
  .then((result1) => {
    // do something with result1
    return promise2;
  })
  .then((result2) => {
    // do something with result2
  })
  .catch((err) => {
    // handle any error from promise1 or promise2
  });
```

This makes code flat, no more “callback pyramid of doom.”

### ✅ Summary of Promises

- Wrap async tasks in an object
- Represent future result (success or failure)
- Replace deeply nested callbacks
- .then() handles success
- .catch() handles failure
- Can be chained together for sequential steps

---

## 3️⃣ Async/Await in Node.js

### ✅ What is Async/Await?

- Async/Await is a feature built on top of Promises.

- It lets you write asynchronous code in a way that looks synchronous.

- Introduced in ES2017 (Node 7.6+).

- In English, think of it like:

```
“Pause here until this promise finishes, then continue.”
```

✅ How it works?

- You mark a function as async.

- Inside that function, you can use await to wait for a promise to resolve.

- When you await a promise, the function pauses until the promise finishes.

### ✅ Why is it great?

- Much more readable
- Eliminates chaining .then() and avoids - callback hell
- Easier to add error handling with try/catch
- Feels more like “normal” sequential code

### ✅ Pattern

Here’s the common async/await pattern explained (no code yet):

```js
async function myFunc() {
  try {
    result = await somePromise;
    // use result
  } catch (err) {
    // handle error
  }
}
```

### Key rules:

- ✅ You must put await inside an async function
- ✅ Use try/catch to handle errors, just like synchronous code
- ✅ Await only works with Promises

### ✅ Analogy

If callbacks are callbacks to be run later, and Promises are futures you can chain, then async/await is:

“Let me pause here until I get the result, then keep going as if nothing happened.”

### ✅ Summary of Async/Await

- Cleaner syntax on top of Promises

- Uses async to mark functions

- Uses await to pause for promises

- Errors handled with try/catch

- Best for sequential async tasks
