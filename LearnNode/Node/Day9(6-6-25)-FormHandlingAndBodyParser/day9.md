# 📅 Day 9: Handling Forms & Body Parser

## ✅ Topics:

- HTML forms
- body-parser / express.urlencoded
- req.body

## 📚 Assignment:

- Build a form with POST request
- Log submitted form data to console

---

# 📅 Day 9: Handling Forms & Body Parser

## 1️⃣ HTML Forms

👉 Forms are the traditional way of collecting user data (login,signup, etc.) and sending it to the server.

- HTML uses <form> with a **method** (usually POST) and an action (URL to submit to).
- The data is sent to the server, either as:
  - **application/x-www-form-urlencoded** (default for forms)
  - or **multipart/form-data** (for file uploads)

✅ Example HTML:

```js
<form action="/submit" method="POST">
  <input type="text" name="username" />
  <input type="password" name="password" />
  <button type="submit">Submit</button>
</form>
```

👉 This will send:

```txt
username=xxx&password=yyy
```

to the /submit route on your server.

## 2️⃣ body-parser / express.urlencoded

### 🔍 What is body-parser?

body-parser is a middleware module used in Node.js (commonly with Express) to parse incoming request bodies before your handlers receive them.

In HTTP, when a client sends a POST, PUT, or PATCH request, the body of that request can contain data (like JSON, form data, etc.). However, by default, Node.js does not automatically parse that body into a usable JavaScript object.

body-parser solves this by extracting the entire body portion of an incoming request stream and exposing it on req.body.

### 🧠 Why is it needed?

Node.js handles incoming HTTP requests as streams, which means the body of the request isn’t immediately available. Middleware like body-parser:

    - Reads the stream.
    - Buffers it
    - Parses it into a usable format.
    - Makes it accessible via req.body.

### 📦 Installation

In modern Express (v4.16.0+), you no longer need to install body-parser separately — it's built-in:

```bash
npm install express
```

But if using standalone:

```bash
npm install body-parser
```

## 🛠️ Usage

1. Basic setup

```js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
```

2. Modern Express alternative

```js
app.use(express.json()); // replaces bodyParser.json()
app.use(express.urlencoded({ extended: true })); // replaces bodyParser.urlencoded()
```

### 🧬 Types of Body Parsing

1. bodyParser.json()
   Parses JSON payloads.
   Example: { "name": "John", "age": 30 }

2. bodyParser.urlencoded({ extended: true })
   Parses URL-encoded data (like from HTML form submissions).

- extended: true uses the qs library (rich objects, nested).
- extended: false uses the querystring module (flat objects).
  Example:

```txt
name=John&hobbies=reading&hobbies=cycling
```

→ becomes:

```js
{
  name: 'John',
  hobbies: ['reading', 'cycling']
}
```

3. bodyParser.raw() and bodyParser.text()

- raw(): Buffers the body as a Buffer.
- text(): Parses the body as a plain string.
- Useful for webhooks or custom formats.

### ⚠️ Things to Keep in Mind

- It only parses the body of the request (not query parameters or headers).

- Works only with methods that can have a body: POST, PUT, PATCH (not GET).

- Should be placed before your route handlers.

- Must be configured before it can parse different content types.

🧪 Example with a POST route

```js
app.post("/submit", (req, res) => {
  console.log(req.body); // Parsed object
  res.send(`Received: ${JSON.stringify(req.body)}`);
});
```

If you send:

```json
{
  "username": "chatgpt",
  "email": "chatgpt@example.com"
}
```

You'll receive:

```css
received: {
  "username":"chatgpt","email": "chatgpt@example.com";
}
```

### 🔐 Security Considerations

Avoid accepting large payloads without limits (can be used for DoS attacks).

```js
app.use(express.json({ limit: "10kb" }));
```

Be cautious with extended: true — it can increase complexity and parsing time.

### 🧯 Deprecation Note

As of Express 4.16.0, you can safely use:

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

You only need to install body-parser if you need .raw() or .text() methods specifically.

- By default, Express does not know how to handle form POST data.
- You need middleware to parse it and attach it to req.body.

### ✅ Use:

```js
app.use(express.urlencoded({ extended: true }));
```

- this parses application/x-www-form-urlencoded form data and attaches it to req.body

### ✅ If you post JSON instead, use:

```js
app.use(express.json());
```

👉 since Express v4.16+, you do not need body-parser separately because express.urlencoded() is built-in.

## 3️⃣ req.body

- after enabling the middleware above, req.body will hold your form data
- so you can easily access:

```txt
req.body.username
req.body.password
```

That’s how you handle login, register, comments, etc.

## .

🚀 Quick Example

```js
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true })); // important!

app.post("/submit", (req, res) => {
  console.log(req.body); // { username: 'abc', password: '123' }
  res.send(`Welcome ${req.body.username}`);
});

app.listen(5000, () => console.log("Server running"));
```

- submit the form
- data shows up in req.body

### Recap

✅ Forms → submit data to your Express server
✅ Use express.urlencoded() to parse the form data
✅ Data ends up in req.body
