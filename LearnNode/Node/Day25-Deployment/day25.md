# 📅 Day 25: Deployment

## ✅ Topics:

- Deploy with Render, Vercel, Railway, or Heroku
- Setup .env, CORS, and build scripts

## 📚 Assignment:

Deploy your Book API

## app.js

```js
// app.js - Production-ready Express app for Book API with CORS, .env, and deployment best practices

require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Book = require("./models/Book");

const app = express();

// Enable CORS using best practices
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*", // Set allowed origins (in production, set your frontend URL)
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies/credentials if needed
  })
);

app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB using credentials from .env
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Example Book model routes

// CREATE a Book
app.post("/api/books", async (req, res) => {
  try {
    const { title, author, year, category } = req.body;
    if (!title || !author) {
      return res.status(400).json({ error: "Title and author are required." });
    }
    const book = new Book({ title, author, year, category });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

// READ all Books (with optional pagination, search, filter)
app.get("/api/books", async (req, res) => {
  try {
    const { search, category, page = 1, limit = 10 } = req.query;
    const query = {};
    if (search) query.title = { $regex: search, $options: "i" };
    if (category) query.category = category;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const total = await Book.countDocuments(query);
    const books = await Book.find(query)
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum);
    res.json({
      total,
      page: pageNum,
      pageSize: books.length,
      totalPages: Math.ceil(total / limitNum),
      books,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

// READ a Book by ID
app.get("/api/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found." });
    res.json(book);
  } catch {
    res.status(404).json({ error: "Book not found." });
  }
});

// UPDATE a Book by ID
app.put("/api/books/:id", async (req, res) => {
  try {
    const { title, author, year, category } = req.body;
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, year, category },
      { new: true, runValidators: true }
    );
    if (!book) return res.status(404).json({ error: "Book not found." });
    res.json(book);
  } catch {
    res.status(404).json({ error: "Book not found." });
  }
});

// DELETE a Book by ID
app.delete("/api/books/:id", async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: "Book not found." });
    res.status(204).end();
  } catch {
    res.status(404).json({ error: "Book not found." });
  }
});

// Default Home route
app.get("/", (req, res) => {
  res.send("Book API is running 🚀");
});

// Start server on dynamic port for deployment
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app; // For testing
```

## models/Book.js

```js
// models/Book.js - Book model for MongoDB using Mongoose

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  year: { type: Number, min: 0 },
  category: { type: String, trim: true },
});

module.exports = mongoose.model("Book", bookSchema);
```

# 📚 Book API Deployment — Node.js Best Practices

This guide shows how to prepare your Book API for deployment on platforms like **Render**, **Vercel**, **Railway**, or **Heroku** using Node.js and Express.

---

## 🌍 Key Best Practices

- **.env file** for secrets and configuration (never hard-code secrets)
- **CORS** setup for safe cross-origin requests
- **Build scripts** for easy deploys
- **Port configuration** with `process.env.PORT` for cloud compatibility
- **Error handling** and clear API responses

---

## 📁 Project Structure

```
project/
  ├── app.js             # Express app with best practices
  ├── models/
  │     └── Book.js      # Book schema
  ├── .env               # Environment variables (not in git)
  ├── package.json
  └── README.md
```

---

## 🛠️ Example .env

```
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
PORT=10000
CORS_ORIGIN=https://your-frontend-domain.com
```

- **Never commit `.env` to your repo!**
- Set these as environment variables in your deployment platform’s dashboard.

---

## 🚦 Deployment Steps

### 1. **Push your code to GitHub**

### 2. **Connect your repository to your deployment platform**

- **Render**: https://render.com/docs/deploy-node-express-app
- **Vercel**: https://vercel.com/docs/concepts/functions/serverless-functions/node
- **Railway**: https://docs.railway.app/guides/node
- **Heroku**: https://devcenter.heroku.com/articles/deploying-nodejs

### 3. **Configure environment variables**

- Add `MONGO_URI`, `PORT`, `CORS_ORIGIN` in the platform dashboard.

### 4. **Automatic build & deploy**

- Most platforms run `npm install` and `npm run build` (if present).
- For pure APIs, you may not need a build step, but always have a start script in `package.json`:

```json
"scripts": {
  "start": "node app.js"
}
```

---

## 🚀 CORS & Production Tips

- Allow only your frontend’s domain in `CORS_ORIGIN` for security.
- Use the platform’s environment variable management for secrets.
- Always listen on `process.env.PORT`.
- Use `process.exit(1)` in DB connection errors so your platform can restart the app if needed.

---

## 🧪 Health Check

- Most platforms expect a route like `/` to return 200 OK.
- Example: `GET /` returns “Book API is running 🚀”.

---

## 🔒 Security

- Never expose secrets or database URLs in your codebase.
- Consider rate limiting and logging for production.
- Use HTTPS on your deployed domain.

---

## 🏆 Your Book API is now ready for cloud deployment!

---
