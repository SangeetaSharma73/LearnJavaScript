import { useState } from "react";
import { FaUser, FaShoppingBag, FaTimes } from "react-icons/fa";

const RightMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  return (
    <div className="relative bg-white">
      <nav className="flex items-center justify-end px-3 py-3 space-x-6">
        {/* Currency & Country Selector */}
        <div
          className="flex items-center cursor-pointer space-x-1"
          onClick={() => setIsModalOpen(true)}
        >
          <img src="/usa-flag.png" alt="USA" className="w-6 h-6 rounded-full" />
          <span className="text-sm font-medium">• CAD</span>
        </div>

        {/* Sign In Dropdown */}
        <div
          className="relative cursor-pointer flex items-center space-x-1"
          onMouseEnter={() => setIsSignInOpen(true)}
          onMouseLeave={() => setIsSignInOpen(false)}
        >
          <FaUser className="text-xl" />
          <span className="text-sm">Sign In</span>

          {/* Sign-In Dropdown */}
          {isSignInOpen && (
            <div className="absolute right-0 top-8 w-48 bg-white shadow-lg border p-3">
              <button className="w-full py-2 bg-black text-white text-sm hover:bg-white hover:text-black border border-black">
                Register
              </button>
              <button className="w-full py-2 mt-2 bg-black text-white text-sm hover:bg-white hover:text-black border border-black">
                Login
              </button>
              <div className="mt-2 text-sm">
                <p className="cursor-pointer hover:underline">
                  Your Favourites
                </p>
                <p className="cursor-pointer hover:underline mt-1">
                  Your Orders
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer flex items-center space-x-1">
          <FaShoppingBag className="text-xl" />
          <span className="text-sm">Cart</span>
          <span className="absolute -top-1 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </div>
      </nav>

      {/* Modal - Country & Currency */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 w-96 rounded-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes className="text-xl" />
            </button>

            <h2 className="text-lg font-semibold mb-4">Your Settings</h2>

            {/* Shipping Country */}
            <label className="text-sm font-medium">Shipping Country</label>
            <select className="w-full border p-2 mt-1">
              <option>Canada</option>
              <option>United States</option>
            </select>

            {/* Region & Language */}
            <label className="text-sm font-medium mt-4 block">
              Region & Language
            </label>
            <div className="relative">
              <select className="w-full border p-2 mt-1">
                <option>United States</option>
              </select>
              <div className="absolute right-2 top-3 text-red-500">🚫</div>
            </div>

            {/* Currencies */}
            <label className="text-sm font-medium mt-4 block">Currencies</label>
            <select className="w-full border p-2 mt-1">
              <option>$ (CAD)</option>
              <option>$ (USD)</option>
            </select>

            {/* Submit Button */}
            <button className="w-full mt-4 py-2 bg-black text-white text-sm hover:bg-white hover:text-black border border-black">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightMenu;
