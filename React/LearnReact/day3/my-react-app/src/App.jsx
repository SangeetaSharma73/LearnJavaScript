import { useState } from "react";
import Toggle from "./Components/Toggle";
import ApiFetch from "./Components/ApiFetch";
import TextType from "./Components/TextType";
import GetData from "./Components/GetData";
import PostProduct from "./Components/PostProduct";
import PutProduct from "./Components/PutProduct";
import DeleteData from "./Components/DeleteData";

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode); // True <-> False toggle hoga
  };

  const handleDecrease = () => {
    if (count === 0) {
      alert("Count cannot be negative!");
    } else {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <div>
        <h1>1. Counter App🎉⭐</h1>
        <h2>Count:{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <h1>2. Dark Mode Toggle App 🌗</h1>
        <button onClick={toggleMode}>
          {isDarkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
        </button>
      </div>
      <TextType />
      <Toggle />
      <ApiFetch />
      <GetData />
      <PostProduct />
      <PutProduct />
      <DeleteData />
    </div>
  );
}

export default App;
