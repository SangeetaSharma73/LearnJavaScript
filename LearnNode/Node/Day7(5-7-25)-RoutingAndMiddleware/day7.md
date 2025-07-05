# 📅 Day 7: Routing & Middleware

## ✅ Topics:

- Route parameters
- Query parameters
- Middleware functions

## 📚 Assignment:

- Create a logging middleware
- Create route with URL params and query strings

---

# 📅 Day 7: Routing & Middleware

## 1️⃣ Route Parameters

👉 What are they?
Route parameters allow you to capture values form the URL path, similar to a placeholder.
For example:

```js
app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`User ID is ${req.params.id}`);
});
```

How it works

- :id acts as a variable
- visiting /users/42 → req.params.id will be "42"
- req.params is an object with all the route parameters

✅ This is extremely useful for things like user profiles, product details, etc.

## 2️⃣ Query Parameters

👉 What are they?
Query parameters are key/value pairs sent in the URL after ?.
For example:

```bash
http://localhost:5000/search?term=shoes&sort=desc

```

In Express:

```js
app.get("/search", (req, res) => {
  console.log(req.query);
  res.send(`Searching for ${req.query.term} with sorting ${req.query.sort}`);
});
```

- req.query is an object with the query string parameters.
  - e.g., { term: "shoes", sort: "desc" }

✅ Query parameters are super useful for filtering, searching, pagination, etc.

## 3️⃣ Middleware Functions

👉 What is middleware?
A middleware is a function that sits between the request and the response.
It can:

- modify the request.
- modify the response.
- end the response.
- pass control to the next middleware.

Signature:

```js
(req, res, next) => { ... }
```

- You must call next() to move on to the next middleware
- Or you can respond directly, ending the request

Example:

```js
app.use((req, res, next) => {
  console.log("Time:", new Date().toISOString());
  next(); // go to next middleware or route
});
```

### ✅ Middleware is a powerful way to:

- handle logging
- add authentication
- validate requests
- handle errors
- serve static files

## 📝 Types of Middleware

1. Application-level middleware:
   e.g., app.use() for logging, security headers

2. Router-level middleware:
   attach to an Express router

3. Built-in middleware:
   like express.json() for parsing JSON

4. Error-handling middleware:
   takes 4 args: (err, req, res, next)

## In short:

✅ Route parameters → /users/:id
✅ Query parameters → /search?term=x&sort=y
✅ Middleware → functions that run before sending back a response

## 📚 Day 7 Assignment

### ✅ Tasks:

- Create a route /products/:productId that returns Product ID is {productId}
- Create a route /search that reads ?term and ?category query params and returns them
- Add a middleware that logs every request method and URL
