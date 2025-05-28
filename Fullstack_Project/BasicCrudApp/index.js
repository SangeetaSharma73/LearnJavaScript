console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

Promise.resolve()
  .then(function () {
    console.log("promise1 - start");

    // Simulate heavy/blocking work inside microtask
    let start = Date.now();
    while (Date.now() - start < 3000) {
      // busy wait for 3 seconds
    }

    console.log("promise1 - end");
  })
  .then(function () {
    console.log("promise2");
  });

console.log("script end");
