obj = {
  name: "siya",
};
function greet(age, grade) {
  console.log(
    `hi how are you ${this.name},My age is ${age} and study in grade ${grade}`
  );
}

greet.apply(obj, [23, 4]);

student2 = {
  name: "pratiksha",
};
const boundGreet = greet.bind(student2, 14, 4);

boundGreet(); // Hello Diya, Age: 14
