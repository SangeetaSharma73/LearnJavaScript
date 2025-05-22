import React, { useState } from "react";

const PutProduct = () => {
  const [productId, setProductId] = useState("");
  const [updateProduct, setUpdateProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateProduct({ ...updateProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateProduct),
    });

    const data = await res.json();
    console.log("updated data", data);
    // alert("Data is successfully updated");
  };
  return (
    <div>
      <p>Update Data:</p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
        }}
      >
        <input
          type="text"
          name="id"
          placeholder="Id"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={updateProduct.title}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={updateProduct.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={updateProduct.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={updateProduct.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={updateProduct.category}
          onChange={handleChange}
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default PutProduct;
