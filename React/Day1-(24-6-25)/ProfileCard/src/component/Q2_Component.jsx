import React from "react";

const Q2_Component = ({ name, timeOfDay }) => {
  return (
    <div>
      <h1>Q2_Component</h1>
      <div>
        <p>
          Good {timeOfDay}, {name}!
        </p>
      </div>
    </div>
  );
};

export default Q2_Component;
