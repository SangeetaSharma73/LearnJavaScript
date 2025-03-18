// //1st question
// function sayGoodbye() {
//   console.log("Good bye! ", this);
// }

// function sayHello() {
//   console.log("Helloo! ", this);
//   sayGoodbye();
// }

// sayHello();


//2. Question
// function sayHello() {
//   console.log("Hello! from ", this.name);
// }

// var john = {
//   name: "John Doe",
//   age: 30,
//   sayName: function () {
//     // this.age = 35;
//     console.log("My name is ", this.name);
//   },
//   sayHello: sayHello,
// };
// // console.log(john.sayHello());
// // console.log(john.sayName())
// var james = {
//   name: "James Bond",
//   age: 27,
//   sayName: function () {
//     console.log("My name is ", this.name);
//   },
//   sayHello: sayHello,
// };

// john.sayName();
// john.sayHello();

// james.sayName();
// james.sayHello();


//3. question
function sayHello() {
  console.log("Hello! ", this);
}

var john = {
  name: "John Doe",
  age: 30,
};

var james = {
  name: "James Bond",
  age: 30,
};

sayHello.call(james);
sayHello.call(john);
