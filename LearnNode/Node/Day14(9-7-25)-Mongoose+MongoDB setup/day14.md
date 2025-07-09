# 📅 Day 14: MongoDB + Mongoose Setup

## ✅ Topics:

- Install MongoDB & MongoDB Compass or use MongoDB Atlas
- Install and configure Mongoose
- Create a Schema and Model
- Connect Express with MongoDB
- Best practices for folder structure

## 1️⃣ Install MongoDB Locally OR Use Atlas

- ✅ Option A: Local Setup
  Download from: https://www.mongodb.com/try/download/community
  Use MongoDB Compass for GUI (easier queries and inspection)
- ✅ Option B: Cloud Setup (Recommended)
- Use MongoDB Atlas (cloud database):
- Go to https://cloud.mongodb.com/
- Create a free cluster
- Whitelist your IP
- Get your Connection URI, like:
  mongodb+srv://<username>:<password>@cluster.mongodb.net/mydb?retryWrites=true&w=majority

## 2️⃣ Install and Use Mongoose

Install in your Node project:

```bash
npm install mongoose
```

Require and Connect:

```js
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection failed", err));
```

✅ Replace MONGO_URI with your URI inside .env.

## 3️⃣ Create a Schema & Model

Schemas define how your data will be stored in MongoDB.

Example: models/User.js

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: Number,
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
```

✅ Now you can create, read, update, and delete (CRUD) User documents.

## 4️⃣ Using Model in Express

```js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

const app = express();
app.use(express.json()); // to read JSON body

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"));

app.post("/users", async (req, res) => {
  const { name, age, email } = req.body;
  try {
    const user = await User.create({ name, age, email });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### 📁 Folder Structure (Best Practice)

```js
project/
├── models/
│ └── User.js
├── .env
├── app.js
```

## 📚 Day 14 Assignment

- Set up MongoDB (Atlas or local)
- Install Mongoose and connect using .env variable (MONGO_URI)
- Create a User model with fields:
- name (String, required)
- email (String, required, unique)
- age (Number)
- Create a POST API /users to save a new user
- ✅ When done, test with Postman or Thunder Client.
