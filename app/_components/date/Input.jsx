import React from "react";

const Date = (props) => {
  let { label, inputRegister, error, classname } = props;
  return (
    <>
      <div className={`${classname}`}>
        <div className="relative">
          <label className="block absolute top-[-12px] left-[20px] text-[12px] leading-[16px] font-normal z-10 text-[#666666] bg-white p-1 tracking-wide">
            {label}
          </label>
          <input
            className="w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[#212121] rounded-[8px] font-normal"
            type="date"
            {...inputRegister}
          />
        </div>
        <p className="text-red-500 text-[12px]">{error}</p>
      </div>
    </>
  );
};

export default Date;
