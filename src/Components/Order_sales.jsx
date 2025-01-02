import React, { useState } from "react";
import Card from "./Card";
import { FaArrowUp } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import GraphChart from "./Graph";

export const Order_Sales = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleViewMore = () => {
    console.log("View More clicked");
    setIsDropdownOpen(false);
  };

  const handleDelete = () => {
    console.log("Delete clicked");
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-row space-x-10 w">
      <Card className="col-span-2 md:col-span-1 justify-space-between">
        <div className="pt-4 w-[380px] ">
          <div className="pl-6 ">
            <span className="text-lg font-semibold text-[#646E78]">Order</span>
            <h4 className="mt-2 text-3xl font-bold text-[#384551]">276k</h4>
          </div>
          <div className="mt-20">
            <GraphChart className="w-[150px] h-[100px] " />
          </div>
        </div>
      </Card>

      <Card className="pl-2">
        <div className="pt-3  w-[370px]">
          <div className="flex items-center justify-between p-3 relative">
            <img
              src="/public/sales.png"
              alt="Sales"
              className="h-12 w-12 object-cover"
            />
            <button
              onClick={toggleDropdown}
              className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            >
              <HiDotsVertical className="text-gray-500 cursor-pointer" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <button
                  onClick={handleViewMore}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100  hover:text-[#696cff]"
                >
                  View More
                </button>
                <button
                  onClick={handleDelete}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100  hover:text-[#696cff]"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
          <p className="mt-4 text-xl text-[#646E78] pl-3 h-10">Sales</p>
          <h4 className="text-4xl font-bold text-[#384551] pl-3">$4,679</h4>
          <small className="flex items-center text-2xl text-green-500 mt-6 pl-3">
            <FaArrowUp className="mr-1" />
            +28.42%
          </small>
        </div>
      </Card>
    </div>
  );
};
