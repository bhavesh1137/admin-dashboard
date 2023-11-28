import React from 'react'
import Radio from "../../_components/radio/Radio";
import Date from '../date/Date';
import Input from '../input/Input';
import { useSearchParams } from 'next/navigation';

const SafteyDetailsForm = (props) => {

  let { register, errors } = props
  const searchParams = useSearchParams()
  const auditor = searchParams.get('auditor')
  console.log(auditor);
  return (
    <div className='w-full h-full flex flex-col gap-[24px]'>
      <div className="w-full p-4 bg-white border ring-1 ring-gray-300 rounded-lg flex flex-col gap-[24px]">
        <h1 className="text-[20px] font-medium">Fire Safety</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-12">
          <Radio
            title={"First Aid Kit Available?*"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('firstAidKit', { required: true }) }}
            error={errors.firstAidKit ? "Required" : ""}
          />

          <Radio
            title={"Are Fire Extinguishers Available On Each Floor?*"}
            classname={"text-[#864F20]"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('candidatesAllowedToPark', { required: true }) }}
            error={errors.candidatesAllowedToPark ? "Required" : ""}
          />

          <div className='relative ps-[50px] lg:col-span-12 mt-2'>
            <span className=' left-0 -top-[25px] border-b-2 ms-3 border-s-2 border-black absolute w-[40px] h-full'></span>
            <Radio
              title={"Are Fire Extinguishers Easily Accessible During Fire Emergency?*"}
              options={["Yes", "No"]}
              classname={"ms-1"}
              radioRegister={{ ...register('fireExtinguisherAccessible', { required: true }) }}
              error={errors.fireExtinguisherAccessible ? "Required" : ""}
            />
          </div>
        </div>



        <h1 className="text-[16px] text-[#864F20] lg:col-span-12">Fire Safety Clearance</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
          <Date
            label={"Date Of last Clearance?*"}
            classname={"lg:col-span-6"}
            inputRegister={{ ...register('dateOfClearance', { required: true }) }}
            error={errors.dateOfClearance ? "Required" : ""}
          />
          <Date
            label={"Date Of last Refill of Fire Extinguishers?*"}
            classname={"lg:col-span-6"}
            inputRegister={{ ...register('dateOfRefill', { required: true }) }}
            error={errors.dateOfRefill ? "Required" : ""}
          />
        </div>

        <Radio
          title={"Assembly Area In Case Of Fire Emergency*"}
          options={["Yes", "No"]}
          radioRegister={{ ...register('assembleAreaInEmergency', { required: true }) }}
          error={errors.assembleAreaInEmergency ? "Required" : ""}
        />
        <Radio
          title={"Safety Signage For Emergency Evacuation?*"}
          options={["Yes", "No"]}
          radioRegister={{ ...register('emergencyEvacuation', { required: true }) }}
          error={errors.emergencyEvacuation ? "Required" : ""}
        />
        <Radio
          title={"Does The Examination Venue Have Insurance Covered For Risk Of Assets Loss, Third Party Accidents Etc?*"}
          options={["Yes", "No"]}
          radioRegister={{ ...register('insuranceCoveredForAccidents', { required: true }) }}
          error={errors.insuranceCoveredForAccidents ? "Required" : ""}
        />

      </div>
      {auditor === "true" && <div className="p-[16px] rounded-lg ring-1 ring-gray-300 bg-white grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
        <h1 className="text-[20px] font-normal lg:col-span-12">Auditor Remark</h1>
        <Input
          label={"Remark*"}
          classname={"lg:col-span-12"}
          type={"text"}
        />
      </div>}
    </div>
  )
}

export default SafteyDetailsForm