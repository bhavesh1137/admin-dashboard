import React from 'react'
import Input from "../../_components/input/Input";
import Radio from "../../_components/radio/Radio";
import { useSearchParams } from 'next/navigation';
import DropDown from '../dropdown/DropDown';

const InfrastructureDetailForm = (props) => {

  let { register, errors } = props;
  const searchParams = useSearchParams()
  const auditor = searchParams.get('auditor')
  console.log(auditor);
  return (
    <div className='w-full h-full flex flex-col gap-[24px] '>
      <div className="w-full p-4 bg-white border ring-1 ring-gray-300 rounded-lg flex flex-col gap-[24px]">
        <h1 className="text-[20px] font-medium">Infrastructure Details</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
          <Input
            label={"Wing - Floor / Building*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={{ ...register('wingFloorBuilding', { required: true }) }}
            error={errors.wingFloorBuilding ? "Required" : ""}
          />
          <Input
            label={"Total No. Of Labs"}
            classname={"lg:col-span-6"}
            type={"number"}
          />

          <DropDown
            title={"Building Type*"}
            options={["Educational", "Residential", "Commercial"]}
            classname={"lg:col-span-12"}
          />
        </div>

        <h1 className="text-[20px] font-medium">Facilities Available</h1>

        <Radio
          title={"Parking Facility Available?*"}
          options={["Yes", "No"]}
          radioRegister={{ ...register('parkingFacility', { required: true }) }}
          error={errors.parkingFacility ? "Required" : ""}
        />

        <Radio
          title={"Are Candidates Allowed To Park Their Vehicle Inside The Venue?*"}
          classname={"text-[#864F20]"}
          options={["Yes", "No"]}
          radioRegister={{ ...register('candidatesAllowedToPark', { required: true }) }}
          error={errors.candidatesAllowedToPark ? "Required" : ""}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
          <Input
            label={"If No is selected, What is the Nearest Pay and Park?**"}
            classname={"lg:col-span-12"}
            type={"text"}
            inputRegister={...register('nearestPayPark', {
              required: true,
            })}
            error={errors.nearestPayPark ? 'Required' : ''}
          />
        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-12">

          <Radio
            title={"Reception Area Present?*"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('receptionArea', { required: true }) }}
            error={errors.receptionArea ? "Required" : ""}
          />

          <Radio
            title={"Waiting Area Present?*"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('waitingArea', { required: true }) }}
            error={errors.waitingArea ? "Required" : ""}
          />

          <Radio
            title={"Suitable For PWD (Person With Disability)?*"}
            classname={"text-[#864F20]"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('suitableForPWD', { required: true }) }}
            error={errors.suitableForPWD ? "Required" : ""}
          />
          <div className='relative mt-2 ps-[50px] lg:col-span-12'>
            <span className=' left-0 -top-[25px] border-b-2 ms-3  border-s-2 border-black absolute w-[40px] h-full'></span>
            <Radio
              title={"Visible Notices Informing Individuals About Present Of CCTV Surveillance System?*"}
              options={["Yes", "No"]}
              classname={"ms-1"}
              radioRegister={{ ...register('CCTVnotice', { required: true }) }}
              error={errors.CCTVnotice ? "Required" : ""}
            />
          </div>

          <div className='relative ps-[50px] lg:col-span-12'>
            <span className=' left-0 -top-[25px] border-b-2 ms-3  border-s-2 border-black absolute w-[40px] h-full'></span>
            <Radio
              title={"Ramp Facility For PWD Candidates"}
              options={["Yes", "No"]}
              classname={"ms-1"}
            />
          </div>

          <div className='relative ps-[50px] lg:col-span-12'>
            <span className=' left-0 -top-[25px] border-b-2 ms-3  border-s-2 border-black absolute w-[40px] h-full'></span>
            <Radio
              title={"Railing Support For PWD Candidates"}
              options={["Yes", "No"]}
              classname={"ms-1"}
            />
          </div>

          <div className='relative ps-[50px] lg:col-span-12'>
            <span className=' left-0 -top-[25px] border-b-2 ms-3  border-s-2 border-black absolute w-[40px] h-full'></span>
            <Radio
              title={"Wheelchair Support / Availability*"}
              options={["Yes", "No"]}
              classname={"ms-1"}
              radioRegister={{ ...register('wheelchair', { required: true }) }}
              error={errors.wheelchair ? "Required" : ""}
            />
          </div>

          <Radio
            title={"Lift Available?*"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('liftAvailable', { required: true }) }}
            error={errors.liftAvailable ? "Required" : ""}
          />

          <Radio
            title={"Washrooms Available?*"}
            classname={"text-[#864F20]"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('washroomAvailable', { required: true }) }}
            error={errors.washroomAvailable ? "Required" : ""}
          />


          <div className='relative mt-2 ps-[50px] lg:col-span-12'>
            <span className=' left-0 -top-[25px] border-b-2 ms-3  border-s-2 border-black absolute w-[40px] h-full'></span>
            <Radio
              title={"Washrooms Available On Each Floor?*"}
              options={["Yes", "No"]}
              classname={"ms-1"}
              radioRegister={{ ...register('washroomOnFloor', { required: true }) }}
              error={errors.washroomOnFloor ? "Required" : ""}
            />
          </div>

          <div className='relative ps-[50px] lg:col-span-12'>
            <span className=' left-0 -top-[25px] border-b-2 ms-3  border-s-2 border-black absolute w-[40px] h-full'></span>
            <Radio
              title={"Are There Separate Male and Female Washrooms?*"}
              options={["Yes", "No"]}
              classname={"ms-1"}
              radioRegister={{ ...register('separateWashroom', { required: true }) }}
              error={errors.separateWashroom ? "Required" : ""}
            />
          </div>

          <Radio
            title={"CCTV Available In The Lobby?*"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('cctvAvailable', { required: true }) }}
            error={errors.cctvAvailable ? "Required" : ""}
          />
          <Radio
            title={"Drinking Water Available?*"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('drinkingWater', { required: true }) }}
            error={errors.drinkingWater ? "Required" : ""}
          />

          <Radio
            title={"Separate Entry and Exit Gate?*"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('seperateEntryGates', { required: true }) }}
            error={errors.seperateEntryGates ? "Required" : ""}
          />

          <Radio
            title={"Is It Located In A Safe Area Where There Is No Obvious Threat To Personal Safety And General Public?*"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('safeArea', { required: true }) }}
            error={errors.safeArea ? "Required" : ""}
          />

          <Radio
            title={"Is It Safe To Access The Venue During Early And Late Hours?*"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('safeAreaDuringLateAndEarly', { required: true }) }}
            error={errors.safeAreaDuringLateAndEarly ? "Required" : ""}
          />
          <Radio
            title={"Is It Adequate Hygiene Maintained Across The Venue?*"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('hygieneMaintained', { required: true }) }}
            error={errors.hygieneMaintained ? "Required" : ""}
          />
          <Radio
            title={"Server Room Available?*"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('serverRoomAvailable', { required: true }) }}
            error={errors.serverRoomAvailable ? "Required" : ""}
          />
          <Radio
            title={"AC Available In Server Room?*"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('ACinServerRoom', { required: true }) }}
            error={errors.ACinServerRoom ? "Required" : ""}
          />
          <Radio
            title={"Does The Server Room Have UPS Power Points / Network Points?*"}
            options={["Yes", "No"]}
            span={"lg:col-span-12"}
            radioRegister={{ ...register('UPSPointsInServerRoom', { required: true }) }}
            error={errors.UPSPointsInServerRoom ? "Required" : ""}
          />
        </div>
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

export default InfrastructureDetailForm