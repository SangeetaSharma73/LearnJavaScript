const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "it is home page route", {
      "Content-Type": "text/html",
    });
    res.end("<h1>THis is Home Page</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>This is about page</h1>");
  } else if (req.url === "/api") {
    res.writeHead(200, "it is api page route", {
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        name: "siya",
        age: "22",
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end({ msg: "not found" });
  }
});
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
