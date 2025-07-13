# 📅 Day1 - Introduction to Node.js

## ✅ Topics:

- What is Node.js?
- How Node.js works (V8, Event Loop)
- Setup Node.js, VSCode, npm

## 📚 Assignment:

- Install Node.js and VSCode
- Run your first hello.js using console.log
- Print current time using Date

## 💻 Project:

- Mini Project 1: “Simple CLI Tool”
- Create a CLI that asks your name and greets you using readline module

---

1. what is Node.js?

- Node.js is a JavaScript runtime built on chrome's v8 engine.
- Allow you to run js outside the browser.
- Uses non-blocking , event-driven architecture.

**Event-driven architecture**
Event-driven architecture (EDA) is a software design pattern where applications are designed around events, which are changes in state or notifications of something happening. Instead of relying on synchronous request-response interactions, systems in EDA communicate by producing and consuming events, enabling real-time responsiveness and loose coupling between components.
Here's a more detailed explanation:
Key Concepts:

- Events: Represent a change in state or a notification of an occurrence, like a new order being placed or a sensor reading being updated.
- Producers: Components that generate and publish events.
- Consumers: Components that subscribe to and react to specific events.
- Event Broker: A central component that routes events from producers to consumers, facilitating communication.
- Asynchronous Communication: Events are typically handled asynchronously, meaning producers don't wait for immediate responses from consumers.
  How it works:

1. Event Generation:
   A component detects a change or occurrence (e.g., a user clicks a button, a payment is processed) and generates an event.
2. Event Publication:
   The event is published to the event broker.
3. Event Routing:
   The event broker, based on predefined rules, routes the event to relevant consumers.
4. Event Consumption:
   Consumers receive the event and process it according to their specific logic.

5. Why use Node.js?

- Fast and scalable.
- Huge ecosystem(npm).
- Great for REST APIs , real-time apps , microservices etc.

3. Node.Js Architecture(High level)

- Single threaded, non-blocking I/O.
- Handles multiple requests via event loop.

4. Setup

- Install Node.js: ![Node](https://nodejs.org/)
- Check version:

```bash
node -v
npm -v
```

## Resources

- V8 Engine[V8](https://v8.dev/)
- Event Loop Tutorial ([Event Loop](https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html))

## REST API Features:

1. Statelessness: Each request from a client to the server must contain all the information needed to understand and process it. The server doesn't store any client context or session state between requests. This simplifies the server and allows for easier scaling.
2. Client-Server Architecture: The user interface and data storage are separated, allowing each to evolve independently. This separation makes the system more flexible and easier to maintain.
3. Cacheability: REST APIs allow responses to be marked as cacheable, which means clients can store copies of the responses to reduce the number of requests to the server. This improves performance and reduces server load.
4. Uniform Interface: REST APIs use a standard interface for interactions, typically using HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources. This consistency makes it easier for developers to understand and use the API.
5. Layered System: REST APIs can be structured in layers, with intermediaries like load balancers or proxies. This allows for increased scalability, security, and flexibility.
6. Code on Demand (Optional): The server can send executable code to the client (e.g., JavaScript) to extend its functionality. However, this is generally not recommended due to security concerns.
   REST API Introduction - GeeksforGeeks
   In essence, REST APIs leverage the existing infrastructure of the web (HTTP) to provide a simple, flexible, and scalable way to interact with resources. They are a popular choice for building web services due to their ease of use and efficiency.
   What is REST API?
   — Features of REST APIs REST APIs have several features that make them ideal for building modern web services. Here are t...

## 🧩 What Are Microservices?

- Microservices are a software architecture pattern where an application is broken down - into small, independent services. Each service:
- Focuses on a single business function (e.g. user service, payment service)
- Communicates over the network via APIs (typically HTTP or messaging)
- Is independently deployable and scalable
- Uses stateless communication — perfect for independent API requests

## 🧭 Independent API Requests in Microservices

In microservices, each service communicates through independent API requests. Here's how:

### 🔗 Example: A Shopping App

Let’s say you have:

- UserService → handles users
- OrderService → handles orders
- InventoryService → handles stock

## 🧱 Microservice Communication (Stateless)

Suppose the frontend wants to place an order:

Frontend sends an API request to OrderService:

```txt
POST /orders HTTP/1.1
Host: orders.example.com
Authorization: Bearer token123
Content-Type: application/json

{
"userId": "u123",
"productId": "p456",
"quantity": 2
}
```

OrderService independently calls InventoryService:

```txt
GET /inventory/p456 HTTP/1.1
Host: inventory.example.com
```

Each call:

- Is stateless — no memory of previous interactions
- Includes all necessary data
- Is self-contained

## ✅ Why Independence Is Critical in Microservices

| Benefit                   | Explanation                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| 🔁 **Scalability**        | Services scale independently                                        |
| 🚧 **Fault Isolation**    | One service can fail without crashing the entire system             |
| 🚀 **Speed**              | Teams can build and deploy faster                                   |
| 📦 **Technology Freedom** | Each service can use its own tech stack (Node.js, Python, Go, etc.) |

## ⚙️ Communication Options Between Microservices

| Method                | Description                                     |
| --------------------- | ----------------------------------------------- |
| 🔗 **REST APIs**      | Most common; stateless, over HTTP               |
| 🧬 **gRPC**           | High performance, binary protocol               |
| 📨 **Message Queues** | Async communication (e.g. Kafka, RabbitMQ)      |
| 🔁 **Event-Driven**   | Services emit/consume events, no tight coupling |
