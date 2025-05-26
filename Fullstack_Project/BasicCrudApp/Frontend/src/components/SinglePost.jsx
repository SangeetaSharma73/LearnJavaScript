import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  const getPost = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/posts/getPost/${id}`);
      console.log(res.data);
      alert("Post fetch successfully");
      setPost(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);
  if (!post) return <p>Loading...</p>;

  return (
    <>
      <h1>Post Details are here</h1>
      <div key={post._id}>
        <h2>Title:{post.title}</h2>
        <h3>Content:{post.content}</h3>
      </div>
    </>
  );
}

export default SinglePost;
