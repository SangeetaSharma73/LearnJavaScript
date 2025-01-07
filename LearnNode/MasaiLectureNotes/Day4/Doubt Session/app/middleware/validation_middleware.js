const POST_MESSAGE_FORMAT = require("../constant/message-format");

function validation_middleware(req, res, next) {
  //get the data from the body
  //validate each field
  const body = req.body;
  //   console.log(typeof body);
  for (let key in body) {
    // console.log(POST_MESSAGE_FORMAT[key]);
    const key_arr= POST_MESSAGE_FORMAT[key].split(",");
    if (key_arr[0] == "number") {
      console.log(key);
      console.log(typeof body[key] == "number");
    } else if (key_arr[0] == "string") {
        console.log(body[key]);
      console.log(typeof body[key] == POST_MESSAGE_FORMAT[key]);
    }
     else if (key_arr[0] == "object") {
      try{
        console.log(body[key]);
        console.log(Array.isArray(body[key]));
      }catch(e){
        console.log(e);
        res.send(400);
      }
    }
  }
  next();
}
module.exports = validation_middleware;
