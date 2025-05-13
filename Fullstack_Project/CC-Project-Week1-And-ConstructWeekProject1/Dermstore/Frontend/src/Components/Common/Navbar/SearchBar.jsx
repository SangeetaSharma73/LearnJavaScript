import React, { useState } from "react";
import { Search } from "lucide-react"; // Importing search icon

const SearchBar = ({ onFocusChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    onFocusChange(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onFocusChange(false);
  };

  return (
    <div
      className={`flex items-center border ${
        isFocused ? "border-black" : "border-gray-300"
      } p-2 w-120 transition-all duration-300 bg-white`}
    >
      <input
        type="text"
        placeholder="SEARCH"
        className="w-full outline-none placeholder-gray-400 text-xl"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Search className="text-black w-6 h-6 cursor-pointer ml-2" />
    </div>
  );
};

export default SearchBar;
