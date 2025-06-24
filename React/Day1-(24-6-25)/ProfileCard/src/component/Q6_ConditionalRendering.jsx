import React, { useState } from "react";

const Q6_ConditionalRendering = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };
  return (
    <div>
      <h1>Q6_ConditionalRendering</h1>
      <div>
        <h1>{loggedIn ? "Welcome, Sangeeta!" : "Please log in"}</h1>
        <button
          onClick={toggleLoggedIn}
          className="border-2 bg-red-600 p-2 m-2 rounded active:bg-blue-600 text-white"
        >
          Login/Logout
        </button>
      </div>
    </div>
  );
};

export default Q6_ConditionalRendering;
