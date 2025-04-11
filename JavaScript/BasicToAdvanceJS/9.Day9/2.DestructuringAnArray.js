const arr = [1, 3, 5, 7, 9];

const [firs, second, ...res] = arr;
console.log(firs, second, res);

let user1 = {
  firstName: "Vivek",
  lastName: "Agarwal",
  age: 38,
  posts: [
    { title: "Post 1", comments: 10 },
    { title: "Post 2", comments: 11 },
  ],
};

const { firstName: first, lastName, age = 40, ...rest } = user1;
console.log(first, lastName, age, rest);

// only the deepest keys become variables
const {
  posts: [{ title }, { title: t2 }],
} = user1;
console.log(title, t2);

// a function that returns an array of a number and a function
// function useState(num) {
//   let count = num;
//   let setCount = function () {
//     console.log(`setting the count: ${count}`);
//   }

//   return [count, setCount]
// }

// // way 1
// let resultArr = useState(20);
// // console.log(resultArr);
// let resultCount = resultArr[0];
// // console.log(resultCount);
// let resultSetFunction = resultArr[1];
// // console.log(resultSetFunction);
// resultSetFunction(); //-> setting the count: 20

// // the destructuring way, super neat
// let [count, setCount] = useState(30);

// setCount(); //-> setting the count: 30

function useState(num) {
  let count = num;
  let setCount = function () {
    console.log(`Setting the count: ${count}`);
  };
  return [count, setCount];
}

let [count1, setCount1] = useState(20);
// console.log();

setCount1();

// we know that the function will receive an object with keys firstName & lastName

function printFullName({ firstName, lastName }) {
  console.log(`firstName:${firstName} lastName:${lastName}`);
}

printFullName({
  firstName: "Vivek",
  lastName: "Agarwal",
});

//-> Vivek Agarwal

const user = {
  id: 339,
  name: "John",
  age: 42,
  education: {
    degree: "Masters",
  },
};

const {
  name,
  education: { degree },
} = user;

console.log(name, degree);

const user2 = {
  id: 339,
  name: "John",
  age: 42,
  education: {
    degree: {
      name: "BCA",
    },
  },
};

const {
  name: fname,
  education: {
    degree: { name: degreeName },
  },
} = user2;

console.log(name, degreeName);

const user3 = {
  id: 339,
  name: "John",
  age: 42,
  subjects: ["HTML", "CSS", "Javascript"],
  education: {
    degree: {
      name: "BCA",
    },
  },
};

const {
  name: fname1,
  education: {
    degree: { name: degreeName1 },
  },
  subjects: [sub1, , sub3],
} = user3;

// Destructuring in JavaScript is a way to extract values from arrays or objects and assign them to variables in a concise and efficient manner.

// When destructuring arrays, you can use square brackets `[]` and assign variables in the same order as the array elements. For example:

const arr2 = [1, 3, 5, 7, 9];
const [first1, second1, ...rest1] = arr2;
console.log(first1, second1, rest1);

// When destructuring objects, you can use curly braces {} and assign variables based on the keys of the object. For example:

let user4 = {
  firstName: "Vivek",
  lastName: "Agarwal",
  age: 38,
  posts: [
    { title: "Post 1", comments: 10 },
    { title: "Post 2", comments: 11 },
  ],
};
const { firstName: first2, lastName2, age2 = 40, ...rest2 } = user4;
console.log(first2, lastName2, age2, rest2);
