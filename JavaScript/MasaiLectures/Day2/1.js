//1. for loop
for(let i=0;i<5;i++){
    console.log(i);
}

//2. while loop
i=0
while (i<5){
    console.log(i);
    i++
}

//3. do while loop
i=0
do{
    console.log('hi');
    i++
}while(i<5)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//4. for of loop

for (let i of arr) {
  console.log(i);
}
//1. This is automatically going to each element
//2. It is printing the values i=element,not the index

//5. for of loop
for (let i in arr) {
  console.log(i);
}

//1. this is automatically going to each element
//2. giving us the index in string format

let obj = {
  name: "John",
  age: 20,
  city: "New York",
};

for (let i in obj) {
  console.log(i, obj[i]);
}

//Higher Order Functions: higher order function can take a function as a parameter and hof can return a function

//6. forEach  HOF
//forEach does not return anything if we return something it will show undefined this is default value. It is used to perform any operation on the individual elements of the array.
let arr2 = [1, 2, 3, 4];
let newArr = arr2.forEach(function (ele) {
  console.log(ele * 10);
  // return ele*10
});

// console.log(newArr);

//7. map
//map return a new array and it is used to transform the elements of the array

let new_arr = arr.map(function (ele) {
  return ele * 10;
});
console.log(new_arr);

//8. filter : filter return a new array and it is used to filter the elements of the array

let filter_arr=arr.filter(function (ele){
    return ele%2==0;
});
console.log(filter_arr);

//9. reducer

//array.reduce(callback,initialValue)
// callback->accumulator
// initialValue->current value

arr=[2,3,4]
let s=arr.reduce((acc,currVal)=>{
  return acc+currVal;
},0);

console.log(s);