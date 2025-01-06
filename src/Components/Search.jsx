import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineLightMode } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";

import ProfileDropdown from "./ProfileDown";

export const Search = () => {
  return (
    <div className="bg-white w-[1590px] h-[80px] p-4 left-36 shadow-sm top-0 sticky z-10 mb-6">
      <div className="flex items-center p-2 rounded-md ">
        <FiSearch className="text-gray-500 mr-2 text-3xl" />
        <input
          type="text"
          placeholder="Search (Ctrl+/)"
          className="w-full text-2xl bg-transparent outline-none text-gray-700"
        />
        <div className="flex items-center ml-4 space-x-10">
          <GrLanguage className="text-gray-500 w-10 h-10" />
          <MdOutlineLightMode className="text-black-500 w-10 h-10" />
          <IoNotifications className="text-gray-500 w-10 h-10" />
          {/* profile dropdown menu*/}
          < ProfileDropdown/>
        </div>
      </div>
    </div>
  );
};
