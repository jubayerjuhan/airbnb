import React from "react";
import AirbnbLogo from "../AirbnbLogo/AirbnbLogo";
import AirbnbSignatureInput from "../AirbnbSignatureInput/AirbnbSignatureInput";
import "./Navbar.scss";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar px-[80px] py-4 flex items-center gap-10 duration-150 transition-all bg-[white] justify-between">
      <div className="logo text-primary absolute top-6">
        <AirbnbLogo />
      </div>
      <div className="placeholderdiv"></div>
      <AirbnbSignatureInput />
      <div className="placeholderdiv"></div>
      <div className="absolute top-6 right-0 mr-[80px]">
        <FaRegUserCircle size={28} className="text-primary" />
      </div>
    </div>
  );
};

export default Navbar;
