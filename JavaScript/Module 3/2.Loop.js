//loops are the statements that we can use to control a flow of the program and to do some repeatative task

var a='hello World'
//the for loop
for(var i=0;i<3;i++){
    console.log('Hi this is Name');
}
//you have an array and you have o square each elemen of that array
var arr=[2,3,4,5,6]
for(var i=0;i<arr.length;i++){
    console.log(arr[i]*arr[i]);
}

//while loop
var i=1
var n=5
while(i<n){
    console.log(i)
    i++;
}

//do while loop
var i=4
var n=3
do{
    console.log(i)
}
while(i<=n)

//for in loop
// var colors={
//     primary:'Blue',
//     secondary:'red',
//     tertiary:'white'
// }
// //syntax
// for(var color in colors){
//     console.log(color,colors[color])
// }

// var colorArr=['green','yellow','pink']
// for(var color in colorArr){
//     console.log(colorArr,'->',colorArr[color])
// }

// //for of loop

// var arr=[60,89,56,40]
// for(var score of arr){
//     console.log(score)
// }

//method-entries

let colors=['red','blue','green']
for(var [index,color] of colors.entries())
{
    console.log(index+'->'+color)
}

//Strings-
var str='sangeeta'
for(var c of str){
    console.log(c)
}