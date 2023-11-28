"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/Ampersand_group_logo 1.png";
import { FiLogOut } from "react-icons/fi";
import dashboard from "../../assets/icons/dashboard.svg";
import exam from "../../assets/icons/exam.svg";
import users from "../../assets/icons/users.svg";
const Sidebar = () => {
  const menuData = [
    {
      icon: dashboard,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: exam,
      title: "Exams",
      path: "/exams",
    },
    {
      icon: users,
      title: "Venue Partner",
      path: "/venue-partner",
    },
    // {
    //   icon: dashboard,
    //   title: "Venue",
    //   path: "/masters",
    // },
    // {
    //   icon: users,
    //   title: "Manpower",
    //   path: "/manpower-master",
    // },

    {
      icon: dashboard,
      title: "Center Master",
      path: "/center",
    },
    {
      icon: dashboard,
      title: "Centre Audits",
      path: "/centre-audits",
    },
    {
      icon: dashboard,
      title: "Centre Bookings",
      path: "/centre-bookings",
    },
    {
      icon: users,
      title: "Roles and Previlage",
      path: "/roles-and-previlage",
    },
  ];
  return (
    <div className="h-screen flex flex-col items-center justify-between px-[12px] py-[24px] bg-[#F2E2BE] sticky top-0 left-0">
      <div className="flex flex-col gap-[14px]">
        <div className="cursor-pointer flex flex-col items-center gap-[15px] border-b border-[#A3A3A3]">
          <Image
            src={Logo}
            className="mb-[15px] h-[36px] w-[36px]"
            alt="logoImg"
          />
        </div>
        <div className="">
          <ul className="flex flex-col justify-center items-center gap-[24px]">
            {menuData.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="w-[62px] flex flex-col justify-center items-center gap-[4px] cursor-pointer"
                  >
                    <div
                      className={`px-[16px] py-[4px] rounded-lg hover:bg-[#FBF6EC] `}
                    >
                      <Image src={item.icon} alt={item.title} />
                    </div>
                    <span className="text-[12px] text-center py-[6px]">
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="cursor-pointer w-[62px] flex flex-col justify-center items-center gap-[4px]">
        <div className="px-[16px] py-[4px]">
          <FiLogOut className="rotate-180 h-[24px] w-[24px]" />
        </div>
        <p className="text-[12px] text-center py-[6px]">Logout</p>
      </div>
    </div>
  );
};
export default Sidebar;
