# 📅 Day 19: File Uploads with Multer

## ✅ Topics:

1. What is Multer?
2. How to upload files using Multer
3. How to serve image previews
4. Storing files:
   - On disk
   - On the cloud (brief overview)

## 📦 1. What is Multer?

Multer is a middleware for handling multipart/form-data, primarily used for file uploads in Express.

## 📦 Install:

```bash
npm install multer
```

## 🛠️ 2. Uploading Files Using Multer

### ➕ Setup

Create a file like upload.middleware.js:

```js
const multer = require("multer");
const path = require("path");

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads"); // directory to store uploaded files
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.fieldname}${ext}`);
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); // accept file
  } else {
    cb(new Error("Only image files are allowed"), false); // reject
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB limit
});

module.exports = upload;
```

### ✳️ 3. Express Route to Upload File

```js
const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload.middleware");

router.post("/upload", upload.single("profilePic"), (req, res) => {
  res.json({
    message: "File uploaded successfully",
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`,
  });
});
```

- ➡️ Use upload.single("fieldname") for single image

- ➡️ Use upload.array("images", 5) for multiple images

## 🌐 4. Serving Static Files (Image Preview)

In your main app file:

```js
app.use("/uploads", express.static("public/uploads"));
```

Now, if a user uploads 12345-profilePic.jpg, it is accessible at:

```bash
http://localhost:PORT/uploads/12345-profilePic.jpg
```

## ☁️ 5. Upload to Cloud (Brief Overview)

- For production, use services like:
- Cloudinary (best for images)
- AWS S3
- Firebase Storage

✅ Popular packages:

- cloudinary
- multer-storage-cloudinary
- aws-sdk

Let me know when you want to learn Cloud Uploads — I’ll guide step-by-step!

✅ Summary
| Feature | Example / Usage |
| --------------- | ------------------------------------------ |
| Upload single | `upload.single("avatar")` |
| Upload multiple | `upload.array("photos", 5)` |
| File size limit | `limits: { fileSize: 2 * 1024 * 1024 }` |
| Image filter | `file.mimetype.startsWith("image/")` |
| Serve static | `app.use("/uploads", express.static(...))` |

## 📚 Assignment

➡️ Create a route to upload user profile pictures

- Accept only images
- Limit size to 2MB
- Save in /public/uploads/
- Return file path in response
- Accessible by browser
