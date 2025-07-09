# 📅 Day 8: Express Request & Response

## ✅ Topics:

- Request object
- Response object
- Sending JSON, HTML

## 📚 Assignment:

Create a route returning JSON and another one returning HTML

---

# 📅 Day 8: Express Request & Response

## 1️⃣ The Request Object (req)

when a client makes a request , Express gives you `res` object with these key properties:

### ✅ Commonly used:

- req.params → route parameters (e.g., /users/:id)
- req.query → query string parameters (e.g., ?term=shoes)
- req.body → form data or JSON data (but needs middleware like express.json())
- req.headers → request headers
- req.method → HTTP method (GET, POST, etc.)
- req.url → full request URL path

👉 Example:

```js
app.get("/products/:id", (req, res) => {
  console.log(req.params.id); // route param
  console.log(req.query); // query param
  console.log(req.method); // method
  res.send("check console");
});
```

## 2️⃣ The Response Object (res):

The res object helps you send data back to the client.

### ✅ Most important methods:

- res.send() → send a string, HTML, or buffer
- res.json() → send JSON
- res.status() → set status code
- res.set() → set a custom header
- res.redirect() → redirect to another route
- res.end() → ends the response manually (rarely used directly with Express)

👉 Example:

```js
app.get("/about", (req, res) => {
  res.status(200).send("<h1>About us</h1>");
});
```

### res.send() vs res.json():

- **res.send()** can send text,HTML, or anything.
- **res.json()** will automatically set `Content-Type:application/json` and serialize the object.

## 3️⃣ Sending JSON

✅ JSON is the most common way to respond in APIs:

```js
app.get("/api", (req, res) => {
  res.json({
    name: "siya",
    age: 24,
  });
});
```

👉 this sets:

```txt
Content-Type: application/json
```

## 4️⃣ Sending HTML

✅ HTML can be returned directly:

```js
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Home</title></head>
      <body>
        <h1>Welcome Home</h1>
      </body>
    </html>
  `);
});
```

or even simpler:

```js
res.send("<h1>Hello from Express</h1>");
```

## 🚀 Quick Recap

- req is what the client sends → parameters, query, body, headers

- res is how you send back a response → HTML, JSON, status codes

- res.send() = string/HTML

- res.json() = JSON
