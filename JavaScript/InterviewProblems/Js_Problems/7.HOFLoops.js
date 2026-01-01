const users = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 17, email: "bob@example.com" },
  { name: "Carol", age: 30, email: "carol@example.com" },
  { name: "Dave", age: 22, email: "dave@example.com" },
  { name: "Eve", age: 19, email: "eve@example.com" },
];

//1. Find all users who are above 18 years old.
for (let obj of users) {
  if (obj.age > 18) {
    console.log(obj);
  }
}

//2.Sort users by the age property in ascending order.

users.sort((a, b) => a.age - b.age);
console.log(users);

//3. Create a new array containing only the name values of all users.
let ans = [];
for (let obj of users) {
  ans.push(obj.name);
}
console.log(ans);

//4. Check if there exists any user with the email "dave@example.com".

ans = users.some((obj) => obj.email === "dave@example.com");
console.log(ans);

//5.Calculate the average age of all users.
totalAge = users.reduce((acc, curr) => acc + curr.age, 0);
console.log(totalAge / users.length);

//6. Group users by age group, under 21, above 25, in between. (can be dynamic as well, for example group users by city(where no of cities can be dynamic))
// let output = {
//   under21: [
//     { name: "Bob", age: 17, email: "bob@example.com" },
//     { name: "Eve", age: 19, email: "eve@example.com" },
//   ],
//   inBetween: [
//     { name: "Alice", age: 25, email: "alice@example.com" },
//     { name: "Dave", age: 22, email: "dave@example.com" },
//   ],
//   above25: [{ name: "Carol", age: 30, email: "carol@example.com" }],
// };

let output = { under21: [], inBetween: [], above25: [] };
for (let obj of users) {
  if (obj.age < 21) {
    output.under21.push(obj);
  } else if (obj.age > 21 && obj.age < 25) {
    output.inBetween.push(obj);
  } else {
    output.above25.push(obj);
  }
}
console.log(output);
