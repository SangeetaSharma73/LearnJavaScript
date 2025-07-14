# 📅 Day 22: Sending Emails with Node.js

This guide covers how to send a welcome email on user signup using Nodemailer, with production-ready industry best practices including email templates, environment variable usage, and error handling.

---

## 1. Project Structure

```
project/
├── controllers/
│   └── authController.js
├── services/
│   └── emailService.js
├── templates/
│   └── welcome.html
├── models/
│   └── User.js
├── app.js
├── .env
└── package.json
```

---

## 2. Install Dependencies

```bash
npm install nodemailer dotenv express validator
```

---

## 3. Email Template (`templates/welcome.html`)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Welcome!</title>
  </head>
  <body>
    <h2>Hello, {{username}}!</h2>
    <p>Welcome to our platform. We're glad to have you!</p>
    <p>Best regards,<br />Team</p>
  </body>
</html>
```

---

## 4. Email Service (`services/emailService.js`)

```js
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter
  .verify()
  .then(() => console.log("Email server ready"))
  .catch((err) => {
    console.error("Email server error", err);
  });

function renderTemplate(templateName, data) {
  const filePath = path.join(
    __dirname,
    "..",
    "templates",
    `${templateName}.html`
  );
  let content = fs.readFileSync(filePath, "utf8");
  for (const key in data) {
    content = content.replace(new RegExp(`{{${key}}}`, "g"), data[key]);
  }
  return content;
}

exports.sendWelcomeEmail = async (to, username) => {
  try {
    const html = renderTemplate("welcome", { username });
    await transporter.sendMail({
      from: `"Your App" <${process.env.EMAIL_FROM}>`,
      to,
      subject: "Welcome to Our Platform!",
      html,
    });
  } catch (error) {
    console.error("Failed to send welcome email:", error);
    throw new Error("Email send failed");
  }
};
```

---

## 5. Auth Controller (`controllers/authController.js`)

```js
const User = require("../models/User");
const { sendWelcomeEmail } = require("../services/emailService");
const validator = require("validator");

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already registered" });
    }
    const user = new User({ username, email, password });
    await user.save();
    await sendWelcomeEmail(email, username);
    res.status(201).json({ message: "Signup successful, welcome email sent!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
```

---

## 6. User Model (`models/User.js`)

```js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model("User", userSchema);
```

---

## 7. .env Example

```
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_smtp_user
EMAIL_PASS=your_smtp_pass
EMAIL_FROM=no-reply@yourapp.com
```

---

## 8. App Setup (`app.js`)

```js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authController = require("./controllers/authController");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/api/signup", authController.signup);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

## 9. Best Practices Applied

- **Environment variables** for all secrets and config
- **Email templates** for professionalism and customization
- **Input validation** and unique email check
- **Password hashing** with bcrypt
- **Error handling** and proper status codes
- **Separation of concerns**: controllers, services, templates

---

**Note:**

- For real-world use, add rate-limiting, logging, and further validation.
- Use production SMTP (Mailgun, SendGrid, SES, etc) when live.
- Never push `.env` or sensitive data to version control.
