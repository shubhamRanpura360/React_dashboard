import React, { useState } from "react";

const DeleteOrderModal = ({ isOpen, onClose, onDelete }) => {
  const [status, setStatus] = useState("confirm");

  const handleDelete = () => {
    setStatus("deleted");
    onDelete();
  };

  const handleCancel = () => {
    setStatus("cancelled");
  };

  const handleClose = () => {
    // Reset status and close modal
    setTimeout(() => {
      setStatus("confirm");
      onClose();
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#646E78] bg-opacity-50 flex items-center justify-center ">
      <div className="bg-white rounded-lg p-6 max-w-[30%] w-full h-[50%] mx-4">
        {status === "confirm" && (
          <div className="flex flex-col items-center mt-12">
            {/* Warning Icon */}
            <div className="w-12 h-12 rounded-full border-4 border-orange-400 flex items-center justify-center mb-12">
              <span className="text-orange-400 text-2xl font-bold">!</span>
            </div>

            <h2 className="text-5xl text-[#646e78]  mb-32">Are you sure?</h2>
            <p className="text-gray-600 mb-22 text-center p-4">
              You won't be able to revert order!
            </p>

            <div className="flex gap-4 w-full">
              <button
                onClick={handleDelete}
                className="flex-1 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition-colors"
              >
                Yes, Delete order!
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {status === "deleted" && (
          <div className="flex flex-col items-center p-20">
            {/* Success Icon */}
            <div className="w-12 h-12 rounded-full border-4 border-green-400 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="text-4xl text-gray-700 font-medium mb-2">
              Deleted!
            </h2>
            <p className="text-gray-600 mb-6 text-1xl">
              Order has been removed.
            </p>

            <button
              onClick={handleClose}
              className="bg-green-500 text-white py-3 px-14 rounded hover:bg-green-600 transition-colors"
            >
              OK
            </button>
          </div>
        )}

        {status === "cancelled" && (
          <div className="flex flex-col items-center p-20">
            {/* Cancel Icon */}
            <div className="w-12 h-12 rounded-full border-4 border-red-400 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <h2 className="text-4xl text-gray-700 font-medium mb-2">
              Cancelled
            </h2>
            <p className="text-gray-600 mb-6 text-1xl">Cancelled Delete :)</p>

            <button
              onClick={handleClose}
              className="bg-green-500 text-white py-3 px-14 rounded hover:bg-green-600 transition-colors"
            >
              OK
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteOrderModal;
