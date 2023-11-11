"use client";
import Link from "next/link";
import React, { useState } from "react";
// icons
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineDown,
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { BsTriangleHalf, BsChevronDown } from "react-icons/bs";
import { HiOutlineInbox } from "react-icons/hi";
import { BsListTask } from "react-icons/bs";
import { FiUsers, FiLogOut } from "react-icons/fi";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";

const Sidebar = (props) => {
  // const sildebarData = {
  //   menu: [
  //     { icon: <AiOutlineHome />, title: "Dashboard", path: "/dashboard" },
  //     { icon: <HiOutlineInbox />, title: "Form", path: "/dashboard/form" },
  //     { icon: <BiMessageDetail />, title: "Lists", path: "/dashboard/lists" },
  //     {
  //       icon: <IoMdNotificationsOutline />,
  //       title: "Notification",
  //       path: "notification",
  //     },
  //     { icon: <BsListTask />, title: "Available Tasks", path: "tasks" },
  //   ],
  // };
  const moreMenuData = [
    { icon: <FiUsers />, title: "Clients", path: "/dashboard/clients" },
    { icon: <AiOutlineUser />, title: "Profile", path: "/dashboard/profile" },
    {
      icon: <AiOutlineSetting />,
      title: "Setting",
      path: "/dashboard/setting",
    },
    { icon: <FiLogOut />, title: "Logout", path: "/dashboard/logout" },
  ];

  const [isCollapse, setIsCollapse] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`lg:w-64 sticky h-screen flex flex-col top-0 left-0 ${isCollapse ? "w-14" : "w-64"
        } transition-all ease-in-out delay-200 bg-white h-full border-r`}
    >
      <button
        onClick={() => setIsCollapse(!isCollapse)}
        className="lg:hidden absolute right-[15px] top-[50px] bg-orange-400 text-white rounded-full p-1"
      >
        {isCollapse ? <FaAngleRight /> : <FaAngleLeft />}
      </button>
      <Link href={"/"} className="flex items-center justify-center h-16 border-b text-orange-400 text-[25px]">
        <BsTriangleHalf />
      </Link>
      <div className="overflow-y-auto overflow-x-hidden flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          {props.data.map((list) => {
            return (
              <li key={list.title}>
                <Link
                  href={list.path}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-orange-400 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4 text-[20px]">
                    {list.icon}
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    {list.title}
                  </span>
                </Link>
              </li>
            );
          })}

          <li className="relative flex flex-col justify-center focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 ">
            <a
              className={`${isCollapse ? "flex" : "flex items-center justify-between"
                } lg:flex justify-between items-center h-11 cursor-pointer border-l-4 border-transparent hover:border-orange-400`}
              onClick={toggleAccordion}
            >
              <div className={`${isCollapse ? "hidden" : "flex"} lg:flex`}>
                <span className="text-[20px] ml-4 ">
                  <CiCircleMore />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  More Options
                </span>
              </div>
              <FaAngleDown
                className={`text-[20px] mx-4 transition ${isOpen ? "transform rotate-180" : "transform rotate-0"
                  }`}
              />
            </a>

            {isOpen && (
              <ul className={``}>
                {moreMenuData.map((list) => {
                  return (
                    <li key={list.title}>
                      <Link
                        href={list.path}
                        className={`relative flex items-center h-9 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-orange-400 pr-6 ${isCollapse ? "pl-4" : "pl-10"
                          } lg:pl-10  `}
                      >
                        <span className="inline-flex justify-center items-center text-[20px]">
                          {list.icon}
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          {list.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
