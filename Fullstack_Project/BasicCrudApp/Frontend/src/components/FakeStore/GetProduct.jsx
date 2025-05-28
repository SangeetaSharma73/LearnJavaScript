import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GetProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchDataById = async (id) => {
    try {
      //   const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      //   const product = await res.json();
      //   console.log(product);
      //   setData(product);
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataById(id);
  }, []);

  return (
    <div>
      <h1>GetProduct</h1>
      {data ? (
        <div key={data.id}>
          <h1>Title:{data.title}</h1>
          <img src={data.image} alt="Image" width={300} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GetProduct;
