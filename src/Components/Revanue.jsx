import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { FiDollarSign } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import Card from "./Card";

const data = [
  { month: "Jan", value2023: 15, value2022: -15 },
  { month: "Feb", value2023: 5, value2022: -18 },
  { month: "Mar", value2023: 12, value2022: -8 },
  { month: "Apr", value2023: 25, value2022: -15 },
  { month: "May", value2023: 15, value2022: -5 },
  { month: "Jun", value2023: 10, value2022: -18 },
  { month: "Jul", value2023: 8, value2022: -15 },
];

const Revenue = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectAll = () => {
    setIsDropdownOpen(false);
  };

  const handleRefresh = () => {
    setIsDropdownOpen(false);
  };

  const handleShare = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Card className="w-full p-12 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {/* Left section */}
        <div className="md:col-span-2 p-12">
          <div className="flex items-center justify-between mb-6 relative">
            <h5 className="text-lg font-medium text-gray-700">Total Revenue</h5>
            <button className="p-1 rounded-full hover:bg-gray-100 text-gray-400">
              <HiDotsVertical
                className="text-gray-500 cursor-pointer"
                onClick={toggleDropdown}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <button
                  onClick={handleSelectAll}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-[#696cff]"
                >
                  Select All
                </button>
                <button
                  onClick={handleRefresh}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-[#696cff]"
                >
                  Refresh
                </button>
                <button
                  onClick={handleShare}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-[#696cff]"
                >
                  Share
                </button>
              </div>
            )}
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-sm text-[#646E78]">2023</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-cyan-400 mr-2"></div>
              <span className="text-sm text-[#646E78]">2022</span>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} barGap={0}>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280" }}
                />
                <Bar dataKey="value2023" fill="#6366F1" radius={[4, 4, 0, 0]} />
                <Bar dataKey="value2022" fill="#22D3EE" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right section */}
        <div className="md:col-span-1 p-6 border-l border-gray-200">
          <div className="flex justify-center mb-8">
            <button className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-lg text-indigo-600 hover:bg-indigo-100">
              <span className="font-medium mr-2">2023</span>
              <IoIosArrowDown />
            </button>
          </div>

          <div className="flex flex-col items-center mb-8">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#EEF2FF"
                  strokeWidth="16"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#6366F1"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray="351.86"
                  strokeDashoffset="77.41"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">78%</span>
                <span className="text-gray-500 text-sm">Growth</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="font-semibold text-[#646E78]">62% Company Growth</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-1">
              <span className="flex items-center justify-center bg-[#e0e7ff] text-[#696cff] p-2 rounded-s-sm">
                <FiDollarSign className="text-xl" />
              </span>
              <div>
                <small className="text-gray-500 pl-1">2023</small>
                <h6 className="font-bold text-[#4a4a4a] pl-1 mb-2">$32.5k</h6>
              </div>
            </div>

            <div className="flex items-center space-x-2 pl-4">
              <span className="flex items-center justify-center bg-[#e0f7fc] text-[#03c3ec] p-2 rounded-s-sm">
                <BiWallet className="text-xl" />
              </span>
              <div>
                <small className="text-gray-500">2022</small>
                <h6 className="font-bold text-[#4a4a4a] mb-2">$41.2k</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Revenue;
