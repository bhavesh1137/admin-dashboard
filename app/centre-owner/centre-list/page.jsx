import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col text-lg font-bold p-4">Centres List
        <Link className='text-sm text-blue-500' href={'/login/centre-owner/centre-list/centre-details'}>Details</Link>
      </div>
    </>
  );
};

export default page;
