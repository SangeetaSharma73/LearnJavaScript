// console.log(a); //undefined because of hoisting
// var a = 10;

// function outer() {
//   let a = 10;
//   return function inner() {
//     console.log(a);
//   };
// }
// outer()(); //output:10 because of closure it remember the outer scope variable value if it already done the invoke

console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
