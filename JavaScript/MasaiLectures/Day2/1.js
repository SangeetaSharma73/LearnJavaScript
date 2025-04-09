let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//for of loop

for (let i of arr) {
  console.log(i);
}
//1. This is automatically going to each element
//2. It is printing the values i=element,not the index

//for of loop
for (let i in arr) {
  console.log(i);
}

//1. this is automatically going to each element
//2. giving us the index in string format