import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./component/Todo";
import CreateTodo from "./component/CreateTodo";
const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/create"
          element={<CreateTodo handleAddTodo={handleAddTodo} />}
        />
        <Route path="/" element={<Todo todos={todos} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
