import { useState } from "react";

const SubNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    { title: "BRANDS", content: "Welcome to our homepage." },
    { title: "BY CATEGORY", content: "Learn more about our company." },
    { title: "BESTSELLERS", content: "Explore our services and offerings." },
    { title: "SUNSCREEN", content: "Get in touch with us." },
    { title: "SALE & OFFERS", content: "Get in touch with us." },
    { title: "EXCLUSIVES", content: "Get in touch with us." },
    { title: "DISCOVER", content: "Get in touch with us." },
    { title: "NEW", content: "Get in touch with us." },
    { title: "BLOG", content: "Get in touch with us." },
    { title: "TEXT AN EXPERT", content: "Get in touch with us." },
  ];

  return (
    <div className="relative">
      {/* SubNavbar */}
      <div className="bg-black text-white flex justify-center">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative px-6 py-3
            text-sm 
            font-bold
            cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {item.title}

            {/* Dropdown Content */}
            {activeIndex === index && (
              <div className="absolute top-full left-0 w-full bg-white text-black p-4 shadow-md">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <hr className="border-t-2 border-black my-2 w-16" />
                <p className="text-sm">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubNavbar;
