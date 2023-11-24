import React from "react";
import Link from "next/link";
import arrowRight from "../../assets/icons/arrow-right.svg";
import arrorwLeft from "../../assets/icons/arrow-left.svg";
import Image from "next/image";

const Pagination = ({ currentPage, totalPages }) => {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className='text-[14px] text-[#212121] font-normal'>
          Showing {currentPage} to 10 of {totalPages} Records
        </p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Link
          href={`#`}
          className={`${
            prevPage == null ? "" : ""
          } p-[10px] bg-[#F2E2BE] rounded-lg`}
        >
          <Image src={arrorwLeft} alt="arrowLeft" />
        </Link>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            href={`#`}
            key={page}
            className={`p-[10px] rounded-lg text-[13px] font-[600] ${
              currentPage === page
                ? "bg-[#864F20] text-[#F2E2BE]"
                : "bg-[#F2E2BE] text-[#666]"
            }`}
          >
            {page}
          </Link>
        ))}

        <Link
          href={`#`}
          className={`${
            nextPage == null ? "" : ""
          } p-[10px] bg-[#F2E2BE] rounded-lg`}
        >
          <Image src={arrowRight} alt="arrowRight" />
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
