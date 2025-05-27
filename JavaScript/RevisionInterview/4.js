// 4.  **Reverse a given string without using built-in reverse methods**
//     - **Sample Input:** `"hello world"`
//     - **Expected Output:** `"dlrow olleh"`

let string = "hello world";
let ans = "";
for (let i = string.length - 1; i >= 0; i--) {
  ans += string[i];
}
console.log(ans.trim());

ans1 = string.split(" ").reverse().join(" ");
console.log(ans1);

function greet(name, hema) {
  console.log(`Hello ${name} ${hema}`);
}
setTimeout(greet, 1000, "John", "hema");

let foo = "bar";
function test() {
  console.log(foo);
  var foo = "baz";
}
test(); // it is because foo is defined with var keyword and it is hoisted to it's lexical scope and initialize with undefined and let is block scope that's why the value of foo is not bar
