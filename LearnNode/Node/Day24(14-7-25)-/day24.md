# 📅 Day 24: Pagination, Search, Filters

## ✅ Topics:

- Implement pagination
- Search by name
- Filter by category

## 📚 Assignment:

Add search, pagination in Book API

# 📚 Book API — Pagination, Search, and Filter (Node.js Best Practices)

This example shows how to implement **pagination**, **search**, and **filter** in a Book API using Node.js, Express, and MongoDB (Mongoose).  
All code is commented to clarify each concept.

---

## Features

- **Pagination**: Control page & results per page with `page` and `limit` query params.
- **Search**: Case-insensitive partial search by book title.
- **Filter**: Filter books by category.

---

## Example Query

```js
GET /api/books?search=JavaScript&category=Programming&page=2&limit=5
```

---

## API Endpoint

- `GET /api/books`
  - **search** (optional): string, partial title match (case-insensitive)
  - **category** (optional): string, exact match
  - **page** (optional): number, default 1
  - **limit** (optional): number, default 10

**Sample Response:**

```json
{
  "total": 22,
  "page": 2,
  "pageSize": 5,
  "totalPages": 5,
  "books": [
    {
      "_id": "...",
      "title": "JavaScript Advanced",
      "author": "John",
      "category": "Programming",
      "year": 2024
    }
  ]
}
```

---

## How it Works (with Comments)

- **`search`**: Uses MongoDB `$regex` for case-insensitive matching of `title`.
- **`category`**: Matches books with exact `category`.
- **`page`/`limit`**: Used with `.skip()` and `.limit()` for efficient pagination.
- **Metadata**: API returns `total`, `page`, `pageSize`, `totalPages`, and `books`.

---

## Testing

- Integration tests (Jest + Supertest) verify:
  - Pagination returns correct page and count.
  - Search matches titles (case-insensitive).
  - Category filter.
  - Combined search & filter.

---

## How to Run

1. Install dependencies: `npm install`
2. Set MongoDB URI in `.env.test`, e.g.
   ```
   MONGO_URI_TEST=mongodb://localhost:27017/book_api_test
   ```
3. Run tests: `npm test`

---

## Extend This

- Add sorting (e.g. by year or title)
- Allow multiple categories (e.g. `category=Fiction,Non-Fiction`)
- Add API validation (e.g. with Joi or express-validator)
- Defensive coding for invalid page/limit

---

## app.js

```js
// app.js - Express app for Book CRUD API with Pagination, Search, and Filter best practices

const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/Book");

const app = express();
app.use(express.json());

/**
 * GET /api/books
 * Supports:
 *   - Pagination (limit, page)
 *   - Search by name (case-insensitive partial match)
 *   - Filter by category
 *
 * Query Example:
 *   /api/books?search=Harry&page=2&limit=10&category=Fantasy
 */
app.get("/api/books", async (req, res) => {
  try {
    // Destructure query params with defaults
    const { search, category, page = 1, limit = 10 } = req.query;

    // Build query object
    const query = {};
    if (search) {
      // Case-insensitive partial match on 'title'
      query.title = { $regex: search, $options: "i" };
    }
    if (category) {
      query.category = category;
    }

    // Convert page/limit to numbers
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    // Count total documents for pagination metadata
    const totalBooks = await Book.countDocuments(query);

    // Find books with skip & limit for pagination
    const books = await Book.find(query)
      .skip((pageNum - 1) * limitNum) // Skip previous pages
      .limit(limitNum); // Limit per page

    // Response includes pagination info
    res.json({
      total: totalBooks, // Total matching books
      page: pageNum, // Current page
      pageSize: books.length, // Books returned in this page
      totalPages: Math.ceil(totalBooks / limitNum), // Total number of pages
      books, // The books array
    });
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = app;
```

## models/Book.js

```js
// models/Book.js - Book model for MongoDB using Mongoose, with category for filtering

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  year: { type: Number, min: 0 },
  category: { type: String, trim: true }, // Add category for filtering
});

module.exports = mongoose.model("Book", bookSchema);
```

## tests/book-pagination.js

```js
// tests/book-pagination.test.js - Jest & Supertest tests for Book API pagination, search, filter

const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const Book = require("../models/Book");

describe("Book API Pagination, Search, and Filter", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI_TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterEach(async () => {
    await Book.deleteMany();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("returns paginated books", async () => {
    // Seed 15 books
    for (let i = 1; i <= 15; i++) {
      await Book.create({
        title: `Book${i}`,
        author: "Author",
        year: 2000 + i,
      });
    }
    // Request page 2 with limit 5 (should get books 6-10)
    const res = await request(app).get("/api/books?page=2&limit=5");
    expect(res.statusCode).toBe(200);
    expect(res.body.page).toBe(2);
    expect(res.body.pageSize).toBe(5);
    expect(res.body.total).toBe(15);
    expect(res.body.totalPages).toBe(3);
    expect(res.body.books[0].title).toBe("Book6");
  });

  it("searches books by title", async () => {
    await Book.create([
      { title: "Harry Potter", category: "Fantasy", author: "JK Rowling" },
      {
        title: "Hunger Games",
        category: "Dystopian",
        author: "Suzanne Collins",
      },
    ]);
    // Search for "harry" (case-insensitive)
    const res = await request(app).get("/api/books?search=harry");
    expect(res.body.books.length).toBe(1);
    expect(res.body.books[0].title).toBe("Harry Potter");
  });

  it("filters books by category", async () => {
    await Book.create([
      { title: "Book1", category: "Fiction", author: "A" },
      { title: "Book2", category: "Non-Fiction", author: "B" },
    ]);
    const res = await request(app).get("/api/books?category=Fiction");
    expect(res.body.books.length).toBe(1);
    expect(res.body.books[0].category).toBe("Fiction");
  });

  it("combines search and filter", async () => {
    await Book.create([
      { title: "JavaScript Basics", category: "Programming", author: "A" },
      { title: "JavaScript Advanced", category: "Programming", author: "B" },
      { title: "Python Basics", category: "Programming", author: "C" },
    ]);
    // Search "JavaScript", filter "Programming"
    const res = await request(app).get(
      "/api/books?search=JavaScript&category=Programming"
    );
    expect(res.body.books.length).toBe(2);
    expect(res.body.books[0].title).toContain("JavaScript");
  });
});
```
