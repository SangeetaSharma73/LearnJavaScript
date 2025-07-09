# 📅 Day 15: CRUD with MongoDB + Mongoose

## ✅ Topics Covered:

- Mongoose model methods
- Create – Model.create()
- Read – Model.find(), Model.findById()
- Update – Model.findByIdAndUpdate()
- Delete – Model.findByIdAndDelete()
- Best practices + Express routes

## 🛠 1️⃣ Mongoose CRUD Methods (Cheat Sheet)

| Operation | Mongoose Method               | Description                 |
| --------- | ----------------------------- | --------------------------- |
| Create    | `Model.create(data)`          | Adds a new document         |
| Read All  | `Model.find()`                | Gets all documents          |
| Read One  | `Model.findById(id)`          | Get a single document by ID |
| Update    | `Model.findByIdAndUpdate(id)` | Update doc by ID            |
| Delete    | `Model.findByIdAndDelete(id)` | Delete doc by ID            |

## 🧪 2️⃣ Example with a User model

Assume you already have a User model:

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
```

## 🔌 3️⃣ CRUD Express Controller

```js
const User = require("./models/User");

const postUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: "user not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) return res.status(404).json({ msg: "Users not found" });
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json({ msg: "id is not valid" });
  }
};
module.exports = { postUser, getUserById, getAllUser, deleteUser, updateUser };
```

## 🔌 3️⃣ CRUD Express Model

```js
const express = require("express");
const userRoutes = express.Router();
const {
  postUser,
  getUserById,
  getAllUser,
  deleteUser,
  updateUser,
} = require("./controllers/UserController");
userRoutes.post("/", postUser);
userRoutes.get("/:id", getUserById);
userRoutes.get("/", getAllUser);
userRoutes.delete("/:id", deleteUser);
userRoutes.put("/:id", updateUser);

module.exports = userRoutes;
```

```js
const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
dotenv.config();

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`))
  )
  .catch((err) => console.error("DB Connection Error:", err));
```

## ✅ Testing With Thunder Client or Postman

| Method | URL          | Purpose           | Body Example (JSON)                                       |
| ------ | ------------ | ----------------- | --------------------------------------------------------- |
| POST   | `/users`     | Create a user     | `{ "name": "Siya", "email": "siya@test.com", "age": 24 }` |
| GET    | `/users`     | Read all users    | —                                                         |
| GET    | `/users/:id` | Read user by ID   | —                                                         |
| PUT    | `/users/:id` | Update user by ID | `{ "name": "Updated Name" }`                              |
| DELETE | `/users/:id` | Delete user by ID | —                                                         |

📚 Day 15 Assignment
Build full CRUD routes for a Product model.
Model fields:

title (String, required)

price (Number)

qty (Number)

Create the following routes:

POST /products

GET /products

GET /products/:id

PUT /products/:id

DELETE /products/:id

Test all routes using Thunder/Postman
