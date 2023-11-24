"use client"
import React from 'react'
import Sidebar from "../_components/sidebar/Sidebar";
import Navbar from "../_components/navbar/Navbar";


const layout = ({ children }) => {

  return (
    <div className="flex w-full gap-[6px] bg-[#FBF5F2]">
      <div>
        <Sidebar />
      </div>
      <div className="w-full flex flex-col gap-[16px] p-[16px]">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;