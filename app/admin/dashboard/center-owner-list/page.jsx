import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className='flex flex-col text-lg font-bold p-4'>
        center owners list Page

        <div className="w-full flex items-center justify-between cursor-pointer bg-gray-100 hover:bg-slate-100 p-2 sm:p-4 mb-2">
          Center Owner
          <div className="flex gap-2">
            <Link className='text-sm text-blue-500' href={"/login/admin/dashboard/center-owner-list/update"}>
              Update
            </Link>
            <Link className='text-sm text-blue-500' href={"/login/admin/dashboard/center-owner-list/center-owner-details"}>
              Details
            </Link>
          </div>
        </div>
        <div className="w-full flex items-center justify-between cursor-pointer bg-gray-100 hover:bg-slate-100 p-2 sm:p-4 mb-2">
        Center Owner
          <div className="flex gap-2">
            <Link className='text-sm text-blue-500' href={"/login/admin/dashboard/center-owner-list/update"}>
              Update
            </Link>
            <Link className='text-sm text-blue-500' href={"/login/admin/dashboard/center-owner-list/center-owner-details"}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
