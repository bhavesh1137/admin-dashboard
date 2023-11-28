import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FiSearch, FiSliders } from "react-icons/fi";
import Pagination from "../_components/pagination/Pagination";
import edit from "../assets/icons/fi_edit-3.svg";
import trash from "../assets/icons/fi_trash-2.svg";
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
            <button className="px-[24px] py-[10px] bg-[#F8F0DE] uppercase text-[14px] font-medium text-[#864F20] border border-[#864F20] rounded-[100px]">
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

          <Link href={"/exams/add-exam"}>
            <button className="px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px] flex items-center gap-1">
              <FaPlus className="text-[18px]" />
              new exam
            </button>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-[#C2A78F] rounded-lg">
        <table className=" table-auto w-full border-collapse ">
          <thead className="text-[16px] font-medium text-[#864F20] border-b border-[#C2A78F] capitalize tracking-[0.8px]">
            <tr>
              <th className="px-4 py-6 text-left">Exam Name</th>
              <th className="px-4 py-6 text-left">Exam ID</th>
              <th className="px-4 py-6 text-left">Start Date</th>
              <th className="px-4 py-6 text-left">End Date</th>
              <th className="px-4 py-6 text-left">No. Of Centers</th>
              <th className="px-4 py-6 text-left">No. Of Manpower</th>
              <th className="px-4 py-6 text-center">No. Of Candidates</th>
              <th className="px-4 py-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-normal text-black/87 capitalize tracking-[0.32px]  ">
            <tr className="border-b border-[#C2A78F]">
              <td className="px-4 py-6 text-left">
                <Link href={"/exams/add-exam"}>Exam Name</Link>
              </td>
              <td className="px-4 py-6 text-left">EX10101</td>
              <td className="px-4 py-6 text-left">27-09-2023</td>
              <td className="px-4 py-6 text-left">27-10-2023</td>
              <td className="px-4 py-6 text-left text-[#1B72E8]">
                <Link href={"/centre-bookings"}>320</Link>
              </td>
              <td className="px-4 py-6 text-left text-[#1B72E8]">320</td>
              <td className="px-4 py-6 text-center">345840</td>
              <td className="px-4 py-6 text-center">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/exams/add-exam"}>
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
              <td className="px-4 py-6 text-left">
                <Link href={"/exams/add-exam"}>Exam Name</Link>
              </td>
              <td className="px-4 py-6 text-left">EX10101</td>
              <td className="px-4 py-6 text-left">27-09-2023</td>
              <td className="px-4 py-6 text-left">27-10-2023</td>
              <td className="px-4 py-6 text-left text-[#1B72E8]">
                <Link href={"/centre-bookings"}>320</Link>
              </td>
              <td className="px-4 py-6 text-left text-[#1B72E8]">320</td>
              <td className="px-4 py-6 text-center">345840</td>
              <td className="px-4 py-6 text-center">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/exams/add-exam"}>
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
              <td className="px-4 py-6 text-left">
                <Link href={"/exams/add-exam"}>Exam Name</Link>
              </td>
              <td className="px-4 py-6 text-left">EX10101</td>
              <td className="px-4 py-6 text-left">27-09-2023</td>
              <td className="px-4 py-6 text-left">27-10-2023</td>
              <td className="px-4 py-6 text-left text-[#1B72E8]">
                <Link href={"/centre-bookings"}>320</Link>
              </td>
              <td className="px-4 py-6 text-left text-[#1B72E8]">320</td>
              <td className="px-4 py-6 text-center">345840</td>
              <td className="px-4 py-6 text-center">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/exams/add-exam"}>
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
              <td className="px-4 py-6 text-left">
                <Link href={"/exams/add-exam"}>Exam Name</Link>
              </td>
              <td className="px-4 py-6 text-left">EX10101</td>
              <td className="px-4 py-6 text-left">27-09-2023</td>
              <td className="px-4 py-6 text-left">27-10-2023</td>
              <td className="px-4 py-6 text-left text-[#1B72E8]">
                <Link href={"/centre-bookings"}>320</Link>
              </td>
              <td className="px-4 py-6 text-left text-[#1B72E8]">320</td>
              <td className="px-4 py-6 text-center">345840</td>
              <td className="px-4 py-6 text-center">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/exams/add-exam"}>
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
              <td className="px-4 py-6 text-left">
                <Link href={"/exams/add-exam"}>Exam Name</Link>
              </td>
              <td className="px-4 py-6 text-left">EX10101</td>
              <td className="px-4 py-6 text-left">27-09-2023</td>
              <td className="px-4 py-6 text-left">27-10-2023</td>
              <td className="px-4 py-6 text-left text-[#1B72E8]">
                <Link href={"/centre-bookings"}>320</Link>
              </td>
              <td className="px-4 py-6 text-left text-[#1B72E8]">320</td>
              <td className="px-4 py-6 text-center">345840</td>
              <td className="px-4 py-6 text-center">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/exams/add-exam"}>
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
    </div>
  );
};

export default page;
