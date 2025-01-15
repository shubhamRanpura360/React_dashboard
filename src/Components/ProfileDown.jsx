import React, { useState, useRef, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosPower } from "react-icons/io";
import { FaRegCreditCard } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <img
        src="/profile.png"
        alt="profile"
        className="w-14 rounded-full mb-2"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className="absolute bottom-0 left-5 w-3 h-3 bg-green-500 rounded-full border-2 border-white mb-2"
        title="Online"
      ></div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20">
          <div className="flex items-center px-4 py-3 border-b border-gray-100">
            {/* Left-side Image */}
            <img
              src="/profile.png"
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            {/* Right-side Content */}
            <div>
              <p className="text-1xl font-medium text-gray-900">John Doe</p>
              <p className="text-1xl text-gray-500">Admin</p>
            </div>
          </div>

          <div className="py-2">
            <button className="flex items-center px-4 py-2 text-1xl text-gray-700 hover:bg-gray-100 w-full text-left">
              <CgProfile className="mr-2" />
              My Profile
            </button>

            <button className="flex items-center px-4 py-2 text-1xl text-gray-700 hover:bg-gray-100 w-full text-left">
              <IoSettingsSharp className="mr-2" />
              Settings
            </button>

            <button className="flex items-center px-4 py-2 text-1xl text-gray-700 hover:bg-gray-100 w-full text-left relative">
              <FaRegCreditCard className="mr-2" />
              Billing Plan
              <span className="absolute right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                4
              </span>
            </button>

            <button className="flex items-center px-4 py-2 text-1xl text-gray-700 hover:bg-gray-100 w-full text-left">
              <FiDollarSign className="mr-2" />
              Pricing
            </button>

            <button className="flex items-center px-4 py-2 text-1xl text-gray-700 hover:bg-gray-100 w-full text-left">
              <AiOutlineQuestionCircle className="mr-2" />
              FAQ
            </button>

            <button className="flex items-center px-4 py-2 text-1xl text-gray-700 hover:bg-gray-100 w-full text-left">
              <IoIosPower className="mr-2" />
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
