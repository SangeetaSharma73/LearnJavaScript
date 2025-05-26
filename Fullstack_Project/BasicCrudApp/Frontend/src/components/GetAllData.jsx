import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GetAllData() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getAllData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/posts/getAllPost");
      // console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/posts/delete/${id}`
      );
      console.log(res.data);
      setData(data.filter((post) => post._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
      <h1>Get all data:</h1>
      {data.length > 0 ? (
        data.map((post) => (
          <div key={post._id}>
            <h2>Title:{post.title}</h2>
            <h3>Content:{post.content}</h3>
            <button
              onClick={() => handleDelete(post._id)}
              style={{
                color: "white",
                backgroundColor: "red",
                borderRadius: "5px",
                width: "100px",
                height: "30px",
              }}
            >
              Delete Post
            </button>
            <button
              onClick={() => navigate(`/post/${post._id}`)}
              style={{
                color: "white",
                backgroundColor: "green",
                borderRadius: "5px",
                width: "100px",
                height: "30px",
              }}
            >
              Get Details
            </button>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default GetAllData;
