import "./App.css";
import React from "react";
import Sidebar from "./Components/Sidebar";
import DashBoard from "./Components/DashBoard";
import { Search } from "./Components/Search";

const App = () => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Search />
        <DashBoard />
      </div>
    </div>
  );
};

export default App;
