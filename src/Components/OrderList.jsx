import React, { useState } from "react";
import StatCard from "./StatCard";
import ActionMenu from "./ActionMenu";
import Pagination from "./Pagination";
import { Calendar, CheckSquare, RefreshCw, XCircle } from "lucide-react";

const OrderList = () => {
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());

  const stats = [
    { number: 56, label: "Pending Payment", icon: Calendar },
    { number: 12689, label: "Completed", icon: CheckSquare },
    { number: 124, label: "Refunded", icon: RefreshCw },
    { number: 32, label: "Failed", icon: XCircle },
  ];

  const [rows, setRows] = useState(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      firstName: ["John", "Jane", "Bob", "Alice"][
        Math.floor(Math.random() * 4)
      ],
      lastName: ["Smith", "Doe", "Johnson", "Brown"][
        Math.floor(Math.random() * 4)
      ],
      age: Math.floor(Math.random() * 40) + 20,
      date: new Date(
        2023,
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1
      ).toLocaleDateString(),
      order: `#${Math.floor(1000 + Math.random() * 9000)}`,
      payment: ["Paid", "Cancelled", "Failed"][Math.floor(Math.random() * 3)],
    }))
  );

  const totalPages = Math.ceil(rows.length / rowsPerPage);
  const currentPageRows = rows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleView = (id) => {
    console.log(`Viewing order ${id}`);
  };

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(new Set(currentPageRows.map((row) => row.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const getPaymentStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "text-green-600";
      case "cancelled":
        return "text-gray-600";
      case "failed":
        return "text-red-600";
      default:
        return "text-gray-900";
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 bg-white sticky left-36 max-w-[1590px] overflow-x-hidden">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            number={stat.number}
            label={stat.label}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="p-14 max-w-[1790px] pl-36 sticky">
        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-gray-700 bg-gray-50">
                <tr>
                  <th className="p-4">
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={
                        currentPageRows.length > 0 &&
                        currentPageRows.every((row) => selectedRows.has(row.id))
                      }
                      className="w-4 h-4"
                    />
                  </th>
                  <th className="p-4">ID</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Age</th>
                  <th className="p-4">Order</th>
                  <th className="p-4">Payment</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentPageRows.map((row) => (
                  <tr key={row.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedRows.has(row.id)}
                        onChange={() => handleSelectRow(row.id)}
                        className="w-4 h-4"
                      />
                    </td>
                    <td className="p-4">{row.id}</td>
                    <td className="p-4">{row.date}</td>
                    <td>{`${row.firstName} ${row.lastName}`}</td>
                    <td className="p-4">{row.age}</td>
                    <td className="p-4">{row.order}</td>
                    <td className={`p-4 ${getPaymentStatusColor(row.payment)}`}>
                      {row.payment}
                    </td>
                    <td className="p-2">
                      <ActionMenu
                        row={row}
                        onView={handleView}
                        onDelete={handleDelete}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default OrderList;
