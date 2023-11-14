import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col text-lg font-bold p-4">
        Exam Allocation Requests Page
      </div>

      <ul className='flex flex-col gap-2 pl-4'>
        <li>
          <Link
          className='text-sm text-blue-500'
            href={
              "/login/centre-owner/exam-allocation-requests/past-allocation-requests"
            }
          >
            Past Exam Allocation Requests
          </Link>
        </li>
        <li>
          <Link
          className='text-sm text-blue-500'
            href={
              "/login/centre-owner/exam-allocation-requests/current-allocation-requests"
            }
          >
            Current Exam Allocation Requests
          </Link>
        </li>
        <li>
          <Link
          className='text-sm text-blue-500'
            href={
              "/login/centre-owner/exam-allocation-requests/accepted-allocation-requests"
            }
          >
            Accepted Exam Allocation Requests
          </Link>
        </li>
        <li>
          <Link
          className='text-sm text-blue-500'
            href={
              "/login/centre-owner/exam-allocation-requests/self-confirmed-allocation-requests"
            }
          >
            Self Confirmed Exam Allocation Requests
          </Link>
        </li>
        <li>
          <Link
          className='text-sm text-blue-500'
            href={
              "/login/centre-owner/exam-allocation-requests/rejected-allocation-requests"
            }
          >
            Rejected Exam Allocation Requests
          </Link>
        </li>
      </ul>
    </>
  );
};

export default page;
