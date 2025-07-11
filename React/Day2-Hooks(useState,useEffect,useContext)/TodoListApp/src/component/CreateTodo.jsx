import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const CreateTodo = ({
  handleAddTodo,
  editTodo,
  setEditTodo,
  todos,
  setTodos,
}) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTodo) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editTodo.id ? formData : todo
      );
      setTodos(updatedTodos);
      setEditTodo(null);
    } else {
      const newTodo = { ...formData, id: Date.now() };
      handleAddTodo(newTodo);
      setFormData({ title: "", description: "", isCompleted: false });
    }
    setFormData({ title: "", description: "", isCompleted: false });

    navigate("/");
  };

  useEffect(() => {
    if (editTodo) {
      setFormData(editTodo);
    }
  }, [editTodo]);

  return (
    <section>
      <nav>
        <button
          onClick={toggleTheme}
          className={` ring ring-2 rounded-md m-3 p-2 ${
            darkMode ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          Toggle Mode
        </button>
      </nav>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center my-10 ">
        Create Todo
      </h1>
      <form
        className={`max-w-lg mx-auto ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        } p-8 rounded-lg shadow-md space-y-6 m-15`}
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your description..."
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default CreateTodo;
