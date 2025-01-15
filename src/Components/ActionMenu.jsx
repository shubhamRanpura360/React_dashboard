import React from "react";
import { useNavigate } from "react-router-dom";

const ActionMenu = ({ row, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="dropdown">
      <div className="dropdown-content bg-white rounded-md">
        <div className="flex flex-row">
          <div
            onClick={() => navigate(`/OrderDetails`)}
            className="cursor-pointer flex items-center justify-center p-3 border rounded-md bg-blue-600 hover:bg-blue-500"
          >
            <button className="text-white">View</button>
          </div>
          <div
            onClick={() => onDelete(row.id)}
            className="cursor-pointer flex items-center justify-center p-3 border rounded-md bg-red-600 hover:bg-red-500"
          >
            <button className="text-white">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionMenu;
