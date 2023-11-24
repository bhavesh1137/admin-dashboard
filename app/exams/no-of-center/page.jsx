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
      <p className="text-[20px]">
        Exam Management / <span className="font-medium">No. Of Center</span>
      </p>

      <div className="flex items-center justify-end flex-col lg:flex-row gap-4">
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
            <button className="px-[24px] py-[10px] bg-[#F2E2BE] uppercase text-[14px] text-[#864F20] font-medium border border-[#F2E2BE] rounded-[100px] flex items-center gap-2">
              <Image src={filterIcon} alt="filter" />
              filter
            </button>
          </Link>
          <Link href={"#"}>
            <button className="px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px] flex items-center gap-2">
              <Image src={downloadIcon} alt="download" />
              export
            </button>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-black/26 rounded-lg h-screen">
        <table className=" table-auto w-full border-collapse ">
          <thead className="text-[16px] font-medium text-[#864F20] border-b border-[#00000026] capitalize tracking-[0.8px]">
            <tr>
              <th className="px-4 py-6 text-left">Center Name</th>
              <th className="px-4 py-6 text-left">State</th>
              <th className="px-4 py-6 text-left">District</th>
              <th className="px-4 py-6 text-left">City</th>
              <th className="px-4 py-6 text-center">Center Code</th>
              <th className="px-4 py-6 text-center">Nodes Available</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-normal text-black/87 capitalize tracking-[0.32px] border-b border-[#00000026] ">
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">Maharashtra</td>
              <td className="px-4 py-6 border-b text-left">Mumbai</td>
              <td className="px-4 py-6 border-b text-left">Mumbai</td>
              <td className="px-4 py-6 border-b text-center">345840</td>
              <td className="px-4 py-6 border-b text-center">320</td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">Maharashtra</td>
              <td className="px-4 py-6 border-b text-left">Mumbai</td>
              <td className="px-4 py-6 border-b text-left">Mumbai</td>
              <td className="px-4 py-6 border-b text-center">345840</td>
              <td className="px-4 py-6 border-b text-center">320</td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">Maharashtra</td>
              <td className="px-4 py-6 border-b text-left">Mumbai</td>
              <td className="px-4 py-6 border-b text-left">Mumbai</td>
              <td className="px-4 py-6 border-b text-center">345840</td>
              <td className="px-4 py-6 border-b text-center">320</td>
            </tr>
            <tr>
              <td className="px-4 py-6 border-b text-left">
                Central India college of law
              </td>
              <td className="px-4 py-6 border-b text-left">Maharashtra</td>
              <td className="px-4 py-6 border-b text-left">Mumbai</td>
              <td className="px-4 py-6 border-b text-left">Mumbai</td>
              <td className="px-4 py-6 border-b text-center">345840</td>
              <td className="px-4 py-6 border-b text-center">320</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default page;
