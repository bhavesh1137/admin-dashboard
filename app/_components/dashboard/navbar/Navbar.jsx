import React from "react";
import { GoBell } from "react-icons/go";
import { LuUserCircle2 } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className='flex items-center justify-end'>
      <div className='flex items-center gap-[16px]'>
        <GoBell className='w-[32px] h-[32px] m-[9px]' />
        <LuUserCircle2 className='w-[32px] h-[32px] m-[9px]' />
      </div>
    </div>
  );
};

export default Navbar;
