//custom modules
const {add,sub,mul,div}= require('./index');

console.log("Addition: ",add(10,20));
console.log("Subtraction: ", sub(10, 20));
console.log("Division: ", mul(10, 20));
console.log("Addition: ", div(10, 20));


// inbuilt modules

//crypto module
const crypto = require("crypto"); //importing the inbuilt crypto module

const pass = "siya@7352";
const hashedPass = crypto.createHash("sha256").update(pass).digest("hex");

console.log(hashedPass);

//os module
const os = require("os");
console.log(os.cpus()[0]);

console.log(os.freemem());

console.log(os.hostname());

console.log(os.totalmem());

console.log(os.userInfo());