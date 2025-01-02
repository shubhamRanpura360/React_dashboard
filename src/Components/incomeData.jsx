import React from "react";
import { Card, CardContent } from "./Card";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import { BsThreeDotsVertical } from "react-icons/bs";

const data = {
  labels: ["Electronic", "Fashion", "Decor", "Sports"],
  datasets: [
    {
      data: [38, 25, 20, 17],
      backgroundColor: ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"],
      borderWidth: 0,
    },
  ],
};

const incomeData = [
  { name: "Jan", value: 300 },
  { name: "Feb", value: 400 },
  { name: "Mar", value: 300 },
  { name: "Apr", value: 550 },
  { name: "May", value: 400 },
  { name: "Jun", value: 450 },
  { name: "Jul", value: 400 },
];

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
            <div className="flex items-center">
              {/* Left Side */}
              <div className="">
                <p className="text-4xl text-[#384551] pl-2">8,258</p>
                <p className="text-[#646E78] pl-2 p-3 ">Total Orders</p>
              </div>

              {/* Right Side */}
              <div className="ml-6">
                <canvas id="circleGraph" width="100" height="100"></canvas>
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  name: "Electronic",
                  desc: "Mobile, Earbuds, TV",
                  value: "82.5k",
                },
                {
                  name: "Fashion",
                  desc: "T-shirt, Jeans, Shoes",
                  value: "23.8k",
                },
                { name: "Decor", desc: "Fine Art, Dining", value: "849k" },
                { name: "Sports", desc: "Football, Cricket Kit", value: "99" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center"
                >
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg"></div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Income Card */}
      <Card className="flex-1 min-w-[510px]">
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Income
              </button>
              <button className="text-gray-500 px-4 py-2">Expenses</button>
              <button className="text-gray-500 px-4 py-2">Profit</button>
            </div>
            <div>
              <p className="text-gray-500">Total Balance</p>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">$459.10</p>
                <span className="text-green-500 text-sm">↑ 42.9%</span>
              </div>
            </div>
            <div className="h-64">
              <LineChart width={350} height={200} data={incomeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.3}
                />
              </LineChart>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Card */}
      <Card className="flex-1 min-w-[530px]">
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Transactions</h2>
              <span className="text-gray-500">...</span>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: "Paypal",
                  desc: "Send money",
                  amount: "+82.6",
                  currency: "USD",
                },
                {
                  name: "Wallet",
                  desc: "Mac'D",
                  amount: "+270.69",
                  currency: "USD",
                },
                {
                  name: "Transfer",
                  desc: "Refund",
                  amount: "+637.91",
                  currency: "USD",
                },
                {
                  name: "Credit Card",
                  desc: "Ordered Food",
                  amount: "-838.71",
                  currency: "USD",
                },
                {
                  name: "Wallet",
                  desc: "Starbucks",
                  amount: "+203.33",
                  currency: "USD",
                },
                {
                  name: "Mastercard",
                  desc: "Ordered Food",
                  amount: "-92.45",
                  currency: "USD",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center"
                >
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg"></div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                  <span
                    className={`font-medium ${
                      item.amount.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.amount} {item.currency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IncomeCard;
