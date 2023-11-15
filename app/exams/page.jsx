"use client";
import React from "react";
import Link from "next/link";
import SecondaryBtn from "../_components/secondaryBtn/SecondaryBtn";
import PrimaryBtn from "../_components/primaryBtn/PrimaryBtn";
import fileImg from '../assets/icons/file.png'
import Image from "next/image";

const page = () => {
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
              <label className='text-[14px] font-medium'>Exam start date</label>
              <input type="date" className="w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal" />
            </div>

            <div className="lg:col-span-2 flex flex-col gap-4">
              <label className='text-[14px] font-medium'>Exam end date</label>
              <input type="date" className="w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal" />
            </div>
          </div>

          <p className='text-[14px] font-medium'>Exam details</p>

          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full p-[32px] border-2 border-[#864F20] border-dashed rounded-2xl cursor-pointer">
              <div className="flex flex-col items-center justify-center gap-3">
                <Image src={fileImg} alt="fileImg" />
                <p className="text-[16px] font-normal text-[#864F20]">Drag and drop a file or <span className='underline'>browse file</span></p>
                <p className="text-[14px] font-normal text-[#C2A78F] italic tracking-[0.3px]">(Supported Only .pdf, .cSV File )</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
