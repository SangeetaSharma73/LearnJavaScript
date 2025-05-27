// 1. **Remove all duplicate elements from an array**
//     - **Sample Input:** `[1, 2, 2, 3, 4, 4, 5]`
//     - **Expected Output:** `[1, 2, 3, 4, 5]`

let arr = [1, 2, 2, 3, 4, 4, 5];

let ans = {};
for (let i = 0; i < arr.length; i++) {
  if (ans[arr[i]] === undefined) {
    ans[arr[i]] = 1;
  } else {
    ans[arr[i]] += 1;
  }
}
// console.log(ans);

let ansArr = [];
for (let key in ans) {
  ansArr.push(parseInt(key));
}

// console.log(ansArr.join(" "));

//2 . tc=O(nlogn) sc=O(n)
arr.sort();
let ansAr = [];
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] !== arr[i + 1]) {
    ansAr.push(arr[i]);
  } else {
    continue;
  }
}
console.log(ansAr);
