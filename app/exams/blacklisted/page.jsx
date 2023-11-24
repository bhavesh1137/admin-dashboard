import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import Pagination from "../../_components/pagination/Pagination";
import downloadIcon from "../../assets/icons/download.svg";
import filterIcon from "../../assets/icons/filter.svg";
import Image from "next/image";

const page = () => {
  const currentPage = 1;
  const totalPages = 10;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[20px] font-medium">Exam Management</p>

      <div className="flex items-center justify-between flex-col lg:flex-row gap-4">
        <div className="flex gap-4 flex-col items-center md:flex-row">
          <Link href={"#"}>
            <button className="px-[24px] py-[10px] bg-[#FFF] uppercase text-[14px] font-medium border border-[#A3A3A3] rounded-[100px]">
              ongoing
            </button>
          </Link>

          <Link href={"#"}>
            <button className="px-[24px] py-[10px] bg-[#FFF] uppercase text-[14px] font-medium border border-[#A3A3A3] rounded-[100px]">
              past
            </button>
          </Link>

          <Link href={"#"}>
            <button className="px-[24px] py-[10px] bg-[#FFF] uppercase text-[14px] font-medium border border-[#A3A3A3] rounded-[100px]">
              upcoming
            </button>
          </Link>
          <Link href={"#"}>
            <button className="px-[24px] py-[10px] bg-[#F8F0DE] uppercase text-[14px] font-medium text-[#AE0005] border border-[#AE0005] rounded-[100px]">
              blacklisted
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
            <button className="px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px] flex items-center gap-1">
              remove blacklist
            </button>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-black/26 rounded-lg h-screen">
        <table className=" table-auto w-full border-collapse ">
          <thead className="text-[16px] font-medium text-[#864F20] border-b border-[#00000026] capitalize tracking-[0.8px]">
            <tr>
              <th className="px-4 py-6 text-left">Center Name</th>
              <th className="px-4 py-6 text-left">Venue Partner Name</th>
              <th className="px-4 py-6 text-left">Reason</th>
              <th className="px-4 py-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-normal text-black/87 capitalize tracking-[0.32px] border-b border-[#00000026] ">
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">
                Venue Partner Name
              </td>
              <td className="px-4 py-6 border-b text-left">
                Center under construction temporarily{" "}
              </td>
              <td className="px-4 py-6 border-b text-left">Accepted</td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">
                Venue Partner Name
              </td>
              <td className="px-4 py-6 border-b text-left">
                Center under construction temporarily{" "}
              </td>
              <td className="px-4 py-6 border-b text-left">Accepted</td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">
                Venue Partner Name
              </td>
              <td className="px-4 py-6 border-b text-left">
                Center under construction temporarily{" "}
              </td>
              <td className="px-4 py-6 border-b text-left">Accepted</td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">
                Venue Partner Name
              </td>
              <td className="px-4 py-6 border-b text-left">
                Center under construction temporarily{" "}
              </td>
              <td className="px-4 py-6 border-b text-left">Accepted</td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">
                Venue Partner Name
              </td>
              <td className="px-4 py-6 border-b text-left">
                Center under construction temporarily{" "}
              </td>
              <td className="px-4 py-6 border-b text-left">Accepted</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default page;
