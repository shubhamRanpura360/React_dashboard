import React from "react";

export const CardContent = ({ children, className = "", ...props }) => (
  <div
    className={`p-4  bg-white dark:bg-dark-background text-gray-900 dark:text-dark-text ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const Card = ({ children, className = "", ...props }) => (
  <div
    className={`shadow-lg rounded-lg bg-white dark:bg-dark-background text-gray-900 dark:text-dark-text ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
