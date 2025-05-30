import React, { useEffect, useState } from "react";
import axios from "axios";
import Sorting from "../components/Sorting";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPageItems, setCurrentPageItems] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products`);
    setData(res.data);
    setFilteredData(res.data); // initialize filteredData
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Get Your Products</h1>
      <Filter data={data} setFilteredData={setFilteredData} />
      <Sorting data={filteredData} setData={setFilteredData} />
      {/* <div className="grid grid-flow-col grid-rows-5 gap-4 ">
        {filteredData.length > 0 ? (
          filteredData.map((p) => (
            <div
              key={p.id}
              className="border-2 border-indigo-600 rounded-2xl m-3 p-2"
            >
              <div className="w-50 h-100">
                <img src={p.image} alt="Image" />
              </div>
              <div>
                <h3>
                  <strong>Title</strong>: {p.title}
                </h3>
                <p>
                  <strong>Price</strong>: {p.price}
                </p>
                <p>
                  <strong>Category</strong>: {p.category}
                </p>
              </div>
              <br />
              <button className="btn btn-primary">Get Product Details</button>
              <button className="btn btn-primary bg-red-600 border-red-800">
                Add to cart
              </button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div> */}
      {/* <Sorting data={data} setData={setData} /> */}
      {/* <div className="grid grid-flow-col grid-rows-5 gap-4 ">
        {data.length > 0 ? (
          data.map((p) => (
            <div
              key={p.id}
              className="border-2 border-indigo-600 rounded-2xl m-3 p-2"
            >
              <div className="w-50 h-100">
                <img src={p.image} alt="Image" />
              </div>
              <div>
                <h3>
                  <strong>Title</strong>:{p.title}
                </h3>
                <p>
                  <strong>Price</strong>:{p.price}
                </p>
                <p>
                  <strong>Category</strong>:{p.category}
                </p>
              </div>
              <br />
              <button className="btn btn-primary">Get Product Details</button>
              <button className="btn btn-primary bg-red-600 border-red-800">
                Add to cart
              </button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div> */}

      <div className="grid grid-flow-col grid-rows-5 gap-4">
        {currentPageItems.length > 0 ? (
          currentPageItems.map((p) => (
            <div
              key={p.id}
              className="border-2 border-indigo-600 rounded-2xl m-3 p-4 max-w-xs"
            >
              <div className="w-60 h-100 flex items-center justify-center overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="max-h-full object-contain"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-bold">Title: {p.title}</h3>
                <p>Price: ${p.price}</p>
                <p>Category: {p.category}</p>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="btn btn-primary">Get Product Details</button>
                <button className="btn btn-primary bg-red-600 border-red-800">
                  Add to cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Pagination
        data={filteredData}
        setCurrentPageItems={setCurrentPageItems}
      />
    </>
  );
}

export default Home;
