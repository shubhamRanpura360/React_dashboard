import React from "react";

const StatCard = ({ number, label, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow-sm p-4">
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-2xl font-semibold text-gray-900">{number}</h4>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
        <Icon className="w-5 h-5 text-gray-600" />
      </div>
    </div>
  </div>
);

export default StatCard;
