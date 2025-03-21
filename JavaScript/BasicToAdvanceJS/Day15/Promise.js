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
// console.log(myPromise);
myPromise
  .then((result) => {
    console.log(result); // Jab resolve hoga
  })
  .catch((error) => {
    console.log(error); // Jab reject hoga
  });

//2.
function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Data Fetching....");

    setTimeout(() => {
      let success = true;
      if (success) {
        resolve({ name: "Sangeeta", age: 21 });
      } else {
        reject("Error: Data not found");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// function step1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve('step1 completed'));
//     })
// }

// function step2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve('step2 done'))
//     })
// }

// function step3(){
//     return new Promise((res)=>setTimeout(()=>res('step3 done')))
// }

// step1().then(
//     res=>{
//         console.log(res);
//         step2()
//     }).
//     then(res=>{
//         console.log(res);
//         step3();
//     }).
//     then(res=>{
//         console.log(res);
//         console.log('All steps done');
//     }).catch(err=>{
//         console.log(err);
//     })

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
  .then((result) => {
    console.log(result);
    return step2();
  })
  .then((result) => {
    console.log(result);
    return step3();
  })
  .then((result) => {
    console.log(result);
    console.log("All steps completed! 🎉");
  });

//   🏆 Promise.all() -> Jab Multiple Promises Parallel Run Karni Ho

let p1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 ✅"), 2000)
);
let p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 ✅"), 3000)
);
let p3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 ✅"), 1000)
);

Promise.all([p1, p2, p3]).then((results) => {
  console.log("All Promises Resolved:", results);
});

// 🔥 Promise.race() -> Jo Pehle Complete Ho Wahi Return Hoga

let P1 = new Promise((resolve) =>
  setTimeout(() => resolve("Fast Promise ✅"), 2000)
);
let P2 = new Promise((resolve) =>
  setTimeout(() => resolve("Slow Promise ✅"), 4000)
);

Promise.race([P1, P2]).then((result) => {
  console.log("Fastest Resolved:", result);
});
