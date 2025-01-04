import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const CircularProgress = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { name: "Fashion", value: 40, color: "#00e1ff" },
    { name: "Electronics", value: 35, color: "#4CAF50" },
    { name: "Books", value: 25, color: "#9C27B0" },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="absolute p-2 bg-white border rounded shadow-lg z-10"
          style={{
            transform: "translate(-50%, -120%)",
            left: payload[0].payload.cx,
            top: payload[0].payload.cy,
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded"
              style={{ backgroundColor: payload[0].payload.color }}
            />
            <p className="text-sm font-medium">{`${payload[0].name}: ${payload[0].payload.value}%`}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  const onPieEnter = (_, index) => setActiveIndex(index);
  const onPieLeave = () => setActiveIndex(null);

  // Get the data for the active index, or default to the first segment
  const activeData = activeIndex !== null ? data[activeIndex] : data[0];

  return (
    <div className="relative w-32 h-32">
      <PieChart width={128} height={128}>
        <Pie
          data={data}
          cx={64}
          cy={64}
          innerRadius={45}
          outerRadius={55}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              opacity={activeIndex === index ? 1 : 0.6}
              className="transition-opacity duration-300"
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-xl font-semibold text-black">
          {activeData.value}%
        </div>
        <div className="text-sm text-gray-500">{activeData.name}</div>
      </div>
      
    </div>
  );
};

export default CircularProgress;
