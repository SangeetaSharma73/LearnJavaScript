console.log('Hi',typeof 'hi');
console.log("hi",typeof "hi")
console.log(`hi`,typeof `hi`)

console.log(10+'19')
console.log(null+'1')
console.log(undefined+'12')
console.log([1,2,3]+'')
console.log([1,2,3]+'-')
var a='abc'+[1,2,3]+''
console.log(a,typeof a)
//object not a string
var a={name:'diya'}
console.log(a+'a',typeof (a+'a'))
var t=[1,2,3]+10;
console.log(typeof t,t)
console.log([1,2,3]+[4,5],typeof ([1,2]+[3,4]))
var a='10'
console.log(Number(a),typeof a)
var n=null,a=undefined
console.log(n+a,typeof (n+a))
console.log(String(n)+String(a))
console.log(Number('Ram'))
console.log(Number([1,3,4]))//NaN
console.log(Boolean(1),Boolean(3),Boolean('o'),Boolean(1.4),Boolean([1,2]),Boolean([]),Boolean({}))//any integer other than 0 true else false
console.log(Boolean(0),Boolean(0.0),Boolean(''),Boolean(-0))//all are false

//ParseInt
console.log(parseInt(101))//base 10
console.log(parseInt(101,2)) 
console.log(parseInt('first'))//NaN
console.log(parseInt('123float'))//123
console.log(parseFloat('123float456'))//123
console.log(parseInt('10.55'))