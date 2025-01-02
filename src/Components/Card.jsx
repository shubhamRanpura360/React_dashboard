import React from "react";

export const Card = ({ children, className = "", ...props }) => (
  <div
    className={`shadow-lg rounded-lg bg-white ${className}`}
    style={{ height: "auto", width: "auto" }}
    {...props}
  >
    <div className="p-4">{children}</div>
  </div>
);

export default Card;
