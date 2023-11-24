import React from "react";
import Link from "next/link";
import { FiSearch, FiSliders } from "react-icons/fi";
import Pagination from "../../_components/pagination/Pagination";

const page = () => {
  const currentPage = 1;
  const totalPages = 10;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[20px]">
        Exam Management / <span className="font-medium">No. Of Manpower</span>
      </p>

      <div className="flex items-center justify-between flex-col lg:flex-row gap-4">
        <div className="flex gap-4 flex-col items-center md:flex-row">
          <Link href={"#"}>
            <button className="px-[24px] py-[10px] bg-[#F8F0DE] uppercase text-[14px] font-medium text-[#864F20] border border-[#864F20] rounded-[100px]">
              all
            </button>
          </Link>

          <Link href={"#"}>
            <button className="px-[24px] py-[10px] bg-[#FFF] uppercase text-[14px] font-medium border border-[#A3A3A3] rounded-[100px]">
              house keeping
            </button>
          </Link>

          <Link href={"#"}>
            <button className="px-[24px] py-[10px] bg-[#FFF] uppercase text-[14px] font-medium border border-[#A3A3A3] rounded-[100px]">
              guard
            </button>
          </Link>

          <Link href={"#"}>
            <button className="px-[24px] py-[10px] bg-[#FFF] uppercase text-[14px] font-medium border border-[#A3A3A3] rounded-[100px]">
              helpdesk
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
            <button className="px-[24px] py-[10px] bg-[#FFF] uppercase text-[14px] font-medium border border-[#00000042] rounded-[100px] flex items-center gap-2">
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
              <th className="px-4 py-6 text-left">Employee Name</th>
              <th className="px-4 py-6 text-left">SMobile Number</th>
              <th className="px-4 py-6 text-left">Degisnation</th>
              <th className="px-4 py-6 text-left">Arranged By</th>
              <th className="px-4 py-6 text-center">Check - In</th>
              <th className="px-4 py-6 text-center">Check - Out</th>
              <th className="px-4 py-6 text-center">INACTIVE</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-normal text-black/87 capitalize tracking-[0.32px] border-b border-[#00000026] ">
            <tr>
              <td className="px-4 py-6 border-b text-left">Akshit sharma</td>
              <td className="px-4 py-6 border-b text-left">+91-9876543210</td>
              <td className="px-4 py-6 border-b text-left">house keeping</td>
              <td className="px-4 py-6 border-b text-left">venue partner</td>
              <td className="px-4 py-6 border-b text-center">07:07 AM</td>
              <td className="px-4 py-6 border-b text-center">05:15 PM</td>
              <td className="px-4 py-6 border-b text-center">06 mins</td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">Akshit sharma</td>
              <td className="px-4 py-6 border-b text-left">+91-9876543210</td>
              <td className="px-4 py-6 border-b text-left">house keeping</td>
              <td className="px-4 py-6 border-b text-left">venue partner</td>
              <td className="px-4 py-6 border-b text-center">07:07 AM</td>
              <td className="px-4 py-6 border-b text-center">05:15 PM</td>
              <td className="px-4 py-6 border-b text-center">06 mins</td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">Akshit sharma</td>
              <td className="px-4 py-6 border-b text-left">+91-9876543210</td>
              <td className="px-4 py-6 border-b text-left">house keeping</td>
              <td className="px-4 py-6 border-b text-left">venue partner</td>
              <td className="px-4 py-6 border-b text-center">07:07 AM</td>
              <td className="px-4 py-6 border-b text-center">05:15 PM</td>
              <td className="px-4 py-6 border-b text-center">06 mins</td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">Akshit sharma</td>
              <td className="px-4 py-6 border-b text-left">+91-9876543210</td>
              <td className="px-4 py-6 border-b text-left">house keeping</td>
              <td className="px-4 py-6 border-b text-left">venue partner</td>
              <td className="px-4 py-6 border-b text-center">07:07 AM</td>
              <td className="px-4 py-6 border-b text-center">05:15 PM</td>
              <td className="px-4 py-6 border-b text-center">06 mins</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default page;
