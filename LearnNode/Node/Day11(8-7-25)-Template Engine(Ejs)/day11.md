# 📅 Day 11: Template Engines (EJS)

## ✅ Topics:

- Install EJS
- Layouts & Partials
- Dynamic content rendering

## 📚 Assignment:

Create a blog homepage with EJS rendering posts

---

# 📅 Day 11: Template Engines (EJS)

## ✅ Topics:

1. Installing and configuring EJS
2. Rendering dynamic content
3. Using layouts & partials (reusable views)
4. Structuring your views folder (industry standard)

## 🧠 What is EJS?

- EJS stands for Embedded JavaScript

- Allows you to write HTML + JS logic together

- Used to render dynamic content on the server side

- Similar to PHP, JSP, ASP, etc.

## ✅ 1️⃣ Installing and Setting Up EJS

Step 1: Install EJS

```bash
npm install ejs
```

Step 2: Configure Express to Use EJS
In your app.js:

```js
app.set("view engine", "ejs");
```

🔍 This tells Express to look for .ejs files inside a views/ folder (by default).

## ✅ 2️⃣ Rendering Dynamic Content

```js
project/
├── views/
│   ├── index.ejs
│   ├── about.ejs
├── app.js
```

app.js

```js
const express = require("express");
const app = express();
const PORT = 8080;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { username: "Siya", city: "pune" });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
```

views/index.ejs

```js
<!DOCTYPE html>
<html>
<head>
  <title>Home</title>
</head>
<body>
  <h1>Hello <%= username %>!</h1>
  <p>You are from <%= city %>.</p>
</body>
</html>
```

✅ res.render("index", {...}) sends data to the template
✅ <%= %> renders that value
✅ EJS supports full JavaScript logic

## ✅ 3️⃣ Partials & Layouts

🔁 Partials = reusable components like headers, footers
Create a views/partials/ folder:

```js
views/
├── partials/
│   ├── header.ejs
│   ├── footer.ejs
```

partials/header.ejs

```js
<header>
  <h1>My Site</h1>
  <nav>
    <a href="/">Home</a> | <a href="/about">About</a>
  </nav>
</header>
```

partials/footer.ejs

```js
<footer>
  <p>&copy; 2025 My Website</p>
</footer>
```

Use in a page:

```js
<%- include("partials/header") %>

<h2>Welcome to the Home Page</h2>

<%- include("partials/footer") %>
```

✅ <%- include(...) %> is used to embed other .ejs files
✅ This is how you achieve layout reuse without repeating code

## ✅ 4️⃣ Best Practices & Folder Structure

Industry Folder Setup:

```js
views/
├── partials/
│   ├── header.ejs
│   └── footer.ejs
├── pages/
│   ├── home.ejs
│   └── about.ejs
```

Rendering Example:

```js
res.render("pages/home", { title: "Home", username: "Siya" });
```

## Pug And Handlebars Template Engine

Pug and Handlebars are both template engines used with Node.js (often in Express.js apps) to render dynamic HTML pages on the server side.

### 🔧 What is a Template Engine?

- A template engine lets you:

- Embed dynamic data into HTML.

- Avoid manually writing lots of HTML.

- Use logic like loops and conditions inside templates.

## 🐶 Pug (formerly Jade)

Pug is a whitespace-sensitive templating language that uses indentation instead of traditional HTML tags.

🔹 Features:

- Clean, minimal syntax.

- Shorter than regular HTML.

- Good for small, quick-to-deploy projects.

🔹 Example:
Pug template:

```pug
html
  head
    title= title

  body
    h1 Hello #{name}
```

Rendered with:

```js
res.render("index", { title: "Welcome", name: "Alice" });
```

Output:

```html
<html>
  <head>
    <title>Welcome</title>
  </head>
  <body>
    <h1>Hello Alice</h1>
  </body>
</html>
```

## 🧰 Handlebars (hbs)

Handlebars is a logic-less templating engine that looks more like standard HTML with {{expression}} syntax.

### 🔹 Features:

- Easy to learn.
- Keeps your HTML structure intact.
- Better suited for designers who are used to HTML.

###🔹 Example:
Handlebars template:

```html
<html>
  <head>
    <title>{{title}}</title>
  </head>
  <body>
    <h1>Hello {{name}}</h1>
  </body>
</html>
```

Rendered with:

```js
res.render("index", { title: "Welcome", name: "Alice" });
```

### 🛠️ Using with Express

1. Pug Setup:

```bash
npm install pug
```

```js
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", { title: "Home", name: "John" });
});
```

2. Handlebars Setup:

```bash
npm install hbs
```

```js
app.set("view engine", "hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", { title: "Home", name: "John" });
});
```
