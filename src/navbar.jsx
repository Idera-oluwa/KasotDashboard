import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = ({ handleMenuClose, menuOpen }) => {
  return (
    <header className=" fixed top-0 z-[100] h-[80px] flex items-center justify-end w-full border-b border-1-black ">
      <div
        className={` flex items-center justify-between transition-all ease-in-out duration-500 bg-white h-full px-[4%] ${
          menuOpen ? `w-[80%]  md:w-[75%] lg:w-[80%]` : `w-full`
        }`}
      >
        <div>
          <HiMenuAlt2
            className="text-[2.3rem] text-black cursor-pointer"
            onClick={handleMenuClose}
          />
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold">Dashboard</h2>
        <h3 className="bg-black px-[0.9rem]  py-[0.4rem] text-white rounded-[10px] cursor-pointer text-[14px] sm:text-[16px]">
          Ideraoluwa Isa
        </h3>
      </div>
    </header>
  );
};

export default Navbar;