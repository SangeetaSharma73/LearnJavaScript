# 📅 Day 17: Authentication Basics

## ✅ Topics We'll Cover:

1. 🔐 Hashing passwords using bcryptjs
2. 🪪 Generating JWTs with jsonwebtoken
3. 🛡 Auth middleware to protect routes

## 🔧 1. Hashing Passwords with bcryptjs

### Why hash?

- password should never be stored in plain text.
- Hashing turns a password into a secure, irreversible string.
- bcryptjs adds salts, making it harder to brute-force.

### Installation

```bash
npm install bcryptjs
```

### Usage Example

```js
const bcrypt = require("bcryptjs");
const plainPassword = "secretPass";
const securePassword = bcrypt.hash(plainPassword, 10); //hashed password
const isMatch = bcrypt.compare(plainPassword, securePassword); // compare password during login
```

## 🔑 2. Generating JWT with jsonwebtoken

### Why JWT?

- secure way to store user identity in token.
- sent in HTTP headers(usually in Authorization)
- Used for stateless login.

### Installation

```bash
npm install jsonwebtoken
```

### Usage Example

```js
const jwt = require("jsonwebtoken");
const userPayload = { id: user._id };
const token = jwt.sign(userPayload, process.env.JWT_SECRET, {
    expiresIn:process.env.expireToken;
});
```

- sign() = create token
- verify() = validate token

## Example Decode

```js
const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
```

## 3.Auth Middleware

Protect Routes with JWT Middleware

```js
const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1];
  try{
    const verifiedUser = jwt.verify(token,process.env.JWT_SECRET);
  const req.user = verifiedUser;
  next()
  }catch(err){
    res.status(400).json({msg:"Invalid token"})
  }
};

module.exports = {auth};
```

### Use it like:

```js
app.get("/dashboard", auth, (req, res) => {
  res.send("Protected Dashboard");
});
```

## 📚 Day 17 Assignment

### ✅ Build a simple User auth system with:

1. Register Route

   - Accept name, email, password

   - Hash password before storing

2. Login Route

   - Check email + password

   - If valid, return JWT

3. Dashboard Route (Protected)

   - Add middleware to verify JWT

   - Only accessible with valid token

## Key Points:

1. what is the different between bcrypt and bcryptjs ?
   **🔐 bcrypt vs bcryptjs**
   | Feature | `bcrypt` (Native) | `bcryptjs` (Pure JS) |
   | ------------------ | ------------------------------------------------------------ | -------------------------------- |
   | **Language** | C++ bindings + JS | Pure JavaScript |
   | **Performance** | Faster (native C++) | Slower (JS only) |
   | **Dependencies** | Requires native build tools (node-gyp, Python, etc.) | No native dependencies |
   | **Cross-platform** | May fail on some systems without build tools | Works everywhere (100% JS) |
   | **Security** | Very secure | Secure, but slower & less tested |
   | **Installation** | May cause build issues on Windows or without C++ build tools | Installs easily everywhere |
   | **Usage Syntax** | Almost identical | Almost identical |

**✅ When to Use Which?**

- Use bcrypt if:

  - You want better performance
  - You're in a production environment and can handle native build tools
  - Security and speed are top priorities

- Use bcryptjs if:
  - You want zero build hassles
  - You're developing on systems without build tools (e.g. Windows, CI/CD with - limitations)
  - You’re prototyping or building a simple app or demo

**🛠️ What Are Native Build Tools?**
Native build tools are a set of system-level software tools used to compile and build native (non-JavaScript) code—usually written in C, C++, or similar—so that it can be used inside Node.js projects.

They’re essential when you install Node packages that use native C/C++ bindings, like:

- bcrypt
- node-sass
- sqlite3
- sharp
  etc.

**🔐 Why Do We Use jsonwebtoken?**
We use the jsonwebtoken library in Node.js (and other environments) to generate, verify, and decode JSON Web Tokens (JWTs) — which are a secure way to transmit data between parties, usually for authentication and authorization.

**🧭 What Is a JWT?**
A JWT (JSON Web Token) is a compact, URL-safe token that contains claims (data), and is digitally signed to ensure authenticity.
It's made of three parts:

- Header (e.g., type, signing algorithm)
- Payload (e.g., user info, expiration)
- Signature (to verify it hasn’t been tampered with)

**✅ Why Use jsonwebtoken?**

1. Authentication

- After a user logs in successfully, your server can create a JWT containing user data.
- This token is sent back to the client and stored (e.g., in localStorage or cookies).
- On future requests, the token is sent with headers (e.g., Authorization: Bearer - <token>), allowing the server to verify the user's identity without rechecking the - database every time.

2. Stateless Sessions

- No need for server-side session storage
- All user info is in the token (e.g., userId, roles, etc.)
- Scales well for microservices or serverless architectures

3. Secure Data Transmission

- The token is digitally signed using a secret or private key.
- The data can’t be tampered with without invalidating the signature.

4. Role-based Authorization

- Include roles or permissions in the payload (isAdmin: true)
- Backend checks the token before allowing access to protected routes

**🔏 What Does "Digitally Signed" Mean?**
Digital signing is the process of attaching a mathematical signature to data to:

1. Prove authenticity — verify who created/sent it
2. Ensure integrity — confirm it hasn't been changed

**mongoose**: The ODM (Object Data Modeling) library for MongoDB. It lets you define schemas, models, and interact with the database in an object-oriented way.

**bcrypt**: A library used for securely hashing passwords. Never store plain-text passwords in a database.

**What is ORM?**
ORM stands for Object-Relational Mapping. It's a programming technique used to interact with a relational database (like MySQL, PostgreSQL, or SQLite) using objects in your programming language, instead of writing raw SQL queries.

_In simpler terms_:
ORM lets you use your programming language’s classes and objects to manage database records.

**Why use ORM?**

- ✅ Simplifies database access: Instead of writing SQL, you work with familiar objects.
- ✅ Reduces boilerplate code: ORM handles common operations like CRUD (Create, Read, Update, Delete).
- ✅ Database abstraction: Makes switching between different databases easier.
- ✅ Safer: Automatically escapes input to prevent SQL injection attacks.

**Popular ORM Libraries:**

- Python: SQLAlchemy, Django ORM
- Java: Hibernate
- C#: Entity Framework
- JavaScript: Sequelize, TypeORM

**✅ 1. new User(req.body)**:

- Creates a Mongoose model instance, but does not save it to the database.
- You must explicitly call .save() to persist it.

Example:

```js
const user = new User(req.body); // Creates the user object
await user.save(); // Saves it to the database
```

Use case:

- When you want to modify the object before saving.
- When you need custom logic before or after saving.

**✅ 2. User.create(req.body)**:

- Creates and saves the user document to the database in one step.
- It’s a shortcut for creating + saving.

Example:

```js
const user = await User.create(req.body); // Creates and saves immediately
```

Use case:

- When you want to quickly insert a document with no intermediate steps.
- Cleaner and shorter if you don’t need extra logic.
