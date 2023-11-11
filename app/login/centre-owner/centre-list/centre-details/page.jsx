import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col text-lg p-4">
      <p className="font-bold">Center Detail Page</p>

      <Link
        href={
          "/login/centre-owner/centre-list/centre-details/primary-centre-details"
        }
      >
        Primary Center Details
      </Link>

      <Link href={"/login/centre-owner/centre-list/centre-details/add-lab"}>
        Add a Lab
      </Link>

      <Link href={"/login/centre-owner/centre-list/centre-details/labs-list"}>
        Labs List
      </Link>

      <Link
        href={
          "/login/centre-owner/centre-list/centre-details/past-allocation-requests"
        }
      >
        Past Exam Allocation Requests
      </Link>

      <Link
        href={
          "/login/centre-owner/centre-list/centre-details/current-allocation-requests"
        }
      >
        Current Exam Allocation Requests
      </Link>

      <Link
        href={
          "/login/centre-owner/centre-list/centre-details/accepted-allocation-requests"
        }
      >
        Accepted Exam Allocation Requests
      </Link>

      <Link
        href={
          "/login/centre-owner/centre-list/centre-details/self-confirmed-allocation-requests"
        }
      >
        Self Confirmed Exam Allocation Requests
      </Link>

      <Link
        href={
          "/login/centre-owner/centre-list/centre-details/rejected-allocation-requests"
        }
      >
        Rejected Exam Allocation Requests
      </Link>
    </div>
  );
};

export default page;
