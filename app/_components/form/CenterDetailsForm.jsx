import React from "react";

//Input Component
import Image from "next/image";
import Input from "../../_components/input/Input";
import Radio from "../../_components/radio/Radio";
import Verify from '../../assets/icons/verify-green.svg'
import Information from '../../assets/icons/information-red.svg'

import File from "../file-input/File";
import { useSearchParams } from "next/navigation";
import DropDown from "../dropdown/DropDown";

const CenterDetailsForm = (props) => {
  const { register, errors } = props;
  const searchParams = useSearchParams()
  const auditor = searchParams.get('auditor')
  console.log(auditor);

  return (
    <div className="w-full h-full flex flex-col gap-[24px]">
      <div className="w-full p-4 bg-white border ring-1 ring-gray-300 rounded-lg flex flex-col gap-[24px]">
        <h1 className="text-[20px] font-medium">Center Details</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
          <Input
            label={"Center Name*"}
            classname={"lg:col-span-12"}
            type={"text"}
            inputRegister={...register('centerName', {
              required: true
            })}
            error={errors.centerName ? 'Center Name is Required' : ''}
          />
          <Input
            label={"Center ID*"}
            classname={"lg:col-span-12"}
            type={"text"}
            inputRegister={...register('centerID', {
              required: true
            })}
            error={errors.centerID ? 'Center ID is Required' : ''}
          />

          <Input
            label={"Email Address*"}
            classname={"lg:col-span-6"}
            type={"text"}
            icon={Verify}
            inputRegister={...register('centerEmail', {
              required: true
            })}
            error={errors.centerEmail ? 'Center Name is Required' : ''}
          />

          <Input
            label={"Phone Number*"}
            classname={"lg:col-span-6"}
            type={"text"}
            icon={Information}
            verify={"Verify"}
            inputRegister={...register('centerPhoneNumber', {
              required: true
            })}
            error={errors.centerPhoneNumber ? 'Center Phone Number is Required' : ''}
          />
          <Input
            label={"Alternate Phone Number*"}
            classname={"lg:col-span-6"}
            type={"text"}
            icon={Information}
            verify={"Verify"}
            inputRegister={...register('centerAlternatePhoneNumber', {
              required: true
            })}
            error={errors.centerAlternatePhoneNumber ? 'Center Phone Number is Required' : ''}
          />

          <DropDown
            classname={"lg:col-span-6"}
            title="Center Type*"
            options={["School", "Training", "Institute", "Test Center"]}
          />
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
          <h2 className="text-[20px] font-medium lg:col-span-12">Address Details</h2>

          <Input
            label={"Pin Code*"}
            classname={"lg:col-span-6"}
            type={"text"}
            action={"Fetch Address"}
            inputRegister={...register('centerPincode', {
              required: true
            })}
            error={errors.centerPincode ? 'Pincode is Required' : ''}
          />
          <Input
            label={"State"}
            classname={"lg:col-span-6"}
            type={"text"}
          />
          <Input
            label={"District"}
            classname={"lg:col-span-6"}
            type={"text"}
          />
          <Input
            label={"Taluka"}
            classname={"lg:col-span-6"}
            type={"text"}
          />
          <Input
            label={"City*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('city', {
              required: true
            })}
            error={errors.city ? 'Required' : ''}
          />
          <Input
            label={"Village*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('village', {
              required: true
            })}
            error={errors.village ? 'Required' : ''}
          />

          <Input
            label={"Address Line 1*"}
            classname={"lg:col-span-12"}
            type={"text"}
            inputRegister={...register('centerAddress_1', {
              required: true
            })}
            error={errors.centerAddress_1 ? 'Address is Required' : ''}
          />
          <Input
            label={"Address Line 2"}
            classname={"lg:col-span-12"}
            type={"text"}
            inputRegister={...register('centerAddress_2', {
              required: true
            })}
            error={errors.centerAddress_2 ? 'Address is Required' : ''}
          />
          <Input
            label={"Landmark*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('centerLandmark', {
              required: true
            })}
            error={errors.centerLandmark ? 'Landmark is Required' : ''}
          />
          <Input
            label={"Google Map Link*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('googleMapLink', {
              required: true
            })}
            error={errors.googleMapLink ? 'Paste Google Link Here' : ''}
          />
          <Input
            label={"Nearest Airport*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('centerNearestAirport', {
              required: true
            })}
            error={errors.centerNearestAirport ? 'Enter Nearest Airport' : ''}
          />
          <Input
            label={"Distance from Airport (in KM)"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('centerNearestAirportDistance', {
              required: true
            })}
            error={errors.centerNearestAirportDistance ? 'Enter Distance from Airport' : ''}
          />
          <Input
            label={"Nearest Railway Station*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('centerNearestRailwayStn', {
              required: true
            })}
            error={errors.centerNearestRailwayStn ? 'Enter Nearest Railway Station' : ''}
          />
          <Input
            label={"Distance from Railway Station (in KM)"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('centerNearestRailwayStnDistance', {
              required: true
            })}
            error={errors.centerNearestRailwayStnDistance ? 'Enter Distance from  Railway Station' : ''}
          />
          <Input
            label={"Nearest Bus Stand*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('centerNearestBusStand', {
              required: true
            })}
            error={errors.centerNearestBusStand ? 'Enter Nearest Bus Stand' : ''}
          />
          <Input
            label={"Distance from Bus Stand (in KM)"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('centerNearestBusStandDistance', {
              required: true
            })}
            error={errors.centerNearestBusStandDistance ? 'Enter Distance from  Bus Stand' : ''}
          />

          <h2 className="flex items-center gap-[8px] text-[20px] font-medium lg:col-span-12">Documents <span className="text-[#666666] text-[12px]">(For all document upload file format is PDF / JPEG / JPG, Maximum file size - 5 MB)</span></h2>


          <Input
            label={"GST Number*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('centergstNumber', {
              required: true
            })}
            error={errors.centergstNumber ? 'GST Number is Required' : ''}
          />

          <File
            title={"Upload GST Certificate*"}
            classname={"lg:col-span-6"}
          />


          <Input
            label={"PAN Card Number*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('centerPanNumber', {
              required: true
            })}
            error={errors.centerPanNumber ? 'PAN Number is Required' : ''}
          />

          <File
            classname={"lg:col-span-6"}
            title={"Upload PAN Card Copy*"}
          />

          <File
            title={" Agreement Copy signed with Venue Partner"}
            classname={"lg:col-span-12"}
          />

          <h2 className="text-[20px] font-medium lg:col-span-12">SPOC Details</h2>

          <Input
            label={"SPOC 1 Name*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('centerSpoc1Name', {
              required: true
            })}
            error={errors.centerSpoc1Name ? 'Required' : ''}
          />

          <Input
            label={"SPOC 2 Name*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('centerSpoc2Name', {
              required: true
            })}
            error={errors.centerSpoc2Name ? 'Required' : ''}
          />

          <Input
            label={"SPOC 1 Email ID*"}
            classname={"lg:col-span-6"}
            type={"email"}
            inputRegister={...register('centerSpoc1Email', {
              required: true
            })}
            error={errors.centerSpoc1Email ? 'Required' : ''}
          />

          <Input
            label={"SPOC 2 Email ID*"}
            classname={"lg:col-span-6"}
            type={"email"}
            inputRegister={...register('centerSpoc2Email', {
              required: true
            })}
            error={errors.centerSpoc2Email ? 'Required' : ''}
          />

          <Input
            label={"SPOC 1 Phone Number*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('centerSpoc1Phone', {
              required: true
            })}
            error={errors.centerSpoc1Phone ? 'Required' : ''}
          />
          <Input
            label={"SPOC 2 Phone Number*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={...register('centerSpoc2Phone', {
              required: true
            })}
            error={errors.centerSpoc2Phone ? 'Required' : ''}
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
  );
};

export default CenterDetailsForm;
