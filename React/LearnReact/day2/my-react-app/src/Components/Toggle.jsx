import { useState, useEffect } from "react";

const Toggle= () => {
  // Step 1: Local Storage se mode get karo
  const getInitialMode = () => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // "true" ko boolean me convert kiya
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

  // Step 2: Dark mode toggle function
  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode); // Local storage me save karo
  };

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]); // Jab bhi mode change ho, local storage update ho

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>4. Dark Mode Toggle with Local Storage 🌗</h1>
        <button onClick={toggleMode}>
          {isDarkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
        </button>
      </div>
    </div>
  );
}

export default Toggle;
