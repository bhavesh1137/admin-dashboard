import React from "react";

const Input = () => {
  return (
    <>
      <div className="relative h-[58px]">
        <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
          City*
        </label>
        <input
          className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
          placeholder="City"
        />
      </div>
    </>
  );
};

export default Input;
