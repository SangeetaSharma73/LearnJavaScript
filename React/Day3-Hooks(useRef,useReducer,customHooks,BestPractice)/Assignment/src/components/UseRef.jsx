import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
    backgroundColor: "#f0f2f5",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    width: "250px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "none",
    margin: "5px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    transition: "background-color 0.3s ease",
  };

  const clearButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#dc3545",
  };

  return (
    <div style={containerStyle}>
      <input type="text" ref={inputRef} style={inputStyle} />
      <div>
        <button onClick={handleClick} style={buttonStyle}>
          Focus
        </button>
        <button onClick={handleClear} style={clearButtonStyle}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default UseRef;
