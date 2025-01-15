// src/components/Congrats.js
import React from "react";
import Card from "./Card";

export const Congrats = () => {
  return (
    <Card className="p-4 ">
      <div className="pt-12">
        <div className="flex justify-between items-start pr-24">
          {/* Left Section */}
          <div>
            <h2 className="text-blue-600 text-xl font-semibold mb-2">
              Congratulations John! 🎉
            </h2>
            <p className="text-gray-600 font-semibold">
              You have achieved 72% more sales today.
              <br />
              Check your new badge in your profile.
            </p>
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              View Badges
            </button>
          </div>
          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <img
              src="man-with-laptop.png"
              alt="man-with-laptop"
              className="w-30 h-30 text-gray-400"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
