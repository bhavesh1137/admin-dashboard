import Image from "next/image";
import React from "react";
import bell from "../../assets/icons/bell.svg";
import profile from "../../assets/icons/profile.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end">
      <div className="flex items-center gap-[16px]">
        <Image src={bell} alt="bell" className="cursor-pointe m-[9px]" />
        <Image src={profile} alt="profile" className="cursor-pointe m-[9px]" />
      </div>
    </div>
  );
};

export default Navbar;
