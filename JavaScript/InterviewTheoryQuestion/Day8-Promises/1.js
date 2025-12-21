// Promise.resolve().then(() => {
//   console.log("Microtask 1");
//   setTimeout(() => {
//     console.log("Macrotask 1");
//   }, 1000);
// });

// Promise.resolve().then(() => {
//   console.log("micro 2 ");
// }, 2000);

// Microtask 1
// micro 2
// Macrotask 1

//🧪 Example 4: Macrotask creates Microtasks
// setTimeout(() => {
//   console.log("4.Macrotask 1");
//   setTimeout(() => {
//     console.log("4.Macrotask 2");
//   }, 0);
//   Promise.resolve().then(() => {
//     console.log("4.Microtask inside macrotask");
//   });
// }, 0);

// console.log("Start");

// Promise.resolve().then(() => {
//   console.log(user.name); // ❌ ERROR: user is not defined
// });

// setTimeout(() => {
//   console.log("Timeout executed");
// }, 0);

// console.log("End");
