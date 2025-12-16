const accountId = 123;
let accountEmail = "sang@gmail.com";
var accountPassword = "123";
//accountId = 2//not allowed

console.table([accountEmail, accountId, accountPassword]);

// don't prefer var because there is issue between block scope and function scope.
let myVariable; // if you declare variable but not initialized value than it will initialize undefined value to your variable.
