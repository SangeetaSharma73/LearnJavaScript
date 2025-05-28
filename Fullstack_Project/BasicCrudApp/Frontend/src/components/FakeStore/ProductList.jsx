import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductList = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      //   const res = await fetch("https://fakestoreapi.com/products");
      //   const jsonData = await res.json();
      //   setData(jsonData);

      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteData = async (id) => {
    // const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    //   method: "DELETE",
    //   headers: { "Content-Type": "application/json" },
    // });
    // const deleteItem = await res.json();
    // console.log("data deleted", deleteItem);
    // // setData(data.filter((p) => p.id !== id));
    // setData((prevData) => prevData.filter((p) => p.id !== id));
    const res = await axios.delete(`https://fakestoreapi.com/products/${id}`);
    console.log(res.data);
    setData(data.filter((p) => p.id !== id));
  };

  // const updateData = async () => {
  //   const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: await JSON.stringify(),
  //   });
  // };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>ProductList</h1>
      {data.length > 0 ? (
        data.map((product) => (
          <div key={product.id}>
            <h1>title:{product.title}</h1>
            <img src={product.image} alt="Image" width={200} />
            <p>Description:{product.description}</p>
            <h3>Price:{product.price}</h3>
            <button onClick={() => navigate(`/products/${product.id}`)}>
              Product Details
            </button>
            <button onClick={() => deleteData(product.id)}>Delete</button>
            <button onClick={() => navigate(`/product/edit/${product.id}`)}>
              Update Product
            </button>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductList;
