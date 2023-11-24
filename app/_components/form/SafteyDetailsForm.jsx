import React from 'react'
import Radio from "../../_components/radio/Radio";

const SafteyDetailsForm = () => {
  return (
    <>
      <h1 className="text-[20px] font-medium">Fire Safety</h1>

      <Radio
        title={"First Aid Kit*"}
        options={["Yes", "No"]}
      />
      <Radio
        title={"Fire Extinguishers On Each Floor*"}
        options={["Yes", "No"]}
      />
      <Radio
        title={"Are Fire Extinguishers Easily Accessible During Fire Emergency?*"}
        options={["Yes", "No"]}
      />

      <div className="flex flex-col gap-[24px]">
        <p className="text-[16px] font-normal">Date Of Last Refill*</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
          <div className="lg:col-span-6 relative h-[58px]">
            <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Date Of Last Clearance*
            </label>
            <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" type='date' />
          </div>
          <div className="lg:col-span-6 relative h-[58px]">
            <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Date Of Last Refill*
            </label>
            <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" type='date' />
          </div>
        </div>
      </div>


      <Radio
        title={"Assembly Area In Case Of Fire Emergency*"}
        options={["Yes", "No"]}
      />
      <Radio
        title={"Safety Signage For Emergency Evacuation?*"}
        options={["Yes", "No"]}
      />
      <Radio
        title={"Does The Examination Venue Have Insurance Covered For Risk Of Assets Loss, Third Party Accidents Etc?*"}
        options={["Yes", "No"]}
      />
    </>
  )
}

export default SafteyDetailsForm