import Lists from "@/app/_components/dashboard/lists/Lists";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col text-lg font-bold p-4">
        Exam Allocation Requests
      </div>
      <ul className="p-4 flex flex-col gap-2">
        <li>
          <Link
            className='text-sm text-blue-500'
            href={
              "/login/venue-partner/exam-allocation-requests/past-allocation-requests"
            }
          >
            Past Allocation Requests
          </Link>
        </li>
        <li>
          <Link
            className='text-sm text-blue-500'
            href={
              "/login/venue-partner/exam-allocation-requests/current-allocation-requests"
            }
          >
            Current Allocation Requests
          </Link>
        </li>
        <li>
          <Link
            className='text-sm text-blue-500'
            href={
              "/login/venue-partner/exam-allocation-requests/pending-allocation-requests"
            }
          >
            Pending Allocation Requests
          </Link>
        </li>
        <li>
          <Link
            className='text-sm text-blue-500'
            href={
              "/login/venue-partner/exam-allocation-requests/accepted-allocation-requests"
            }
          >
            Accepted Allocation Requests
          </Link>
        </li>
        <li>
          <Link
            className='text-sm text-blue-500'
            href={
              "/login/venue-partner/exam-allocation-requests/self-confirmed-allocation-requests"
            }
          >
            Self Confirmed Allocation Requests
          </Link>
        </li>
        <li>
          <Link
            className='text-sm text-blue-500'
            href={
              "/login/venue-partner/exam-allocation-requests/rejected-allocation-requests"
            }
          >
            Rejected Allocation Request
          </Link>
        </li>
      </ul>
    </>
  );
};

export default page;
