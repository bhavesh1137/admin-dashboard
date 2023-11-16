"use client";
import React, { useState } from "react";
import Link from "next/link";
import SecondaryBtn from "../_components/secondaryBtn/SecondaryBtn";
import PrimaryBtn from "../_components/primaryBtn/PrimaryBtn";
import fileImg from "../assets/icons/file.png";
import Image from "next/image";

const page = () => {
  const [isFileUpload, SetFileUpload] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-[20px] font-medium">Exam Management</p>
          <div className="flex gap-4">
            <Link href={"#"}>
              <SecondaryBtn title={"cancel"} />
            </Link>
            <PrimaryBtn title={"save"} />
          </div>
        </div>

        <form className="p-4 bg-white border border-slate-400 rounded-lg flex flex-col gap-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
            <div className="lg:col-span-12 relative h-[58px]">
              <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                Exam Name*
              </label>
              <input
                className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
                placeholder="Exam Name"
              />
            </div>

            <div className="lg:col-span-2 flex flex-col gap-4">
              <label className="text-[14px] font-medium">Exam start date</label>
              <input
                type="date"
                className="w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal cursor-pointer"
              />
            </div>

            <div className="lg:col-span-2 flex flex-col gap-4">
              <label className="text-[14px] font-medium">Exam end date</label>
              <input
                type="date"
                className="w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal cursor-pointer"
              />
            </div>
          </div>

          <p className="text-[14px] font-medium">Exam details</p>

          <div className="flex items-center justify-center w-full">
            <label
              onChange={() => {
                SetFileUpload(!isFileUpload);
              }}
              htmlFor="dropzone-file"
              className={`${
                isFileUpload ? "hidden" : "flex"
              } flex-col items-center justify-center w-full p-[32px] border-2 border-[#864F20] border-dashed rounded-2xl cursor-pointer`}
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <Image src={fileImg} alt="fileImg" />
                <p className="text-[16px] font-normal text-[#864F20]">
                  Drag and drop a file or{" "}
                  <span className="underline">browse file</span>
                </p>
                <p className="text-[14px] font-normal text-[#C2A78F] italic tracking-[0.3px]">
                  (Supported Only .pdf, .cSV File )
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

          <div
            className={`${
              isFileUpload ? "flex" : "hidden"
            } flex-col gap-[24px]`}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
              <div className="lg:col-span-6 relative h-[58px]">
                <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                  State
                </label>
                <select className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10 cursor-pointer">
                  <option value="">Maharashtra</option>
                  <option value="">aharashtra</option>
                  <option value="">aharashtra</option>
                </select>
              </div>

              <div className="lg:col-span-6 relative h-[58px]">
                <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                  District
                </label>
                <select className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10 cursor-pointer">
                  <option value="">Mumbai</option>
                  <option value="">Mumbai</option>
                  <option value="">Mumbai</option>
                </select>
              </div>
            </div>

            <p className="text-[14px] font-medium">City & Candidates</p>

            <div className="p-4 bg-white border border-slate-400 rounded-lg grid md:grid-cols-2 lg:grid-cols-12 cursor-pointer">
              <div className="lg:col-span-6 border-r ">
                <div className="flex justify-between pr-[30px]">
                  <ul>
                    <li className="text-[14px] font-medium">City</li>
                    <li className="text-[14px]">Mumbai</li>
                    <li className="text-[14px]">Thane</li>
                    <li className="text-[14px]">Nagpur</li>
                    <li className="text-[14px]">Pune</li>
                    <li className="text-[14px]">Dhule</li>
                  </ul>

                  <ul className="text-center">
                    <li className="text-[14px] font-medium">Candidates</li>
                    <li className="text-[14px]">3433</li>
                    <li className="text-[14px]">3433</li>
                    <li className="text-[14px]">3433</li>
                    <li className="text-[14px]">3433</li>
                    <li className="text-[14px]">3433</li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-6 border-l">
                <div className="flex justify-between pl-[30px]">
                  <ul>
                    <li className="text-[14px] font-medium">City</li>
                    <li className="text-[14px]">Mumbai</li>
                    <li className="text-[14px]">Thane</li>
                    <li className="text-[14px]">Nagpur</li>
                    <li className="text-[14px]">Pune</li>
                    <li className="text-[14px]">Dhule</li>
                  </ul>

                  <ul className="text-center">
                    <li className="text-[14px] font-medium">Candidates</li>
                    <li className="text-[14px]">3433</li>
                    <li className="text-[14px]">3433</li>
                    <li className="text-[14px]">3433</li>
                    <li className="text-[14px]">3433</li>
                    <li className="text-[14px]">3433</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className={`${isFileUpload ? "block" : "hidden"}`}>
          <button
            onClick={() => SetFileUpload(!isFileUpload)}
            className="px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px]"
          >
            Reupload Exam Details File
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
