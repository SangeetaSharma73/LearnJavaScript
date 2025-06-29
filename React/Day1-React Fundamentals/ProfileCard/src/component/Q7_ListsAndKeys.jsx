import React, { useState } from "react";

const Q7_ListsAndKeys = () => {
  const users = [
    { id: 1, name: "Sangeeta" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Ayesha" },
  ];
  const [data, setData] = useState([]);

  return (
    <div>
      <h1>Q7_ListsAndKeys</h1>
      <div>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>Name: {user.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Q7_ListsAndKeys;
