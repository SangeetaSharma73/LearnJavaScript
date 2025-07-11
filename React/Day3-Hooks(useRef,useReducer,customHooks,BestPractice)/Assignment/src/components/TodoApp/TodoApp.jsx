import React, { useReducer, useRef, useState } from "react";
import { initialState, todoReducer } from "./todoReducer";

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState("");
  const inputVal = useRef(null);

  const handleAdd = () => {
    inputVal.current.focus();
    if (text.trim() !== "") {
      dispatch({ type: "add", text });
      setText("");
    }
  };

  const handleToggle = (id) => {
    dispatch({ type: "toggle", id });
  };

  const handleDelete = (id) => {
    dispatch({ type: "remove", id });
  };

  // Styles
  const containerStyle = {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f7f9fc",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "calc(100% - 100px)",
    marginRight: "10px",
  };

  const buttonStyle = {
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    marginLeft: "5px",
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#dc3545",
  };

  const toggleButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#17a2b8",
  };

  const listItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  };

  const todoTextStyle = (completed) => ({
    textDecoration: completed ? "line-through" : "none",
    flex: 1,
  });

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center" }}>My To-Do List</h1>
      <div style={{ marginBottom: "20px" }}>
        <h2>Add Todo</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            value={text}
            ref={inputVal}
            placeholder="Write todo"
            onChange={(e) => setText(e.target.value)}
            style={inputStyle}
          />
          <button type="submit" onClick={handleAdd} style={buttonStyle}>
            Submit
          </button>
        </div>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {state.map((todo) => (
          <li key={todo.id} style={listItemStyle}>
            <span style={todoTextStyle(todo.completed)}>{todo.text}</span>
            <button
              onClick={() => handleToggle(todo.id)}
              style={toggleButtonStyle}
            >
              {todo.completed ? "Completed" : "Mark Done"}
            </button>
            <button
              onClick={() => handleDelete(todo.id)}
              style={deleteButtonStyle}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
