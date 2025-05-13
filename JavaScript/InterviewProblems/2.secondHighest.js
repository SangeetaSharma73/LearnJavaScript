// 2. **Find the second highest number in a given array**
//     - **Sample Input:** `[10, 5, 8, 20, 20]`
//     - **Expected Output:** `10`

arr = [10, 5, 8, 20, 20];
arr.sort((a, b) => a - b);
max = Math.max(...arr);
newArr = arr.filter((ele) => ele != max);
secMax = Math.max(...newArr);
// console.log(secMax);

// TC: O(n log n) – due to sorting
// SC: O(n) – using Set to remove duplicates
function secLargest(arr) {
  let sorted = [...new Set(arr)].sort((a, b) => b - a);
  return sorted.length > 2 ? sorted[1] : null;
}
// console.log(secLargest(arr));

//3.
// TC: O(n)
// SC: O(1) – constant space
ft = -Infinity;
sc = -Infinity;
for (let num of arr) {
  if (num > ft) {
    sc = ft;
    ft = num;
  } else if (sc < num && num !== ft) {
    sc = num;
  }
}
console.log(sc === -Infinity ? null : sc);
