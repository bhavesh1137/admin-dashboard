"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiSearch, FiSliders } from "react-icons/fi";
import Pagination from "../_components/pagination/Pagination";
import Image from "next/image";
import pen from "../assets/icons/pen.svg";
import sort from "../assets/icons/Sort.svg";
import block from "../assets/icons/fi_slash.svg";
import user from "../assets/icons/u_user-exclamation.svg";
import note from "../assets/icons/exam.svg";
import cross from "../assets/icons/multiply.svg";
import edit from "../assets/icons/fi_edit-3.svg";
import trash from "../assets/icons/fi_trash-2.svg";

const CenterPage = () => {
  const [isblacklistModalOpen, setIBlacklistModalOpen] = useState(false);
  const [isassignAuditorModalOpen, setAssignAuditorModalOpen] = useState(false);
  const [isinviteCenterModalOpen, setInviteCenterModalOpen] = useState(false);
  const currentPage = 1;
  const totalPages = 10;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between flex-col lg:flex-row gap-4">
        <p className="text-[20px] font-medium capitalize">center Master</p>
        <div className="flex gap-8 flex-col items-center md:flex-row">
          <div className="flex items-center gap-4 max-w-[380px] bg-white px-[24px] py-[10px] border border-[#00000042] rounded-[100px]">
            <FiSearch className="h-[18px]" />
            <input
              className="text-[14px] font-medium outline-none"
              type="text"
              placeholder="Search here..."
            />
          </div>

          <Link href={"#"}>
            <button className="px-[24px] py-[10px] bg-[#FFF] uppercase text-[14px] font-medium border border-[#00000042] rounded-[100px] flex items-center gap-1">
              <FiSliders className="text-[18px] rotate-90" />
              filter
            </button>
          </Link>

          <button
            onClick={() => setInviteCenterModalOpen(true)}
            className="px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px] flex items-center gap-1"
          >
            inivite center
          </button>

          <Link href={"/center/add-center"}>
            <button className="px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px] flex items-center gap-1">
              <FaPlus className="text-[18px]" />
              new center
            </button>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-[#C2A78F] rounded-lg">
        <table className=" table-auto w-full border-collapse ">
          <thead className="text-[16px] font-medium text-[#864F20] border-b border-[#C2A78F] capitalize tracking-[0.8px]">
            <tr>
              <th className="px-4 py-6 text-left flex justify-between">
                <span>Center Name</span> <Image src={sort} alt="sort" />
              </th>
              <th className="px-4 py-6 text-left">Email</th>
              <th className="px-4 py-6 text-left">State</th>
              <th className="px-4 py-6 text-left">City</th>
              <th className="px-4 py-6 text-center">No. Of Exams</th>
              <th className="px-4 py-6 text-left">No. of Nodes</th>
              <th className="px-4 py-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-normal text-black/87 capitalize tracking-[0.32px] ">
            <tr className="border-b border-[#C2A78F]">
              <td className="px-4 py-6 text-left">Acbcd College</td>
              <td className="px-4 py-6 text-left">deanna.curtis@example.com</td>
              <td className="px-4 py-6 text-left">Maharashtra</td>
              <td className="px-4 py-6 text-left">Pune</td>
              <td className="px-4 py-6 text-center text-[#1B72E8]">
                <Link href={"/booking-requests"}>11</Link>
              </td>
              <td className="px-4 py-6 text-left">200</td>
              <td className="px-4 py-6 border-b flex items-center justify-center ">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/booking-requests"}>
                    <Image
                      src={note}
                      alt="edit"
                      className="cursor-pointer"
                      title="view"
                    />
                  </Link>
                  <Image
                    src={block}
                    alt="edit"
                    className="cursor-pointer"
                    title="block"
                    onClick={() => setIBlacklistModalOpen(true)}
                  />

                  <Image
                    src={user}
                    alt="user"
                    className="cursor-pointer"
                    title="user"
                    onClick={() => setAssignAuditorModalOpen(true)}
                  />
                  <Link href={"/center/add-center"}>
                    <Image
                      src={edit}
                      alt="edit"
                      title="Edit"
                      className=" cursor-pointer"
                    />
                  </Link>
                  <Image
                    src={trash}
                    alt="delete"
                    title="Delete"
                    className=" cursor-pointer"
                  />
                </div>
              </td>
            </tr>
            <tr className="border-b border-[#C2A78F]">
              <td className="px-4 py-6 text-left">Acbcd College</td>
              <td className="px-4 py-6 text-left">deanna.curtis@example.com</td>
              <td className="px-4 py-6 text-left">Maharashtra</td>
              <td className="px-4 py-6 text-left">Pune</td>
              <td className="px-4 py-6 text-center text-[#1B72E8]">
                <Link href={"/booking-requests"}>11</Link>
              </td>
              <td className="px-4 py-6 text-left">200</td>
              <td className="px-4 py-6 border-b flex items-center justify-center ">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/booking-requests"}>
                    <Image
                      src={note}
                      alt="edit"
                      className="cursor-pointer"
                      title="view"
                    />
                  </Link>
                  <Image
                    src={block}
                    alt="edit"
                    className="cursor-pointer"
                    title="block"
                    onClick={() => setIBlacklistModalOpen(true)}
                  />

                  <Image
                    src={user}
                    alt="user"
                    className="cursor-pointer"
                    title="user"
                    onClick={() => setAssignAuditorModalOpen(true)}
                  />
                  <Link href={"/center/add-center"}>
                    <Image
                      src={edit}
                      alt="edit"
                      title="Edit"
                      className=" cursor-pointer"
                    />
                  </Link>
                  <Image
                    src={trash}
                    alt="delete"
                    title="Delete"
                    className=" cursor-pointer"
                  />
                </div>
              </td>
            </tr>
            <tr className="border-b border-[#C2A78F]">
              <td className="px-4 py-6 text-left">Acbcd College</td>
              <td className="px-4 py-6 text-left">deanna.curtis@example.com</td>
              <td className="px-4 py-6 text-left">Maharashtra</td>
              <td className="px-4 py-6 text-left">Pune</td>
              <td className="px-4 py-6 text-center text-[#1B72E8]">
                <Link href={"/booking-requests"}>11</Link>
              </td>
              <td className="px-4 py-6 text-left">200</td>
              <td className="px-4 py-6 border-b flex items-center justify-center ">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/booking-requests"}>
                    <Image
                      src={note}
                      alt="edit"
                      className="cursor-pointer"
                      title="view"
                    />
                  </Link>
                  <Image
                    src={block}
                    alt="edit"
                    className="cursor-pointer"
                    title="block"
                    onClick={() => setIBlacklistModalOpen(true)}
                  />

                  <Image
                    src={user}
                    alt="user"
                    className="cursor-pointer"
                    title="user"
                    onClick={() => setAssignAuditorModalOpen(true)}
                  />
                  <Link href={"/center/add-center"}>
                    <Image
                      src={edit}
                      alt="edit"
                      title="Edit"
                      className=" cursor-pointer"
                    />
                  </Link>
                  <Image
                    src={trash}
                    alt="delete"
                    title="Delete"
                    className=" cursor-pointer"
                  />
                </div>
              </td>
            </tr>
            <tr className="border-b border-[#C2A78F]">
              <td className="px-4 py-6 text-left">Acbcd College</td>
              <td className="px-4 py-6 text-left">deanna.curtis@example.com</td>
              <td className="px-4 py-6 text-left">Maharashtra</td>
              <td className="px-4 py-6 text-left">Pune</td>
              <td className="px-4 py-6 text-center text-[#1B72E8]">
                <Link href={"/booking-requests"}>11</Link>
              </td>
              <td className="px-4 py-6 text-left">200</td>
              <td className="px-4 py-6 border-b flex items-center justify-center ">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/booking-requests"}>
                    <Image
                      src={note}
                      alt="edit"
                      className="cursor-pointer"
                      title="view"
                    />
                  </Link>
                  <Image
                    src={block}
                    alt="edit"
                    className="cursor-pointer"
                    title="block"
                    onClick={() => setIBlacklistModalOpen(true)}
                  />

                  <Image
                    src={user}
                    alt="user"
                    className="cursor-pointer"
                    title="user"
                    onClick={() => setAssignAuditorModalOpen(true)}
                  />
                  <Link href={"/center/add-center"}>
                    <Image
                      src={edit}
                      alt="edit"
                      title="Edit"
                      className=" cursor-pointer"
                    />
                  </Link>
                  <Image
                    src={trash}
                    alt="delete"
                    title="Delete"
                    className=" cursor-pointer"
                  />
                </div>
              </td>
            </tr>
            <tr className="border-b border-[#C2A78F]">
              <td className="px-4 py-6 text-left">Acbcd College</td>
              <td className="px-4 py-6 text-left">deanna.curtis@example.com</td>
              <td className="px-4 py-6 text-left">Maharashtra</td>
              <td className="px-4 py-6 text-left">Pune</td>
              <td className="px-4 py-6 text-center text-[#1B72E8]">
                <Link href={"/booking-requests"}>11</Link>
              </td>
              <td className="px-4 py-6 text-left">200</td>
              <td className="px-4 py-6 border-b flex items-center justify-center ">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/booking-requests"}>
                    <Image
                      src={note}
                      alt="edit"
                      className="cursor-pointer"
                      title="view"
                    />
                  </Link>
                  <Image
                    src={block}
                    alt="edit"
                    className="cursor-pointer"
                    title="block"
                    onClick={() => setIBlacklistModalOpen(true)}
                  />

                  <Image
                    src={user}
                    alt="user"
                    className="cursor-pointer"
                    title="user"
                    onClick={() => setAssignAuditorModalOpen(true)}
                  />
                  <Link href={"/center/add-center"}>
                    <Image
                      src={edit}
                      alt="edit"
                      title="Edit"
                      className=" cursor-pointer"
                    />
                  </Link>
                  <Image
                    src={trash}
                    alt="delete"
                    title="Delete"
                    className=" cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />

      {isblacklistModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="w-[925px] flex flex-col gap-4 bg-[#fff] rounded-lg">
            <div className="px-[34px] py-[24px] flex justify-between items-center gap-[10px] bg-[#F8F0DE] rounded-lg">
              <p className="text-[24px] text-[#864F20] font-medium tracking-[0.24px] capitalize">
                reason to blacklist
              </p>
              <Image
                src={cross}
                alt="cross"
                className="cursor-pointer"
                onClick={() => setIBlacklistModalOpen(false)}
              />
            </div>
            <div className="px-[16px] py-[12px] flex gap-[24px]">
              <div className="flex-1">
                <p className="text-[14px] font-medium text-[#864F20]">
                  Center Details
                </p>
                <p className="text-[18px] capitalize">
                  Central India college of law
                </p>
                <p className="text-[14px] capitalize">centralindia@gmail.com</p>
                <p className="text-[16px] capitalize">
                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                </p>
              </div>
              <input
                type="text"
                className="flex-1 w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[##666] rounded-[8px] font-normal"
                placeholder="Reason to Blacklist"
              />
            </div>
            <div className="px-[24px] py-[16px] text-right">
              <button className="px-[24px] py-[12px] text-[14px] text-[#fff] font-medium tracking-[0.28px] bg-[#AE0005] rounded-[40px] uppercase">
                send for review
              </button>
            </div>
          </div>
        </div>
      )}

      {isassignAuditorModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="w-[925px] flex flex-col gap-4 bg-[#fff] rounded-lg">
            <div className="px-[34px] py-[24px] flex justify-between items-center gap-[10px] bg-[#F8F0DE] rounded-lg">
              <p className="text-[24px] text-[#864F20] font-medium tracking-[0.24px] capitalize">
                assign auditor
              </p>
              <Image
                src={cross}
                alt="cross"
                className="cursor-pointer"
                onClick={() => setAssignAuditorModalOpen(false)}
              />
            </div>
            <div className="px-[16px] py-[12px] flex flex-col gap-[24px]">
              <input
                type="text"
                className="w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[##666] rounded-[8px] font-normal"
                placeholder="Center Name"
              />
              <input
                type="email"
                className="w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[##666] rounded-[8px] font-normal"
                placeholder="Exam Name"
              />
              <input
                type="text"
                className="w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[##666] rounded-[8px] font-normal"
                placeholder="Phone Number"
              />
              <input
                type="text"
                className="flex-1 w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[##666] rounded-[8px] font-normal"
                placeholder="Email ID"
              />
            </div>
            <div className="px-[24px] py-[16px] text-right">
              <button className="px-[24px] py-[12px] text-[14px] text-[#fff] font-medium tracking-[0.28px] bg-[#AE0005] rounded-[40px] uppercase">
                assign
              </button>
            </div>
          </div>
        </div>
      )}

      {isinviteCenterModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="w-[925px] flex flex-col gap-4 bg-[#fff] rounded-lg">
            <div className="px-[34px] py-[24px] flex justify-between items-center gap-[10px] bg-[#F8F0DE] rounded-lg">
              <p className="text-[24px] text-[#864F20] font-medium tracking-[0.24px] capitalize">
                invite center
              </p>
              <Image
                src={cross}
                alt="cross"
                className="cursor-pointer"
                onClick={() => setInviteCenterModalOpen(false)}
              />
            </div>
            <div className="px-[16px] py-[12px] flex flex-col gap-[24px]">
              <input
                type="text"
                className="w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[##666] rounded-[8px] font-normal"
                placeholder="Center Name"
              />
              <input
                type="email"
                className="w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[##666] rounded-[8px] font-normal"
                placeholder="Center Owner Name"
              />
              <input
                type="text"
                className="w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[##666] rounded-[8px] font-normal"
                placeholder="Exam Name"
              />
              <input
                type="text"
                className="flex-1 w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[##666] rounded-[8px] font-normal"
                placeholder="Exam ID"
              />
              <input
                type="text"
                className="flex-1 w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[##666] rounded-[8px] font-normal"
                placeholder="Mobile No"
              />
            </div>
            <div className="px-[24px] py-[16px] text-right">
              <button className="px-[24px] py-[12px] text-[14px] text-[#fff] font-medium tracking-[0.28px] bg-[#AE0005] rounded-[40px] uppercase">
                send invite
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CenterPage;
