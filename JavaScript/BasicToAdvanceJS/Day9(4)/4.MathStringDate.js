// ### Math

// `Math` is a built-in object that has properties and methods for mathematical constants and functions. `Math` is not a constructor. All properties and methods of `Math` are static & we do not need to use the `new` keyword to use `Math`

Math.floor(45.95); //  45
console.log(Math.ceil(7.004)); // 8
console.log(Math.max(1, 3, 2)); // 3
console.log(Math.min(2, 3, 1)); // 1
console.log(Math.random());



// ### String

// The `String` object is used to represent and manipulate a sequence of characters. Strings can be created as primitives, from string literals, or as objects, using the `String()` **constructor**.


const string1 = "A string primitive or literal";

const string4 = new String("A String object");


// Javascript engine internally wraps a String primitive with a String object. String primitives and string objects can be used interchangeably in most situations.


// string1.length;
// string1[0];
// string1.includes("or");
// string1.startsWith("A string");
// string1.endsWith("l");
// string1.indexOf("or");
// string1.replace("or", "and");
// string1.toUpperCase();
// string1.toLowerCase();
// string1.trim();
// string1.split(" ");

let string= " this is my string "
console.log(string.length);
console.log(string[1]);
console.log(string.includes("or"));
console.log(string.startsWith(' '));
console.log(string.endsWith(" "));
console.log(string.indexOf("t"));
console.log(string.replace("t",'r'));
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.trim());
console.log( string.split(" "))

let name = "Vivek";
let balance = 100000;

// console.log('Hello \'Vivek\' \n' +
//              'Your Balance is 100000'
//            );

console.log("Hello '" + name + "' \n" + "Your Balance is " + balance + ".");

console.log(`Hello '${name}'
Your Balance is ${balance}.`);


// ### Date constructor

// The Date constructor in JavaScript is used to work with dates and times. It allows you to create, manipulate, and format dates in your code. As a beginner, understanding how to use the Date object is crucial for many programming tasks, from scheduling to data logging.


// ## Creating a Date Object

// There are four main ways to create a new Date object:

// 1. **Current Date and Time**


let now = new Date();
console.log(now); // Outputs the current date and time

// Specific Date and Time (String Format)
let specificDate = new Date("2023-09-15T12:30:00");
console.log(specificDate);



// Specific Date and Time (Number Format)
// new Date(year, month, day, hour, minute, second, millisecond)
// Note: month is 0-indexed (0 = January, 11 = December)
let anotherDate = new Date(2023, 8, 15, 12, 30, 0);
console.log(anotherDate);


// Unix Timestamp (milliseconds since January 1, 1970)

let unixDate = new Date(1631700600000);
console.log(unixDate);




// ## Getting Date Components

// Once you have a Date object, you can extract various components:
let date = new Date();

console.log(date.getFullYear());    // e.g., 2023
console.log(date.getMonth());       // 0-11 (0 = January)
console.log(date.getDate());        // 1-31
console.log(date.getDay());         // 0-6 (0 = Sunday)
console.log(date.getHours());       // 0-23
console.log(date.getMinutes());     // 0-59
console.log(date.getSeconds());     // 0-59
console.log(date.getMilliseconds()); // 0-999




```jsx

```

// ## Setting Date Components

// You can also set individual components of a date:

```jsx
let date = new Date();

date.setFullYear(2024);
date.setMonth(11);  // December
date.setDate(25);
date.setHours(12);
date.setMinutes(0);
date.setSeconds(0);

console.log(date); // Christmas 2024 at noon
```