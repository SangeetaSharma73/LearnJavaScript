import React, { useState } from "react";

const Q5_EventHandling = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = () => {
    alert(`Hello ${input}!`);
  };
  return (
    <div>
      <h1>Q5_EventHandling</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
          className="border p-2 m-2 rounded"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-600 text-white rounded-xl border-black p-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Q5_EventHandling;
