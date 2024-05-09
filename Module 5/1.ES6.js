// var name='Amit'
// let name='ankit'
// const name2='sang'
// console.log(name)

// function a()
// {
//     let  x=10
//     // let x=12;
//     if(true)
//     {
//         let y=20
//         const b=3
//         console.log(x)
//         console.log(y)
//     }
//     console.log(x)
//     // console.log(b)
//     //     console.log(y)
// }
// a()
// const a=[1,3]
// a[0]='4'
// a.push(5)
// console.log(a)
// a.pop()
// console.log(a)

// const school={
//     name:'a',
//     estab:'ex',
//     departments:
//     {
//         math:{teachers:5,students:150},
//         science:{teachers:5,students:150},
//         history:{teachers:3,students:100},
//         english:{teachers:5,students:150},
//     }
// }
// let {
//     departments:{
//         math:{teachers:mathTeachersCount,students:mathstudentCount},
//         history:{teachers:historyTeachersCount,students:historystudentCount}

//     }
// }=school
// console.log(mathTeachersCount,mathstudentCount,historyTeachersCount,historystudentCount)


const user = {
    id: 1,
    name: "John",
    address: {
        city: "New York",
        zipcode: "10001"
    }
};

// Accessing nested properties without optional chaining
const city = user.address.city; // If address is null or undefined, this will throw an error

// Accessing nested properties with optional chaining
const cityWithOptionalChaining = user.address?.city; // Returns undefined if address is null or undefined

console.log(cityWithOptionalChaining); // Output: "New York"
