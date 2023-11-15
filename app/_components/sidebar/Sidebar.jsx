"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/Ampersand_group_logo 1.png";
import { FiLogOut } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { RiUserSettingsFill } from "react-icons/ri";

const Sidebar = () => {
  const menuData = [
    {
      icon: <LuLayoutDashboard className="h-[24px] w-[24px]" />,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <LuLayoutDashboard className="h-[24px] w-[24px]" />,
      title: "Masters",
      path: "/masters",
    },
    {
      icon: <RiUserSettingsFill className="h-[24px] w-[24px]" />,
      title: "Venue Partner",
      path: "/venue-partner",
    },
    {
      icon: <LuClipboardList className="h-[24px] w-[24px]" />,
      title: "Exams",
      path: "/exams",
    },
    {
      icon: <RiUserSettingsFill className="h-[24px] w-[24px]" />,
      title: "Manpower Master",
      path: "/manpower-master",
    },
    {
      icon: <RiUserSettingsFill className="h-[24px] w-[24px]" />,
      title: "Roles and Previlage",
      path: "/roles-and-previlage",
    },
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-between px-[12px] py-[24px] bg-[#F2E2BE] sticky top-0 left-0">
      <div className="flex flex-col gap-[14px]">
        <div className="flex flex-col items-center gap-[15px] border-b border-[#A3A3A3]">
          <Image src={Logo} className="mb-[15px]" alt="logoImg" />
        </div>

        <div className="overflow-y-auto overflow-x-hidden flex-grow">
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
                      {item.icon}
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
      <div className="w-[62px] flex flex-col justify-center items-center gap-[4px]">
        <div className="px-[16px] py-[4px]">
          <FiLogOut className="rotate-180 h-[24px] w-[24px]" />
        </div>
        <p className="text-[12px] text-center py-[6px]">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
