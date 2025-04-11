// let user = {
//   name: "vivek",
  
  
//   sayHello: function () {
//     console.log("Hello");
//     // console.log(Object.prototype);
//   },
 
// };

// let workInfo = {
//   salary: 100000,
//   work: function () {
//     console.log("Working");
//   },
// };

// Object.setPrototypeOf(workInfo, user);

// workInfo.work(); // "Working"
// workInfo.sayHello(); // "Hello"


function Introduce(greeting) {
  let greet = greeting;
  let name = this.name;
  let age = this.age;

  console.log(`${greet}! I am ${name} & I am ${age} years old.`);
}

Introduce(); // undefined! I am  & I am undefined years old.