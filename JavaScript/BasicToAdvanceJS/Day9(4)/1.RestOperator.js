//rest operator 

function guestList(first,sec,...rest){
    // console.log(first,sec,rest);
    third = [...rest,"gita",'seeta']
    console.log(third)

}

guestList('john','babita','sangeeta','savita','neha');


// Spread Operator
let arr1=[1,2]
let arr2=[5,6]
arr = [...arr1,3,4,...arr2]
console.log(arr)


obj1= {
    first:"seeta",
    sec : "geeta"
}

obj2 = {
  third: "neeta",
  four: "prita",
};

obj3= {...obj1,...obj2}

console.log(obj3)
