import axios from "axios";
import React, { useState } from "react";

function PostData() {
  const [form, setForm] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/posts/create", form);
      console.log("Post created:", res.data);
      alert("Post successfully created!");
      setForm({ title: "", content: "" }); // Clear form
    } catch (err) {
      console.log("error:", err);
    }
  };

  return (
    <>
      <h1>PostData:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder="content"
          value={form.content}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default PostData;
