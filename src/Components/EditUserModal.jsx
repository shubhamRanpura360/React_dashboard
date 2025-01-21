import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const EditUserModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    username: "johndoe007",
    email: "example@domain.com",
    status: "",
    taxId: "123 456 7890",
    phoneNumber: "202 555 0111",
    language: "English",
    country: "India",
    useAsBillingAddress: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-[#646E78] bg-opacity-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg w-full h-[80%] max-w-5xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Edit User Information
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <RxCross2 className="font-semibold text-2xl" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Updating user details will receive a privacy audit.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm text-gray-600 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full p-2 border "
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm text-gray-600 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full p-2 border "
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">
                Username
              </label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="w-full p-2 border "
              />
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-2 border "
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm text-gray-600 mb-1 ">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                  className="w-full p-2 border"
                >
                  <option value="">Select status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm text-gray-600 mb-1">
                  Tax ID
                </label>
                <input
                  type="text"
                  value={formData.taxId}
                  onChange={(e) =>
                    setFormData({ ...formData, taxId: e.target.value })
                  }
                  className="w-full p-2 border rounded "
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm text-gray-600 mb-1">
                  Phone Number
                </label>
                <div className="flex">
                  <select className="p-2 border rounded-l border-r-0 focus:ring-2">
                    <option>US (+1)</option>
                    <option>IND (+91)</option>
                  </select>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    className="w-full p-2 border rounded-r "
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm text-gray-600 mb-1">
                  Language
                </label>
                <select
                  value={formData.language}
                  onChange={(e) =>
                    setFormData({ ...formData, language: e.target.value })
                  }
                  className="w-full p-2 border rounded "
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="German">German</option>
                  <option value="Dutch">Dutch</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm text-gray-600 mb-1">
                  Country
                </label>
                <select
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  className="w-full p-2 border rounded "
                >
                  <option value="India">India</option>
                  <option value="Japan">Japan</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Italy">Italy</option>
                </select>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.useAsBillingAddress}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      useAsBillingAddress: e.target.checked,
                    })
                  }
                  className="sr-only peer"
                />
                <div
                  className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full 
                rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                 peer-checked:bg-blue-600"
                ></div>
                <span className="ms-3 text-sm text-gray-600">
                  Use as a billing address?
                </span>
              </label>
            </div>

            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
