import React from "react";

//Input Component
import Input from "../../_components/input/Input";
import Radio from "../../_components/radio/Radio";

//Validation
// import { centerValidation } from '../../helpers/validations/schema/center'
// import { useForm } from "react-hook-form";

const CenterDetailsForm = () => {

  // const { register, handleSubmit, formState: { errors } } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <>
      <h1 className="text-[20px] font-medium">Personal Details</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
        <Input
          label={"Center Name*"}
          classname={"lg:col-span-12"}
          type={"text"} />
        <Input
          label={"Email Address*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"Phone Number*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"Alternate Phone Number*"}
          classname={"lg:col-span-12"}
          type={"text"} />
      </div>

      <Radio
        title={"Center Type*"}
        options={["School", "College", "Training Institute", "Test Center"]}
        // radioRegister={...register("centerType", centerValidation.centerDetails.centerType)}
        // error={errors.centerType?.message}
         />

      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
        <Input
          label={"Pin Code*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"State*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"District*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"Taluka*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"City*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"Village*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"Address Line 1*"}
          classname={"lg:col-span-12"}
          type={"text"} />
        <Input
          label={"Address Line 2*"}
          classname={"lg:col-span-12"}
          type={"text"} />
        <Input
          label={"Landmark*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"Google Map Link*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"Nearest AirPort*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"Distance from AirPort (in KM)*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"Nearest Railway Station*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"Distance from Railway Station (in KM)*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"Nearest Bus Stand*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"Distance from Bus Stand (in KM)*"}
          classname={"lg:col-span-6"}
          type={"text"}
        />
        <Input
          label={"GST Number*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <div className="relative h-[58px] lg:col-span-6">
          <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            Upload GST Certificate*
          </label>
          <input
            type="file"
            className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
          />
        </div>
        <Input
          label={"PAN Card Number*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <div className="relative h-[58px] lg:col-span-6">
          <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            Upload PAN Card Copy*
          </label>
          <input
            type="file"
            className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
          />
        </div>
        <Input
          label={"Aadhar Card Number*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <div className="relative h-[58px] lg:col-span-6">
          <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            Upload Aadhar Card Copy*
          </label>
          <input
            type="file"
            className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
          />
        </div>
        <div className="relative h-[58px] lg:col-span-12">
          <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            Agreement Copy signed with Venue Partner
          </label>
          <input
            type="file"
            className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
          />
        </div>
        <Input
          label={"SPOC 1 Name*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"SPOC 2 Name*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"SPOC 1 Email ID*"}
          classname={"lg:col-span-6"}
          type={"email"} />
        <Input
          label={"SPOC 2 Email ID*"}
          classname={"lg:col-span-6"}
          type={"email"} />
        <Input
          label={"SPOC 1 Phone Number*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"SPOC 2 Phone Number*"}
          classname={"lg:col-span-6"}
          type={"text"} />
      </div>
    </>
  );
};

export default CenterDetailsForm;
