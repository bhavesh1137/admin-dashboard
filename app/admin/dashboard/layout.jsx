import Navbar from "@/app/_components/dashboard/navbarDummy/Navbar";
import Sidebar from "@/app/_components/dashboard/sidebarDumy/SidebarDummy";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const layout = ({ children }) => {

  const adminSidebarData = [
    { icon: <AiOutlineHome />, title: "dashboard", path: "/login/admin/dashboard/" },
    { icon: <AiOutlineHome />, title: "Add Exam", path: "/login/admin/dashboard/add-exam" },
    { icon: <AiOutlineHome />, title: "Exam List", path: "/login/admin/dashboard/exam-list" },
    { icon: <AiOutlineHome />, title: "Invite Venue Partner", path: "/login/admin/dashboard/invite-venue-partner" },
    { icon: <AiOutlineHome />, title: "Venue Partner List", path: "/login/admin/dashboard/venue-partner-list" },
    { icon: <AiOutlineHome />, title: "Users List", path: "/login/admin/dashboard/users-list" },
    { icon: <AiOutlineHome />, title: "Center Owners List", path: "/login/admin/dashboard/center-owner-list" },
    { icon: <AiOutlineHome />, title: "Center List", path: "/login/admin/dashboard/center-list" },
  ]

  return (
    <div className="flex w-full">
      <div>
        <Sidebar data={adminSidebarData} />
      </div>
      <div className="w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
