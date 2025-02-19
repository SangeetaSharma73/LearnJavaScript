// In JavaScript, the “number” type cannot safely represent integer values larger than `(2^53-1)`  (that’s `9007199254740991`), or less than `-(2^53-1)`for negatives. 

// `BigInt` type was recently added to the language to represent integers of arbitrary length. A `BigInt` value is created by appending `n` to the end of an integer:

// the "n" at the end means it's a BigInt
const aVeryBigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof aVeryBigNumber)

// In JavaScript, the “number” type cannot safely represent integer values larger than `(2^53-1)`  (that’s `9007199254740991`), or less than `-(2^53-1)`for negatives. 

// `BigInt` type was recently added to the language to represent integers of arbitrary length. A `BigInt` value is created by appending `n` to the end of an integer:

// the "n" at the end means it's a BigInt
const aVeryBigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof aVeryBigNumber)


// The symbol type is used to create unique identifiers for objects.  Javascript object has keys of type String . Modern Javascript provides a second type that you can use for object keys - the Symbol type. Symbols are a new primitive type in ES6.

let symbol1 = Symbol("hello"); // Guarenteed unique value
let symbol2 = Symbol.for("world");