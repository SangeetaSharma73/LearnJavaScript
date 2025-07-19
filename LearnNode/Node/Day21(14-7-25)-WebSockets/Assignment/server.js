const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const chatSocketHandler = require("./sockets/chat.socket");

// Serve static client
app.use(express.static(path.join(__dirname, "public")));

// On socket connection
io.on("connection", (socket) => {
  console.log(`🔌 User connected: ${socket.id}`);
  chatSocketHandler(io, socket); // Delegate events
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
