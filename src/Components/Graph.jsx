import React from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

const GraphChart = () => {
  const data = [
    { month: "Jan", orders: 200 },
    { month: "Feb", orders: 230 },
    { month: "Mar", orders: 245 },
    { month: "Apr", orders: 180 },
    { month: "May", orders: 220 },
    { month: "Jun", orders: 276 },
    { month: "July", orders: 230 },
    { month: "Aug", orders: 220 },
    { month: "Sap", orders: 300 },
    { month: "Oct", orders: 190 },
    { month: "Nav", orders: 265 },
    { month: "Dec", orders: 276 },
  ];

  return (
    <div className="h-20 ">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#4ade80"
            strokeWidth={2}
            dot={false}
            isAnimationActive={true}
          />
          <Tooltip
            contentStyle={{
              background: "white",
              border: "none",
              borderRadius: "6px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
            labelStyle={{ color: "#666" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphChart;
