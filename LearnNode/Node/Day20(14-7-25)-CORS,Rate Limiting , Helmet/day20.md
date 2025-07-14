# 📅 Day 20: CORS, Rate Limiting, Helmet

## ✅ Topics

1. 1️⃣ Helmet – Set Secure HTTP Headers
   Helmet helps secure your Express app by setting various HTTP headers (e.g., X-Frame-Options, X-XSS-Protection).

📦 Install:

```bash
npm install helmet
```

🛠 Usage:

```js
const helmet = require("helmet");

app.use(helmet());
```

You can also configure it:

```js
app.use(
  helmet({
    contentSecurityPolicy: false, // disable CSP if not needed
  })
);
```

✅ Adds about 11 security-related headers automatically.

2. 2️⃣ CORS – Cross-Origin Resource Sharing
   CORS is a mechanism that allows or restricts resources from different origins.

📦 Install:

```bash
npm install cors
```

🛠 Usage:

```js
const cors = require("cors");

// Allow all origins (not recommended in production)
app.use(cors());

// Restrict to specific origin
app.use(
  cors({
    origin: ["http://localhost:3000", "https://yourdomain.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
```

❗Important for frontend-backend communication (like React <-> Node).

3. 3️⃣ Rate Limiting – Prevent DDoS / Abuse
   Rate limiting helps protect your APIs by limiting the number of requests from a single IP.

📦 Install:

```bash
npm install express-rate-limit
```

🛠 Usage:

```js
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
windowMs: 15 _ 60 _ 1000, // 15 minutes
max: 100, // Limit each IP to 100 requests per windowMs
message: "Too many requests from this IP, try again later.",
});

app.use(limiter);
```

Useful for public routes like /login, /signup, or /api.

## 🧠 Bonus Security Tip:

- Express Built-ins
- app.disable("x-powered-by"): Hide Express signature
- Use HTTPS (especially in production)
- Validate all inputs

✅ Real-world Setup Example

```js
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();

// Security middlewares
app.use(helmet());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(
rateLimit({
windowMs: 10 _ 60 _ 1000, // 10 minutes
max: 50, // limit each IP to 50 requests
})
);

app.use(express.json());

app.get("/", (req, res) => {
res.send("Secure API 🚀");
});
```

## 📚 Assignment

Secure one of your previous apps:

✅ Secure your Feedback or Book App

- Add helmet for headers
- Use cors to allow frontend (e.g., React or Vue)
- Add express-rate-limit to /login, /signup, and public APIs
- Once you've implemented the security layers, test them by:
- Trying multiple requests in short time to trigger rate limiting
- Opening in a browser or frontend to test CORS
- Inspecting HTTP headers (e.g., in browser dev tools > Network > Headers)
