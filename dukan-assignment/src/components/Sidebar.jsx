import React from "react";
import { IoIosHome } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
const Sidebar = () => {
  const NavItem = [
    {
      icon: <IoIosHome />,
      text: "Home",
    },
    { icon: <MdProductionQuantityLimits />, text: "Orders" },
    { icon: <MdProductionQuantityLimits />, text: "Products" },
    { icon: <MdProductionQuantityLimits />, text: "Delivery" },
    { icon: <MdProductionQuantityLimits />, text: "Marketing" },
    { icon: <MdProductionQuantityLimits />, text: "Analytics" },
    { icon: <MdProductionQuantityLimits />, text: "Payouts" },
    { icon: <MdProductionQuantityLimits />, text: "Discounts" },
    { icon: <MdProductionQuantityLimits />, text: "Audience" },
    { icon: <MdProductionQuantityLimits />, text: "Appearance" },
    { icon: <MdProductionQuantityLimits />, text: "Plugins" },
  ];

  return (
    <div
      style={{ background: "#1E2640" }}
      className="flex flex-col  justify-between p-4 gap-4 h-screen bg-blue-800 w-1/6 fixed"
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-2 cursor-pointer w-11/12">
          <div>
            <img src="Image.jpg" className="w-12 h-12 rounded" alt="Logo" />
          </div>
          <div className="text-white w-2/3">
            <p className="font-semibold">Nishyan</p>
            <p className="text-sm underline opacity-80">Visit Store</p>
          </div>
          <FaChevronDown color="white" />
        </div>
        <div className="flex flex-col text-white h-4/5">
          {NavItem.map(({ icon, text }) => (
            <div
              key={text}
              className={`flex  gap-2 items-center cursor-pointer p-2 w-11/12 rounded ${
                text === "Payouts" && "bg-gray-700"
              }`}
            >
              <p>{icon}</p>
              <p className={` text-lg ${text !== "Payouts" && "opacity-80"}`}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center p-1.5 gap-3 rounded bg-gray-700 w-11/12">
        <div className=" cursor-pointer p-1.5 rounded bg-opacity-10">
          <CiWallet color="white" size="2rem" />
        </div>
        <div className="text-white w-2/3">
          <p className="text-sm opacity-80">Available credits</p>
          <p className="text-lg font-semibold">222.10</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
