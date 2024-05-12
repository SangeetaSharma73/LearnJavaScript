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
console.log(Boolean(0),Boolean(0.0),Boolean(''),Boolean(-0),Boolean(null),Boolean(undefined))//all are false

//ParseInt
console.log(parseInt(101))//base 10
console.log(parseInt(101,2)) 
console.log(parseInt('first'))//NaN
console.log(parseInt('123float'))//123
console.log(parseFloat('123float456'))//123
console.log(parseInt('10.55'))//10
console.log(parseFloat('10.55dfsdf'))//10.55
let y=Number(10.5)
console.log(y)
var k=null ,p=[1,2];
g=undefined
console.log(typeof k, typeof p,typeof undefined,typeof g)
var c=12;
console.log(typeof c)
var c=12n;
console.log(typeof c)
let K=3583759023857465;
console.log(K,typeof K)
console.log(0/0)//NaN
console.log(50/0)//Infinity
console.log(Infinity*0)//NaN
console.log(Infinity-Infinity)//NaN
console.log('first'/2)//NaN
console.log(Number([1,2,3]))//NaN

if(null || undefined || false || NaN || 0 || -0 || 0n || '')
console.log('Truthy')
else
console.log('Falsy')

//if elif else
if(2>3)
console.log('True')
else
console.log('False')
console.log('Hey this is Masai')


if(2>3)
{
    console.log('Hay')
    console.log(5+4)
    console.log('first')
}
else
console.log('Bye')
console.log('first')

if([])
console.log('empty arr give true')

if({})
console.log('empty object give true')

if(null)
console.log('it is false')


const day='Thursday'
switch(day)
{
    case 'Monday':
        console.log('Monday')
        break;
    case 'Tuesday':
        console.log('Tuesday')
    case 'Wednesday':
        console.log('Wednesday')
    default:
        console.log('No day')
}

console.log('check1',[]&&{})
console.log('2','ram'&&{}&&[])
console.log('3',''&&'ram'&&[]&&{})
console.log('4','ram'&&[]&&''&&{})
console.log('5',null || 0||0n ||'')
console.log('6',null || 0||0n ||''||NaN)