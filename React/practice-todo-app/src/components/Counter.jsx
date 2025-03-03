import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

    const increaseCounter = ()=>{
        console.log("Button");
        setCount(count+1);
    }
    
    const decreaseCounter = ()=>{
        if(count>0){
            setCount(count - 1);
        }
        
    }
  return (
    <div>
      <h1 className="text-2xl my-2">Counter: {count}</h1>
      <button
        onClick={increaseCounter}
        className="p-2 cursor-pointer hover:bg-blue-500  bg-blue-800  text-white"
      >
        Increase counter by 1
      </button>
      <button
        onClick={decreaseCounter}
        className="p-2 cursor-pointer hover:bg-blue-500  bg-blue-800  text-white"
      >
        Decrease counter by 1
      </button>
    </div>
  );
}

// I need a variable that will store my current counter value
export default Counter;
