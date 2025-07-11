import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import UseRef from "./UseRef";

const Todo = ({ todos, onToggle, onDelete, onEdit }) => {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <section
      className={`p-0 bg-gray-100 min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <nav className="m-0 p-3 bg-cyan-700 text-2xl flex items-center justify-between relative">
        <button
          className="absolute text-xl text-white ring ring-2 ring-blue-800 rounded p-2 bg-blue-600"
          onClick={() => {
            navigate("/create");
          }}
        >
          Create Todo
        </button>
        <p className="mx-auto text-white">All Todos</p>
        <button onClick={toggleTheme}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </nav>

      <div
        className={`flex flex-wrap gap-5 ${
          darkMode ? "bg-gray-800 text-white" : "bg-cyan-100 text-black"
        }`}
      >
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div
              key={todo.id}
              className={`bg-yellow-200 shadow-md rounded-lg p-4  border border-gray-200 w-[440px] ${
                darkMode ? "bg-white text-black" : "bg-black"
              }`}
            >
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                <span>Title:</span> {todo.title}
              </h1>
              <h2 className="text-lg text-gray-700 mb-4">
                <span>
                  <strong>Description:</strong>
                </span>{" "}
                {todo.description}
              </h2>
              <button
                className={`px-4 py-2 rounded ${
                  todo.isCompleted
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
                onClick={() => {
                  onToggle(todo.id);
                }}
              >
                {todo.isCompleted ? "Completed" : "Not Completed"}
              </button>
              <button
                className="px-4 py-2 rounded bg-blue-600 m-1 text-white hover:bg-blue-800"
                onClick={() => {
                  onEdit(todo.id);
                  navigate("/create");
                }}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 rounded  text-white bg-red-500 hover:bg-red-600"
                onClick={() => onDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">No Todos</p>
        )}
      </div>
      <div>
        <UseRef />
      </div>
    </section>
  );
};

export default Todo;
