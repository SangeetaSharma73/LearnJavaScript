# 📅 Day 2: Node.js Fundamentals – Modules & File System

## 🎯 Goal:

- Learn how Node.js uses modules
- Work with built-in core modules like fs (file system)
- Understand how to organize code into files
- Practice reading and writing files

Node.js Core Modules (Common Examples)
Node ships with a set of built-in modules. You don’t need to install them with npm; you can use them right away with require().

## 1️⃣ fs (File System)

### 👉 Purpose:

Work with the file system — reading, writing, deleting files.

### ✅ Example pattern:

- Read a file
- Write to a file
- Append to a file

// fs.readFile(path, encoding, callback)

- readFile takes a file path and a callback
- gives you the data in the callback

// fs.writeFile(path, content, callback)

- writes content to a file
- overwrites if file exists

// fs.appendFile(path, content, callback)

- adds content to the end of a file

### Common use case:

- Reading a config file
- Saving user data
- Logging to a file

## 2️⃣ path

### 👉 Purpose:

Work with file or folder paths in a safe, cross-platform way.

### ✅ Example pattern:

- Join segments of a path

```js
const path = require("path");

const fullPath = path.join("folder", "subfolder", "file.txt");
console.log(fullPath);
// Output (cross-platform): folder/subfolder/file.txt
```

- Resolve relative vs absolute paths

```js
const absolutePath = path.resolve("folder", "file.txt");
console.log(absolutePath);
// Output: /Users/you/project/folder/file.txt (depends on where you run it)
```

- Get file extensions

```js
const fileExtension = path.extname("image.png");
console.log(fileExtension);
// Output: .png
```

```js
path.join(a, b, c);
path.resolve(a, b);
path.extname(file);
```

## Common use case:

- Building a path to save a file
- Determining if a file has .txt extension

## 3️⃣ os

### 👉 Purpose:

Get operating system–level info.

### ✅ Example pattern:

- Get platform name
- Check total memory
- See the current user info

```js
os.platform();
os.totalmem();
os.cpus();
```

### Common use case:

- Show stats on a dashboard
- Log environment for debugging

## 4️⃣ http

### 👉 Purpose:

Create an HTTP server without frameworks like Express.

### ✅ Example pattern:

- Create a server
- Listen on a port
- Handle a request/response

```js
const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
  // Log the request method and URL
  console.log(`Request received: ${req.method} ${req.url}`);

  // Set response headers
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send response
  res.end("Hello from the server!");
});

// Choose a port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
```

```js
http.createServer((req, res) => { ... })
res.writeHead()
res.end()
```

### Common use case:

- Build raw servers
- Learn the basics of HTTP
- Understand how frameworks work under the hood

### 🚀 How to use them

In any Node project you can do:

```js
const fs = require("fs");
const path = require("path");
const os = require("os");
const http = require("http");
```

These modules are always available, no npm install needed.
