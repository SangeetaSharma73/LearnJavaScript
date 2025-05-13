import { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import SearchBar from "./Navbar/SearchBar";
import DShape from "./Navbar/DShape";
import RightMenu from "./Navbar/RightMenu";
const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div
      className={`transition-colors duration-300 ${
        isSearchFocused ? "bg-gray-100" : "bg-white"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-3 shadow-md">
        <div className="flex items-center">
          {/* Search Bar */}
          <SearchBar onFocusChange={setIsSearchFocused} />

          {/* Logo with margin-left 10px */}
          <DShape/>
        </div>
        
        {/* Right Side Menu */}
        <RightMenu/>
        
        <div className="flex items-center space-x-6">
          {/* Sign In */}
          <div className="relative">
            <button className="flex items-center space-x-2">
              <FaUser className="text-xl" />
            </button>
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-2">
            <FaShoppingCart className="text-xl" />
            <span>Cart</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
