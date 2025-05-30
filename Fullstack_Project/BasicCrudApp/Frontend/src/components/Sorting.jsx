import React from "react";

function Sorting({ data }) {
  const sortedData = data;

  const handleCategory = () => {
    const sortedData = [...data].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
  };

  const handlePrice = () => {
    const sortedData = [...data].sort((a, b) => a.price - b.price);
    setData(sortedPrice);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    if (val === "category") {
      handleCategory();
    } else if (val === "price") {
      handlePrice();
    } else {
      sortedData = data;
    }
  };
  return (
    <>
      <div className="flex justify-between">
        <div>
          <button onClick={handleCategory} className="btn btn-primary">
            Sort By Category
          </button>
          <span className="ml-3"></span>
          <button onClick={handlePrice} className="btn btn-primary">
            Sort By Price
          </button>
        </div>
        <div>
          <select onChange={handleChange}>
            <option value="">--Sort--</option>
            <option value="category">Category</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Sorting;
