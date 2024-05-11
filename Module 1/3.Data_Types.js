// // data types- variables can hold different types of data arrayLike
// // 1. primitive :
// // Number-1,2,3 ; 
// // String- 'mona','siya','a','12' ;
// // Boolean- 'true', 'false' ; 
// // null-represent the intentional absence of any object value ;
// // undefined-represents a variable that has been declared but has not been assigned a value;
// // symbol- introduced in ECMAscript6(es6) symbols are unique and immutable data types often used as object property keys

// // 2.Composite Data types-
// 1.object- represents a collection of key value pairs (properties and methods)
// 2.Array- Represents an ordered list of values ex- [1,2,3] ; ['a','b'];
// 3.function- Represents resusable blocks of code that can be executed when called.

// 3.Special Data types- 
// Bigint- introduced in es10, bigint are used for working with arbitarily large integers

//How to check type of data
var firstName='siya'
console.log(firstName,typeof firstName)
var age=34
console.log(age,typeof age)
var salary=5600.56
console.log(salary,typeof salary)
var arr=[1,2,3]
console.log(arr,typeof arr)
var obj={1:3,3:5}
console.log(obj,typeof obj)

//conversion of data type
var firstName='siya'
console.log(firstName,typeof firstName)
var str_Num=Number(firstName)
console.log(str_Num,typeof str_Num)
var age=34
var str_age=age+''
console.log(age,typeof age,str_age,typeof str_age)

