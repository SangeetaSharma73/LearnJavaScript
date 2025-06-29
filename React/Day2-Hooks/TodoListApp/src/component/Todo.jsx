import React from "react";
import { useNavigate } from "react-router-dom";

const Todo = ({ todos }) => {
  const navigate = useNavigate();
  return (
    <section className="p-0 bg-gray-100 min-h-screen">
      <nav className="m-0 p-3 bg-cyan-700 text-2xl flex items-center justify-between relative">
        <button
          className="absolute  text-black rounded p-1"
          onClick={() => {
            navigate("/create");
          }}
        >
          Create Todo
        </button>
        <p className="mx-auto">All Todos</p>
      </nav>

      {todos.length > 0 ? (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 shadow-md rounded-lg p-4 mb-4 border border-gray-200 w-[400px] "
          >
            <h1 className="text-xl font-bold text-gray-800 mb-2">
              <span className="text-blue-600">Title:</span> {todo.title}
            </h1>
            <h2 className="text-lg text-gray-700 mb-4">
              <span className="text-green-600">Description:</span>{" "}
              {todo.description}
            </h2>
            <button
              className={`px-4 py-2 rounded ${
                todo.isCompleted
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
            >
              {todo.isCompleted ? "Completed" : "Not Completed"}
            </button>
            <button className="px-4 py-2 rounded bg-blue-600 m-1 text-white">
              Edit
            </button>
            <button className="px-4 py-2 rounded  text-white bg-red-500">
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 text-lg">No Todos</p>
      )}
    </section>
  );
};

export default Todo;
