const EventEmitter = require("events");
const orderEmitter = new EventEmitter();

orderEmitter.on("order_placed", (order) => {
  console.log(`order placed ${order.id}: for ${order.item}`);
});

orderEmitter.on("order_shipped", (order) => {
  console.log(`Order shipped: ${order.id} via ${order.shippingMethod}`);
});

orderEmitter.on("order_delivered", (order) => {
  console.log(`Order delivered: ${order.id} to ${order.address}`);
});

const order = {
  id: 123,
  item: "MacBook Pro",
  shippingMethod: "FedEx",
  address: "123 Main Street",
};

orderEmitter.emit("order_placed", order);
orderEmitter.emit("order_shipped", order);
orderEmitter.emit("order_delivered", order);
