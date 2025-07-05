# Explaination

## 1️⃣ Import the events module

```js
const EventEmitter = require("events");
```

## 👉 What is this doing?

Node.js comes with a built-in events module.
It exports a class called EventEmitter that you can use to build a custom event-driven system.

## 2️⃣ Create an instance of EventEmitter

```js
const orderEmitter = new EventEmitter();
```

## 👉 What does this mean?

You create a new object (orderEmitter) that can:

- emit events (send them out)
- listen for events (react to them)
  Think of this orderEmitter like your own radio station:
- you broadcast (emit) messages
- listeners (on) tune in to react

## 3️⃣ Register listeners for the events

Let’s add a listener for order_placed:

```js
orderEmitter.on("order_placed", (order) => {
  console.log(`Order placed: ${order.id} for ${order.item}`);
});
```

## 👉 What’s going on here?

.on('order_placed', callback) means:

“Whenever someone emits order_placed, run this function.”

The order argument comes from the data you pass during emit.

Similarly, let’s handle order_shipped:

```js
orderEmitter.on("order_shipped", (order) => {
  console.log(`Order shipped: ${order.id} via ${order.shippingMethod}`);
});
```

And for order_delivered:

```js
orderEmitter.on("order_delivered", (order) => {
  console.log(`Order delivered: ${order.id} to ${order.address}`);
});
```

4️⃣ Emitting the events
Now you simulate the order flow by emitting events one after another:

```js
const order = {
  id: 123,
  item: "MacBook Pro",
  shippingMethod: "FedEx",
  address: "123 Main Street",
};
```

## 👉 This is just an object to pass meaningful data about the order.

Fire the events in sequence:

orderEmitter.emit('order_placed', order);
orderEmitter.emit('order_shipped', order);
orderEmitter.emit('order_delivered', order);

## 👉 What’s happening?

.emit('eventName', data) sends out a signal

all the .on handlers listening to that event will run their callbacks with the data

✅ In plain English summary
✔ You created a custom “radio station” with EventEmitter
✔ You tuned in to events (on)
✔ You broadcast the events (emit)
✔ Listeners got the data and reacted

That’s the heart of Node.js event-driven architecture.
