import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "./Card";
import { GrCart } from "react-icons/gr";
import EditUserModal from "./EditUserModal";
import DeleteOrderModal from "./DeleteOrderModel";

const orderItems = [
  {
    id: 1,
    name: "Wooden Chair",
    details: "Material: Wooden",
    price: 841,
    qty: 2,
    total: 1682,
    image: "/woodenchair.png",
  },
  {
    id: 2,
    name: "Oneplus 10",
    details: "Storage:128gb",
    price: 896,
    qty: 3,
    total: 2688,
    image: "/oneplus.png",
  },
  {
    id: 3,
    name: "Nike Jordan",
    details: "Size:8UK",
    price: 392,
    qty: 1,
    total: 392,
    image: "/nikejordan.png",
  },
  {
    id: 4,
    name: "Face cream",
    details: "Gender:Women",
    price: 813,
    qty: 2,
    total: 1626,
    image: "/facecream.png",
  },
];

const shippingActivity = [
  {
    status: "Order was placed (Order ID: #32543)",
    details: "Your order has been placed successfully",
    time: "Tuesday 11:29 AM",
    completed: true,
  },
  {
    status: "Pick-up",
    details: "Pick-up scheduled with courier",
    time: "Wednesday 11:29 AM",
    completed: true,
  },
  {
    status: "Dispatched",
    details: "Item has been picked up by courier",
    time: "Thursday 11:29 AM",
    completed: true,
  },
  {
    status: "Package arrived",
    details: "Package arrived at an Amazon facility, NY",
    time: "Saturday 15:20 AM",
    completed: true,
  },
  {
    status: "Dispatched for delivery",
    details: "Package has left an Amazon facility, NY",
    time: "Today 14:12 PM",
    completed: true,
  },
  {
    status: "Delivery",
    details: "Package will be delivered by tomorrow",
    time: "",
    completed: false,
  },
];

const OrderDetails = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteOrder = () => {
    console.log("Order deleted");
    setIsDeleteModalOpen(true); 
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === orderItems.length) {
      setSelectedItems([]); // Unselect all
    } else {
      setSelectedItems(orderItems.map((item) => item.id));
    }
  };

  return (
    <>
      <div className="flex items-center justify-between p-8 pl-36 max-w-[1765px]">
        {/* Left section */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4 text-[#385551] font-semibold">
            <span className="text-2xl text-[#385551]">Order #32543</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded">
                Paid
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded">
                Ready to Pickup
              </span>
            </div>
          </div>
          <span className="text-xl text-[#646E78] mt-1">
            Aug 17, 2025, 5:48 (ET)
          </span>
        </div>

        {/* Right section */}
        <button
          onClick={openDeleteModal}
          className="bg-[#FFE0DB] text-red-600 px-4 py-2 rounded transition-colors hover:bg-red-500 hover:text-white"
        >
          Delete Order
        </button>

        {/* Delete Order Modal */}
        <DeleteOrderModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          onDelete={handleDeleteOrder}
        />
      </div>

      <div className="flex flex-wrap gap-8 justify-between max-w-[1880px] p-4 px-36">
        {/* Left Section */}
        <div className="flex flex-col flex-[2]">
          {/* Order Details Card */}
          <Card className="flex-col p-4">
            <CardContent>
              <div className="space-y-3 text-[#384551]">
                {/* Table Header */}
                <div className="flex text-1xl text-gray-600 pb-2 font-semibold border-b-2 ">
                  <div className="flex-1">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedItems.length === orderItems.length}
                      onChange={toggleSelectAll}
                    />
                  </div>
                  <div className="flex-[5] ">PRODUCTS</div>
                  <div className="flex-[2]">PRICE</div>
                  <div className="flex-[2]">QTY</div>
                  <div className="flex-[2]">TOTAL</div>
                </div>
                {/* Table Body */}
                {orderItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center py-4 border-b"
                  >
                    <div className="flex-1">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => toggleItem(item.id)}
                      />
                    </div>
                    <div className="flex-[5] flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-[#646E78]">{item.details}</p>
                      </div>
                    </div>
                    <div className="flex-[2]">${item.price}</div>
                    <div className="flex-[2]">{item.qty}</div>
                    <div className="flex-[2]">${item.total}</div>
                  </div>
                ))}
                {/* Summary */}
                <div className="pt-4 space-y-2 text-[#646E78] ">
                  <div className="flex justify-end">
                    <div className="w-48">
                      <div className="flex justify-between text-1xl">
                        <span>Subtotal:</span>
                        <span>$2093</span>
                      </div>
                      <div className="flex justify-between text-1xl">
                        <span>Discount:</span>
                        <span>$2</span>
                      </div>
                      <div className="flex justify-between text-1xl">
                        <span>Tax:</span>
                        <span>$28</span>
                      </div>
                      <div className="flex justify-between font-medium pt-2">
                        <span>Total:</span>
                        <span>$2113</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Shipping Activity */}
          <Card className="flex-col p-4 mt-6">
            <CardHeader>
              <h2 className="text-xl font-semibold text-[#384551]">
                Shipping activity
              </h2>
            </CardHeader>
            <CardContent className="p-4">
              <div className="relative">
                {shippingActivity.map((activity, index) => (
                  <div key={index} className="flex gap-4 mb-8">
                    <div className="relative">
                      <div
                        className={`w-3 h-3  rounded-full ${
                          activity.completed ? "bg-blue-600" : "bg-gray-400"
                        }`}
                      />
                      {index !== shippingActivity.length - 1 && (
                        <div
                          className={`absolute top-4 left-1.5 w-0.5 h-full -ml-[2px] ${
                            activity.completed ? "bg-blue-600" : "bg-gray-300"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-[#384551]">
                            {activity.status}
                          </h3>
                          <p className="text-sm text-[#646E78]">
                            {activity.details}
                          </p>
                        </div>
                        <p className="text-1xl text-gray-400 mt-1 font-semibold">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Section */}
        <div className="flex flex-col flex-1 gap-6 ">
          {/* Customer Details */}
          <Card className="p-4">
            <CardHeader className="mb-4">
              <h2 className="text-xl font-semibold text-[#384551]">
                Customer details
              </h2>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-4 ">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <img
                    src="/profile.png"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-medium text-[#384551]">Shamus Tuttle</p>
                  <p className="text-1xl font-semibold text-[#646E78]">
                    Customer ID: #58909
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <GrCart className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-[#384551] text-sl font-semibold">
                  12 Orders
                </p>
              </div>
              <div className="mt-6 font-semibold">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[#384551] font-semibold">Contact info</h3>
                  <button
                    className="text-blue-500 text-sm"
                    onClick={openModal} // Open the modal when the button is clicked
                  >
                    Edit
                  </button>
                </div>
                {/* Modal */}
                <EditUserModal
                  isOpen={isModalOpen}
                  onClose={closeModal} // Close the modal when the user clicks cancel or submits
                />
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">
                    Email: Shamus889@yahoo.com
                  </p>
                  <p className="text-sm text-gray-500">
                    Mobile: +1 (609) 972-22-22
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Shipping Address */}
          <Card className="p-2">
            <CardHeader className="flex justify-between items-center ">
              <h2 className="text-xl font-medium text-[#384551]">
                Shipping address
              </h2>
              <button
                className="text-blue-500 text-sm font-semibold"
                onClick={openModal} // Open the modal when the button is clicked
              >
                Edit
              </button>
              {/* Modal */}
              <EditUserModal
                isOpen={isModalOpen}
                onClose={closeModal} // Close the modal when the user clicks cancel or submits
              />
            </CardHeader>
            <CardContent>
              <div className="text-sm text-[#646E6E] font-semibold ">
                <p>45 Roker Terrace</p>
                <p>Latheronwheel</p>
                <p>KW5 8NW,London</p>
                <p>UK</p>
              </div>
            </CardContent>
          </Card>
          {/* Billing Address */}
          <Card className="p-4">
            <CardHeader className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium text-[#384551]">
                Billing address
              </h2>
              <button
                className="text-blue-500 text-sm font-semibold"
                onClick={openModal}
              >
                Edit
              </button>
              {/* Modal */}
              <EditUserModal
                isOpen={isModalOpen}
                onClose={closeModal} // Close the modal when the user clicks cancel or submits
              />
            </CardHeader>
            <CardContent>
              <div className="text-sm text-[#646E6E] font-semibold">
                <p>45 Roker Terrace</p>
                <p>Latheronwheel</p>
                <p>KW5 8NW,London</p>
                <p>UK</p>
              </div>
              <div className="mt-4">
                <h5 className="text-[#384551] mb-1 font-semibold text-xl">
                  Mastercard
                </h5>
                <p className="text-sl text-[#646E78] font-semibold">
                  Card Number: ******4291
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
