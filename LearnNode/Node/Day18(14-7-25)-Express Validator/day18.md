# 📅 Day 18: Express Validator

We'll use express-validator to validate and sanitize user input in routes like signup and book creation.

## ✅ Topics Covered

- What is express-validator?
- How to use it step-by-step
- Input sanitization
- Custom error messages

## Assignment

## 📦 1. What is express-validator?

- A set of Express.js middlewares that wraps around validator.js.
- Used to validate, sanitize, and normalize user input.

1. Validate
   Definition: Check if the input meets the required rules (correct type, length, format, etc.)

- 📌 Why? To make sure the data is usable and safe (e.g., valid email, password long enough).

- 🔧 Tool: express-validator

Example:

```js
body("email").isEmail().withMessage("Must be a valid email");
```

2. Sanitize

Definition: Clean the input by removing or escaping dangerous content (like scripts or special characters).

- 📌 Why? To prevent attacks like XSS (Cross-Site Scripting) or SQL Injection.

- 🔧 Tool: express-validator

Example:

```js
body("username").escape(); // Changes <script> to &lt;script&gt; 3. Normalize
```

3. Normalize

Definition: Convert input into a consistent format (e.g., trimming spaces, lowercasing emails).

- 📌 Why? For uniformity in your app or database.
- Tool: express-validator

Example:

```js
body("email").normalizeEmail(); // john@Gmail.Com → john@gmail.com
```

## 🛠 Full Example in

````js
const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

app.post('/signup', [
  // ✅ VALIDATE, SANITIZE & NORMALIZE
  body('email')
    .isEmail().withMessage('Invalid email')  // Validate
    .normalizeEmail(),                       // Normalize

  body('username')
    .isLength({ min: 3 }).withMessage('Username too short') // Validate
    .trim()     // Normalize (removes spaces)
    .escape(),  // Sanitize

  body('password')
    .isLength({ min: 6 }).withMessage('Password too short') // Validate
    .trim()
    .escape(),

], (req, res) => {
  // ❌ Handle validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // ✅ Safe, clean, and validated input
  const { email, username, password } = req.body;

  res.send({
    message: 'Validated, sanitized, and normalized input!',
    data: { email, username, password }
  });
});

app.listen(3000, () => console.log('Server on http://localhost:3000'));
```
### 📦 Install:

```bash
npm install express-validator
````

## 🧩 2. How to Use (with Example)

### ✅ Basic Flow

- Add validations as middleware using check or body
- Use validationResult to capture errors
- Send custom error messages if validation fails
- Example: Signup Validation

```js
const { body, validationResult } = require("express-validator");

// ✅ Middleware for validating signup
const validateSignup = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),

  body("email").trim().isEmail().withMessage("Enter a valid email"),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),

  // Custom middleware to check for errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array().map((err) => err.msg) });
    }
    next();
  },
];

module.exports = validateSignup;
```

Now use in route:

```js
const express = require("express");
const router = express.Router();
const validateSignup = require("../middlewares/validateSignup");

router.post("/signup", validateSignup, (req, res) => {
  // Only reaches here if validation passed
  res.status(200).send("Signup successful");
});
```

## 🧼 3. Input Sanitization

You can chain sanitization methods like:

```js
body("email").normalizeEmail(), body("name").escape().trim();
```

✏️ 4. Custom Error Messages
Handled via .withMessage("..."):

```js
body("email")
  .notEmpty()
  .withMessage("Email is required")
  .isEmail()
  .withMessage("Must be a valid email");
```

## 📚 Assignment

1. 1️⃣ Add validation to Signup API
   Make sure:

- Name is at least 2 characters
- Email is valid
- Password is minimum 8 characters

2. 2️⃣ Add validation to Book Creation API
   Validate:

- Title is required and at least 3 characters
- Author is required
- Price must be a number and greater than 0
  Example:
  ```js
  body("price").isFloat({ gt: 0 }).withMessage("Price must be greater than 0");
  ```
