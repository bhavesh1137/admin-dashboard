"use client";
import Image from "next/image";
import React, { useState } from "react";
import corssIcon from "../assets/icons/u_multiply.svg";
import Input from "../_components/input/Input";
import Date from "../_components/date/Date";
import Link from "next/link";

const ConfirmBookingPage = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-4 flex-col md:flex-row">
        <div className="flex gap-4 items-center">
          <Link href={'/centre-bookings'}>
            <Image src={corssIcon} alt="X" />
          </Link>
          <p className="text-[24px] text-[#212121] capitalize tracking-[0.48px]">
            Center Booking -
          </p>
          <p className="text-[24px] text-[#864F20] tracking-[0.2px]">
            Balasaheb Thackeray Institute
          </p>
        </div>

        <button
          type="button"
          className="px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px] tracking-[0.28px]"
        >
          confirm booking
        </button>
      </div>

      <div className="p-4 bg-white border border-slate-400 rounded-lg flex flex-col gap-4">
        <h1 className="text-[20px] font-medium">Primary Details</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px] items-center">
          <Input label={"Exam Name*"} classname={"lg:col-span-4"} />
          <Date label={"Start Date*"} classname={"lg:col-span-4"} />
          <Date label={"End Date*"} classname={"lg:col-span-4"} />
        </div>
      </div>

      <div className="p-4 bg-white border border-slate-400 rounded-lg flex flex-col gap-4">
        <h1 className="text-[20px] font-medium">Seat Availability</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px] items-center">
          <div className="lg:col-span-3">
            <p className="text-[16px] mb-6 text-[#212121] tracking-[0.2px]">
              Centre Name
            </p>
            <p className="text-[16px] text-[#864F20] tracking-[0.2px]">
              Balasaheb Thackeray Institute
            </p>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[16px] text-center text-[#212121] tracking-[0.2px]">
              Laptops Offered
            </p>
            <Input label={""} classname={""} />
          </div>
          <div className="lg:col-span-3">
            <p className="text-[16px] text-center text-[#212121] tracking-[0.2px]">
              Desktop Offered
            </p>
            <Input label={""} classname={""} />
          </div>
          <div className="lg:col-span-3">
            <p className="text-[16px] text-center text-[#212121] tracking-[0.2px]">
              Total No. of Offered
            </p>
            <Input label={""} classname={""} />
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border border-slate-400 rounded-lg flex flex-col gap-4">
        <h1 className="text-[20px] font-medium">Dates Availability</h1>
        <p className="text-[16px] font-medium">Interval 1</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px] items-center">
          <Date label={"Start Date*"} classname={"lg:col-span-6"} />
          <Date label={"End Date*"} classname={"lg:col-span-6"} />
        </div>
      </div>
    </>
  );
};

export default ConfirmBookingPage;
