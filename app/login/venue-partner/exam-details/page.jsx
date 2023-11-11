import Lists from "@/app/_components/dashboard/lists/Lists";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col text-lg font-bold p-4">
        Exam Details Page
      </div>

      <ul className='p-4 flex flex-col gap-2'>
        <li>
          <Link href={"/login/venue-partner/exam-details/primary-exam-details"} className='text-sm text-blue-500'>
            Primary Exam Details
          </Link>
        </li>
        <li>
          <Link href={"/login/venue-partner/exam-details/send-allocation-requests"} className='text-sm text-blue-500'>
            Send Exam Allocation Request
          </Link>
        </li>
        <li>
          <Link href={"/login/venue-partner/exam-details/current-allocation-requests"} className='text-sm text-blue-500'>
            Current Exam Allocation Requests
          </Link>
        </li>
        <li>
          <Link href={"/login/venue-partner/exam-details/pending-allocation-requests"} className='text-sm text-blue-500'>
            Pending Exam Allocation Requests
          </Link>
        </li>
        <li>
          <Link href={"/login/venue-partner/exam-details/accepted-allocation-requests"} className='text-sm text-blue-500'>
            Accepted Exam Allocation Requests
          </Link>
        </li>
        <li>
          <Link href={"/login/venue-partner/exam-details/self-confirmed-allocation-requests"} className='text-sm text-blue-500'>
            Self Confirmed Exam Allocation Requests
          </Link>
        </li>
        <li>
          <Link href={"/login/venue-partner/exam-details/rejected-allocation-requests"} className='text-sm text-blue-500'>
            Rejected Exam Allocation Request
          </Link>
        </li>
      </ul>
    </>
  );
};

export default page;
