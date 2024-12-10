import React from "react";
import logo from "../images/caat-removebg-preview 1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" container py-[20px] mx-auto flex items-center justify-between">
      <div>
        <img src={logo} alt="" width={100} />
      </div>
      <div className=" flex items-center gap-[40px] text-xl font-medium">
        <Link>claims</Link>
        <Link>support</Link>
        <Link>our service</Link>
        <Link>help</Link>
      </div>
      <div className="flex items-center gap-[20px] text-lg">
        <Link
          to={"login"}
          className="flex items-center justify-center bg-[#394496] w-[149px] h-[48px] rounded-lg text-white"
        >
          Log in
        </Link>
        <Link
          to={"register"}
          className="bg-transparent flex items-center justify-center border-2 border-[#394496] w-[149px] h-[48px] rounded-lg text-[#394496]"
        >
          register
        </Link>
      </div>
    </div>
  );
};

export default Header;
