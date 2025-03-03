import React, { useEffect } from "react";

export default function ECom() {
  const API_URL = "https://fakestoreapi.com/products";
  const fetchData = async () => {
    try {
      const res = await axios.get(API_URL);
      console.log("res", res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div>Products</div>;
}
