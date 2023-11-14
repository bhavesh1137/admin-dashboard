import React from "react";

const PrimaryBtn = (props) => {
  return (
    <>
      <button className='px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px]'>{props.title}</button>
    </>
  );
};

export default PrimaryBtn;
