# 📅 Day 4: Event Emitter & Streams

## ✅ Topics:

1. EventEmitter
2. Streams (Readable, Writable, Duplex)
3. Piping and buffering

## 📚 Assignment:

```txt
1. Create an event emitter to simulate order status: order_placed, order_shipped, order_delivered
2. Read large file with stream and log progress
```

---

## 1️⃣ Create a raw HTTP server

Node.js built-in http module allows you to build an HTTP server from scratch, without Express or any framework.

### Note:

**module**- In Node.js, a module is a reusable piece of code that encapsulates related functionality (such as a function, object, or variable) and can be easily imported and used in other parts of your application.
**HTTP methods**-In HTTP(Hypertext transfer Protocol), HTTP methods define the type of operation that is being requested on a resource(usually on a web server). These methods are used in REST APIs and Web Development to perform crud operations.

## 👉 Why?:

- understand how servers actually work under the hood.
- see what Express is abstracting.
- Gives you more control.

### How it works conceptually:

- You imported the http module.
- You call http.createServer(handlerFunction).
  - That handlerFunction receives two argument:
    - req(the request object,with things like URL,headers , method)
    - res (the response object, used to send data back).

### Analogy:

```txt
You build the server’s front desk. Each visitor (request) gives you their info, and you reply (response)
```

Then you attach server.listen(port) to make the server start accepting connections.

## 2️⃣ Handle routing manually:

Because there is no Express,you have to manually inspect:
✅ req.url — the requested path (like /about, /api)
✅ req.method — the HTTP verb (GET, POST, etc.)
Example pattern in words:

- If path is /, return a homepage.
- If path is /about, return an about page.
- If path is /api, return JSON data.
- Otherwise, return 404.
  No routing helpers here — you do a big if...else or switch on the path.
  That’s how routing was traditionally handled in “bare” Node.

## 3️⃣ Send responses and headers

When you have the res object, you must:

### ✅ Set the status code with res.writeHead(statusCode, headers)

- 200 for OK

- 404 for Not Found

- 500 for server error

### ✅ Set Content-Type header

- text/html for HTML

- application/json for JSON

- text/plain for plain text

### ✅ Finally, use res.end(data) to send the actual response body.

Example in plain English (not code):

- Visitor comes to /

- You set res.writeHead(200, { Content-Type: text/html })

- You send back HTML with res.end("<h1>Welcome</h1>")

## Why is this important?

👉 This teaches you exactly what Express automates for you:

- routing
- content types
- status codes
- error handling

👉 By understanding raw Node, you build a much stronger foundation for working with Express, Fastify, or even frameworks in other languages.

## ✅ Summary Checklist

✔ http.createServer() → raw server
✔ Inspect req.url and req.method → manual routing
✔ res.writeHead() → set status + headers
✔ res.end() → send data

## How to Approach the Event Emitter Assignment

### ✅ First, what is an EventEmitter?

- Node.js has built-in module called as events.
- It allows you to create your own events and listen for them — just like you’d react to clicks in the browser, but on the server.

- You create an EventEmitter object
  - emit → means fire an event
  - on → means listen for that event

Analogy:

```txt
Think of a bell: emit is ringing the bell, and on is someone waiting to hear the bell.
```

✅ Your assignment goals
Create a custom event emitter

Define events like:

order_placed

order_shipped

order_delivered

For each event, register a listener that prints something (like a status message)

Then fire (emit) those events in order

✅ How to break it down conceptually
1️⃣ Import or require the events module
2️⃣ Create an EventEmitter instance
3️⃣ Use .on(eventName, handlerFunction) to listen for events
4️⃣ Use .emit(eventName, data) to fire the events with any relevant data

✅ Logical Steps
Step 1: set up listeners for all three events

order_placed: maybe log "Order has been placed."

order_shipped: log "Order is on the way."

order_delivered: log "Order delivered to the customer."

Step 2: emit those events, one after the other, simulating the flow of an order

✅ Best Practice
If you want to make it even cleaner:

Pass an order object with details (order ID, item name, etc.) to each event

Then the listener can log specific info about which order it is handling

✅ Summary checklist to solve
✔ Import the events module
✔ Create the event emitter instance
✔ Register three .on listeners for the different order states
✔ Emit each event in sequence
✔ Log meaningful messages
