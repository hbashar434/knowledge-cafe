import React from "react";
import logo from "../../images/logo.jpg";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
      <img src={logo} alt="nav-logo" className="w-12 h-12 rounded-full" />
    </div>
  );
};

export default Header;
