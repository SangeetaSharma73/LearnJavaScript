var name = "babita";
console.log("hi miss", name, "and How are you");
console.log("hi miss " + name + " and How are you");
console.log(`hi ${name} How are you`);

// Example 2: Expression Inclusion
// You can also include whole expressions.
// Without template literals:

var a = 5;
var b = 10;
console.log("The sum of a and b is " + (a + b) + ".");

// With template literals:

var a = 5;
var b = 10;
console.log(`The sum of a and b is ${a + b}.`);

// ### **Example 3: Multiline Strings**

// Template literals can span multiple lines.

// Without template literals:

var item = "apple";
var quantity = 5;
console.log(
  "You have " + quantity + " " + item + "s.\n" + "Please come again!"
);

var item = "apple";
var quantity = 5;
console.log(`You have ${quantity} ${item}s.
Please come again!`);

// ### **Example 4: Nesting Templates**

// You can even nest them within each other.
var isMember = true;
console.log(`The user is ${isMember ? `${name} (member)` : "not a member"}.`);




// if temperature is greater than or equal to 20, tell the user that the temperature at their city is 'HOT' else tell them that it is 'COLD'


// function generateWeatherGreeting(userName, temperature, city) {
//   // your code here
// }

// console.log(generateWeatherGreeting("Alice", 21, "Miami"));
// // expected output: Hey Alice! Miami is HOT today

// console.log(generateWeatherGreeting("John", 20, "Los Angeles"));
// // expected output: Hey John! Los Angles is HOT today

// console.log(generateWeatherGreeting("Emma", 19, "Seattle"));
// // expected output: Hey Emma! Seattle is COLD today 

// console.log(generateWeatherGreeting("Liam", 18, "Boston"));
// // expected output: Hey Liam! Boston is COLD today 