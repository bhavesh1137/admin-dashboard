"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//Components
import Input from "../_components/input/Input";
import Date from "../_components/date/Date";
import Pagination from "../_components/pagination/Pagination";

//Images and Icons
import { FiSearch, FiSliders } from "react-icons/fi";
import user from "../assets/icons/u_user-exclamation.svg";
import cross from "../assets/icons/multiply.svg";
import compare from "../assets/icons/compare.svg";
import downArrow from "../assets/icons/VectordownArrow.svg";
import book from "../assets/icons/book.svg";

const CentreBookingsPage = () => {
  const [isassignAuditorModalOpen, setAssignAuditorModalOpen] = useState(false);
  const currentPage = 1;
  const totalPages = 10;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between flex-col lg:flex-row gap-4">
        <p className="text-[20px] font-medium">Centre Bookings</p>
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

      <div className="overflow-x-auto bg-white border border-[#C2A78F] rounded-lg">
        <table className=" table-auto w-full border-collapse ">
          <thead className="text-[16px] font-medium text-[#864F20] border-b border-[#C2A78F] capitalize tracking-[0.8px]">
            <tr>
              <th className="px-4 py-6 text-left">Centre Name</th>
              <th className="px-4 py-6 text-left">Exam Name</th>
              <th className="px-4 py-6 text-left">Submission Date</th>
              <th className="px-4 py-6 text-left">Audit Status</th>
              <th className="px-4 py-6 text-left">Booking Status</th>
              <th className="px-4 py-6 text-left">Nodes Offered</th>
              <th className="px-4 py-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-normal text-black/87 capitalize tracking-[0.32px]  ">
            <tr className="border-b border-[#C2A78F]">
              <td className="px-4 py-6 text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 text-left">MHT-CET</td>
              <td className="px-4 py-6 text-left">24-11-2023</td>
              <td className="px-4 py-6 text-left">Not Required</td>
              <td className="px-4 py-6 text-left">Pre-Booked</td>
              <td className="px-4 py-6 text-left">200</td>
              <td className="px-4 py-6 text-center">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/confirm-booking"}>
                    <Image
                      src={book}
                      alt="Book"
                      className="cursor-pointer h-[25px] w-[20px]"
                      title="Book"
                    />
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="border-b border-[#C2A78F]">
              <td className="px-4 py-6 text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 text-left">MHT-CET</td>
              <td className="px-4 py-6 text-left">24-11-2023</td>
              <td className="px-4 py-6 text-left">Not Required</td>
              <td className="px-4 py-6 text-left">Confirmed</td>
              <td className="px-4 py-6 text-left">200</td>
              <td className="px-4 py-6 text-center">
                <div className="flex gap-2 items-center justify-center"></div>
              </td>
            </tr>
            <tr className="border-b border-[#C2A78F]">
              <td className="px-4 py-6 text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 text-left">MHT-CET</td>
              <td className="px-4 py-6 text-left">24-11-2023</td>
              <td className="px-4 py-6 text-left">Not Audited</td>
              <td className="px-4 py-6 text-left">Pre-Booked</td>
              <td className="px-4 py-6 text-left">200</td>
              <td className="px-4 py-6 text-center">
                <div className="flex gap-2 items-center justify-center">
                  <Image
                    src={user}
                    alt="user"
                    className="cursor-pointer"
                    title="Assign Auditor"
                    onClick={() => setAssignAuditorModalOpen(true)}
                  />
                </div>
              </td>
            </tr>
            <tr className="border-b border-[#C2A78F]">
              <td className="px-4 py-6 text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 text-left">MHT-CET</td>
              <td className="px-4 py-6 text-left">24-11-2023</td>
              <td className="px-4 py-6 text-left">Rejected</td>
              <td className="px-4 py-6 text-left">Pre-Booked</td>
              <td className="px-4 py-6 text-left">200</td>
              <td className="px-4 py-6 text-center">
                <div className="flex gap-2 items-center justify-center"></div>
              </td>
            </tr>
            <tr className="border-b border-[#C2A78F]">
              <td className="px-4 py-6 text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 text-left">MHT-CET</td>
              <td className="px-4 py-6 text-left">24-11-2023</td>
              <td className="px-4 py-6 text-left">Approved</td>
              <td className="px-4 py-6 text-left">Pre-booked</td>
              <td className="px-4 py-6 text-left">200</td>
              <td className="px-4 py-6 text-center">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/confirm-booking"}>
                    <Image
                      src={book}
                      alt="Book"
                      className="cursor-pointer h-[25px] w-[20px]"
                      title="Book"
                    />
                  </Link>
                </div>
              </td>
            </tr>
            {/* <tr className="border-b border-[#C2A78F]">
              <td className="px-4 py-6 text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 text-left">MHT-CET</td>
              <td className="px-4 py-6 text-left">24-11-2023</td>
              <td className="px-4 py-6 text-left">Approved</td>
              <td className="px-4 py-6 text-left">Confirmed</td>
              <td className="px-4 py-6 text-left">200</td>
              <td className="px-4 py-6 text-center">
                <div className="flex gap-2 items-center justify-center"></div>
              </td>
            </tr> */}
            <tr className="border-b border-[#C2A78F]">
              <td className="px-4 py-6 text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 text-left">MHT-CET</td>
              <td className="px-4 py-6 text-left">24-11-2023</td>
              <td className="px-4 py-6 text-left">Approved</td>
              <td className="px-4 py-6 text-left">Rejected</td>
              <td className="px-4 py-6 text-left">200</td>
              <td className="px-4 py-6 text-center">
                <div className="flex gap-2 items-center justify-center"></div>
              </td>
            </tr>
            <tr className="border-b border-[#C2A78F]">
              <td className="px-4 py-6 text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 text-left">MHT-CET</td>
              <td className="px-4 py-6 text-left">24-11-2023</td>
              <td className="px-4 py-6 text-left">Pending</td>
              <td className="px-4 py-6 text-left">Pre-Booked</td>
              <td className="px-4 py-6 text-left">200</td>
              <td className="px-4 py-6 text-center">
                <div className="flex gap-2 items-center justify-center">
                  <Image
                    src={user}
                    alt="user"
                    className="cursor-pointer"
                    title="Assign Auditor"
                    onClick={() => setAssignAuditorModalOpen(true)}
                  />
                </div>
              </td>
            </tr>
            <tr className="border-b border-[#C2A78F]">
              <td className="px-4 py-6 text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 text-left">MHT-CET</td>
              <td className="px-4 py-6 text-left">24-11-2023</td>
              <td className="px-4 py-6 text-left">Unassigned</td>
              <td className="px-4 py-6 text-left">Pre-booked</td>
              <td className="px-4 py-6 text-left">200</td>
              <td className="px-4 py-6 text-center">
                <div className="flex gap-2 items-center justify-center"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
      {isassignAuditorModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[780px] flex flex-col gap-4 bg-[#fff] rounded-lg">
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
            <div className="w-full px-[16px] py-[12px] grid md:grid-cols-2 lg:grid-cols-12 gap-[16px]">
              <Input label={"Center Name"} classname={"lg:col-span-12"} />
              <Input label={"Exam Name"} classname={"lg:col-span-12"} />
              <Date label={"Start Date*"} classname={"lg:col-span-6"} />
              <Date label={"End Date*"} classname={"lg:col-span-6"} />
              <div className="lg:col-span-12 relative h-[58px]">
                <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                  Select Auditor
                </label>
                <select className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10 appearance-none">
                  <option value="">Auditor 1</option>
                  <option value="">Auditor 2</option>
                  <option value="">Auditor 3</option>
                </select>
                <Image
                  src={downArrow}
                  className="absolute top-6 right-5 z-20"
                  alt="arrow"
                />
              </div>
              <Input label={"Email ID"} classname={"lg:col-span-6"} />
              <Input label={"Mobile Number"} classname={"lg:col-span-6"} />
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

export default CentreBookingsPage;
