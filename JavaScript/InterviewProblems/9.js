//1. second largest

//i- using sorting and filtering
let arr = [1, 5, 3, 4, 5];

function secondLargest(arr) {
  arr.sort((a, b) => b - a);
  newArr = arr.filter((ele) => ele !== arr[0]);

  return newArr.length > 0 ? newArr[0] : null;
}

ans = secondLargest(arr);
// console.log(ans);

function secLargest(arr) {
  let unique = [...new Set(arr)];
  if (unique.length < 2) return null;
  return unique[1];
}

ans = secLargest(arr);
// console.log(ans);

function secLar(arr) {
  let first = -Infinity;
  let sec = -Infinity;
  for (let num of arr) {
    if (first < num) {
      sec = first;
      first = num;
    } else if (sec < num && num < first) {
      sec = num;
    }
  }
  return sec !== -Infinity ? sec : null;
}

ans = secLar(arr);
console.log(ans);
