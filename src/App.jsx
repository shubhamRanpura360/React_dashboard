import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { Search } from "./Components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderList from "./Components/orderList";
import OrderDetails from "./Components/OrderDetails";
import Dashboard from "./Components/DashBoard";
import Footer from "./Components/Footer";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Router>
      <div className="flex overflow-hidden h-screen bg-gray-100 dark:bg-dark-background text-gray-900 dark:text-dark-text">
        <Sidebar />
        <div className="flex-1 p-6 overflow-y-auto">
          <Search toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/orderlist" element={<OrderList />} />
            <Route path="/OrderDetails/" element={<OrderDetails />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
