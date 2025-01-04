import React from "react";
import { Card, CardContent } from "./Card";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { BiCloset } from "react-icons/bi";
import { RiHome4Line } from "react-icons/ri";
import { MdSportsSoccer } from "react-icons/md";
import CircularProgress from "./CircleGraph";
import IncomeChart from "./incomeGraph";
import { TransactionCard } from "./TransactionCard";

const IncomeCard = () => {
  return (
    <div className=" flex flex-row  md:flex-row gap-6">
      {/* Order Statistics Card */}
      <Card className="flex-1 min-w-[500px]  min-h-[470px]">
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-2">
              <div>
                <h5 className="text-xl font-semibold">Order Statistics</h5>
                <p className="text-sm text-gray-500 font-semibold">
                  42.84k Total Sales
                </p>
              </div>
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
            <div className="flex items-center max-h-[120px] ">
              {/* Left Side */}
              <div className="p-6 mb-6">
                <p className="text-4xl text-[#384551] pl-2">8,258</p>
                <p className="text-[#646E78] pl-2 p-3 ">Total Orders</p>
              </div>

              {/* Right Side */}
              <div className=" pl-44">
                <CircularProgress />
                <canvas id="circleGraph" width="50%" height="50%"></canvas>
              </div>
            </div>

            <div className="space-y-8 ">
              {[
                {
                  name: "Electronic",
                  desc: "Mobile, Earbuds, TV",
                  value: "82.5k",
                  icon: <FaMobileAlt />,
                  bgColor: "bg-blue-100",
                  textColor: "text-blue-500",
                },
                {
                  name: "Fashion",
                  desc: "T-shirt, Jeans, Shoes",
                  value: "23.8k",
                  icon: <BiCloset />,
                  bgColor: "bg-green-100",
                  textColor: "text-green-600",
                },
                {
                  name: "Decor",
                  desc: "Fine Art, Dining",
                  value: "849k",
                  icon: <RiHome4Line />,
                  bgColor: "bg-[#D7F5F7]",
                  textColor: "text-[#03c3ec]",
                },
                {
                  name: "Sports",
                  desc: "Football, Cricket Kit",
                  value: "99",
                  icon: <MdSportsSoccer />,
                  bgColor: "bg-[#EBEEF0]",
                  textColor: "text-[#8592a3]",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center"
                >
                  <div className="flex gap-3">
                    <div
                      className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center ${item.textColor}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                  <span className="font-medium text-[#384551]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Income Card */}
      <Card className="flex-1 min-w-[510px]">
        <CardContent>
          <div className="space-y-8">
            <div className="flex gap-4">
              <button className="bg-[#696cff] text-white px-4 py-2 rounded-lg">
                Income
              </button>
              <button className="text-gray-500 px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-500">
                Expenses
              </button>
              <button className="text-gray-500 px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-500">
                Profit
              </button>
            </div>
            <div className="flex items-center gap-3">
              {/* Icon/Image */}
              <img
                src="/public/wallet-primary.png"
                alt="Balance Icon"
                className="h-10 w-10"
              />

              {/* Text Content */}
              <div>
                <p className="text-gray-500">Total Balance</p>
                <div className="flex items-center gap-2">
                  <p className="text-1xl font-semibold text-[#384551]">
                    $459.10
                  </p>
                  <span className="text-green-500 text-sm">↑ 42.9%</span>
                </div>
              </div>
            </div>
            <IncomeChart />
            <div className="mt-4 flex items-center gap-4"></div>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Card */}
      <Card className="flex-1 min-w-[532px]">
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-2">
              <div>
                <h5 className="text-xl font-semibold text-[#384551]">
                  Transactions
                </h5>
              </div>
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
            {/* Transactions Card - Data */}
            <TransactionCard />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IncomeCard;
