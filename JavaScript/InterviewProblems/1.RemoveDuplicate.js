// 1. **Remove all duplicate elements from an array**
//     - **Sample Input:** `[1, 2, 2, 3, 4, 4, 5]`
//     - **Expected Output:** `[1, 2, 3, 4, 5]`

//tc => O(n)
//sc= O(n)
arr = [1, 2, 2, 3, 4, 4, 5];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] === undefined) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] += 1;
  }
}

let ans = [];
for (let key in obj) {
  ans.push(Number(key));
}

console.log(ans);

let ans1 = [];
for (let i = 0; i < arr.length; i++) {
  if (!ans1.includes(arr[i])) {
    ans1.push(arr[i]);
  }
}
console.log(ans1);

let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqueArr); // [1, 2, 3, 4, 5]

let unique = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) acc.push(curr);
  return acc;
}, []);
console.log(unique); // [1, 2, 3, 4, 5]
