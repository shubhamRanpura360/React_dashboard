import React, { useState } from "react";
import { Card, CardContent } from "./Card";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import { FaArrowDownLong } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";

const PaymentCard = () => {
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

  const revenueData = [
    { name: "M", value: 200 },
    { name: "T", value: 300 },
    { name: "W", value: 250 },
    { name: "T", value: 400 },
    { name: "F", value: 350 },
    { name: "S", value: 450 },
    { name: "S", value: 425 },
  ];

  const data = [
    { month: "Jan", value: 40000 },
    { month: "Feb", value: 55000 },
    { month: "Mar", value: 75000 },
    { month: "Apr", value: 65000 },
    { month: "May", value: 80000 },
    { month: "Jun", value: 84686 },
  ];

  return (
    <div className="flex flex-wrap gap-5 w-full ">
      <div className="flex gap-10  ">
        <Card className="pl-2">
          <div className="pt-3  w-[370px]">
            <div className="flex items-center justify-between p-3 relative">
              <img
                src="./public/paypal.png"
                alt="Sales"
                className="h-12 w-12 object-cover"
              />
              <button
                className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                onClick={toggleDropdown}
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
            <p className="mt-4 text-xl text-[#646E78] pl-3 h-10">Payments</p>
            <h4 className="text-4xl font-bold text-[#384551] pl-3">$4,679</h4>
            <small className="flex items-center text-2xl text-red-500 mt-4 pl-3">
              <FaArrowDownLong className="mr-1" />
              +28.42%
            </small>
          </div>
        </Card>

        <Card className="  min-h-[300px]">
          <CardContent className=" flex flex-col p-4 min-w-[380px] h-[300px]">
            <div className="text-gray-600 text-xl">Revenue</div>
            <div className="text-3xl font-bold mt-2">425k</div>
            <div className="flex-grow mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <Bar dataKey="value" fill="#6366F1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full ">
        <Card className="w-full h-full min-h-[200px] min-w-[105%]">
          <CardContent className="h-full flex flex-col p-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 text-lg">Profile Report</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-md font-medium">
                YEAR 2022
              </span>
            </div>

            <div className="mt-4 flex items-center">
              <span className="text-green-500 text-2xl font-semibold">
                +68.2%
              </span>
            </div>

            <div className="text-gray-900 text-3xl font-semibold mt-2">
              $84,686k
            </div>

            <div className="flex-grow mt-4 h-24">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#FFA500"
                    strokeWidth={3}
                    dot={false}
                    tension={0.4}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentCard;
