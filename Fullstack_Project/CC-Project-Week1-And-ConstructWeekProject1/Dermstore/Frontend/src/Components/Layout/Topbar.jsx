import { useState } from "react";

const Topbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className={`py-3 text-black cursor-pointer transition-all duration-300 text-center text-xs font-medium
        ${isClicked ? "bg-black text-white" : "bg-gray-300 hover:bg-gray-200"}`}
      onClick={() => setIsClicked(!isClicked)}
    >
      SAVE 25% ON EMINENCE ORGANIC SKIN CARE WHEN YOU BUY 2 OR MORE PRODUCTS.
      ENDS 3/31. SHOP NOW.
    </div>
  );
};

export default Topbar;
