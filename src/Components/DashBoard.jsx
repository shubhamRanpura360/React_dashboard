import React from "react";
import { Congrats } from "./Congrats";
import { Order_Sales } from "./Order_sales";
import Revanue from "./Revanue";
import PaymentCard from "./PaymentCard";
import IncomeCard from "./incomeData";
import ActivityCard from "./ActivityTimeline";
import Footer from "./Footer";
// import ActivityTimeline from "./ActivityTimeline";



function Dashboard() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen max-w-[1600px] w-full relative px-8 py-4 pl-36 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[109%]">
        < Congrats/>
        <Order_Sales />
        <Revanue />
       < PaymentCard/> 
      < IncomeCard/>   
      </div>
    {/* <  ActivityTimeline/> */}
   < ActivityCard/>
  < Footer/>
    </div>
    </>
  );
}

export default Dashboard;