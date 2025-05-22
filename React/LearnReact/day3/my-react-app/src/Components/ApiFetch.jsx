import { useState, useEffect } from "react";

const ApiFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((carts) => setData(carts));
  }, []);

  return (
    <div>
      <h1>Get Data:</h1>
      {data.length > 2 ? (
        data.map((cart) => (
          <div key={cart.id}>
            <h1>Id:{cart.id}</h1>
            <h2>UserId:{cart.userId}</h2>
            <p>Date:{cart.date}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ApiFetch;
