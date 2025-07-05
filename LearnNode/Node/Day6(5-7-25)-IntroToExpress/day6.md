# 📅 Day 6: Intro to Express.js

## ✅ Topics:

- What is Express?

- Setup Express server

- Routes and basic structure

## 📚 Assignment:

Setup an Express server with GET /, GET /about, GET /contact

---

# 📅 Day 6: Introduction to Express

## 1️⃣ What is Express?

- Express is a minimal and flexible framework built on top of node's http module.
- It makes it super easy to create APIs , serve HTML , handle routes and manage middleware .
- Instead of manually writing a huge if...else or switch to match routes (like raw Node) , Express gives you nice app.get , app.post and so on.
  👉 In short: Express is the standard web framework for Node.js.

## 2️⃣ Setup an Express Server

Let’s see how you do it step by step:

1. ✅ Step 1: Install

```bash
npm init -y
npm install express
```

👉 This pulls in Express via NPM.

2. ✅ Step 2: Create a server
   Create a file like app.js:

```js
const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
```

Explanation

- express() returns an app object
- app.listen() works just like server.listen() in native Node
  At this point, your server is live — though it does nothing yet.

## 3️⃣ Routes and Basic Structure

Express provides beautiful route methods:

- app.get('/path', handler)

- app.post('/path', handler)

- app.put('/path', handler)

- app.delete('/path', handler)
  Example:

```js
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1>");
});

app.get("/api", (req, res) => {
  res.json({
    name: "siya",
    age: 22,
  });
});
```

👉 What’s happening?

- You define a route with app.get()

- The handler receives (req, res)

- res.send() or res.json() automatically sets the headers for you, unlike raw Node

- Express does the route matching and dispatching for you

## 4️⃣ Express Project Structure

In a small project, you might do:

```txt
project/
  app.js
  package.json
```

In a larger app, you usually split things:

```txt
project/
  app.js
  routes/
    user.js
    product.js
  controllers/
    userController.js
  models/
    userModel.js
  package.json
```

### ✅ That separation makes it easy to grow your code base:

- routes/ → define the routes
- controllers/ → define the logic
- models/ → define database schemas

## 5️⃣ Putting it together: simple Express app

```js
const express = require("express");
const app = express();

const PORT = 8000;

// simple routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Express</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1>");
});

app.get("/api", (req, res) => {
  res.json({ name: "siya", age: 22 });
});

// start server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
```

### ✅ Advantages of Express:

- Cleaner syntax

- No need to manually parse the route

- Built-in helpers like res.json()

- Middleware support

## 📚 Day 6 Assignment

Tasks:

- Install Express

- Create a simple server on port 5000

- Make these routes:

  - / → send “Home Page”

  - /contact → send “Contact Page”

  - /api → send JSON with {status: "ok", code: 200}

- Use res.send() or res.json() as needed
