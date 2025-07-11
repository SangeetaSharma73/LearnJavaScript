import React from "react";
import useLocalStorage from "./useLocalStorage";

const styles = {
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#f0f4f8",
    borderRadius: "10px",
    width: "300px",
    margin: "50px auto",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "1rem",
    color: "#333",
  },
  count: {
    fontSize: "40px",
    color: "#0070f3",
    marginBottom: "1rem",
  },
  button: {
    padding: "10px 16px",
    fontSize: "16px",
    margin: "0 8px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
  increment: {
    backgroundColor: "#28a745",
    color: "white",
  },
  reset: {
    backgroundColor: "#dc3545",
    color: "white",
  },
};

const Counter = () => {
  const [count, setCount] = useLocalStorage("count", 0);
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Counter</h2>
      <div>
        <h1 style={styles.count}>Count: {count}</h1>
        <button
          style={{ ...styles.button, ...styles.increment }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <br />
        <br />
        <button
          style={{ ...styles.button, ...styles.increment }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          style={{ ...styles.button, ...styles.reset }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
