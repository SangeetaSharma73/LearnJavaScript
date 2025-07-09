# 📅 Day 10: Express Router & Modularization

## ✅ Topics:

- Express Router

- Route modularization

- Folder structure

## 📚 Assignment:

Refactor your routes into separate files using Express Router

---

# 📅 Day 10: Serving Static Files & Templating

## ✅ Topics for Day 10:

1️⃣ Serving static files (CSS, images, JS)
2️⃣ The express.static middleware
3️⃣ Introduction to template engines (EJS, Pug basics)

## 1️⃣ Serving Static Files

Normally, you will have assets like:

- CSS files
- images
- client-side JS

Instead of creating routes for every image or CSS file, Express gives you a built-in middleware to expose a static folder.

### ✅ Example:

```js
app.use(express.static("public"));
```

👉 Then if you have:

```txt
public/
  style.css
  logo.png
```

→ you can load them directly:

```txt
http://localhost:5000/style.css
http://localhost:5000/logo.png
```

## 2️⃣ The express.static middleware

✅ express.static serves all files in a directory.
✅ It uses the file name as the route.
✅ You can even set a mount path:

```js
app.use("/static", express.static("public"));
```

then:

```bash
http://localhost:5000/static/logo.png

```

## 3️⃣ Templating with EJS (Intro)

while res.send() works for small HTML responses, for larger pages with dynamic data, you use a template engine.

EJS is the most popular.

- install:

```js
npm install ejs
```

- set the view engine:

```js
app.set("view engine", "ejs");
```

- put your ejs files in a views folder by default:

```js
views / index.ejs;
```

- render:

```js
res.render("index", { name: "siya" });
```

and in index.ejs:

```js
<h1>Hello <%= name %></h1>

```

---

# 📅 Day 10: Express Router & Modularization

## ✅ 1️⃣ What is Express Router?

- express.Router() lets you separate your routes in different files.
- you avoid putting your routes in app.js or index.js- it becomes clean and modular.
- It's like creating mini-Express apps and plugging them into the main app.

## ✅ 2️⃣ Why Modularize Routes?

Imagine your project grows:

```txt
routes/
  users.js
  products.js
  orders.js
```

You can organize like:

```js
const userRoutes = require("../routes/userRoutes");
app.use("/users", userRoutes);
```

Then in routes/users.js, define only user-specific logic.

## ✅ 3️⃣ Basic Folder Structure

```js
project/
│
├── app.js
├── routes/
│   ├── users.js
│   └── products.js
├── public/
├── views/
```

## ✅ 4️⃣ Example: Create a Modular Route

Let’s break it down step-by-step:
🔹 routes/users.js

```js
const express = require("express");
const router = express.Router();

// GET /users/
router.get("/", (req, res) => {
  res.send("List of users");
});

// GET /users/:id
router.get("/:id", (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});

module.exports = router;
```

🔹 app.js

```js
const express = require("express");
const app = express();
const PORT = 5000;

const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

### ✅ When you go to:

http://localhost:5000/users → you'll see: List of users

http://localhost:5000/users/10 → you'll see: User ID is 10

## ✅ 5️⃣ How it works

- router.get(...) handles sub-routes
- app.use("/users", router) mounts the route under /users
- This keeps app.js clean and lets teams work on routes independently
