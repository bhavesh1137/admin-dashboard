import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <p className="text-[20px] font-medium">Venue Partner</p>
      <div className='flex justify-end'>
        <Link href={"/venue-partner/add-new-vendor"}>
          <button className="px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px] flex items-center gap-1">
            <FaPlus className="text-[18px]" />
            new vendor
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
