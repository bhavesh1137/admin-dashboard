import React from "react";
import downArrow from "../../assets/icons/VectordownArrow.svg";
import Image from "next/image";
import Radio from "../../_components/radio/Radio";
import Input from "../../_components/input/Input";

const LabForm2 = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
        <div className="lg:col-span-6 relative h-[58px]">
          <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            Areas Covered Under Surveillance*
          </label>
          <select className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10 appearance-none">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <Image src={downArrow} className="absolute top-6 right-5 z-20" alt="arrow" />
        </div>
        <div className="lg:col-span-6 relative h-[58px]">
          <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            Labs Covered Under Surveillance*
          </label>
          <select className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10 appearance-none">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <Image src={downArrow} className="absolute top-6 right-5 z-20" alt="arrow" />
        </div>

        <Input
          label={"Total No. Of Per Lab Systems Under Surveillance*"}
          classname={"lg:col-span-6"}
          type={"text"} />

        <Input
          label={"No. Of CCTVs Installed Per Lab*"}
          classname={"lg:col-span-6"}
          type={"text"} />

        <Input
          label={"No. Of Days Recording Available Per Lab*"}
          classname={"lg:col-span-6"}
          type={"text"} />

        <Input
          label={"Recording Size Per CCTV Camera Per Hour*"}
          classname={"lg:col-span-6"}
          type={"text"} />
      </div>

      <div className="flex flex-col gap-[24px]">
        <Radio
          title={"CCTV Data Backup Available?*"}
          options={["Yes", "No"]}
        />

        <Radio
          title={"Visible Notices Informing Individuals About Present Of CCTV Surveillance System?*"}
          options={["Yes", "No"]}
        />
      </div>

      <p className="text-[16px] font-normal text-[#864F20] mb-4">DVR Details</p>



      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">

        <Input
          label={"No. Of DVR Available Per Lab*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"Make And Model Of DVR Per Lab*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"Size Of DVR Hard Disk*"}
          classname={"lg:col-span-12"}
          type={"text"} />

      </div>

      <Radio
        title={"All Critical Areas, Including Entry And Exit Points, Exam Rooms And Storage Areas are Present?*"}
        options={["Yes", "No"]}
      />

      <Radio
        title={"Blind Spots Present?*"}
        options={["Yes", "No"]}
      />

      <Input
        label={"If Yes is selected, Please List The Blind Spots*"}
        classname={"lg:col-span-12"}
        type={"text"} />

      <Radio
        title={"Capture CLear And High Quality Images?*"}
        options={["Yes", "No"]}
      />

      <Radio
        title={"Access To Authorized Personal Only*"}
        options={["Yes", "No"]}
      />

    </>
  );
};

export default LabForm2;
