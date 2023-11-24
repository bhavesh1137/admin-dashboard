"use client";
import Link from "next/link";
import React, { useState } from "react";
import downArrow from "../../assets/icons/VectordownArrow.svg";

//Input Component
import Input from "../../_components/input/Input";

//Validation Imports
// import { useForm } from "react-hook-form";
// import { venuePartnerValidation } from '../../helpers/validations/schema/venuePartner'
import Image from "next/image";

const AddNewVendorPage = () => {
  const [loading, setLoading] = useState(false);
  // const form = useForm({ defaultValues: {} });
  // const { register, handleSubmit, formState, reset } = form;
  // const { errors } = formState;
  const [location, setLocation] = useState(null);


  // const handleVenuePartnerForm = (data) => {
  //   console.log(data);
  //   reset()
  // };

  const handleFetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(longitude, latitude);
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting geolocation:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-[20px]">
          Venue Partner / <span className="font-medium">Add New Vendor</span>
        </p>
        <div className="flex gap-4">
          <Link href={"./"}>
            <button className="px-[24px] py-[12px] bg-white uppercase text-[14px] font-medium rounded-[40px] border-2 border-slate-300">
              Cancel
            </button>
          </Link>
          <button
            className="px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px]"
            // onClick={handleSubmit(handleVenuePartnerForm)}
          >
            {loading ? "submitting..." : "save"}
          </button>
        </div>
      </div>

      <form className="p-4 bg-white border border-slate-400 rounded-lg flex flex-col gap-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
          <Input
            label={"Vendor Name*"}
            classname={"lg:col-span-7"}
            // error={errors.vendorName?.message}
            // inputRegister={...register("vendorName", venuePartnerValidation.vendorName)}
          />
          <div className="lg:col-span-5 relative h-[58px]">
            <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Company Type*
            </label>
            <select className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10 appearance-none">
              <option value="">Partnership</option>
              <option value="">Partnership</option>
              <option value="">Partnership</option>
            </select>
            <Image src={downArrow} className="absolute top-6 right-5 z-20" alt="arrow" />
          </div>
          <Input
            label={"Nature of service*"}
            classname={"lg:col-span-6"}
            // error={errors.serviceNature?.message}
            // inputRegister={...register("serviceNature", venuePartnerValidation.serviceNature)}
          />
          <Input
            label={"Pincode*"}
            classname={"lg:col-span-3"}
            // error={errors.pincode?.message}
            // inputRegister={...register("pincode", venuePartnerValidation.pincode)}
          />
          <div className="cursor-pointer flex items-center lg:col-span-3">
            <span className="text-[#1B72E8] text-[14px] font-medium" onClick={handleFetchLocation}>
              Fetch Address
            </span>
          </div>
        </div>

        <div>
          <p className="text-[14px] font-medium">Registered Office Address*</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-6 p-4 border border-slate-400 rounded-lg">
          <Input
            label={"State*"}
            placeholder={"State"}
            classname={"lg:col-span-3"}
            // error={errors.state?.message}
            // inputRegister={...register("state", venuePartnerValidation.state)}
          />

          <Input
            label={"District*"}
            placeholder={"District"}
            classname={"lg:col-span-3"}
            // error={errors.district?.message}
            // inputRegister={...register("district", venuePartnerValidation.district)}
          />

          <Input
            label={"Taluka*"}
            placeholder={"Taluka"}
            classname={"lg:col-span-3"}
            // error={errors.taluka?.message}
            // inputRegister={...register("taluka", venuePartnerValidation.taluka)}
          />

          <Input
            label={"City*"}
            placeholder={"City"}
            classname={"lg:col-span-3"}
            // error={errors.city?.message}
            // inputRegister={...register("city", venuePartnerValidation.city)}
          />

          <Input
            label={"Address Line 1*"}
            placeholder={"Address Line 1"}
            classname={"lg:col-span-12"}
            // error={errors.address?.message}
            // inputRegister={...register("address", venuePartnerValidation.address)}
          />

          <Input
            label={"Address Line 2*"}
            placeholder={"Address Line 2"}
            classname={"lg:col-span-12"}
            // error={errors.address?.message}
            // inputRegister={...register("address", venuePartnerValidation.address)}
          />
        </div>

        <div className="flex gap-[24px]">
          <p className="text-[14px] font-medium">Billing Address</p>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="cursor-pointer appearance-none w-[18px] h-[18px] border-2 border-[#1B72E8] rounded-sm checked:bg-blue-800"
            />
            <label className="text-[14px] font-medium text-[#1B72E8]">
              Copy Registered Office Address
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-6  p-4 border border-slate-400 rounded-lg">
          <Input
            label={"State*"}
            placeholder={"State"}
            classname={"lg:col-span-3"}
            // error={errors.district?.message}
            // inputRegister={...register("district", venuePartnerValidation.district)}
          />

          <Input
            label={"District*"}
            placeholder={"District"}
            classname={"lg:col-span-3"}
            // error={errors.district?.message}
            // inputRegister={...register("district", venuePartnerValidation.district)}
          />

          <Input
            label={"Taluka*"}
            placeholder={"Taluka"}
            classname={"lg:col-span-3"}
            // error={errors.taluka?.message}
            // inputRegister={...register("taluka", venuePartnerValidation.taluka)}
          />

          <Input
            label={"City*"}
            placeholder={"City"}
            classname={"lg:col-span-3"}
            // error={errors.city?.message}
            // inputRegister={...register("city", venuePartnerValidation.city)}
          />

          <Input
            label={"Address Line 1*"}
            placeholder={"Address Line 1"}
            classname={"lg:col-span-12"}
            // error={errors.address?.message}
            // inputRegister={...register("address", venuePartnerValidation.address)}
          />

          <Input
            label={"Address Line 2*"}
            placeholder={"Address Line 2"}
            classname={"lg:col-span-12"}
            // error={errors.address?.message}
            // inputRegister={...register("address", venuePartnerValidation.address)}
          />
        </div>

        <div>
          <p className="text-[14px] font-medium">Contact Person</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-6  p-4 border border-slate-400 rounded-lg">
          <Input
            label={"Name*"}
            placeholder={"Name"}
            classname={"lg:col-span-12"}
            // error={errors.name?.message}
            // inputRegister={...register("name", venuePartnerValidation.name)}
          />

          <Input
            label={"Email ID*"}
            placeholder={"Email ID"}
            classname={"lg:col-span-6"}
            // error={errors.email?.message}
            // inputRegister={...register("email", venuePartnerValidation.email)}
          />

          <Input
            label={"Mobile Number*"}
            placeholder={"Mobile Number"}
            classname={"lg:col-span-6"}
            // error={errors.pancard?.message}
            // inputRegister={...register("pancard", venuePartnerValidation.pancard)}
          />
        </div>

        <div>
          <p className="text-[14px] font-medium">Name Of The Owner</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-6  p-4 border border-slate-400 rounded-lg">
          <Input
            label={"Name*"}
            placeholder={"Name"}
            classname={"lg:col-span-12"}
            // error={errors.name?.message}
            // inputRegister={...register("name", venuePartnerValidation.name)}
          />

          <Input
            label={"Email ID*"}
            placeholder={"Email ID"}
            classname={"lg:col-span-6"}
            // error={errors.email?.message}
            // inputRegister={...register("email", venuePartnerValidation.email)}
          />

          <Input
            label={"Mobile Number*"}
            placeholder={"Mobile Number"}
            classname={"lg:col-span-6"}
            // error={errors.mobile?.message}
            // inputRegister={...register("mobile", venuePartnerValidation.mobile)}
          />
        </div>

        <div>
          <p className="text-[14px] font-medium">Company Details</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-6  p-4 border border-slate-400 rounded-lg">
          <Input
            label={"PAN No.*"}
            placeholder={"PAN No."}
            classname={"lg:col-span-6"}
            // error={errors.pancard?.message}
            // inputRegister={...register("pancard", venuePartnerValidation.pancard)}
          />

          <Input
            label={"Aadhar No.*"}
            placeholder={"Aadhar No."}
            classname={"lg:col-span-6"}
            // error={errors.aadhar?.message}
            // inputRegister={...register("aadhar", venuePartnerValidation.aadhar)}
          />

          <Input
            label={"GST No.*"}
            placeholder={"GST No."}
            classname={"lg:col-span-6"}
            // error={errors.gst?.message}
            // inputRegister={...register("gst", venuePartnerValidation.gst)}
          />

          <Input
            label={"MSME Registration Number*"}
            placeholder={"MSME Registration Number"}
            classname={"lg:col-span-6"}
            // error={errors.msme?.message}
            // inputRegister={...register("msme", venuePartnerValidation.msme)}
          />
        </div>

        <div>
          <p className="text-[14px] font-medium">Bank Details</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-6  p-4 border border-slate-400 rounded-lg">
          <Input
            label={"Bank Name*"}
            placeholder={"Bank Name"}
            classname={"lg:col-span-6"}
            // error={errors.name?.message}
            // inputRegister={...register("name", venuePartnerValidation.name)}
          />

          <Input
            label={"Account Number*"}
            placeholder={"Account Number"}
            classname={"lg:col-span-6"}
            // error={errors.bankAcc?.message}
            // inputRegister={...register("bankAcc", venuePartnerValidation.bankAcc)}
          />

          <Input
            label={"Branch*"}
            placeholder={"Branch"}
            classname={"lg:col-span-6"}
            // error={errors.name?.message}
            // inputRegister={...register("name", venuePartnerValidation.name)}
          />

          <Input
            label={"IFSC Code*"}
            placeholder={"IFSC Code"}
            classname={"lg:col-span-6"}
            // error={errors.ifsc?.message}
            // inputRegister={...register("ifsc", venuePartnerValidation.ifsc)}
          />

          <Input
            label={"Address*"}
            placeholder={"Address"}
            classname={"lg:col-span-12"}
            // error={errors.address?.message}
            // inputRegister={...register("address", venuePartnerValidation.address)}
          />
        </div>
      </form>
    </div>
  );
};

export default AddNewVendorPage;
