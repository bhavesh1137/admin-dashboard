import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import Sidebar from '../_components/sidebar/Sidebar'
import Navbar from '../_components/navbar/Navbar'

const layout = ({ children }) => {

  const venuePartnerSidebarData = [
    { icon: <AiOutlineHome />, title: "Dashboard", path: "/login/centre-owner/dashboard" },
    { icon: <AiOutlineHome />, title: "Exam Allocation Requests", path: "/login/centre-owner/exam-allocation-requests" },
    { icon: <AiOutlineHome />, title: "Centres List", path: "/login/centre-owner/centre-list" },
  ]


  return (
    <div className="flex w-full">
      <div>
        <Sidebar data={venuePartnerSidebarData} />
      </div>
      <div className="w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
