import React from "react";

const LabForm2 = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
        <div className="lg:col-span-6 relative h-[58px]">
          <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            Areas Covered Under Surveillance*
          </label>
          <select className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>
        <div className="lg:col-span-6 relative h-[58px]">
          <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            Labs Covered Under Surveillance*
          </label>
          <select className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>

        <div className="lg:col-span-6 relative h-[58px]">
          <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            Total No. Of Per Lab Systems Under Surveillance*
          </label>
          <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
        </div>

        <div className="lg:col-span-6 relative h-[58px]">
          <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            No. Of CCTVs Installed Per Lab*
          </label>
          <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
        </div>

        <div className="lg:col-span-6 relative h-[58px]">
          <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            No. Of Days Recording Available Per Lab*
          </label>
          <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
        </div>

        <div className="lg:col-span-6 relative h-[58px]">
          <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            Recording Size Per CCTV Camera Per Hour*
          </label>
          <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
        </div>
      </div>

      <div className="flex flex-col gap-[24px]">
        <div className="flex justify-between">
          <p className="text-[16px] font-normal text-[#864F20]">
            CCTV Data Backup Available?*
          </p>
          <div className="flex gap-[24px]">
            <div class="flex items-center">
              <input type="radio" class="w-4 h-4" />
              <label class="ms-2 text-[16px] font-normal">Yes</label>
            </div>
            <div class="flex items-center">
              <input type="radio" class="w-4 h-4" />
              <label class="ms-2 text-[16px] font-normal">No</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] ml-[50px]">
          <div className="flex justify-between">
            <p className="text-[16px] font-normal">
              Visible Notices Informing Individuals About Present Of CCTV
              Surveillance System?*
            </p>
            <div className="flex gap-[24px]">
              <div class="flex items-center">
                <input type="radio" class="w-4 h-4" />
                <label class="ms-2 text-[16px] font-normal">Yes</label>
              </div>
              <div class="flex items-center">
                <input type="radio" class="w-4 h-4" />
                <label class="ms-2 text-[16px] font-normal">No</label>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-[16px] font-normal">
              Availability Of Backup Camera?*
            </p>
            <div className="flex gap-[24px]">
              <div class="flex items-center">
                <input type="radio" class="w-4 h-4" />
                <label class="ms-2 text-[16px] font-normal">Yes</label>
              </div>
              <div class="flex items-center">
                <input type="radio" class="w-4 h-4" />
                <label class="ms-2 text-[16px] font-normal">No</label>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-[16px] font-normal">
              Regular Maintenance Is Followed?*
            </p>
            <div className="flex gap-[24px]">
              <div class="flex items-center">
                <input type="radio" class="w-4 h-4" />
                <label class="ms-2 text-[16px] font-normal">Yes</label>
              </div>
              <div class="flex items-center">
                <input type="radio" class="w-4 h-4" />
                <label class="ms-2 text-[16px] font-normal">No</label>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-[16px] font-normal">
              Frequency Of Sharing The Data?*
            </p>
            <div className="flex gap-[24px]">
              <div class="flex items-center">
                <input type="radio" class="w-4 h-4" />
                <label class="ms-2 text-[16px] font-normal">Daily</label>
              </div>
              <div class="flex items-center">
                <input type="radio" class="w-4 h-4" />
                <label class="ms-2 text-[16px] font-normal">Weekly</label>
              </div>
              <div class="flex items-center">
                <input type="radio" class="w-4 h-4" />
                <label class="ms-2 text-[16px] font-normal">Fortnightly</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[16px] font-normal text-[#864F20]">DVR Details</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
        <div className="lg:col-span-6 relative h-[58px]">
          <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            No. Of DVR Available Per Lab*
          </label>
          <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
        </div>
        <div className="lg:col-span-6 relative h-[58px]">
          <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            Make And Model Of DVR Per Lab*
          </label>
          <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
        </div>
        <div className="lg:col-span-12 relative h-[58px]">
          <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            Size Of DVR Hard Disk*
          </label>
          <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
        </div>
      </div>

      <div className="flex justify-between">
        <p className="text-[16px] font-normal">
          All Critical Areas, Including Entry And Exit Points, Exam Rooms And
          Storage Areas are Present?*
        </p>
        <div className="flex gap-[24px]">
          <div class="flex items-center">
            <input type="radio" class="w-4 h-4" />
            <label class="ms-2 text-[16px] font-normal">Yes</label>
          </div>
          <div class="flex items-center">
            <input type="radio" class="w-4 h-4" />
            <label class="ms-2 text-[16px] font-normal">No</label>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <p className="text-[16px] font-normal text-[#864F20]">
          Blind Spots Present?*
        </p>
        <div className="flex gap-[24px]">
          <div class="flex items-center">
            <input type="radio" class="w-4 h-4" />
            <label class="ms-2 text-[16px] font-normal">Yes</label>
          </div>
          <div class="flex items-center">
            <input type="radio" class="w-4 h-4" />
            <label class="ms-2 text-[16px] font-normal">No</label>
          </div>
        </div>
      </div>

      <div className="relative h-[58px]">
        <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
          If Yes is selected, Please List The Blind Spots*
        </label>
        <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
      </div>

      <div className="flex justify-between">
        <p className="text-[16px] font-normal">
          Capture CLear And High Quality Images?*
        </p>
        <div className="flex gap-[24px]">
          <div class="flex items-center">
            <input type="radio" class="w-4 h-4" />
            <label class="ms-2 text-[16px] font-normal">Yes</label>
          </div>
          <div class="flex items-center">
            <input type="radio" class="w-4 h-4" />
            <label class="ms-2 text-[16px] font-normal">No</label>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <p className="text-[16px] font-normal">
          Access To Authorized Personal Only*
        </p>
        <div className="flex gap-[24px]">
          <div class="flex items-center">
            <input type="radio" class="w-4 h-4" />
            <label class="ms-2 text-[16px] font-normal">Yes</label>
          </div>
          <div class="flex items-center">
            <input type="radio" class="w-4 h-4" />
            <label class="ms-2 text-[16px] font-normal">No</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabForm2;
