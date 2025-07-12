# Assignment Explanation

## models

🔤 name Field

```js
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
type: String: The field must be a string.
```

- required: Validation — this field must be provided. The message is shown if validation fails.
- trim: true: Automatically removes leading/trailing whitespace.
- minlength and maxlength: Restrict length of the name to be between 2 and 50 characters.

📧 email Field

```js
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Email is invalid'],
    },
```

- unique: true: Ensures email is unique across users.
- lowercase: true: Converts all email entries to lowercase automatically.
- match: Validates email format using a regex.
- trim: Strips extra spaces.

🔐 password Field

```js
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 8,
      select: false,
    },
```

- minlength: 8: Enforces a strong password.
- select: false: Prevents the password from being returned in find() or findOne() queries unless explicitly selected. Helps protect data.

🧑‍⚖️ role Field

```js
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
```

- enum: Limits the role to either 'user' or 'admin'. Useful for role-based access control.
- default: If no role is provided, it's set to 'user'.

✅ isActive Field

```js
    isActive: {
      type: Boolean,
      default: true,
    },
```

Used to soft-delete or deactivate accounts without removing them from the DB.

🕒 Schema Options

```js

  {
    timestamps: true,
    versionKey: false,
  }
```

- timestamps: true: Automatically adds createdAt and updatedAt fields.
- versionKey: false: Removes the \_\_v field that Mongoose uses internally for document versioning. Optional but common in clean APIs.

🔐 Pre-save Hook to Hash Password

```js
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const saltRounds = 10;
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});
```

- .pre('save'): Mongoose middleware that runs before a user is saved.
- isModified('password'): Ensures password is only hashed if it's new or changed (avoids double hashing).
- bcrypt.hash(...): Replaces the plain-text password with a secure hash.

🔑 Instance Method for Comparing Passwords

```js
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
```

- Adds a custom method to user instances that lets you verify login attempts.
- bcrypt.compare(...) checks a given password against the hashed password.

⚡ Indexing for Fast Queries

```js
userSchema.index({ email: 1 });
```

- Creates a MongoDB index on the email field to speed up lookups.
- 1 means ascending order. Helps optimize queries like User.findOne({ email }).

📤 Exporting the Model

```js
module.exports = mongoose.model("User", userSchema);
```

- This compiles the schema into a model called 'User'.
- The model is what you use in services/controllers like:

```js
const User = require("../models/user.model");
```

## services

## 📁 File: src/services/user.service.js

This file exports a User Service, which includes four asynchronous functions for handling CRUD operations on user data.

🔍 Breakdown of Each Function

1. getUserById(id)

```js
const getUserById = async (id) => {
  return User.findById(id).select("-password");
};
```

- Purpose: Retrieve a user by their MongoDB \_id.

- .select('-password'): Excludes the password field from the result for security.

- Returns: A user object (without the password) if found.

2. createUser(userData)

```js
const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};
```

- Purpose: Creates a new user.

- Steps:

  - Create a new instance of the User model with the given userData.
  - Save it to the database using user.save().

- Returns: The newly created user document.

3. updateUser(id, updateData)

```js
const updateUser = async (id, updateData) => {
  return User.findByIdAndUpdate(id, updateData, { new: true });
};
```

- Purpose: Updates a user’s information.

- Parameters:

  - id: the user's ID.
  - updateData: an object with the fields to update.

- Option { new: true }: Ensures the function returns the updated document, not the old one.

- Returns: The updated user document.

4. deleteUser(id)

```js
const deleteUser = async (id) => {
  const result = await User.findByIdAndDelete(id);
  return result !== null;
};
```

- Purpose: Deletes a user by their ID.
- Returns: true if a user was deleted, false if no user was found.

📦 Exporting

```js
module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
```

This exports the functions so they can be used in other parts of the app (e.g., in controllers or routes).

## 📁 File: src/utils/catchAsync.js

```js
// A utility to wrap async functions and pass errors to next()
module.exports = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
```

- This utility function is used in Express.js applications to simplify error handling in asynchronous route handlers or middlewares.
- When you have asynchronous functions in your route handlers (for example, those that interact with a database, file system, or make API calls), errors can be thrown or promise rejections can occur. If you don't handle these errors, they won't be caught by Express's default error-handling mechanism, and this can lead to unhandled promise rejections or crashes in your application.

## 📁 File: src/controllers/user.controller.js

```js
const userService = require("../services/user.service");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("../services/user.service");

//GET /api/users/:id
const getUserById = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.id);

  if (!user)
    return res.status(httpStatus.NOT_FOUND).json({ msg: "User not found" });

  res.status(httpStatus.OK).json(user);
});

//POST /api/users/
const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).json(user);
});

// PUT /api/users/:id
const updateUser = catchAsync(async (req, res) => {
  const updateUser = await userService.updateUser(req.params.id, req.body);
  if (!updateUser)
    return res.status(httpStatus.NOT_FOUND).json({ message: "USer not found" });
  res.status(httpStatus.OK).json(updateUser);
});

// DELETE /api/users/:id
const deleteUser = catchAsync(async (req, res) => {
  const result = await userService.deleteUser(req.params.id);

  if (!result) {
    return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
  }

  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
```

Explanation:
const userService = require("../services/user.service");
Imports the userService module, which likely contains functions to interact with the database or perform business logic for users (e.g., create, read, update, delete users).

const catchAsync = require("../utils/catchAsync");
Imports a utility function catchAsync which wraps asynchronous route handlers to automatically catch and forward errors to the global error handler, so you don’t need to write try/catch blocks in each controller.

const httpStatus = require("../services/user.service");
⚠️ Problem: This line mistakenly re-imports userService instead of httpStatus.

It should be something like:

const httpStatus = require("http-status");
http-status is a library that provides human-readable HTTP status codes, e.g., httpStatus.OK (200), httpStatus.NOT_FOUND (404), etc.

const getUserById = catchAsync(async (req, res) => {
Defines the getUserById controller wrapped in catchAsync. It handles GET /api/users/:id.

const user = await userService.getUserById(req.params.id);
Calls a method to fetch a user by their ID from the userService.

if (!user)
return res.status(httpStatus.NOT_FOUND).json({ msg: "User not found" });
If the user doesn't exist, respond with a 404 Not Found and a message.

res.status(httpStatus.OK).json(user);
If user is found, respond with 200 OK and the user data in JSON format.

});
Ends the getUserById function.

const createUser = catchAsync(async (req, res) => {
Defines the createUser controller wrapped in catchAsync. It handles POST /api/users/.

const user = await userService.createUser(req.body);
Calls the service to create a new user with data from the request body.

res.status(httpStatus.CREATED).json(user);
Responds with 201 Created and the newly created user.

});
Ends the createUser function.

const updateUser = catchAsync(async (req, res) => {
Defines the updateUser controller. It handles PUT /api/users/:id.

const updateUser = await userService.updateUser(req.params.id, req.body);
Attempts to update a user using ID and new data. The returned object is the updated user.

if (!updateUser)
return res.status(httpStatus.NOT_FOUND).json({ message: "USer not found" });
If update fails (e.g., user not found), respond with 404.

res.status(httpStatus.OK).json(updateUser);
If successful, respond with 200 OK and the updated user data.

});
Ends the updateUser function.

const deleteUser = catchAsync(async (req, res) => {
Defines the deleteUser controller. It handles DELETE /api/users/:id.

const result = await userService.deleteUser(req.params.id);
Calls the service to delete the user with the provided ID.

if (!result) {
return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
}
If deletion fails (e.g., user not found), respond with 404.

res.status(httpStatus.NO_CONTENT).send();
If deletion is successful, respond with 204 No Content (indicates success with no response body).

});
Ends the deleteUser function.

module.exports = {
getUserById,
createUser,
updateUser,
deleteUser,
};
Exports the controllers so they can be used in the route definitions (e.g., in routes/user.routes.js).

## 📁 File: src/middlewares/validate.js

```js
// src/middlewares/validate.js

const Joi = require("joi");

const validate = (schema) => (req, res, next) => {
  const validSchema = ["params", "query", "body"].reduce((acc, key) => {
    if (schema[key]) acc[key] = schema[key];
    return acc;
  }, {});

  const data = ["params", "query", "body"].reduce((acc, key) => {
    if (req[key]) acc[key] = req[key];
    return acc;
  }, {});

  const { error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" }, abortEarly: false })
    .validate(data);

  if (error) {
    return res
      .status(400)
      .json({ message: "Validation error", details: error.details });
  }

  next();
};

module.exports = validate;
```

### ✅ Purpose

This middleware is a reusable validation function that uses Joi to validate incoming request data (req.params, req.query, req.body). It supports schemas for any of those sections and returns a 400 Bad Request if validation fails.

### 🔍 Full Code Review with Deep Explanation:

```js
const Joi = require("joi");
```

- Imports Joi, a powerful schema description and data validation library for JavaScript.
- You'll use Joi schemas to define what valid input should look like.

```js
const validate = (schema) => (req, res, next) => {
```

- This exports a middleware factory function.
- It takes a schema object (provided when using the middleware).
- Then returns a middleware function (req, res, next) — following the Express middleware pattern.

**🧠Note**: You’re passing the schema before the middleware is run — this allows different routes to define different validation schemas.

```js
const validSchema = ["params", "query", "body"].reduce((acc, key) => {
  if (schema[key]) acc[key] = schema[key];
  return acc;
}, {});
```

### 🛠️ What it's doing:

- It's iterating over the array ['params', 'query', 'body'].
- For each key, if a schema was defined for that part, it adds it to a new validSchema object.

**📌 Result**: You now have a Joi schema object that only includes what was defined for that route.
🔍 Example:
If the input schema is:

```js
{
  params: Joi.object({ id: customObjectIdValidator }),
  body: Joi.object({ name: Joi.string().required() })
}
```

Then validSchema becomes:

```js
{
  params: Joi.object(...),
  body: Joi.object(...)
}
```

```js
const data = ["params", "query", "body"].reduce((acc, key) => {
  if (req[key]) acc[key] = req[key];
  return acc;
}, {});
```

### 🔍 Step-by-Step Explanation:

#### ✅ const data = ...

- const: Declares a new constant named data.
- data: This will hold the result — an object containing valid request data sections.

### ✅ ['params', 'query', 'body']

- An array of strings.
- These strings correspond to the parts of the request object (req) that you may want to validate:
- req.params: route parameters (like /user/:id)
- req.query: query strings (like ?search=apple)
- req.body: request payload (for POST/PUT)

### ✅ .reduce((acc, key) => { ... }, {})

- .reduce() is a JavaScript array method that processes each element of the array and builds up a result — in this case, an object.
- (acc, key) => { ... }: the callback function used by reduce.
- Inside the callback:
  - acc: the accumulator, i.e., the object being built up as you go.
  - key: the current string from the array ('params', then 'query', then 'body').
  - {}: the initial value of the accumulator — an empty object.

### ✅ Inside the Callback Function:

```js
if (req[key]) acc[key] = req[key];
```

- req[key]: This accesses req.params, req.query, or req.body, depending on the current key.

```js
if (req[key]):
```

- Checks if the corresponding part of the request actually exists and is not undefined or null.
- Skips adding keys that aren’t present.

```js
acc[key] = req[key];:
```

- Adds that piece to the result object.
- E.g., if key === 'query' and req.query exists, it sets acc.query = req.query.

### ✅ return acc;

- Returns the updated accumulator so reduce() can pass it to the next iteration.
- If this line were missing, reduce wouldn’t work.

### 🧪 Example in Action:

Given this request:

```js
req = {
  params: { id: "123" },
  body: { name: "John" },
  // query is not present
};
```

- The array: ['params', 'query', 'body']

1. Iteration 1:
   key = 'params'
   req.params exists → acc.params = req.params

2. Iteration 2:
   key = 'query'
   req.query is undefined → skip

3. Iteration 3:
   key = 'body'
   req.body exists → acc.body = req.body

✅ Final result:

```js
data = {
  params: { id: "123" },
  body: { name: "John" },
};
```

### 🛠️ What it's doing:

- This collects the actual incoming request data into a data object. It grabs:
- req.params (e.g., /users/:id)
- req.query (e.g., /search?term=test)
- req.body (e.g., { "name": "John" } in POST/PUT)
- Only includes them if they exist.

**📌 Purpose**:
You're aligning the input data to match the structure of the validation schema.

```js
const { error } = Joi.compile(validSchema)
  .prefs({ errors: { label: "key" }, abortEarly: false })
  .validate(data);
```

### 🛠️ What it's doing:

- Joi.compile(validSchema):
- Compiles the combined schema (params, query, body) into a Joi validation object.
- .prefs({ errors: { label: 'key' }, abortEarly: false }):

- label: 'key': Error messages will label each field using the key name (like "name" must be a string).

- abortEarly: false: Joi will not stop at the first error. It collects all validation errors.

- .validate(data):Validates the actual request data (req.params, req.query, req.body) against the schema.

- Destructures the result to get the error, if any.

```js
if (error) {
  return res
    .status(400)
    .json({ message: "Validation error", details: error.details });
}
```

### 🛠️ What it's doing:

- If Joi returns an error, we:
- Respond with HTTP 400 Bad Request
- Include a generic message: 'Validation error'
- Include error.details (an array of Joi validation messages) in the response so the client knows exactly what was wrong.

### ✅ This helps the frontend or API consumer correct the input.

```js
next();
```

### ✅ If no validation errors:

- The request is valid.
- Passes control to the next middleware or route handler.

```js
module.exports = validate;
```

Exports the validate function so it can be used in your route files.

✅ Example Usage in a Route

```js
// routes/user.route.js
const express = require("express");
const Joi = require("joi");
const validate = require("../middlewares/validate");
const { objectId } = require("../validations/custom.validation");

const router = express.Router();

const getUserSchema = {
  params: Joi.object({
    userId: Joi.string().custom(objectId).required(),
  }),
};

router.get("/users/:userId", validate(getUserSchema), async (req, res) => {
  // You can safely assume req.params.userId is a valid ObjectId
  res.send("User fetched!");
});
```

## src/routes/user.controller.js

```js
const express = require("express");
const userController = require("../controllers/user.controller");
const validate = require("../middlewares/validate");
const userValidation = require("../validations/user.validation");

const router = express.Router();

router.get("/", userController.getAll);

// GET /api/users/:id
router.get("/:id", userController.getUserById);

// POST /api/users
router.post(
  "/",
  validate(userValidation.createUser),
  userController.createUser
);

// PUT /api/users/:id
router.put(
  "/:id",
  validate(userValidation.updateUser),
  userController.updateUser
);

// DELETE /api/users/:id
router.delete("/:id", userController.deleteUser);

module.exports = router;
```

```js
const express = require("express");
```

- Imports the Express framework, which is used to build web applications and APIs in Node.js.

```js
const userController = require("../controllers/user.controller");
```

- Imports the controller that contains the logic for handling user-related requests (like fetching, creating, updating, deleting users).

```js
const validate = require("../middlewares/validate");
```

- Imports a middleware function that performs request validation using schemas (usually with Joi, Yup, or another validation library).

```js
const userValidation = require("../validations/user.validation");
```

- Imports the user-specific validation rules/schemas, such as what's required for creating or updating a user.

```js
const router = express.Router();
```

- Creates a new router instance using Express. This router will define user-related routes.

```js
router.get("/", userController.getAll);
```

- Defines a route for GET /api/users
- Calls getAll method in the controller (though note: this method is not defined in the controller you previously shared — you may need to add it if it's missing).

```js
// GET /api/users/:id
router.get("/:id", userController.getUserById);
```

- Defines a route for GET /api/users/:id
- Calls the getUserById controller to fetch a single user by ID.

```js
router.post(
  "/",
  validate(userValidation.createUser),
  userController.createUser
);
```

- Defines a route for POST /api/users
- First, it runs validation using the createUser schema (likely to check things like name, email, etc.).
- Then, it calls the createUser controller to create a new user.

```js
router.put(
  "/:id",
  validate(userValidation.updateUser),
  userController.updateUser
);
```

- Defines a route for PUT /api/users/:id
- First, it validates the request body using the updateUser schema.
- Then, it calls the updateUser controller to update the specified user's data.

```js
router.delete("/:id", userController.deleteUser);
```

- Defines a route for DELETE /api/users/:id
- Calls the deleteUser controller to remove the user with the given ID.

```js
module.exports = router;
```

- Exports the router so it can be used in your main application (e.g., imported in app.js or server.js and used like app.use('/api/users', userRoutes)).
