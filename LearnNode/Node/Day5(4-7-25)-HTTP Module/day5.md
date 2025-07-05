# Day5- HTTP Module

## ✅ Topics:

1. Create a raw HTTP server
2. Handle routing manually
3. Send response and headers

## 📚 Assignment:

Build a simple HTTP server returning different messages for different paths

---

## 1️⃣ Create a raw HTTP server

Node provides a built-in http module to spin up a web server.
Unlike Express, you manage everything yourself:

- Load the module with require('http')
- Call http.createServer()

  - this accepts a callback with (req, res)
  - req (request) → holds the method, URL, headers, etc.
  - res (response) → used to send data back

Then you start the server with server.listen(port).

Analogy:

You build the server’s receptionist desk, answering every incoming call manually.

### What’s happening under the hood?

- On each client request, the server callback fires
- You can read req.url to decide which route to serve
- You can read req.method to know if it’s a GET, POST, etc.

## 2️⃣ Handle routing manually

Since there is no Express router, you do it yourself:

- Inspect req.url
- Use if...else or switch

  - for / → show home

  - for /about → show about

  - for /api → show JSON

  - otherwise → 404

👉 You decide which data to return for which route.

### Why learn this?

- It builds a foundation to appreciate frameworks
- You see how manual route logic works

## 3️⃣ Send response and headers

When sending a response with raw Node, you do:

- res.writeHead(statusCode, headers)

  - e.g., 200 OK, or 404 Not Found
  - with headers like Content-Type

- res.end(responseData)
  - send the body of the response

Examples of Content-Type

- text/html → for an HTML page
- application/json → for JSON data
- text/plain → plain text

If you do not set the correct content type, the browser may not render it correctly.

✅ In English summary of the flow:

1. Start server
2. Listen for requests
3. Look at the path
4. Pick a response
5. Set headers
6. Send data
7. Done
