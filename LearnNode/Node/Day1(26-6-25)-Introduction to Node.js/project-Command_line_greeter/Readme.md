# Learnings

##🔹 Purpose of readline

- It's commonly used for:
- Reading user input from the terminal (CLI tools)
- Processing files line by line efficiently

## 🔧 How to Use 'readline' (Basic Example)

```js
const readline = require("readline");

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask a question
rl.question("What is your name? ", (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close(); // Close the interface
});
```

## 🧠 Concepts

1. Creating the Interface

```js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

2. rl.question(prompt, callback)
   Prompts the user with a message and invokes a callback with the input.

3. rl.on('line')
   Triggered when the user enters a line (presses Enter).

```js
rl.on("line", (input) => {
  console.log(`Received: ${input}`);
});
```

4. rl.close()
   Terminates the input stream interface.

## 📘 Advanced Usage: File Reading Line-by-Line

```js
const fs = require("fs");
const readline = require("readline");

const fileStream = fs.createReadStream("sample.txt");

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

rl.on("line", (line) => {
  console.log(`Line from file: ${line}`);
});
```
