"use client";
import React from "react";
import logo from "../assets/images/Ampersand_group_logo 1.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col gap-6 items-center justify-center">
          <Image src={logo} alt="Logo" width={100} />
          <p className="text-[35px] font-medium uppercase text-[#864F20]">
            coming soon
          </p>
          <p className="text-[35px] font-medium capitalize">
            we’re working hard to give you the best experience
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
