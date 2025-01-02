import React from "react";

export const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

export const Card = ({ children, className = "", ...props }) => (
  <div
    className={`shadow-lg rounded-lg bg-white ${className}`}
    style={{ height: "auto", width: "auto" }}
    {...props}
  >
    {children}
  </div>
);

export default Card;
