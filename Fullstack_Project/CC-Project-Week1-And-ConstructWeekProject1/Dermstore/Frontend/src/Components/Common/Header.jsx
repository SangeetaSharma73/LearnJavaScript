import React from "react";
import Topbar from "../../../Layout/Topbar";
import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";

const Header = () => {
  return (
    <div>
      {/* Topbar */}
      <Topbar />
      {/* Navbar */}
      <Navbar />
      <SubNavbar />
      {/* Cart Drawer */}
    </div>
  );
};
export default Header;
