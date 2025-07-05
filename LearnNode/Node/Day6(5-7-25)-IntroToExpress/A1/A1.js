const express = require("express"); //imports the Express framework

const PORT = 5000; //defines which port the server will listen on

const app = express(); //creates an Express application instance
//this app handles your routing and responses

// handles a GET request to the root (/)
// responds with HTML
// Express automatically sets Content-Type: text/html
app.get("/", (req, res) => {
  res.send("<h1>Welcome into the Home Page</h1>");
});

// handles /contact
// responds with HTML
app.get("/contact", (req, res) => {
  res.send("<h1>Hi, Contact us on this page</h1>");
});

// handles /api
// responds with JSON
// .status(200) explicitly sets HTTP status 200 (you could omit it since it defaults to 200)
// .json() automatically sets Content-Type: application/json
app.get("/api", (req, res) => {
  res.status(200).json({ name: "siya", age: 24 });
});

// starts the server
// prints the listening address
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
