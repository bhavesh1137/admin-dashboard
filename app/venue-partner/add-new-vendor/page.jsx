import PrimaryBtn from "@/app/_components/primaryBtn/PrimaryBtn";
import SecondaryBtn from "@/app/_components/secondaryBtn/SecondaryBtn";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-[20px]">
          Venue Partner / <span className="font-medium">Add New Vendor</span>
        </p>
        <div className="flex gap-4">
          <Link href={"./"}>
            <SecondaryBtn title={"cancel"} />
          </Link>
          <PrimaryBtn title={"save"} />
        </div>
      </div>

      <form className="p-4 bg-white border border-slate-400 rounded-lg flex flex-col gap-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Vendor Name*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="Vendor Name"
            />
          </div>
          <div className="lg:col-span-5">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Company Type*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="placeholder"
            />
          </div>
          <div className="lg:col-span-6">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Nature of service*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="Nature of service"
            />
          </div>
          <div className="lg:col-span-2">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Pin code*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="Pin code"
            />
          </div>
          <div className="flex items-center">
            <p className="text-[#1B72E8] text-[14px] font-medium">
              Fetch Address
            </p>
          </div>
        </div>

        <div>
          <p className="text-[14px] font-medium">Registered Office Address*</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-4 p-4 border border-slate-400 rounded-lg">
          <div className="lg:col-span-3">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              State*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="State"
            />
          </div>

          <div className="lg:col-span-3">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              District*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="District"
            />
          </div>

          <div className="lg:col-span-3">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Taluka*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="Taluka"
            />
          </div>

          <div className="lg:col-span-3">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              City*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="City"
            />
          </div>

          <div className="lg:col-span-12">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Address Line 1*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="Address Line 1"
            />
          </div>

          <div className="lg:col-span-12">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Address Line 2*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="Address Line 2"
            />
          </div>
        </div>

        <div className="flex gap-[24px]">
          <p className="text-[14px] font-medium">Billing Address</p>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label
              htmlFor=""
              className="text-[14px] font-medium text-[#1B72E8]"
            >
              copy Registered office Address
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-4 p-4 border border-slate-400 rounded-lg">
          <div className="lg:col-span-3">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              State*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="State"
            />
          </div>

          <div className="lg:col-span-3">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              District*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="District"
            />
          </div>

          <div className="lg:col-span-3">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Taluka*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="Taluka"
            />
          </div>

          <div className="lg:col-span-3">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              City*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="City"
            />
          </div>

          <div className="lg:col-span-12">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Address Line 1*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="Address Line 1"
            />
          </div>

          <div className="lg:col-span-12">
            <label className=" text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Address Line 2*
            </label>
            <input
              className=" w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
              placeholder="Address Line 2"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
