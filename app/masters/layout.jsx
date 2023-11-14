import React from "react";
import Sidebar from "../_components/sidebar/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="flex w-full bg-[#FBF5F2]">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default layout;
