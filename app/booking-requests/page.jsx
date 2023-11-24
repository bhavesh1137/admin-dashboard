"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiSliders } from "react-icons/fi";
import Pagination from "../_components/pagination/Pagination";
import user from "../assets/icons/u_user-exclamation.svg";
import cross from "../assets/icons/multiply.svg";
import note from "../assets/icons/exam.svg";

const BookingRequest = () => {
  const [isassignAuditorModalOpen, setAssignAuditorModalOpen] = useState(false);
  const currentPage = 1;
  const totalPages = 10;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[20px] font-medium">Booking Requests</p>

      <div className="flex items-center justify-between flex-col lg:flex-row gap-4">
        <div className="flex gap-4 flex-col items-center md:flex-row">
          <Link href={"#"}>
            <button className="px-[24px] py-[10px] bg-[#F8F0DE] uppercase text-[14px] font-medium text-[#864F20] border border-[#864F20] rounded-[100px]">
              Active
            </button>
          </Link>

          <Link href={"#"}>
            <button className="px-[24px] py-[10px] bg-[#FFF] uppercase text-[14px] font-medium border border-[#A3A3A3] rounded-[100px]">
              Inactive
            </button>
          </Link>
        </div>

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
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-black/26 rounded-lg h-screen">
        <table className=" table-auto w-full border-collapse ">
          <thead className="text-[16px] font-medium text-[#864F20] border-b border-[#00000026] capitalize tracking-[0.8px]">
            <tr>
              <th className="px-4 py-6 text-left">Center Name</th>
              <th className="px-4 py-6 text-left">Exam Name</th>
              <th className="px-4 py-6 text-left">Date Applied</th>
              <th className="px-4 py-6 text-left">Audit Status</th>
              <th className="px-4 py-6 text-left">Booking Status</th>
              <th className="px-4 py-6 text-left">Nodes Offered</th>
              <th className="px-4 py-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-normal text-black/87 capitalize tracking-[0.32px] border-b border-[#00000026] ">
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">MHT-CET</td>
              <td className="px-4 py-6 border-b text-left">24-11-2023</td>
              <td className="px-4 py-6 border-b text-left">Audited</td>
              <td className="px-4 py-6 border-b text-left">Booked</td>
              <td className="px-4 py-6 border-b text-left">200</td>
              <td className="px-4 py-6 border-b text-center">
                <div className="flex gap-2 items-center justify-center">
                  <Image
                    src={user}
                    alt="user"
                    className="cursor-pointer"
                    title="Assign Auditor"
                    onClick={() => setAssignAuditorModalOpen(true)}
                  />
                  <Link href={"/compare"}>
                    <Image
                      src={note}
                      alt="edit"
                      className="cursor-pointer"
                      title="compare"
                    />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">MHT-CET</td>
              <td className="px-4 py-6 border-b text-left">24-11-2023</td>
              <td className="px-4 py-6 border-b text-left">Not Audited</td>
              <td className="px-4 py-6 border-b text-left">Pre-booked</td>
              <td className="px-4 py-6 border-b text-left">200</td>
              <td className="px-4 py-6 border-b text-center">
                <div className="flex gap-2 items-center justify-center">
                  <Image
                    src={user}
                    alt="user"
                    className="cursor-pointer"
                    title="Assign Auditor"
                    onClick={() => setAssignAuditorModalOpen(true)}
                  />
                  <Link href={"/compare"}>
                    <Image
                      src={note}
                      alt="edit"
                      className="cursor-pointer"
                      title="compare"
                    />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">MHT-CET</td>
              <td className="px-4 py-6 border-b text-left">24-11-2023</td>
              <td className="px-4 py-6 border-b text-left">Audited</td>
              <td className="px-4 py-6 border-b text-left">Rejected</td>
              <td className="px-4 py-6 border-b text-left">200</td>
              <td className="px-4 py-6 border-b text-center">
                <div className="flex gap-2 items-center justify-center">
                  <Image
                    src={user}
                    alt="user"
                    className="cursor-pointer"
                    title="Assign Auditor"
                    onClick={() => setAssignAuditorModalOpen(true)}
                  />
                  <Link href={"/compare"}>
                    <Image
                      src={note}
                      alt="edit"
                      className="cursor-pointer"
                      title="compare"
                    />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">MHT-CET</td>
              <td className="px-4 py-6 border-b text-left">24-11-2023</td>
              <td className="px-4 py-6 border-b text-left">Audited</td>
              <td className="px-4 py-6 border-b text-left">Booked</td>
              <td className="px-4 py-6 border-b text-left">200</td>
              <td className="px-4 py-6 border-b text-center">
                <div className="flex gap-2 items-center justify-center">
                  <Image
                    src={user}
                    alt="user"
                    className="cursor-pointer"
                    title="Assign Auditor"
                    onClick={() => setAssignAuditorModalOpen(true)}
                  />
                  <Link href={"/compare"}>
                    <Image
                      src={note}
                      alt="edit"
                      className="cursor-pointer"
                      title="compare"
                    />
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
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
    </div>
  );
};

export default BookingRequest;
