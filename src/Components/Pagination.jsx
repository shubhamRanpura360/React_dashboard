import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex items-center justify-between p-4 border-t">
    <div className="text-sm text-gray-700">
      Showing {(currentPage - 1) * 10 + 1} to {Math.min(currentPage * 10, 50)}{" "}
      of 50 entries
    </div>
    <div className="flex gap-2">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded border disabled:opacity-50 bg-blue-400"
      >
        Previous
      </button>
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded border disabled:opacity-50  bg-blue-400"
      >
        Next
      </button>
    </div>
  </div>
);

export default Pagination;
