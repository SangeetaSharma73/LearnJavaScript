// Loops : Repeat an action a number of times
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");

// For loop
// for(initialExpression; conditionExpression; incrementExpression){
//   statements
// }

for (let i = 0; i < 5; i++) {
  console.log("Hello World");
}

// // While loop
// let i = 0; // external loop counter

// while (condition) {
//   statement
//   incrementExpression
// }

let i = 0;
while (i < 5) {
  console.log("Hello world");
  i++;
}

// Exercise: In the console, log all odd numbers in between 1 - 10

// do...while loop

// let i = 0; // external loop counter

// do {
//   if (i % 2 !== 0) { console.log(i) } // Statement executed at least once
//   i++; // increment expression
// } while (i <= 10); // condition expression

// Being aware of infinite loop 😲; if you forget to place an increment expression in a while or do..while loop; if you write an infinite condition in for loop;

// **`for...in`**

// **Iterating** over the **properties of an object** or **elements in an array**

// for (let propertyVariable in ObjectOrArray) {
//   // statement
// }

const student = {
  firstName: "Vivek",
  rank: 1,
  age: 36,
};

for (let key in student) {
  console.log(key);
  console.log(student[key]);
}

const subjects = ["javascript", "html", "css"];

for (let index in subjects) {
  console.log(index);
  console.log(subjects[index]);
}

// for...of
// Iterating over arrays & not concerned about index

for (let subject of subjects) {
  console.log(subject);
}

let movie = {
  title: "movie title",
  releaseYear: 2020,
  rating: 4.5,
  director: "director name",
};

// Nested Loops
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }
  console.log("---"); // separator between tables
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("---"); // separator between tables
}




// 1 
// 2 2 
// 3 3 3
// 4 4 4 4

for(let i=1;i<=4;i++){
    ans =""
    for(let j=1;j<=i;j++){
        ans+=i+' '
    }
    console.log(ans)
}