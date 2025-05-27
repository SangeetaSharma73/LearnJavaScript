// Check if string a is a substring of string b
// Sample Input:
const a = "test";
const b = "This is a test string";
// Expected Output: true

//tc=O(n)
console.log(b.includes(a));

//tc=O(N),sc=O(N)
ans = b.split(" ");
for (let i = 0; i < ans.length; i++) {
  if (ans[i] === a) {
    console.log(true);
    break;
  }
}
