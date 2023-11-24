"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiSearch, FiSliders } from "react-icons/fi";
import edit from "../assets/icons/fi_edit-3.svg";
import trash from "../assets/icons/fi_trash-2.svg";
import cross from "../assets/icons/multiply.svg";
import Image from "next/image";
import Pagination from "../_components/pagination/Pagination";

const VenuePartnerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentPage = 1;
  const totalPages = 10;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[20px] font-medium">Venue Partner</p>
      <div className="flex items-center justify-between flex-col lg:flex-row gap-4">
        <div>
          <Link href={"#"}>
            <button className="px-[24px] py-[10px] bg-[#F8F0DE] uppercase text-[14px] font-medium text-[#864F20] border border-[#864F20] rounded-[100px]">
              registered
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

          <button
            className="px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px] flex items-center gap-1"
            onClick={() => setIsModalOpen(true)}
          >
            <FaPlus className="text-[18px]" />
            Invite Venue Partner
          </button>

          <Link href={"/venue-partner/add-new-vendor"}>
            <button className="px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px] flex items-center gap-1">
              <FaPlus className="text-[18px]" />
              new vendor
            </button>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-black/26 rounded-lg h-screen">
        <table className=" table-auto w-full border-collapse ">
          <thead className="text-[16px] font-medium text-[#864F20] border-b border-[#00000026] capitalize tracking-[0.8px]">
            <tr>
              <th className="px-4 py-6 text-left">Name</th>
              <th className="px-4 py-6 text-left">Contact Person</th>
              <th className="px-4 py-6 text-left">Mobile</th>
              <th className="px-4 py-6 text-left">Organization Type</th>
              <th className="px-4 py-6 text-left">Location</th>
              <th className="px-4 py-6 text-center">No. Of Centers</th>
              <th className="px-4 py-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-normal text-black/87 capitalize tracking-[0.32px] border-b border-[#00000026] ">
            <tr>
              <td className="px-4 py-6 border-b text-left text-[12px] text-[#00060] tracking-[0.048px]">
                <span className="text-[14px] font-medium text-[#00087] tracking-[0.28px] block">
                  Vendor Name
                </span>
                Shahid.Shaikh@gmail.com
              </td>
              <td className="px-4 py-6 border-b text-left ">Mohit Thapilyal</td>
              <td className="px-4 py-6 border-b text-left ">+91-9876543210</td>
              <td className="px-4 py-6 border-b text-left ">Company</td>
              <td className="px-4 py-6 border-b text-left ">mumbai</td>
              <td className="px-4 py-6 border-b text-center text-[#1B72E8]">
                <Link href={"/center"}>10</Link>
              </td>
              <td className="px-4 py-6 border-b flex items-center justify-center ">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/venue-partner/add-new-vendor"}>
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
            <tr>
              <td className="px-4 py-6 border-b text-left text-[12px] text-[#00060] tracking-[0.048px]">
                <span className="text-[14px] font-medium text-[#00087] tracking-[0.28px] block">
                  Vendor Name
                </span>
                Shahid.Shaikh@gmail.com
              </td>
              <td className="px-4 py-6 border-b text-left ">Mohit Thapilyal</td>
              <td className="px-4 py-6 border-b text-left ">+91-9876543210</td>
              <td className="px-4 py-6 border-b text-left ">Company</td>
              <td className="px-4 py-6 border-b text-left ">mumbai</td>
              <td className="px-4 py-6 border-b text-center text-[#1B72E8]">
                <Link href={"/center"}>10</Link>
              </td>
              <td className="px-4 py-6 border-b flex items-center justify-center ">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/venue-partner/add-new-vendor"}>
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
            <tr>
              <td className="px-4 py-6 border-b text-left text-[12px] text-[#00060] tracking-[0.048px]">
                <span className="text-[14px] font-medium text-[#00087] tracking-[0.28px] block">
                  Vendor Name
                </span>
                Shahid.Shaikh@gmail.com
              </td>
              <td className="px-4 py-6 border-b text-left ">Mohit Thapilyal</td>
              <td className="px-4 py-6 border-b text-left ">+91-9876543210</td>
              <td className="px-4 py-6 border-b text-left ">Company</td>
              <td className="px-4 py-6 border-b text-left ">mumbai</td>
              <td className="px-4 py-6 border-b text-center text-[#1B72E8]">
                <Link href={"/center"}>10</Link>
              </td>
              <td className="px-4 py-6 border-b flex items-center justify-center ">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/venue-partner/add-new-vendor"}>
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
            <tr>
              <td className="px-4 py-6 border-b text-left text-[12px] text-[#00060] tracking-[0.048px]">
                <span className="text-[14px] font-medium text-[#00087] tracking-[0.28px] block">
                  Vendor Name
                </span>
                Shahid.Shaikh@gmail.com
              </td>
              <td className="px-4 py-6 border-b text-left ">Mohit Thapilyal</td>
              <td className="px-4 py-6 border-b text-left ">+91-9876543210</td>
              <td className="px-4 py-6 border-b text-left ">Company</td>
              <td className="px-4 py-6 border-b text-left ">mumbai</td>
              <td className="px-4 py-6 border-b text-center text-[#1B72E8]">
                <Link href={"/center"}>10</Link>
              </td>
              <td className="px-4 py-6 border-b flex items-center justify-center ">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/venue-partner/add-new-vendor"}>
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
            <tr>
              <td className="px-4 py-6 border-b text-left text-[12px] text-[#00060] tracking-[0.048px]">
                <span className="text-[14px] font-medium text-[#00087] tracking-[0.28px] block">
                  Vendor Name
                </span>
                Shahid.Shaikh@gmail.com
              </td>
              <td className="px-4 py-6 border-b text-left ">Mohit Thapilyal</td>
              <td className="px-4 py-6 border-b text-left ">+91-9876543210</td>
              <td className="px-4 py-6 border-b text-left ">Company</td>
              <td className="px-4 py-6 border-b text-left ">mumbai</td>
              <td className="px-4 py-6 border-b text-center text-[#1B72E8]">
                <Link href={"/center"}>10</Link>
              </td>
              <td className="px-4 py-6 border-b flex items-center justify-center ">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={"/venue-partner/add-new-vendor"}>
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

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="w-[925px] flex flex-col gap-4 bg-[#fff] rounded-lg">
            <div className="px-[34px] py-[24px] flex justify-between items-center gap-[10px] bg-[#F8F0DE] rounded-lg">
              <p className="text-[24px] text-[#864F20] font-medium tracking-[0.24px]">
                Invite Venue Partner
              </p>
              <Image
                src={cross}
                alt="cross"
                className="cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
            <div className="px-[16px] py-[12px] flex flex-col gap-[24px]">
              <input
                type="text"
                className="w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[##666] rounded-[8px] font-normal"
                placeholder="Venue Partner Name"
              />
              <input
                type="email"
                className="w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[##666] rounded-[8px] font-normal"
                placeholder="Email ID"
              />
              <input
                type="text"
                className="w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[##666] rounded-[8px] font-normal"
                placeholder="Phone Number"
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

export default VenuePartnerPage;
