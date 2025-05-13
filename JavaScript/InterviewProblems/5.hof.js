const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. Use `filter` to return only even numbers from `numbers`.

ans = nums.filter((ele) => ele % 2 === 0);
console.log(ans); //return arr

//2.Use map to square each number in numbers.
ans = nums.map((ele) => ele ** 2);
console.log(ans); //return arr

//3.Use reduce to calculate the sum of all elements in numbers.
ans = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(ans);

//4.
ans = nums.map((ele) => ele * 2).filter((ele) => ele > 10);

console.log(ans);

ans = nums.some((ele) => ele % 7 === 0);

console.log(ans);
