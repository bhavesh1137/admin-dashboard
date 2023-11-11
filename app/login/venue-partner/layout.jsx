import Navbar from "@/app/_components/dashboard/navbar/Navbar";
import Sidebar from "@/app/_components/dashboard/sidebar/Sidebar";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const layout = ({ children }) => {

  const venuePartnerSidebarData = [
    { icon: <AiOutlineHome />, title: "Dashboard", path: "/login/venue-partner/dashboard" },
    { icon: <AiOutlineHome />, title: "Upcoming Exams", path: "/login/venue-partner/upcoming-exams" },
    { icon: <AiOutlineHome />, title: "Past Exams", path: "/login/venue-partner/past-exams" },
    { icon: <AiOutlineHome />, title: "Exam Details Page", path: "/login/venue-partner/exam-details" },
    { icon: <AiOutlineHome />, title: "Exam Allocation Requests", path: "/login/venue-partner/exam-allocation-requests" },
    { icon: <AiOutlineHome />, title: "Invite Centre Owner", path: "/login/venue-partner/invite-centre-owner" },
    { icon: <AiOutlineHome />, title: "Connected Centre Owners List", path: "/login/venue-partner/connected-center-owners-list" },
    { icon: <AiOutlineHome />, title: "Invite Centre", path: "/login/venue-partner/invite-centre" },
    { icon: <AiOutlineHome />, title: "Centres List", path: "/login/venue-partner/centre-list" },
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
