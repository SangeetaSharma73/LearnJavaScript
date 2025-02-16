// Javascript is one of the most popular and widely used programming languages.

// ## What can you do with Javascript?

// - Add interactivity to webpages
// - Make full web/mobile apps with javascript
// - Desktop applications
// - Real-time networking applications
// - Command-line tools
// - Games
// - Backend services
// - Databases

// ## Where does Javascript code run?

// - JS was originally designed to run only in client-side **browsers**
//     - every browser has a j***avascript engine*** that can execute javascript code
//     - google chrome's JS engine is **V8**
//     - firefox's JS engine is **SpiderMonke**y
// - **Node** is a cross-platform environment; Using node we can execute Javascript code in any operating system (desktops & servers); Node uses google chrome's V8 engine to execute JS code literally anywhere.

// In other words, ***browsers*** and **n*ode*** provide a runtime environment for our Javascript code.

// ## What is the difference between JavaScript and ECMAScript?

// ECMAScript is just a specification. Javascript is a **programming language** that conforms to the specifications.

// An organization called **ECMA** is responsible for defining standards.

// 1997 started
// 2015 → ES6 (Many new features)
// 2016 → ES7
// 2017 → ES8

// JavaScript is a scripting or programming language that allows you to implement complex
// features on web pages — every time a web page does more than just sit there and
// display static information for you to look at —

// - displaying timely content updates,
// - interactive maps,
// - animated 2D/3D graphics,
// - scrolling video jukeboxes, etc.

// You can bet that JavaScript is probably involved.

// JavaScript enables you to create dynamically updating content, control multimedia,
// animate images, and pretty much everything else. (Okay, not everything, but it is
// amazing what you can achieve with a few lines of JavaScript code.)

// Node.js is an open-source, cross-platform, back-end JavaScript runtime environment
// that runs and executes JavaScript code outside a web browser. Node.js lets developers
// use JavaScript to write command-line tools and for server-side scripting.
// Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web
// application development around a single programming language, rather than a different
// languages for server-side and client-side scripts.

// Running Javascript Code

// node filename.js

// **Definition:** A variable is a container for storing data in JavaScript.

// **Declaration:** Variables are declared using the **`var`** keyword.

// **Naming Rules:** Variable names should start with a letter or underscore, followed by letters, numbers, or underscores.

var age = 25; //Declaring a variable named 'age' with a value of 25

// **Syntax:** You can also declare multiple variables in one statement as seen in the syntax
// below.

// **Multiple Variables Example:**

var a = 100,
  b = 200,
  c = 300;

// The data inside variables is not constant. This means the data inside a variable can
// be changed.
var a = 200;
a = 100;
//declare or define a variable called firstName
let firstName; 

// initialize or assign value to a variable
firstName = 'John'

// declare & initialize | define a variable and assign a value
let lastName = 'Smith';

// re-assign value to a variable
firstName = 'Will'

// Access or showing or logging or looking up the variable content
console.log(firstName, lastName)


// JS is a dynamically typed language. a dynamically typed language is a programming language in which the type of a variable is determined at runtime, not at compile time. 
// In dynamic type languages, you can change the type of a variable during the program's execution. This is in contrast to statically typed languages where variable types are explicitly declared and checked at compile time.
var x = 5; // x is now of type number
x = "Hello, World!"; // x is now of type string
x = [1, 2, 3]; // x is now an array


// ## Coding Challenge 1

// Write a JavaScript function that takes a variable `x` as an argument and returns its type. Do not use any built-in functions or methods to determine the type.

// ## Coding Challenge 2

// Write a JavaScript function that takes an array as an argument and returns a new array with the same elements, but with each element's type converted to a string. For example, if the input array is `[1, "hello", true]`, the output should be `["number", "string", "boolean"]`.

// ## Coding Challenge 3

// Write a JavaScript function that takes a variable `x` as an argument and checks if its type is "object". The function should return `true` if the type is "object", and `false` otherwise.