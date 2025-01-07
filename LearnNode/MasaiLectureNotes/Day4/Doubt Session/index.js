const express = require("express");
const fs = require("fs");
const validation_middleware = require("./app/middleware/validation_middleware");
const app = express();
const PORT = process.env.port || 3000;
app.use(express.json());

/*
{
"ID":"number",
"Name":"string",
"Rating":"number",
"Description":"string",
"Genre":"string",
"Cast":"array of string"
}
*/
app.get("/",(req,res)=>{
  res.status(200).json({message:"data validated"});
})

app.post("/", validation_middleware, (req, res) => {
  res.status(200).json({ message: "data validated" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
