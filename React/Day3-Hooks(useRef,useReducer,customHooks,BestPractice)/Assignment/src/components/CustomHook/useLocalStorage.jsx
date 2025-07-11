import React, { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  // Initialize state from localStorage (or use initialValue)
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.warn("error reading localstorage", err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn("error ", error);
    }
  }, [key, setStoredValue]);
  return [storedValue, setStoredValue];
};

export default useLocalStorage;
