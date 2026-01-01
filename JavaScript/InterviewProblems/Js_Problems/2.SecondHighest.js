// 2. **Find the second highest number in a given array**
//     - **Sample Input:** `[10, 5, 8, 20, 20]`
//     - **Expected Output:** `10`

//1. tc = O(nlogn) , sc = O(n)
let arr = [10, 5, 8, 20, 20];
arr.sort();
maxVal = Math.max(...arr);
// console.log(maxVal);
notMaxValues = arr.filter((e) => e !== maxVal);
// console.log(notMaxValues);
secondLargest = Math.max(...notMaxValues);
console.log(secondLargest);

//2.
first = -Infinity;
sec = -Infinity;

for (let val of arr) {
  if (first < val) {
    sec = first;
    first = val;
  } else if (sec < val && val != first) {
    sec = val;
  }
}
console.log(sec);
