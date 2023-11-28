import Image from "next/image";
import React from "react";

const Input = (props) => {
  let { label, inputRegister, error, classname, type, icon, action, verify } = props;
  return (
    <>
      <div className={`${classname}`}>
        {/* <div className="relative">
          <label className="block absolute top-[-12px] left-[20px] text-[12px] leading-[16px] font-normal z-10 text-[#666666] bg-white p-1 tracking-wide">
            {label}
          </label>
          <input
            className="w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[#212121] rounded-[8px] font-normal"
            {...inputRegister}
            type={type}
          />
          <span className="absolute cursor-pointer flex items-center justify-center h-full top-0 right-4 rounded-md">
            {verify && <p className="text-[#B3261E] underline me-1">{verify}</p>}
            {icon && <Image src={icon} className="h-[24] w-[24]" alt="" />}
            {action && <p className="text-[#1B72E8]">{action}</p>}
          </span>
        </div> */}

        <div className="relative">
          <input id={label} className="w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[#212121] rounded-[8px] font-normal focus:outline-none focus:ring-0 focus:border-[#A3A3A3] peer"
            placeholder=" "
            type={type}
            {...inputRegister}
          />
          <span className="absolute cursor-pointer flex items-center justify-center h-full top-0 right-4 rounded-md">
            {verify && <p className="text-[#B3261E] underline me-1">{verify}</p>}
            {icon && <Image src={icon} className="h-[24] w-[24]" alt="" />}
            {action && <p className="text-[#1B72E8]">{action}</p>}
          </span>
          <label for={label} className="absolute text-[16px] text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#A3A3A3] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{label}</label>
        </div>

        <p className="text-red-500 text-[12px]">{error}</p>
      </div>
    </>
  );
};

export default Input;
