import React, { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { FaCircleChevronDown } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import MyTable from "../components/Table";
const Dashboard = () => {
  return (
    <>
      <div className="flex-grow px-8  overflow-y-auto ml-60">
        <div className="flex justify-between px-4 py-4 items-center ">
          <div className="flex items-center gap-2">
            <p className="text-gray-600 text-13">
              <span className="font-semibold">Payouts</span> How it works
            </p>
          </div>

          <div className="flex px-8 py-2 w-1/2 items-center gap-1.6vw bg-gray-200 rounded-md p-0.6vw 1vw">
            <CiSearch size="1.5rem" />
            <input
              className="w-full px-6 outline-none bg-gray-200"
              type="text"
              placeholder="Search features, tutorials, etc."
            />
          </div>
          <div className="flex justify-end gap-2 w-25vw">
            <div className="flex items-center justify-center bg-gray-300 w-10 h-10 rounded-full">
              <MdMessage />
            </div>
            <div className="flex items-center justify-center bg-gray-300 w-10 h-10 rounded-full">
              <FaCircleChevronDown />
            </div>
          </div>
        </div>
        <div>
          <MyTable />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
