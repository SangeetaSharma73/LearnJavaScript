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
// function sayHello() {
//   console.log("Hello! ", this);
// }

// var john = {
//   name: "John Doe",
//   age: 30,
// };

// var james = {
//   name: "James Bond",
//   age: 30,
// };

// sayHello.call(james);
// sayHello.call(john);


//difference between call,apply and bind


// function introduce(language, country) {
//   console.log(
//     `Hello, my name is ${this.name}. I speak ${language} and I'm from ${country}.`
//   );
// }

// var john = { name: "John Doe" };
// var james = { name: "James Bond" };

// // Using call()
// introduce.call(john, "English", "USA");


// // Using apply()
// introduce.apply(james, ["French", "France"]);

// function greet() {
//   console.log(`Hello, my name is ${this.name}`);
// }

// var alice = { name: "Alice" };

// // Using bind()
// var boundGreet = greet.bind(alice);
// boundGreet(); // Calling the function later


//Que- 4

// var sayArrowHello = () => {
//   console.log("Arrow Hello ", this);
// };

// sayArrowHello();

// function sayRegularHello() {
//   console.log("Regular Hello ", this);
// }

// sayRegularHello();


// const person = {
//   name: "Rahul",
//   // this:this,
//   sayHello: () => {
//     console.log("Hello, my name is", this.name);
//   },
// };

// person.sayHello();
// console.log(person.this);


// var sayArrowHello = () => {
//   console.log("Arrow Hello ", this);
// };

// sayArrowHello();




var john = { name: "John Doe", age: 25 };

var mohan = { name: "John1 Doe", age: 24 };

var sayArrowHello = () => {
  console.log("Arrow Hello ", this);
};

function sayRegularHello() {
  console.log("Regular Hello ", this);
}

function sayRegularName() {
  console.log("My Regular name is ", this.name, this);
  sayRegularHello();
  sayArrowHello();
  var sayArrowGoodBye = () => {
    console.log("Arrow GoodBye ", this);
  };
  sayArrowGoodBye();
}

sayRegularName.call(john);
