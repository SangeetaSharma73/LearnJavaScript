// 🔥 Promise Ka Basic Concept
// A Promise ek object hota hai jo ek asynchronous operation ka result represent karta hai. Iska matlab hai ki ek function immediately result return nahi karta, balki ek promise return karta hai jo future me resolve ya reject ho sakta hai.

// Promise Ke 3 States Hote Hain:
// Pending – Jab tak operation complete nahi hota.

// Fulfilled (Resolved) – Jab operation successfully complete ho jata hai.

// Rejected – Jab operation fail ho jata hai.

// ✅ Basic Syntax



let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; // Isko false karke dekhna reject hone pe
        if (success) {
            resolve("Operation Successful! ✅");
        } else {
            reject("Operation Failed! ❌");
        }
    }, 2000);
});

// Promise ko handle karne ke liye .then() aur .catch() use hota hai
myPromise
    .then(result => {
        console.log(result); // Jab resolve hoga
    })
    .catch(error => {
        console.log(error); // Jab reject hoga
    });

// 🌟 Example: API Request Simulation



function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");
        setTimeout(() => {
            let success = Math.random() > 0.5; // Random success/fail
            if (success) {
                resolve({ name: "Sangeeta", age: 25 });
            } else {
                reject("Error: Data not found!");
            }
        }, 3000);
    });
}

// Using Promise
fetchData()
    .then(data => console.log("Data received:", data))
    .catch(error => console.log(error));

// 🎭 Promise Chaining (Ek Promise ke baad doosra)



function step1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 1 Done ✅"), 1000);
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 2 Done ✅"), 2000);
    });
}

function step3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 3 Done ✅"), 1500);
    });
}

// Chaining Promises
step1()
    .then(result => {
        console.log(result);
        return step2();
    })
    .then(result => {
        console.log(result);
        return step3();
    })
    .then(result => {
        console.log(result);
        console.log("All steps completed! 🎉");
    });

// 🏆 Promise.all() -> Jab Multiple Promises Parallel Run Karni Ho



let P1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 ✅"), 2000));
let P2 = new Promise(resolve => setTimeout(() => resolve("Promise 2 ✅"), 3000));
let P3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 ✅"), 1000)
);

Promise.all([P1, P2, P3]).then(results => {
    console.log("All Promises Resolved:", results);
});


// 🔥 Promise.race() -> Jo Pehle Complete Ho Wahi Return Hoga



let p1 = new Promise(resolve => setTimeout(() => resolve("Fast Promise ✅"), 2000));
let p2 = new Promise(resolve => setTimeout(() => resolve("Slow Promise ✅"), 4000));

Promise.race([p1, p2]).then(result => {
    console.log("Fastest Resolved:", result);
});

// 🚀 async/await (Modern Approach for Promises)



function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ name: "Sangeeta", age: 25 }), 2000);
    });
}

async function getUser() {
    console.log("Fetching user...");
    let user = await fetchUser();
    console.log("User Data:", user);
}

getUser();


// 🤔 Conclusion
// Promise ek object hai jo future me complete ya fail hoga.

// .then() se resolved value milti hai aur .catch() se error handle hota hai.

// Promise chaining asynchronous operations ko sequence me execute karti hai.

// async/await modern syntax hai jo Promises ko aur readable banata hai.

// Agar koi doubt hai toh puchh lo bhai! 🔥😎







// You said:
// bhai ek bat bta ki callback ar arrow function me kya difference hota h
// ChatGPT said:
// Bhai, callback function aur arrow function dono alag concepts hain, lekin kai baar log inhe confuse kar lete hain. Chalo dono ka difference achhe se samajhte hain. 🔥

// 🔥 1. Callback Function Kya Hota Hai?
// A callback function ek aisa function hota hai jo doosre function ke andar argument ke roop me pass hota hai aur baad me call hota hai. Yeh asynchronous programming me bahut useful hota hai.

// ✅ Example: Callback Function



// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback(); // Ye function baad me execute hoga
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// // Function call with callback
// greet("Sangeeta", sayBye);
// 🔹 Output:


// Hello, Sangeeta
// Goodbye!
// 👉 Yahaan sayBye function ek callback hai jo greet function ke andar execute ho raha hai.

// ⚡ 2. Arrow Function Kya Hota Hai?
// Arrow function (=>) ek short-hand syntax hai jo function likhne ka tareeka easy bana deta hai. Isme this ka behavior alag hota hai.

// ✅ Example: Normal Function vs Arrow Function



// // Normal Function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 3)); // Output: 8

// // Arrow Function
// const addArrow = (a, b) => a + b;
// console.log(addArrow(5, 3)); // Output: 8
// 👉 Arrow function short aur clean syntax provide karta hai!

// 🚀 Callback vs Arrow Function - Major Differences
// Feature	Callback Function	Arrow Function
// Definition	Ek function jo doosre function ke andar pass hota hai aur baad me execute hota hai.	Ek concise syntax hai jo => ka use karta hai.
// Use Case	Mostly asynchronous operations me use hota hai, jaise API calls, event handling, setTimeout, etc.	Short aur readable functions banane ke liye use hota hai.
// this Binding	this ka reference function ke according change hota hai.	this parent scope se inherit hota hai.
// Syntax	Traditional function syntax use karta hai.	Short aur modern syntax hai.
// 🎯 Example: Callback Function with Arrow Function
// Bhai, hum callback function ke andar arrow function bhi use kar sakte hain.

// ✅ Example: setTimeout Callback Function with Arrow Function



// setTimeout(() => {
//     console.log("This is a callback with an arrow function! ⏳");
// }, 2000);
// 👉 Yahaan setTimeout ek asynchronous function hai jo arrow function ko callback ke roop me execute kar raha hai.

// 🔥 Biggest Difference: this Behavior in Arrow Functions
// Arrow function ka sabse bada advantage hai ki ye this ka reference change nahi karta.

// Normal Function me this ka issue



// const obj = {
//     name: "Sangeeta",
//     greet: function () {
//         setTimeout(function () {
//             console.log("Hello, " + this.name); // ❌ Undefined
//         }, 1000);
//     }
// };
// obj.greet();
// 👉 Yahaan this.name undefined aayega kyunki normal function me this ka reference change ho jata hai.

// ✅ Arrow Function me this Fix ho jata hai



// const obj = {
//     name: "Sangeeta",
//     greet: function () {
//         setTimeout(() => {
//             console.log("Hello, " + this.name); // ✅ Works fine
//         }, 1000);
//     }
// };
// obj.greet();
// 👉 Arrow function parent scope ka this inherit karta hai, isliye yahaan this.name sahi se kaam karega.

// 🎯 Conclusion
// Feature	Callback Function	Arrow Function
// Definition	Ek function jo doosre function ke andar pass hota hai	=> syntax ke sath concise function
// Use Case	Asynchronous operations (API calls, setTimeout, events, etc.)	Short aur readable functions
// this Binding	Function ke andar this change ho sakta hai	this parent scope se inherit hota hai
// Syntax	Traditional function syntax	Short aur clean
// 🎉 Final Thought
// Callback function ek concept hai jo kisi function ko doosre function ke andar as argument pass karke call karta hai.

// Arrow function ek syntax hai jo normal function se short aur readable hai.

// Arrow function asynchronous callbacks me helpful hota hai kyunki yeh this ka reference change nahi hone deta.
