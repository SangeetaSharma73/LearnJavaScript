const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/signup") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`<html>
  <body>
    <h1>SIgnup form</h1>
    <form action="/signup" method="POST">
      <label>Username:</label>
      <input type="text" name="Username" required />
      <br />
      <label>Password:</label>
      <input type="text" name="Password" required />
      <br />
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
    
    `);
  } else if (req.method === "POST" && req.url === "/signup") {
    let body = "";
    req.on("data", (chunk) => {
        console.log(typeof(chunk));
      body += chunk;
    });
    req.on("end", () => {
      const formData = new URLSearchParams(body);
      const getUsername = formData.get("Username");
      const getPass = formData.get("Password");
      const userEntry = `Username: ${Username} , Password:${Password}`;
      fs.appendFile("user.txt", userEntry, (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end("error saving user data");
        } else {
          res.writeHead(200, { "content-type": "html/text" });
          res.end("thank you for signup");
        }
      });
    });
  }
});


server.listen(3030,()=>{
    console.log("server is running on http://localhost:3030");
})