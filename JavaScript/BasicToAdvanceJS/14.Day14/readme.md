### **Static Methods**

Static methods are methods that are called on the class itself, rather than on an instance of the class.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static greet() {
    console.log("Hello!");
  }
}

Person.greet(); // Hello!
```

### **Getters and Setters**

Getters and setters are special methods that allow you to access or modify the values of class properties.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.salary = 5000;
  }

  // getter
  get fullName() {
    return `${this.name} Doe`;
  }

  // setter
  set fullName(name) {
    this.name = name.split(" ")[0];
  }
}

const john = new Person("John", 30);

// are we trying to get a value or set a value
console.log(john.fullName); // get

// are we trying to get a value or set a value
john.fullName = "Jane Smith"; // set

// get a value or are we trying to get a value
console.log(john.name);
```

In the example above, we define a fullName getter and setter that manipulate the name property

### **Private Fields**

Private fields are class properties that are not accessible from outside the class.


```js
class Person {
  #age;

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }
}

const john = new Person("John", 30);
console.log(john.age); // 30
console.log(john.#age); // SyntaxError: Private field '#age' must be declared in an enclosing class
```

In the example above, we define a private field called #age using the # symbol. We can only access the #age field through the age getter method.

