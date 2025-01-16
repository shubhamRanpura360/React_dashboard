import React, { useState } from "react";
import { FaLessThan, FaGreaterThan, FaTable } from "react-icons/fa6";
import { FaHome, FaCarAlt } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoStorefrontSharp } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { MdEmail, MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import {
  FaFileInvoice,
  FaUsers,
  FaCreditCard,
  FaChartBar,
  FaLifeRing,
} from "react-icons/fa";

export default function Sidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className={`h-[140vh] ${
        isSidebarCollapsed ? "w-20" : "w-80"
      } transition-width duration-300 overflow-hidden bg-white dark:bg-dark-background text-gray-900 dark:text-dark-text`}
    >
      <nav className="h-full flex flex-col border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          {!isSidebarCollapsed && (
           <span className="text-4xl font-bold text-[#384551] dark:text-[#696cff]">
           Sneat
         </span>
         
          )}
          <button
            className="p-1.5 rounded-lg text-white bg-[#696cff]"
            onClick={toggleSidebar}
          >
            {isSidebarCollapsed ? <FaGreaterThan /> : <FaLessThan />}
          </button>
        </div>

        <ul className="flex-1 px-2 mt-6 space-y-6">
          <li
            className={`flex items-center gap-4 p-2 rounded-md cursor-pointer ${
              isActive("/dashboard")
                ? "bg-blue-100 text-[#696cff]"
                : "hover:bg-blue-100 dark:hover:bg-blue-800 text-gray-700 dark:text-dark-text"
            }`}
          >
            <FaHome
              className={`text-3xl ${
                isActive("/dashboard")
                  ? "text-[#696cff]"
                  : "text-gray-500 dark:text-dark-text"
              }`}
            />
            {!isSidebarCollapsed && (
              <Link to="/dashboard" className="text-xl">
                Dashboards
              </Link>
            )}
          </li>

          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <LuLayoutDashboard className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-xl">Layouts</span>
            )}
          </li>

          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <IoStorefrontSharp className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-xl">Front Pages</span>
            )}
          </li>

          <li>
            <button
              className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer"
              onClick={() => setIsEcommerceOpen(!isEcommerceOpen)}
            >
              <TiShoppingCart className="text-gray-500 text-3xl" />
              {!isSidebarCollapsed && (
                <div className="flex items-center justify-between cursor-pointer gap-28">
                  <span className="text-gray-700 text-xl">eCommerce</span>
                  <span
                    className={`transform transition-transform ${
                      isEcommerceOpen ? "rotate-90" : ""
                    }`}
                  >
                    <FaGreaterThan className="text-gray-500 font-semibold" />
                  </span>
                </div>
              )}
            </button>

            {isEcommerceOpen && !isSidebarCollapsed && (
              <ul className="pl-4 mt-2 space-y-1">
                <li>
                  <Link
                    to="/orderlist"
                    className={`flex items-center p-2 rounded-md cursor-pointer ${
                      isActive("/orderlist")
                        ? "bg-blue-100 text-[#696cff]"
                        : "hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <span className="text-xl ml-10 font-semibold">
                      Order List
                    </span>
                  </Link>
                  <Link
                    to="/orderdetails"
                    className={`flex items-center gap-4 p-2 rounded-md cursor-pointer ${
                      isActive("/orderdetails")
                        ? "bg-blue-100 text-[#696cff]"
                        : "hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <span className="text-xl ml-10 font-semibold">
                      Order Details
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <MdEmail className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-xl">Email</span>
            )}
          </li>

          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <MdOutlineMarkUnreadChatAlt className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-xl">Chat</span>
            )}
          </li>

          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <FaCarAlt className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-xl">Logistics</span>
            )}
          </li>

          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <FaTable className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-xl">Tables</span>
            )}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <FaFileInvoice className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-xl">Invoice</span>
            )}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <FaUsers className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-xl">Users</span>
            )}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <FaCreditCard className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-xl">Cards</span>
            )}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <FaChartBar className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-xl">Charts</span>
            )}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <FaLifeRing className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-xl">Support</span>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
}
