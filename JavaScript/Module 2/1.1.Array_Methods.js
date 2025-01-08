// 1.push(): Adds one or more elements to the end of an array and returns the new length.

const array = [1, 2, 3];
const newLength = array.push(4, 5);
console.log('push',array); // Output: [1, 2, 3, 4, 5]
console.log(newLength); // Output: 5

let arr=[4,3]
let len=arr.push(5,6,7,8)
console.log(arr,len)

//Mutator Methods:

//2.pop(): Removes the last element from an array and returns that element
const array1 = [1, 2, 3];
const lastElement = array1.pop();
console.log('pop',array1); // Output: [1, 2]
console.log(lastElement); // Output: 3

//3.shift(): Removes the first element from an array and returns that element.
const array2 = [1, 2, 3];
const firstElement = array2.shift();
console.log('shift',array2); // Output: [2, 3]
console.log('shifted ele',firstElement); // Output: 1

//4.unshift(): Adds one or more elements to the beginning of an array and returns the new length.
const array3 = [2, 3];
const newLength3 = array3.unshift(0, 1);
console.log('unshift',array3); // Output: [0, 1, 2, 3]
console.log(newLength3); // Output: 4

//**5.splice(): Adds or removes elements from an array.
const array4 = [1, 2, 3, 4, 5];
const removed = array4.splice(2, 2, 6, 7);
console.log(array4); // Output: [1, 2, 6, 7, 5]
console.log(removed); // Output: [3, 4]

// Accessor Methods:

//6.concat(): Combines two or more arrays and returns a new array.
const arr1 = [1, 2];
const arr2 = [3, 4];
const newArray = arr1.concat(arr2);
console.log(newArray); // Output: [1, 2, 3, 4]


//7.includes(): Determines whether an array includes a certain element, returning true or false.
const array5 = [1, 2, 3];
const includesTwo = array5.includes(2);
console.log(includesTwo); // Output: true

//8.indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
const array6 = [1, 2, 3];
const index = array6.indexOf(2);
console.log(index); // Output: 1

//9.join(): Joins all elements of an array into a string.
const array7 = [1, 2, 3];
const joinedString = array7.join('-');
console.log(joinedString); // Output: "1-2-3"

//10.slice(): Returns a shallow copy of a portion of an array into a new array.
const array8 = [1, 2, 3, 4, 5];
const slicedArray = array8.slice(1, 4);
console.log(slicedArray); // Output: [2, 3, 4]

//11.toString(): Returns a string representing the array.
const array9 = [1, 2, 3];
const string = array9.toString();
console.log(string); // Output: "1,2,3"

//12.toLocaleString(): Returns a localized string representing the array.
const array10 = [1, 2, 3];
const localizedString = array10.toLocaleString('en', { style: 'currency', currency: 'USD' });
console.log(localizedString); // Output: "$1.00, $2.00, $3.00"
let a=[4,5,6]
let locallized=a.toLocaleString('en',{ style: 'currency', currency: 'INR'})
console.log(locallized)

//13.lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.
const array11 = [1, 2, 3, 2, 1];
const lastIndex = array11.lastIndexOf(2);
console.log(lastIndex); // Output: 3

// Iteration Methods:
//14.forEach(): Executes a provided function once for each array element.
const array12= [1, 2, 3];
array12.forEach(element => console.log(element * 2));
// Output:
// 2
// 4
// 6

//15.map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
const array13 = [1, 2, 3];
const doubledArray = array13.map(element => element * 2);
console.log(doubledArray); // Output: [2, 4, 6]

//16.filter(): Creates a new array with all elements that pass the test implemented by the provided function.
const array14 = [1, 2, 3, 4, 5];
const filteredArray = array14.filter(element => element % 2 === 0);
console.log(filteredArray); // Output: [2, 4]

//** 17.reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
const array15 = [1, 2, 3, 4];
const sum = array15.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10

//18.reduceRight(): Executes a reducer function on each element of the array (from right-to-left), resulting in a single output value.
const array16 = ['a', 'b', 'c'];
const reversedString = array16.reduceRight((accumulato, currentValue) => accumulato + currentValue);
console.log(reversedString); // Output: 'cba'

//19.some(): Tests whether at least one element in the array passes the test implemented by the provided function.
const array17 = [1, 2, 3, 4, 5];
const hasEven = array17.some(element => element % 2 === 0);
console.log(hasEven); // Output: true

//20.every(): Tests whether all elements in the array pass the test implemented by the provided function.
const array18 = [2, 4, 6, 8, 10];
const allEven = array18.every(element => element % 2 === 0);
console.log(allEven); // Output: true

// Searching and Sorting Methods:

//21.find(): Returns the first element in the array that satisfies the provided testing function.
const array19 = [1, 2, 3, 4, 5];
const firstEven = array19.find(element => element % 2 === 0);
console.log(firstEven); // Output: 2

//22.findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.
const array20 = [1, 2, 3, 4, 5];
const firstEvenIndex = array20.findIndex(element => element % 2 === 0);
console.log(firstEvenIndex); // Output: 1

//23.sort(): Sorts the elements of an array in place and returns the sorted array.
const array21 = [3, 1, 2];
array21.sort();
console.log(array21); // Output: [1, 2, 3]

//24.reverse(): Reverses the order of the elements of an array in place.
const array22 = [1, 2, 3];
array22.reverse();
console.log(array22); // Output: [3, 2, 1]

//Utility Methods:
//25.isArray(): Determines whether the passed value is an Array.
console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray("not an array")); // Output: false

//26.**copyWithin(): Copies a sequence of elements within the array to the position starting at target.
const array23= [1, 2, 3, 4, 5];
array.copyWithin(0, 3);
console.log(array23); // Output: [4, 5, 3, 4, 5]


//27.fill(): Fills all the elements of an array from a start index to an end index with a static value.
const array24 = [1, 2, 3, 4, 5];
array.fill(0, 1, 3);
console.log(array24); // Output: [1, 0, 0, 4, 5]

//28.flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const array25= [1, 2, [3, 4, [5, 6]]];
const flattenedArray = array25.flat(2);
console.log('flat',flattenedArray); // Output: [1, 2, 3, 4, 5, 6]


//29.flatMap(): Maps each element using a mapping function, then flattens the result into a new array.
const array26 = [1, 2, 3];
const mappedArray = array26.flatMap(x => [x, x * 2]);
console.log(mappedArray); // Output: [1, 2, 2, 4, 3, 6]

//30.**from(): Creates a new, shallow-copied Array instance from an array-like or iterable object.
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
const newArray1 = Array.from(arrayLike);
console.log(newArray1); // Output: ['a', 'b']

//31.keys(): Returns a new Array Iterator object that contains the keys for each index in the array.
const array27 = ['a', 'b', 'c'];
const iterator1 = array27.keys();
for (const key of iterator1) {
  console.log(key); // Output: 0, 1, 2
}

//32.values(): Returns a new Array Iterator object that contains the values for each index in the array.
const array28 = ['a', 'b', 'c'];
const iterator2 = array28.values();
for (const value of iterator2) {
  console.log(value); // Output: 'a', 'b', 'c'
}

//33.entries(): Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const array29 = ['a', 'b', 'c'];
const iterator = array29.entries();
for (const entry of iterator) {
  console.log(entry); // Output: [0, 'a'], [1, 'b'], [2, 'c']
}

//splice- arr.splice(start_index,delete_element,add_element)
let arr15=[1,2,3,4,5]
// x=arr15.splice(2,3,7,8,9)
// x=arr.splice(0)
console.log(arr.length)