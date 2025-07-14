# 📅 Day 21: WebSockets with Socket.IO

## ✅ Topics Covered

- Real-time messaging
- Broadcast events
- Room-based communication
- Clean architecture (controller + events + socket middleware)

📁 Project Structure (Clean & Scalable)

```txt
chat-app/
├── controllers/
│   └── chat.controller.js
├── sockets/
│   └── chat.socket.js
├── public/
│   └── index.html
├── server.js
├── package.json
```

✅ 1. server.js (App Entry)

```js
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
```

✅ 2. sockets/chat.socket.js (Socket Logic)

```js
const {
  handleJoinRoom,
  handleSendMessage,
} = require("../controllers/chat.controller");

module.exports = (io, socket) => {
  socket.on("joinRoom", (room) => handleJoinRoom(io, socket, room));
  socket.on("sendMessage", (data) => handleSendMessage(io, socket, data));

  socket.on("disconnect", () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
};
```

3.  ✅controllers/chat.controller.js (Event Controllers)

```js
exports.handleJoinRoom = (io, socket, room) => {
  socket.join(room);
  console.log(`📥 ${socket.id} joined room: ${room}`);
  socket.to(room).emit("message", {
    user: "System",
    text: `🟢 A new user has joined room: ${room}`,
  });
};

exports.handleSendMessage = (io, socket, { room, message, user }) => {
  io.to(room).emit("message", {
    user,
    text: message,
  });
};
```

4.  ✅public/index.html (Client UI – Simple)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Chat App</title>
    <style>
      body {
        font-family: sans-serif;
      }
      #messages {
        border: 1px solid #ccc;
        padding: 10px;
        height: 300px;
        overflow-y: scroll;
      }
    </style>
  </head>
  <body>
    <h2>Join Room</h2>
    <input id="room" placeholder="Enter room" />
    <button onclick="joinRoom()">Join</button>

    <h2>Chat</h2>
    <div id="messages"></div>
    <input id="msg" placeholder="Enter message" />
    <button onclick="sendMessage()">Send</button>

    <script src="/socket.io/socket.io.js"></script>
    <script>
      const socket = io();
      let room = "";
      let user = prompt("Enter your name");

      function joinRoom() {
        room = document.getElementById("room").value;
        socket.emit("joinRoom", room);
        document.getElementById(
          "messages"
        ).innerHTML += `<p><em>Joined room: ${room}</em></p>`;
      }

      function sendMessage() {
        const msg = document.getElementById("msg").value;
        socket.emit("sendMessage", { room, message: msg, user });
        document.getElementById("msg").value = "";
      }

      socket.on("message", (data) => {
        document.getElementById(
          "messages"
        ).innerHTML += `<p><strong>${data.user}:</strong> ${data.text}</p>`;
      });
    </script>
  </body>
</html>
```

🛡️ Best Practices Applied
✅ Modular file structure
✅ Controllers for separation of concerns
✅ Socket event delegation
✅ Dynamic rooms (joinRoom)
✅ Real-time updates via io.to(room).emit()
✅ Minimal frontend for fast testing
✅ Scalable to use in private messaging, group chat, or gaming apps

## 📚 Assignment

- 🎯 Real-time Chat App using Socket.IO
- Users should join rooms
- They can send messages in those rooms
- Messages should broadcast only within the room
- Bonus: Add user join/leave notifications

# Private 1-on-1 Messaging in Node.js + Express + MongoDB

This guide shows how to implement a secure, production-ready private messaging system with Node.js, Express, and MongoDB, following best practices including authentication, input validation, and robust error handling.

---

## 1. Project Structure

```
project/
├── controllers/
│   └── messageController.js
├── middleware/
│   ├── auth.js
│   └── validate.js
├── models/
│   ├── Message.js
│   └── User.js
├── routes/
│   └── messages.js
├── app.js
├── .env
└── package.json
```

---

## 2. User Model (models/User.js)

```js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
```

---

## 3. Message Model (models/Message.js)

```js
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String, required: true, trim: true },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
```

---

## 4. Auth Middleware (middleware/auth.js)

```js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token)
    return res.status(401).json({ error: "Access denied. No token." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) throw new Error();
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token." });
  }
};
```

---

## 5. Input Validation Middleware (middleware/validate.js)

```js
const { body, validationResult } = require("express-validator");

exports.messageValidationRules = [
  body("receiver").isMongoId().withMessage("Valid receiver ID required"),
  body("content")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Message cannot be empty"),
];

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
```

---

## 6. Message Controller (controllers/messageController.js)

```js
const Message = require("../models/Message");
const User = require("../models/User");

// Send message
exports.sendMessage = async (req, res) => {
  try {
    const { receiver, content } = req.body;
    if (receiver === req.user.id) {
      return res.status(400).json({ error: "Cannot message yourself." });
    }
    const receiverUser = await User.findById(receiver);
    if (!receiverUser) {
      return res.status(404).json({ error: "Receiver not found." });
    }
    const message = await Message.create({
      sender: req.user.id,
      receiver,
      content,
    });
    res.status(201).json({ message });
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
};

// Fetch conversation
exports.getConversation = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid user ID." });
    }
    const messages = await Message.find({
      $or: [
        { sender: req.user.id, receiver: userId },
        { sender: userId, receiver: req.user.id },
      ],
    })
      .sort({ createdAt: 1 })
      .populate("sender", "username")
      .populate("receiver", "username");
    res.json({ messages });
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
};
```

---

## 7. Message Routes (routes/messages.js)

```js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { messageValidationRules, validate } = require("../middleware/validate");
const messageController = require("../controllers/messageController");

router.post(
  "/",
  auth,
  messageValidationRules,
  validate,
  messageController.sendMessage
);

router.get("/:userId", auth, messageController.getConversation);

module.exports = router;
```

---

## 8. Main App Setup (app.js)

```js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const messageRoutes = require("./routes/messages");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// Message routes
app.use("/api/messages", messageRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

## 9. Security & Best Practices

- **Authentication:** Uses JWT, always hash passwords, never store plain tokens or passwords.
- **Input Validation:** Uses express-validator to prevent injection attacks and malformed data.
- **Error Handling:** Catches and logs errors, never exposes internal stack traces to the client.
- **Environment Variables:** Store secrets (like JWT secret, Mongo URI) in `.env`, never in code.
- **Rate Limiting & CORS:** (Not shown here, but add [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) and CORS as needed).
- **Password Storage:** Uses bcrypt for password hashing.

---

## 10. Example .env File

```
MONGO_URI=mongodb://localhost:27017/messaging
JWT_SECRET=your_jwt_secret_here
PORT=3000
```

---

**Note:**

- Add registration/login endpoints to issue JWTs for authentication.
- For real deployments, add logging, monitoring, and further security controls as needed.
