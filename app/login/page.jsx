import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-4 flex flex-col">
      <Link
        href="/login/admin/dashboard"
        className="underline text-sm text-blue-500"
      >
        Admin Dasboard
      </Link>
      <Link
        href="/login/venue-partner/dashboard"
        className="underline text-sm text-blue-500"
      >
        Venu Partner Dasboard
      </Link>
      <Link
        href="/login/centre-owner/dashboard"
        className="underline text-sm text-blue-500"
      >
        Center Owner Dasboard
      </Link>
      <Link
        href="/login/venue-auditor"
        className="underline text-sm text-blue-500"
      >
        Venue Auditor Dasboard
      </Link>
    </div>
  );
};

export default page;
