import React, { useEffect, useState } from "react";

function Product() {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const jsonData = await res.json();
      setProduct(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>All Product</h1>
      {product.length > 0 ? (
        product.map((p) => (
          <div key={p.id} className="w-100">
            <img src={p.image} alt="Image" />
            <h2>{p.title}</h2>
            <h3>Description:{p.description}</h3>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Product;
