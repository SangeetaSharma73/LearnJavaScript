# 📅 Day 13: Environment Variables

## ✅ Topics:

- Why use environment variables?
- Installing and using dotenv
- Using variables in code
- Separate config for development and production
- Best practices

## 🔍 1️⃣ Why Environment Variables?

Environment variables are used to separate config from code, like:

- Port number
- Database URLs
- API keys
- Secrets or tokens
- App mode (development, production, etc.)

### ✅ Benefits:

- Security: Secrets stay outside the code
- Portability: Easy to run code across different environments
- Flexibility: No hardcoding

## 🔧 2️⃣ Installing and Using dotenv

1. Step 1: Install

```js
npm install dotenv
```

2. Step 2: Create a .env file at root

```js
PORT = 8080;
APP_NAME = MyNodeApp;
MODE = development;
```

✅ This file is not committed to Git (more on that below).

3. Step 3: Load it in your app.js

```js
require("dotenv").config(); // Always at the top

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME;

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to ${APP_NAME}</h1>`);
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} is running at http://localhost:${PORT}`);
});
```

✅ process.env.<VAR_NAME> allows you to access the variable anywhere.

## 🏗 3️⃣ Organizing Config for Dev/Prod

Use different .env files:

- .env → for local dev
- .env.production → for production
- .env.development → optional
  Then, in production, you can set:

### NODE_ENV=production

In code:

```js
if (process.env.NODE_ENV === "production") {
  // use cloud DB
} else {
  // use local DB
}
```

## 🚨 4️⃣ Best Practices

✅ Add .env to .gitignore:

## .gitignore

.env
✅ NEVER push .env with credentials to GitHub
✅ Document expected variables in .env.example:

PORT=3000
APP_NAME=MyApp

✅ Use defaults:
const PORT = process.env.PORT || 3000;

## 📚 Day 13 Assignment

Goal: Use environment variables to configure your Express app.

Task:

- Install dotenv
- Create a .env file with:
- PORT=5000
- APP_NAME=EnvLearningApp
- OWNER=Siya

In your Express app:

Use these env variables in a route

Render a message like:
Welcome to EnvLearningApp by Siya running on port 5000

Add .env to .gitignore
