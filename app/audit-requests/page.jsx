import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiSliders } from "react-icons/fi";
import Pagination from "../_components/pagination/Pagination";
import note from "../assets/icons/exam.svg";

const AuditRequestPage = () => {
  const currentPage = 1;
  const totalPages = 10;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[20px] font-medium">Audit Requests</p>

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
              <th className="px-4 py-6 text-left">Assigned To</th>
              <th className="px-4 py-6 text-left">Assigned Date</th>
              <th className="px-4 py-6 text-left">Audit Date</th>
              <th className="px-4 py-6 text-center">Audit Status</th>
              <th className="px-4 py-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-normal text-black/87 capitalize tracking-[0.32px] border-b border-[#00000026] ">
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">
                centralindia@gmail.com
              </td>
              <td className="px-4 py-6 border-b text-left">24-11-2023</td>
              <td className="px-4 py-6 border-b text-left">24-11-2023</td>
              <td className="px-4 py-6 border-b text-center">Pending</td>
              <td className="px-4 py-6 border-b text-center text-[14px] font-medium text-[#1B72E8] uppercase">
                <div className="flex gap-2 items-center justify-center"></div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">
                centralindia@gmail.com
              </td>
              <td className="px-4 py-6 border-b text-left">24-11-2023</td>
              <td className="px-4 py-6 border-b text-left">24-11-2023</td>
              <td className="px-4 py-6 border-b text-center">Audited</td>
              <td className="px-4 py-6 border-b text-center text-[14px] font-medium text-[#1B72E8] uppercase">
                <div className="flex gap-2 items-center justify-center">
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
              <td className="px-4 py-6 border-b text-left">
                centralindia@gmail.com
              </td>
              <td className="px-4 py-6 border-b text-left">24-11-2023</td>
              <td className="px-4 py-6 border-b text-left">24-11-2023</td>
              <td className="px-4 py-6 border-b text-center">Approved</td>
              <td className="px-4 py-6 border-b text-center text-[14px] font-medium text-[#1B72E8] uppercase">
                <div className="flex gap-2 items-center justify-center">
                  <Image
                    src={note}
                    alt="user"
                    className="cursor-pointer"
                    title="Book"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">
                centralindia@gmail.com
              </td>
              <td className="px-4 py-6 border-b text-left">24-11-2023</td>
              <td className="px-4 py-6 border-b text-left">24-11-2023</td>
              <td className="px-4 py-6 border-b text-center">Rejected</td>
              <td className="px-4 py-6 border-b text-center text-[14px] font-medium text-[#1B72E8] uppercase">
                <div className="flex gap-2 items-center justify-center"></div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">
                centralindia@gmail.com
              </td>
              <td className="px-4 py-6 border-b text-left">24-11-2023</td>
              <td className="px-4 py-6 border-b text-left">24-11-2023</td>
              <td className="px-4 py-6 border-b text-center">Audited</td>
              <td className="px-4 py-6 border-b text-center text-[14px] font-medium text-[#1B72E8] uppercase">
                <div className="flex gap-2 items-center justify-center">
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
    </div>
  );
};

export default AuditRequestPage;
