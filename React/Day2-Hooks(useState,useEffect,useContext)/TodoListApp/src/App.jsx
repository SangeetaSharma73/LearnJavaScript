import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./component/Todo";
import CreateTodo from "./component/CreateTodo";
import { ThemeProvider } from "./context/ThemeContext";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState([]);
  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);
  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleToggleCompleted = (id) => {
    const Todos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(Todos);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleEdit = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setEditTodo(todo);
  };
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route
            path="/create"
            element={
              <CreateTodo
                handleAddTodo={handleAddTodo}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
                todos={todos}
                setTodos={setTodos}
              />
            }
          />
          <Route
            path="/"
            element={
              <Todo
                todos={todos}
                onToggle={handleToggleCompleted}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
