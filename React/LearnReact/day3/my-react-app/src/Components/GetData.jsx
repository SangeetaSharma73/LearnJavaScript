import React, { useEffect, useState } from "react";

const GetData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Get Products:</h1>

      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <h2>Id:{product.id}</h2>
            <h1>Title:{product.title}</h1>
            <img src={product.image} alt="Image URl" width={200} />
            <p>Price:{product.price}</p>
            <p>Description:{product.description}</p>
            <p>Category:{product.category}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GetData;
