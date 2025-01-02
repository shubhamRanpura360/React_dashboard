import React, { useState } from "react";
import { FaLessThan, FaGreaterThan, FaTable } from "react-icons/fa6";
import { FaHome, FaCarAlt } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoStorefrontSharp } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { MdEmail, MdOutlineMarkUnreadChatAlt } from "react-icons/md";

export default function Sidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [active, setActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <aside
      className={`h-[140vh] ${
        isSidebarCollapsed ? "w-20" : "w-80"
      } transition-width duration-300 overflow-hidden`}
    >
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          {!isSidebarCollapsed && (
            <img
              src="/logo-1.jpg.png"
              alt="sneat logo"
              className="w-40 h-auto"
            />
          )}
          <button
            className="p-1.5 rounded-lg text-white bg-[#696cff]"
            onClick={toggleSidebar}
          >
            {isSidebarCollapsed ? <FaGreaterThan /> : <FaLessThan />}
          </button>
        </div>

        <ul className="flex-1 px-2 mt-6 space-y-7 ">
          <li
            className={`flex items-center gap-4 p-2 rounded-md cursor-pointer ${
              active
                ? "bg-blue-100 text-[#696cff]"
                : "hover:bg-blue-100 text-gray-700"
            }`}
            onClick={() => setActive(!active)}
          >
            <FaHome
              className={`text-3xl ${
                active ? "text-[#696cff]" : "text-gray-500"
              }`}
            />
            {!isSidebarCollapsed && (
              <span className="text-2xl">Dashboards</span>
            )}
          </li>

          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer ">
            <LuLayoutDashboard className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-2xl">Layouts</span>
            )}
          </li>

          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer ">
            <IoStorefrontSharp className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-2xl">Front Pages</span>
            )}
          </li>

          <li>
            <button
              className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer "
              onClick={() => setIsEcommerceOpen(!isEcommerceOpen)}
            >
              <TiShoppingCart className="text-gray-500 text-3xl" />
              {!isSidebarCollapsed && (
                <>
                  <span className="text-gray-700 text-2xl ">eCommerce</span>
                  <span
                    className={`transform transition-transform ml-auto ${
                      isEcommerceOpen ? "rotate-90" : ""
                    }`}
                  >
                    <FaGreaterThan className="text-gray-500 " />
                  </span>
                </>
              )}
            </button>
            {isEcommerceOpen && !isSidebarCollapsed && (
              <ul className="pl-4 mt-2 space-y-1">
                <li>
                  <button
                    className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-200 cursor-pointer"
                    onClick={() => setIsOrderOpen(!isOrderOpen)}
                  >
                    <span className="text-gray-700 text-xl ml-10 font-semibold">
                      Order
                    </span>
                    <span
                      className={`transform transition-transform ml-auto ${
                        isOrderOpen ? "rotate-90" : ""
                      }`}
                    >
                      <FaGreaterThan className="text-gray-500" />
                    </span>
                  </button>
                  {isOrderOpen && (
                    <ul className="pl-4 mt-2 space-y-1 list-disc">
                      <li>
                        <a
                          href="#"
                          className="block p-2 text-gray-700 hover:text-gray-900 text-xl ml-8"
                        >
                          Order List
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block p-2 text-gray-700 hover:text-gray-900 text-xl ml-8"
                        >
                          Order Details
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer ">
            <MdEmail className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-2xl">Email</span>
            )}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer ">
            <MdOutlineMarkUnreadChatAlt className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-2xl">Chat</span>
            )}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer ">
            <FaCarAlt className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-2xl">Logistics</span>
            )}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <FaTable className="text-gray-500 text-3xl" />
            {!isSidebarCollapsed && (
              <span className="text-gray-700 text-2xl">Tables</span>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
}
