import React, { useState, useEffect, useRef } from "react";
import { Bell,  Mail, ShoppingCart, CheckCircle } from "lucide-react";

const NotificationPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  const notifications = [
    {
      id: 1,
      avatar: "client-2.png",
      title: "Congratulation Lettie",
      message: "Won the monthly best seller gold badge",
      time: "1h ago",
      type: "achievement",
    },
    {
      id: 2,
      avatar: "client1.png",
      type: "connection",
      title: "Charles Franklin",
      message: "Accepted your connection",
      time: "12hr ago",
    },
    {
      id: 3,
      avatar: "client-3.png",
      type: "message",
      title: "New Message",
      message: "You have new message from Natalie",
      time: "1h ago",
    },
    {
      id: 4,
      type: "order",
      title: "Whoo! You have new order",
      message: "ACME Inc. made new order $1,154",
      time: "1 day ago",
    },
    {
      id: 5,
      avatar: "profile.png",
      type: "approval",
      title: "Application has been approved",
      message: "Your ABC project application has been approved.",
      time: "2 days ago",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "message":
        return <Mail className="w-4 h-4 text-blue-500" />;
      case "order":
        return <ShoppingCart className="w-4 h-4 text-green-500" />;
      case "approval":
        return <CheckCircle className="w-4 h-4 text-purple-500" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={panelRef}>
      <div className="relative inline-block">
        <Bell
          className="w-6 h-6 text-gray-900 cursor-pointer hover:text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1 py-0.9">
          8
        </span>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <span className="text-sm text-blue-500">8 New</span>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 border-b border-gray-100 hover:bg-gray-50"
              >
                <div className="flex items-start gap-3">
                  {notification.avatar ? (
                    <img
                      src={notification.avatar}
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      {getIcon(notification.type)}
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-sm">{notification.title}</p>
                    <p className="text-gray-500 text-sm">
                      {notification.message}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      {notification.time}
                    </p>
                  </div>
                  {notification.type === "connection" && (
                    <button className="text-gray-400 hover:text-gray-600">
                     
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button className="w-full  p-2 text-center text-white bg-blue-600 hover:bg-blue-700 border border-blue-600 rounded font-semibold">
            View all notifications
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationPanel;
