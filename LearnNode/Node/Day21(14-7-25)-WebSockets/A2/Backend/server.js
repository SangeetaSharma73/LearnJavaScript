const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const { Server } = require("socket.io");
const User = require("./models/User");
const Message = require("./models/Message");

mongoose.connect("mongodb://localhost:27017/chat", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors(), express.json());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Vite or React dev server default
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("connected:", socket.id);

  socket.on("identify", async ({ username }) => {
    const user = await User.findOneAndUpdate(
      { username },
      { socketId: socket.id },
      { upsert: true, new: true }
    );
    socket.emit("identified", { id: user._id, username });
  });

  socket.on("send_message", async ({ toUserId, content }) => {
    const msg = await Message.create({
      sender: socket.userId,
      recipient: toUserId || null,
      content,
    });
    const recipients = toUserId
      ? [toUserId, socket.userId]
      : (await User.find()).map((u) => u.socketId);
    recipients.forEach((socketId) =>
      io.to(socketId).emit("receive_message", msg)
    );
  });

  socket.on("typing", ({ toUserId }) => {
    if (toUserId) {
      User.findById(toUserId).then((u) => {
        if (u?.socketId)
          io.to(u.socketId).emit("typing", { userId: socket.userId });
      });
    }
  });

  socket.on("disconnect", async () => {
    await User.findOneAndUpdate({ socketId: socket.id }, { socketId: null });
  });
});

server.listen(5000, () => console.log("Server @5000"));
