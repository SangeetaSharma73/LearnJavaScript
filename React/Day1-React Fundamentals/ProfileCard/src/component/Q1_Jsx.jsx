import React from "react";

const Q1_Jsx = () => {
  const online = "online";

  return (
    <div>
      <h1 className="text-2xl">Q1_Jsx</h1>
      <div>
        <h1>Name:Sangeeta</h1>
        <h2>Age:22</h2>
        <h3>{online ? "online" : "offline"}</h3>
      </div>
    </div>
  );
};

export default Q1_Jsx;
