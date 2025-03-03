// they can be returned from a function and also passed as an argument to another function!


//HOF 

function HOF(name,type){
    console.log(`${name},from which type: ${type(name)}`);
}

function callbackfun1(name){
    console.log(name,'I am from Japan')
}

function callbackfun2(name){
    console.log(`${name} this is from India`);
}

HOF("siya",callbackfun1);