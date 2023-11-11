import Link from 'next/link'
import React from "react";

const page = () => {
  return (
    <>
      <div className='flex flex-col text-lg font-bold p-4'>
        Venue Partner List Page

        <div className="w-full flex items-center justify-between cursor-pointer bg-gray-100 hover:bg-slate-100 p-2 sm:p-4 mb-2">
          Venue Partner
          <Link className='text-sm text-blue-500' href={'/login/admin/dashboard/venue-partner-list/update'}>Update</Link>
        </div>
        <div className="w-full flex items-center justify-between cursor-pointer bg-gray-100 hover:bg-slate-100 p-2 sm:p-4 mb-2">
          Venue Partner
          <Link className='text-sm text-blue-500' href={'/login/admin/dashboard/venue-partner-list/update'}>Update</Link>
        </div>
        <div className="w-full flex items-center justify-between cursor-pointer bg-gray-100 hover:bg-slate-100 p-2 sm:p-4 mb-2">
          Venue Partner
          <Link className='text-sm text-blue-500' href={'/login/admin/dashboard/venue-partner-list/update'}>Update</Link>
        </div>
        <div className="w-full flex items-center justify-between cursor-pointer bg-gray-100 hover:bg-slate-100 p-2 sm:p-4 mb-2">
          Venue Partner
          <Link className='text-sm text-blue-500' href={'/login/admin/dashboard/venue-partner-list/update'}>Update</Link>
        </div>
      </div>
    </>
  );
};

export default page;
