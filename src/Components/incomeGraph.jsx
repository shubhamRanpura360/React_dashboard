import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

// IncomeGauge Component
const IncomeCircle = () => {
  const income = 65;

  return (
    <div className="flex items-center justify-center gap-4 ">
      {/* Left Side Circular Progress */}
      <div className="flex items-center ">
        <div className="relative h-20 w-20">
          <svg className="h-full w-full" viewBox="0 0 100 100">
            <circle
              className="stroke-slate-200"
              cx="50"
              cy="50"
              r="40"
              fill="none"
              strokeWidth="8"
            />
            <circle
              className="stroke-blue-500"
              cx="50"
              cy="50"
              r="40"
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${income * 2.51} 251`}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-gray-500">${income}</span>
          </div>
        </div>
      </div>

      {/* Right Side Text Content */}
      <div className="">
        <h6 className="text-gray-700 text-lg font-semibold">
          Income this last week
        </h6>
        <span className="text-gray-500 font-semibold">
          $39k less than last week
        </span>
      </div>
    </div>
  );
};

// IncomeChart Component
const data = [
  { month: "Jan", value: 45 },
  { month: "Feb", value: 30 },
  { month: "Mar", value: 35 },
  { month: "Apr", value: 85 },
  { month: "May", value: 45 },
  { month: "Jun", value: 65 },
  { month: "Jul", value: 60 },
];

const IncomeChart = () => {
  return (
    <div className="h-64">
      <LineChart
        width={500}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} hide />
        <Tooltip />
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#818cf8" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke="#818cf8"
          fillOpacity={1}
          fill="url(#colorValue)"
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#818cf8"
          strokeWidth={2}
          dot={{ r: 0 }}
          activeDot={{ r: 4 }}
        />
      </LineChart>

      {/* Insert the IncomeCircle here */}
      <div className="mt-4 flex justify-center ">
        <IncomeCircle />
      </div>
    </div>
  );
};

export default IncomeChart;
