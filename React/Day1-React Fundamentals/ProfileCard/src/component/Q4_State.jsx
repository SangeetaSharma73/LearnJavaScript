import React, { useState } from "react";

const Q4_State = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h1>Q4_State</h1>
      <div>
        <h1>Count:{count}</h1>
        <button
          onClick={increment}
          className={`bg-blue-600 text-white rounded-xl border-black p-2 m-3 ${
            count === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-blue-600 text-white rounded-xl border-black p-2"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Q4_State;
