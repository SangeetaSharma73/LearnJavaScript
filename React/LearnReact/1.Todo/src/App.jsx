import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [selected, setSelected] = useState("");
  const [filterTodo, setFilterTodo] = useState([]);

  const addTask = () => {
    setTodos([
      ...todos,
      { id: todos.length + 1, task: task, isCompleted: false },
    ]);
    setFilterTodo([
      ...todos,
      { id: todos.length + 1, task: task, isCompleted: false },
    ]);
    setTask("");
  };

  const handleToggle = (id) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setFilterTodo(updatedTodo);
    setTodos(updatedTodo);
  };

  const deleteTodo = (id) => {
    const filterTodos = todos.filter((item) => item.id !== id);
    setFilterTodo(filterTodos);
    setTodos(filterTodos);
  };

  const handleSelected = (e) => {
    const value = e.target.value;
    setSelected(value);
    if (value === "Completed") {
      const completed = todos.filter((todo) => todo.isCompleted === true);
      // console.log(completed);
      setFilterTodo(completed);
    } else if (value === "Not Completed") {
      const notComplete = todos.filter((todo) => todo.isCompleted === false);
      // console.log(notComplete);
      setFilterTodo(notComplete);
    } else {
      setFilterTodo(todos);
    }
  };
  return (
    <>
      <h1 className="text-red-600 text-2xl text-center">
        Welcome into the todo application
      </h1>
      <div className="m-3">
        <input
          type="text"
          value={task}
          placeholder="write task"
          onChange={(e) => setTask(e.target.value)}
          className="w-xl outline-2 outline-offset-2 "
        />
        <span className="ml-2"></span>
        <button
          className="bg-red-500 rounded-xl w-30 h-10 text-white"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <div className="m-1 p-2 bg-amber-200">
        <h2 className="text-center text-2xl">All Todos</h2>
        <select
          value={selected}
          onChange={(e) => {
            handleSelected(e);
          }}
        >
          <option value="all">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
        <div className="grid grid-cols-1 gap-4">
          {filterTodo.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between w-full bg-blue-400 text-xl p-2"
            >
              <h3>{todo.task}</h3>
              <button
                style={{
                  backgroundColor: todo.isCompleted ? "green" : "red",
                  borderRadius: "0.5rem",
                  padding: "0.5rem",
                  color: "white",
                }}
                onClick={() => {
                  handleToggle(todo.id);
                }}
              >
                {todo.isCompleted ? "Completed" : "Not Completed"}
              </button>
              <button
                className="bg-red-600 w-50 rounded-2xl"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
