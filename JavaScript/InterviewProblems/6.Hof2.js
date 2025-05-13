const users = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 17, email: "bob@example.com" },
  { name: "Carol", age: 30, email: "carol@example.com" },
  { name: "Dave", age: 22, email: "dave@example.com" },
  { name: "Eve", age: 19, email: "eve@example.com" },
];

//1. Find all users who are above 18 years old.

let ans = [];
for (let obj of users) {
  if (obj.age > 18) {
    ans.push(obj.name);
  }
}

console.log(ans);

//2. Sort users by the age property in ascending order.
ans = users.sort((a, b) => a.age - b.age);
console.log(ans);

//3.Create a new array containing only the name values of all users.
// let ans1 = [];
// for (let obj of users) {
//   ans1.push(obj.name);
// }
// console.log(ans1);
let ans1 = users.map((user) => user.name);

console.log(ans1);

//4. Check if there exists any user with the email "dave@example.com".
let ans2 = users.some((user) => user.email == "dave@example.com");
console.log(ans2);

//5.Calculate the average age of all users.
let s = users.reduce((sum, user) => {
  return sum + user.age;
}, 0);
console.log(s / users.length);

//6.Group users by age group, under 21, above 25, in between. (can be dynamic as well, for example group users by city(where no of cities can be dynamic))
let output = {
  under21: [],
  inBetween: [],
  above25: [],
};

users.forEach((user) => {
  if (user.age < 21) {
    output.under21.push(user);
  } else if (user.age <= 25) {
    output.inBetween.push(user);
  } else {
    output.above25.push(user);
  }
});
console.log(output);
