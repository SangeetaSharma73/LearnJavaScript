// Check if string a is a substring of string b
// Sample Input:
const a = "test";
const b = "This is a test string";

//1. includes
// ✅ Time Complexity: O(n)
// ✅ Space Complexity: O(1)
console.log(b.includes(a));

//2.indexOf
// ✅ Time Complexity: O(n)
// ✅ Space Complexity: O(1)
ans = b.indexOf(a) !== -1;
console.log(ans);

//using substring
