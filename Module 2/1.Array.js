//Array provide you an ordered collection of data
var arr=[1.2,1,'Hi',true]
console.log(arr)

//Accessing the element 
console.log(arr[0],arr[1])

arr[1]='Sangeeta'//replacing of an array elements by using index
console.log(arr)

//find the length of array
console.log(arr.length)

//inbuilt methods in js array methods
var arr2=[12,14,15,54]

//pop method- remove element from the end
arr2.pop()
console.log(arr2)

//Push method- insert element at the end
arr2.push(100)
console.log(arr2)


//Shift method- remove first element from array
console.log('before shift',arr2)
var d=arr2.shift()
console.log(d)
console.log(arr2)

//Unshift method- used to insert the element from first index
arr2.unshift(102)
console.log(arr2)


//array methods
let ar=[]
ar[0]='134'
len_of_ar=ar.push(54)//add at the last and return the length of ar
console.log(ar,len_of_ar)
len_of_ar2=ar.unshift(456)//add at the first place and return the length of ar
console.log(ar,len_of_ar2)
let p=[12,3,45]
let pop_ele=p.pop()//it remove the last ele and return that element
console.log(pop_ele,p)
let shift_ele=p.shift()
console.log(shift_ele,p)//it remove the first ele and return that element 

//concat
var arr1=[1,2]
var arr2=[45,56]
var arr3=arr1.concat(arr2)
console.log(arr3)

//slice()
var a=[1,2,3,45]
var part=a.slice(-4,-2)
console.log('p1',part)
var part=a.slice(-2,-4)
console.log('part',part)
var new_part=a.slice(0)
console.log('New part with slice 0 value ',new_part)
//indexOf()
var index=a.indexOf(3)
console.log('index of 3',index)
console.log('index of 5 which does not exist in the arr',a.indexOf(5))//which value doesn't exist in the arr then it will return -1 

//includes()
var a=[3,4,5 ,778]
console.log('56 is in a',a.includes(56),a.includes(3))

//join()
let ans=a.join(' ')
console.log(ans,'and',a.join())
console.log(a.join('\n'))
console.log(a.join('\t'))

//***reverse()
// var reverse=[1,2,34,4,5,6]
// var t=reverse.reverse()
// console.log(t,reverse.reverse())

const rev=[1,2,34,5,6,67]
const reva=rev.reverse()
console.log(reva,rev)

// ***var arr1=[23,455,67,75]
// var arr1=[1,2,2,1]
// var arr2=arr1.slice(0)//copy 
// arr2.reverse()
// console.log(arr1==arr2)//false

// ***let str='malayalam',arc=[]
// for(let i of str)
// {
//     arc.push(i)
// }
// let arc2=arc.slice(0)
// arc2.reverse()
// console.log(arc===arc2,arr.join('')===arc2.join(''))

//splice()- learn more
const moth=[1,2,4,5]
moth.splice(3,2)
console.log(moth)