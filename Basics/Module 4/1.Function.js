//syntax to declare and call a function is given below
function demo()
{
    //code goes here\
    //this is how to declare a function
}
demo()//invoking or calling a function


function greet(){
    console.log('Hello')
}
greet()


//parameters and Arguments
function FunName(a,b)//a and b are parameters 
{
    return a+b
}
ans=FunName(4,5)// 4 and 5 are the arguments
console.log(ans)


//Anonymous Function 
var add=function(a,b)
{
    console.log(a+b)

}
add(5,6)
var sum=add
var result=sum(6,8)
console.log(result)