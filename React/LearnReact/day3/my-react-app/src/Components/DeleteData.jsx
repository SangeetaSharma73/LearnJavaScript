import React, { useState } from "react";

const DeleteData = () => {
  const [productId, setProductId] = useState("");

  const handleClick = async () => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/${productId}`,
        {
          method: "DELETE",
        }
      );
      const data = res.json();
      console.log(data);
      alert("delete");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={productId}
        placeholder="id"
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={handleClick}>Delete </button>
    </div>
  );
};

export default DeleteData;
