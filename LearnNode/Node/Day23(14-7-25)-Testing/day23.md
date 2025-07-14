# 📅 Day 23: Testing Node.js

## ✅ Topics:

1. Jest
2. Supertest
3. Unit vs Integration testing

## 📚 Assignment:

Write tests for Book CRUD API

# 📚 Book CRUD API — Node.js Testing Best Practices

This project demonstrates **industry-standard testing** for a Node.js Book CRUD API using **Jest** (test runner & assertions) and **Supertest** (HTTP assertions).

---

## 🛠 Stack

- **Node.js** & **Express** — REST API
- **Mongoose** — MongoDB ODM(object data mapping)
- **Jest** — Testing framework
- **Supertest** — HTTP assertions (integration testing)
- **dotenv** — Environment management

---

## 🚦 Unit vs Integration Testing

- **Unit tests** check a single function in isolation.
- **Integration tests** check how components work together (e.g., HTTP endpoints + DB).

This repo focuses on **integration testing** the API using Jest & Supertest. You can adapt the same patterns for unit tests!

---

## 📁 File Structure

```
project/
  ├── app.js               # Express app and Book endpoints
  ├── models/
  │     └── Book.js        # Book Mongoose Schema
  ├── tests/
  │     └── book.test.js   # Jest + Supertest tests for Book API
  ├── .env.test            # Test DB config
  ├── package.json
  └── README.md
```

---

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure MongoDB for testing**

   - Create `.env.test`:
     ```
     MONGO_URI_TEST=mongodb://localhost:27017/book_api_test
     ```

3. **Run tests**
   ```bash
   npm test
   ```

---

## 🧪 Example Book Model (`models/Book.js`)

```js
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  year: { type: Number, min: 0 },
});

module.exports = mongoose.model("Book", bookSchema);
```

---

## 🚥 Example Express API (`app.js`)

```js
const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/Book");

const app = express();
app.use(express.json());

// Create Book
app.post("/api/books", async (req, res) => {
  try {
    // Validate input
    const { title, author, year } = req.body;
    if (!title || !author) {
      return res.status(400).json({ error: "Title and author required." });
    }
    // Create and save book
    const book = new Book({ title, author, year });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

// Get all Books
app.get("/api/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Get single Book
app.get("/api/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found." });
    res.json(book);
  } catch {
    res.status(404).json({ error: "Book not found." });
  }
});

// Update Book
app.put("/api/books/:id", async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, year },
      { new: true, runValidators: true }
    );
    if (!book) return res.status(404).json({ error: "Book not found." });
    res.json(book);
  } catch {
    res.status(404).json({ error: "Book not found." });
  }
});

// Delete Book
app.delete("/api/books/:id", async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: "Book not found." });
    res.status(204).end();
  } catch {
    res.status(404).json({ error: "Book not found." });
  }
});

module.exports = app;
```

---

## 🧑‍🔬 Example Tests (`tests/book.test.js`)

```js
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const Book = require("../models/Book");

// Integration tests for Book CRUD API
describe("Book CRUD API Integration Tests", () => {
  // Before all tests, connect to test DB
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI_TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // Clean up DB after each test
  afterEach(async () => {
    await Book.deleteMany();
  });

  // Disconnect after all tests
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // CREATE
  it("should create a new book", async () => {
    const newBook = { title: "Test Book", author: "Jane Doe", year: 2020 };
    const res = await request(app).post("/api/books").send(newBook);
    // 201 Created
    expect(res.statusCode).toBe(201);
    // Response has _id property
    expect(res.body).toHaveProperty("_id");
    // Title matches
    expect(res.body.title).toBe(newBook.title);
  });

  it("should fail to create book with missing title", async () => {
    const res = await request(app)
      .post("/api/books")
      .send({ author: "Jane Doe" });
    // 400 Bad Request
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  // READ ALL
  it("should get all books", async () => {
    await Book.create([
      { title: "Book1", author: "A", year: 2001 },
      { title: "Book2", author: "B", year: 2002 },
    ]);
    const res = await request(app).get("/api/books");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(2);
  });

  // READ ONE
  it("should get a single book by ID", async () => {
    const book = await Book.create({ title: "Book1", author: "A", year: 2001 });
    const res = await request(app).get(`/api/books/${book._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(book.title);
  });

  it("should return 404 for non-existing book", async () => {
    const fakeId = new mongoose.Types.ObjectId();
    const res = await request(app).get(`/api/books/${fakeId}`);
    expect(res.statusCode).toBe(404);
  });

  // UPDATE
  it("should update a book", async () => {
    const book = await Book.create({ title: "Old", author: "B", year: 2000 });
    const res = await request(app)
      .put(`/api/books/${book._id}`)
      .send({ title: "New Title" });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("New Title");
  });

  it("should return 404 for updating non-existing book", async () => {
    const fakeId = new mongoose.Types.ObjectId();
    const res = await request(app)
      .put(`/api/books/${fakeId}`)
      .send({ title: "Anything" });
    expect(res.statusCode).toBe(404);
  });

  // DELETE
  it("should delete a book", async () => {
    const book = await Book.create({
      title: "Book To Delete",
      author: "C",
      year: 2005,
    });
    const res = await request(app).delete(`/api/books/${book._id}`);
    expect(res.statusCode).toBe(204);
    // Book should be gone
    const dbBook = await Book.findById(book._id);
    expect(dbBook).toBeNull();
  });

  it("should return 404 for deleting non-existing book", async () => {
    const fakeId = new mongoose.Types.ObjectId();
    const res = await request(app).delete(`/api/books/${fakeId}`);
    expect(res.statusCode).toBe(404);
  });
});
```

---

## 🏆 Best Practices Illustrated

- **Test database isolation** with `.env.test`
- **Clear up DB after each test**
- **Proper HTTP status codes**
- **Validation checks**
- **Comprehensive assertions**
- **Descriptive test names**
- **Comments throughout for clarity**

---

## 📝 Extend This

- Add unit tests (mock DB and test controller logic)
- Handle edge cases (invalid ObjectId, empty body, etc)
- Use factories and helper files for repeated setup

---

## app.js

```js
// app.js - Express app for Book CRUD API with best practices

const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/Book");

const app = express();
app.use(express.json());

// CREATE Book
app.post("/api/books", async (req, res) => {
  try {
    // Get data from request body
    const { title, author, year } = req.body;
    // Basic validation
    if (!title || !author) {
      return res.status(400).json({ error: "Title and author required." });
    }
    // Create new book instance
    const book = new Book({ title, author, year });
    await book.save(); // Save to MongoDB
    res.status(201).json(book); // Respond with created book
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

// READ all Books
app.get("/api/books", async (req, res) => {
  const books = await Book.find(); // Get all books
  res.json(books); // Return array
});

// READ one Book by ID
app.get("/api/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id); // Find by MongoDB ObjectId
    if (!book) return res.status(404).json({ error: "Book not found." });
    res.json(book);
  } catch {
    res.status(404).json({ error: "Book not found." });
  }
});

// UPDATE Book by ID
app.put("/api/books/:id", async (req, res) => {
  try {
    const { title, author, year } = req.body;
    // Find by ID and update
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, year },
      { new: true, runValidators: true }
    );
    if (!book) return res.status(404).json({ error: "Book not found." });
    res.json(book);
  } catch {
    res.status(404).json({ error: "Book not found." });
  }
});

// DELETE Book by ID
app.delete("/api/books/:id", async (req, res) => {
  try {
    // Find by ID and remove
    const result = await Book.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: "Book not found." });
    res.status(204).end(); // No Content
  } catch {
    res.status(404).json({ error: "Book not found." });
  }
});

module.exports = app;
```

## book model - Book.js

```js
// models/Book.js - Book model for MongoDB using Mongoose

const mongoose = require("mongoose");

// Define schema: Book has title, author, and year
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true }, // Title is required
  author: { type: String, required: true, trim: true }, // Author is required
  year: { type: Number, min: 0 }, // Year is optional, must be >= 0
});

module.exports = mongoose.model("Book", bookSchema);
```

## test.js

```js
// tests/book.test.js - Jest & Supertest integration tests for Book CRUD API

const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const Book = require("../models/Book");

// All tests for Book CRUD API
describe("Book CRUD API Integration Tests", () => {
  // Before any test, connect to the test DB
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI_TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // After each test, clean up the Book collection (test isolation)
  afterEach(async () => {
    await Book.deleteMany();
  });

  // After all tests, disconnect from DB
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // CREATE
  it("should create a new book", async () => {
    // Arrange input
    const newBook = { title: "Test Book", author: "Jane Doe", year: 2020 };
    // Act: POST to API
    const res = await request(app).post("/api/books").send(newBook);
    // Assert response
    expect(res.statusCode).toBe(201); // 201 Created
    expect(res.body).toHaveProperty("_id"); // Should have _id
    expect(res.body.title).toBe(newBook.title); // Title matches
  });

  it("should fail to create book with missing title", async () => {
    // Act: POST without title
    const res = await request(app)
      .post("/api/books")
      .send({ author: "Jane Doe" });
    // Assert: Bad Request
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  // READ ALL
  it("should get all books", async () => {
    // Arrange: Create 2 books
    await Book.create([
      { title: "Book1", author: "A", year: 2001 },
      { title: "Book2", author: "B", year: 2002 },
    ]);
    // Act: GET all
    const res = await request(app).get("/api/books");
    // Assert
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(2);
  });

  // READ ONE
  it("should get a single book by ID", async () => {
    // Arrange: Create book
    const book = await Book.create({ title: "Book1", author: "A", year: 2001 });
    // Act: GET by ID
    const res = await request(app).get(`/api/books/${book._id}`);
    // Assert
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(book.title);
  });

  it("should return 404 for non-existing book", async () => {
    // Arrange: fake ID
    const fakeId = new mongoose.Types.ObjectId();
    // Act: GET by fake ID
    const res = await request(app).get(`/api/books/${fakeId}`);
    // Assert
    expect(res.statusCode).toBe(404);
  });

  // UPDATE
  it("should update a book", async () => {
    // Arrange: Create book
    const book = await Book.create({ title: "Old", author: "B", year: 2000 });
    // Act: PUT new title
    const res = await request(app)
      .put(`/api/books/${book._id}`)
      .send({ title: "New Title" });
    // Assert
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("New Title");
  });

  it("should return 404 for updating non-existing book", async () => {
    const fakeId = new mongoose.Types.ObjectId();
    const res = await request(app)
      .put(`/api/books/${fakeId}`)
      .send({ title: "Anything" });
    expect(res.statusCode).toBe(404);
  });

  // DELETE
  it("should delete a book", async () => {
    // Arrange: Create book
    const book = await Book.create({
      title: "Book To Delete",
      author: "C",
      year: 2005,
    });
    // Act: DELETE by ID
    const res = await request(app).delete(`/api/books/${book._id}`);
    // Assert: No Content
    expect(res.statusCode).toBe(204);
    // Verify it's deleted from DB
    const dbBook = await Book.findById(book._id);
    expect(dbBook).toBeNull();
  });

  it("should return 404 for deleting non-existing book", async () => {
    const fakeId = new mongoose.Types.ObjectId();
    const res = await request(app).delete(`/api/books/${fakeId}`);
    expect(res.statusCode).toBe(404);
  });
});
```
