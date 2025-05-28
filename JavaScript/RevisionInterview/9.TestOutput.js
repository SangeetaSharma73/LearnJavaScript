const obj1 = {
  foo: function () {
    setTimeout(() => console.log(this), 1000);
  },
};
// obj1.foo();

//2.
// console.log(4 / "2");
