import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import ProfileDropdown from "./ProfileDown";
import NotificationPanel from "./NotificationPanel";

export const Search = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  return (
    <div className="bg-white dark:bg-dark-background w-[1590px] h-[80px] p-4 left-36 shadow-sm top-0 sticky z-10 mb-6 text-gray-900 dark:text-dark-text">
      <div className="flex items-center p-2 rounded-md">
        <FiSearch className="text-gray-500 dark:text-gray-300 mr-2 text-3xl mb-2" />
        <input
          type="text"
          placeholder="Search (Ctrl+/)"
          className="w-full text-2xl bg-transparent outline-none text-gray-700 dark:text-dark-text mb-2"
        />
        <div className="flex items-center ml-4 space-x-10">
          <GrLanguage className="text-gray-900 dark:text-gray-300 w-10 h-10 mb-2" />
          {isDarkMode ? (
            <MdOutlineDarkMode
              className="cursor-pointer text-gray-900 dark:text-gray-300 w-12 h-10 mb-2"
              onClick={handleToggleTheme}
            />
          ) : (
            <MdOutlineLightMode
              className="cursor-pointer text-gray-900 dark:text-gray-300 w-11 h-10 mb-2"
              onClick={handleToggleTheme}
            />
          )}
          <NotificationPanel />
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};
