//exploring crypto module

const crypto = require("crypto");

/*

Key Functions in crypto
1.1 Hashing
Used to generate fixed-size hash values from data.

crypto.createHash(): Creates a hash object.
Common algorithms: md5, sha256, sha512.
*/
const hash = crypto.createHash("sha256");
hash.update("Hello, World!");
console.log(hash.digest("hex")); // Prints hashed value in hexadecimal

/*
1.2 HMAC (Hash-based Message Authentication Code)
Generates a hash with a secret key for added security.

crypto.createHmac(): Creates an HMAC object.

*/

const hmac = crypto.createHmac("sha256", "secret-key");
hmac.update("Hello, World!");
console.log(hmac.digest("hex")); // Prints HMAC value

/*
1.3 Encryption and Decryption
- crypto.createCipheriv(): Creates a cipher for encryption.
- crypto.createDecipheriv(): Creates a decipher for decryption
*/

const key = crypto.randomBytes(32); // 32-byte key
const iv = crypto.randomBytes(16); // Initialization vector
const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

let encrypted = cipher.update("Hello, World!", "utf-8", "hex");
encrypted += cipher.final("hex");
console.log("Encrypted:", encrypted);

const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf-8");
decrypted += decipher.final("utf-8");
console.log("Decrypted:", decrypted);

/*
1.4 Random Bytes
Generates cryptographically secure random data.

- crypto.randomBytes()
*/

crypto.randomBytes(16, (err, buffer) => {
  if (err) throw err;
  console.log("Random bytes:", buffer.toString("hex"));
});

/*
1.5 Key Pair Generation
Creates public and private key pairs.

- crypto.generateKeyPair()
*/

// crypto.generateKeyPair(
//   "rsa",
//   {
//     modulusLength: 2048,
//     publicKeyEncoding: { type: "spki", format: "pem" },
//     privateKeyEncoding: { type: "pkcs8", format: "pem" },
//   },
//   (err, publicKey, privateKey) => {
//     if (err) throw err;
//     console.log("Public Key:", publicKey);
//     console.log("Private Key:", privateKey);
//   }
// );


/*


2. Node.js Stream Module
Streams handle reading or writing data continuously. They are efficient for large files or real-time data.

2.1 Types of Streams
Readable: Data can be read (e.g., file read).
Writable: Data can be written (e.g., file write).
Duplex: Both readable and writable (e.g., TCP sockets).
Transform: Data can be modified as it is read/written (e.g., compression).

*/

/*
2.2 Common Stream Functions

Readable Streams : 

Stream.readable.pip(destination): Pipes readable stream to a writable stream.


*/

const fs=require('fs');

const readable= fs.createReadStream('test_rename.txt');
readable.pipe(process.stdout);


/*
Writable Streams
stream.writable.write(chunk): Writes data to the stream.

*/ 

const writable = fs.createWriteStream('test_rename.txt');
writable.write('Hello,Stream\n');
writable.end();


/*
Transform Streams
- Used for data modification during streaming.
*/ 

const { Transform } = require('stream');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

process.stdin.pipe(transformStream).pipe(process.stdout);
// Converts input to uppercase and outputs it


/*Handling Errors
Always handle errors in streams.*/

readable.on('error',(err)=>{
    console.log('Stream Error',err);
});

`3. Node.js OS Module
The os module provides utilities for interacting with the operating system.

Key Functions in os
3.1 System Information
os.type(): Returns the OS type.
os.platform(): Returns the platform.
os.arch(): Returns the CPU architecture.
`

const os = require("os");

console.log("OS Type:", os.type());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());


/*
3.2 CPU Information
- os.cpus(): Returns details of each CPU/core.
*/ 

const cpus = os.cpus();
console.log("CPU Info:", cpus);
console.log("Number of CPUs:", cpus.length);


/*
3.3 Memory Information
- os.totalmem(): Total system memory.
- os.freemem(): Available free memory.
*/

console.log("Total Memory:", os.totalmem() / 1024 / 1024, "MB");
console.log("Free Memory:", os.freemem() / 1024 / 1024, "MB");


/*
3.4 Network Interfaces
- os.networkInterfaces(): Returns details of network interfaces
*/

const networkInterfaces = os.networkInterfaces();
console.log("Network Interfaces:", networkInterfaces);


/*
3.5 Uptime and Home Directory
os.uptime(): System uptime in seconds.
os.homedir(): Path of the home directory.
*/ 

console.log("Uptime:", os.uptime(), "seconds");
console.log("Home Directory:", os.homedir());
