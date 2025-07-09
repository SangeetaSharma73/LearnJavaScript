# 📅 Day 12: Express Static Files

## ✅ Topics:

- Serve static files (CSS, images)
- Use public/ folder

## 📚 Assignment:

Add custom CSS to your feedback app

---

# 📅 Day 12: Express Static Files

✅ Topics:

```txt
What are static files?

express.static() middleware

Serving CSS, JS, Images

Folder structure best practices

Real-world use case: rendering a styled EJS page
```

## ✅ 1️⃣ What are Static Files?

- files that don't change from request to request.
- Handled as-is by the server — no rendering needed (means that the file (usually a static file like an image, CSS, or JS) is sent directly to the client without being processed or modified by the server.)
- Examples:
  - css files
  - js files
  - fonts
  - images(png,jpg,svg)

## ✅ 2️⃣ Setting up express.static()

➤ Default practice: Put all assets inside /public folder.x

```bash
project/
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
```

➤ In app.js, use:

```js
app.use(express.static("public"));
```

✅ Now anything inside public/ is served directly.

## ✅ 3️⃣ Example Setup

🔹 app.js

```js
const express = require("express");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs"); // we can use hbs(handlebars template engine or pug template engine)
app.use(express.static("public")); // serve static files

app.get("/", (req, res) => {
  res.render("home", { username: "Siya" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

🔹 Folder Structure

```bash
project/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   └── logo.png
├── views/
│   └── home.ejs
├── app.js
```

🔹 public/css/style.css

```css
body {
  background-color: #f5f5f5;
  font-family: Arial;
}

h1 {
  color: darkblue;
}
```

🔹 views/home.ejs

```js
<!DOCTYPE html>
<html>
<head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <h1>Welcome, <%= username %>!</h1>
  <img src="/images/logo.png" alt="Site Logo" width="150" />
</body>
</html>
```

✅ href="/css/style.css" → Express maps this to public/css/style.css
✅ src="/images/logo.png" → Express maps this to public/images/logo.png

## ✅ 4️⃣ Best Practices

- only expose assets through /public
- Use caching (optional later) for performance
- You can rename /public to anything, like /static, just update in express.static()

```js
app.use(express.static("static"));
```
