import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdDashboard, MdSupport, MdOutlineManageHistory } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const Sidebar = ({ menuOpen, handleMenuClose }) => {
  const {pathname}=useLocation()
  const navigate = useNavigate();

  return (
    <div
      className={`w-full md:w-[25%] lg:w-[20%] pl-6 md:pl-0 md:flex h-[100vh] fixed overflow-auto left-0 top-0 z-[200] border-r border-l-black bg-white  flex-col items-center transition-all ease-in-out duration-500  transform -translate-x-full ${
        menuOpen && `transform translate-x-0`
      }`}
    >
      <div className="mt-6 flex flex-row items-center gap-[0.5rem]">
        <div className="w-[3rem] h-[3rem] bg-black flex justify-center items-center text-white text-[2rem] rounded-[20%] font-bold">
          K
        </div>
        <h2 className="text-xl font-bold text-[2rem] text-black">Kasot</h2>
      </div>
      <div className="absolute right-2 top-7 md:hidden">
        <HiMenuAlt2
          className="text-[2.3rem] text-black cursor-pointer"
          onClick={handleMenuClose}
        />
      </div>
      <ul className="flex flex-col gap-10 mt-10 items-start">
        <div
          className={`flex gap-4 items-center cursor-pointer hover:ml-[0.5rem] px-3 py-2 transition-all ease-in-out duration-500 ${pathname.startsWith("/") && pathname.length===1 ? "bg-black text-white rounded-md" : "bg-transparent text-black"}`}
          onClick={() => {
            navigate("/");
            handleMenuClose(true);
          }}
          data-id="/"
        >
          <MdDashboard />
          <span className="text-lg">Dashboard</span>
        </div>
        <div
          className={`flex gap-4 items-center cursor-pointer hover:ml-[0.5rem] px-3 py-2 transition-all ease-in-out duration-500 ${pathname.startsWith("/orders")? "bg-black text-white rounded-md" : "bg-transparent text-black"}`}
          onClick={() => {
            navigate("/orders");
            handleMenuClose(true);
          }}
          data-id="orders"
        >
          <MdOutlineManageHistory />
          <span className="text-lg">Order Management</span>
        </div>
        <div
          className={`flex gap-4 items-center cursor-pointer hover:ml-[0.5rem] px-3 py-2 transition-all ease-in-out duration-500 ${pathname.startsWith("/design-management")? "bg-black text-white rounded-md" : "bg-transparent text-black"}`}
          onClick={() => {
            navigate("/design-management");
            handleMenuClose(true);
          }}
        >
          <AiOutlineDashboard />
          <span className="text-lg">Design</span>
        </div>
        <div
          className={`flex gap-4 items-center cursor-pointer hover:ml-[0.5rem] px-3 py-2 transition-all ease-in-out duration-500 ${pathname.startsWith("/support")? "bg-black text-white rounded-md" : "bg-transparent text-black"}`}
          onClick={() => {
            navigate("/support");
            handleMenuClose(true);
          }}
     >
          <MdSupport />
          <span className="text-lg">Support</span>
        </div>
        <div
          className={`flex gap-4 items-center cursor-pointer hover:ml-[0.5rem] px-3 py-2 transition-all ease-in-out duration-500 ${pathname.startsWith("/settings")? "bg-black text-white rounded-md" : "bg-transparent text-black"}`}
          onClick={() => {
            navigate("/settings");
            handleMenuClose(true);
          }}
        >
          <FiSettings />
          <span className="text-lg">Account Settings</span>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
