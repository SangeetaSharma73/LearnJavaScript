//Array.map

arr = [1,2,3,5,8]
let square = arr.map((ele)=>ele**2);
console.log(square);

let evenNumber = arr.filter((ele)=>ele%2==0);
console.log(evenNumber);


let sumVal = arr.reduce((acc,val)=>acc+val,0);
console.log(sumVal);

let sorted = arr.sort((a,b)=>a-b);
console.log(sorted)