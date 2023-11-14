import React from "react";

const SecondaryBtn = (props) => {
  return (
    <>
      <button className="px-[24px] py-[12px] bg-white uppercase text-[14px] font-medium rounded-[40px]">
        {props.title}
      </button>
    </>
  );
};

export default SecondaryBtn;
