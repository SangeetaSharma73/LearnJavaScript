console.log("Start");

Promise.resolve().then(() => {
  console.log(user.name); // ❌ ERROR: user is not defined
});

setTimeout(() => {
  console.log("Timeout executed");
}, 0);

console.log("End");
