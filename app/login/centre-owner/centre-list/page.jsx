import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col text-lg font-bold p-4">Centres List</div>

      <Link href={'/login/centre-owner/centre-list/centre-details'}>Details</Link>
    </>
  );
};

export default page;
