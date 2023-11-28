"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import Input from "../../_components/input/Input";
import downArrow from "../../assets/icons/VectordownArrow.svg";
import { ClipLoader } from "react-spinners";
import File from "../../_components/file-input/File";
import Navbar from "@/app/_components/navbar/Navbar";

const AddNewVendorPage = () => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const initialFormValues = {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialFormValues });

  const handleVenuePartnerForm = (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      setLoading(false);
    }, 2000);
  };

  const handleFetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(longitude, latitude);
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting geolocation:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  };

  return (
    <form
      className="flex flex-col px-4 pb-4 relative"
      onSubmit={handleSubmit(handleVenuePartnerForm)}
    >
      <div className="flex flex-col gap-4 sticky top-[0] py-4 z-40 bg-[#FBF5F2]">
        <Navbar />
        <div className="flex items-center justify-between ">
          <p className="text-[20px]">
            Venue Partner / <span className="font-medium">Add New Partner</span>
          </p>
          <div className="flex gap-4">
            <Link href={"./"}>
              <button
                className="px-[24px] py-[12px] bg-white uppercase text-[14px] font-medium rounded-[40px] border-2 border-slate-300"
                type="button"
              >
                Cancel
              </button>
            </Link>
            <button
              className="flex items-center gap-2 px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px]"
              type="submit"
            >
              save
              {loading ? (
                <ClipLoader color="#ffffff" loading={loading} size={20} />
              ) : (
                ""
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border border-slate-400 rounded-lg flex flex-col gap-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
          <Input
            label={"Vendor Name*"}
            classname={"lg:col-span-7"}
            inputRegister={register("vendorName", {
              required: true,
              minLength: 3,
            })}
            error={errors.vendorName ? "Vendor name required" : ""}
          />

          <div className="lg:col-span-5 relative h-[58px]">
            <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Company Type*
            </label>
            <select
              {...register("companyType", {
                required: true,
              })}
              className="top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10 appearance-none"
            >
              <option value="1">1</option>
              <option value="2">Partnership</option>
              <option value="3">Partnership</option>
            </select>
            <Image
              src={downArrow}
              className="absolute top-6 right-5 z-20"
              alt="arrow"
            />
            {errors && errors.companyType && (
              <p className="bottom-6 text-red-500 text-[12px]">
                {"Company Type is Required"}
              </p>
            )}
          </div>

          <Input
            label={"Nature of Service*"}
            classname={"lg:col-span-6"}
            inputRegister={register("natureOfService", {
              required: true,
            })}
            error={errors.natureOfService ? "Required" : ""}
          />

          <Input
            label={"Pin Code*"}
            classname={"lg:col-span-3"}
            inputRegister={register("Pincode", {
              required: true,
            })}
            error={errors.natureOfService ? "Required" : ""}
          />
          <div className="cursor-pointer flex items-center lg:col-span-3">
            <span
              className="text-[#1B72E8] text-[14px] font-medium"
              onClick={handleFetchLocation}
            >
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
            inputRegister={register("registeredOfficeState", {
              required: true,
            })}
            error={errors.registeredOfficeState ? "Required" : ""}
          />

          <Input
            label={"District*"}
            placeholder={"District"}
            classname={"lg:col-span-3"}
            inputRegister={register("registeredOfficeDistrict", {
              required: true,
            })}
            error={errors.registeredOfficeDistrict ? "Required" : ""}
          />

          <Input
            label={"Taluka*"}
            placeholder={"Taluka"}
            classname={"lg:col-span-3"}
            inputRegister={register("registeredOfficeTaluka", {
              required: true,
            })}
            error={errors.registeredOfficeTaluka ? "Required" : ""}
          />

          <Input
            label={"City*"}
            placeholder={"City"}
            classname={"lg:col-span-3"}
            inputRegister={register("registeredOfficeCity", {
              required: true,
            })}
            error={errors.registeredOfficeCity ? "Required" : ""}
          />

          <Input
            label={"Address Line 1*"}
            placeholder={"Address Line 1"}
            classname={"lg:col-span-12"}
            inputRegister={register("registeredOfficeAdd_1", {
              required: true,
            })}
            error={errors.registeredOfficeAdd_1 ? "Required" : ""}
          />

          <Input
            label={"Address Line 2*"}
            placeholder={"Address Line 2"}
            classname={"lg:col-span-12"}
            inputRegister={register("registeredOfficeAdd_2", {
              required: true,
            })}
            error={errors.registeredOfficeAdd_2 ? "Required" : ""}
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
            inputRegister={register("billingState", {
              required: true,
            })}
            error={errors.billingState ? "Required" : ""}
          />

          <Input
            label={"District*"}
            placeholder={"District"}
            classname={"lg:col-span-3"}
            inputRegister={register("billingDistrict", {
              required: true,
            })}
            error={errors.billingDistrict ? "Required" : ""}
          />

          <Input
            label={"Taluka*"}
            placeholder={"Taluka"}
            classname={"lg:col-span-3"}
            inputRegister={register("billingTaluka", {
              required: true,
            })}
            error={errors.billingTaluka ? "Required" : ""}
          />

          <Input
            label={"City*"}
            placeholder={"City"}
            classname={"lg:col-span-3"}
            inputRegister={register("billingCity", {
              required: true,
            })}
            error={errors.billingCity ? "Required" : ""}
          />

          <Input
            label={"Address Line 1*"}
            placeholder={"Address Line 1"}
            classname={"lg:col-span-12"}
            inputRegister={register("billingAddress_1", {
              required: true,
            })}
            error={errors.billingAddress_1 ? "Address is Required" : ""}
          />

          <Input
            label={"Address Line 2*"}
            placeholder={"Address Line 2"}
            classname={"lg:col-span-12"}
            inputRegister={register("billingAddress_2", {
              required: true,
            })}
            error={errors.billingAddress_2 ? "Address is Required" : ""}
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
            inputRegister={register("contactPersonName", {
              required: true,
            })}
            error={errors.contactPersonName ? "Name is Required" : ""}
          />

          <Input
            label={"Email ID*"}
            placeholder={"Email ID"}
            classname={"lg:col-span-6"}
            inputRegister={register("contactPersonEmailID", {
              required: true,
            })}
            error={
              errors.contactPersonEmailID
                ? "Contact Person Email is Required"
                : ""
            }
          />

          <Input
            label={"Mobile Number*"}
            placeholder={"Mobile Number"}
            classname={"lg:col-span-6"}
            inputRegister={register("contactPersonMobileNo", {
              required: true,
            })}
            error={
              errors.contactPersonMobileNo
                ? "Contact Person Mobile is Required"
                : ""
            }
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
            inputRegister={register("ownerName", {
              required: true,
            })}
            error={errors.ownerName ? "Nmae is Required" : ""}
          />

          <Input
            label={"Email ID*"}
            placeholder={"Email ID"}
            classname={"lg:col-span-6"}
            inputRegister={register("ownerEmailId", {
              required: true,
            })}
            error={errors.ownerEmailId ? "Owner Email is Required" : ""}
          />

          <Input
            label={"Mobile Number*"}
            placeholder={"Mobile Number"}
            classname={"lg:col-span-6"}
            inputRegister={register("ownerMobileNo", {
              required: true,
            })}
            error={
              errors.ownerMobileNo ? "Owner Mobile Number is Required" : ""
            }
          />
        </div>

        <div>
          <p className="text-[14px] font-medium">Company Details</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-6  p-4 border border-slate-400 rounded-lg">
          <Input
            label={"PAN No."}
            placeholder={"PAN No."}
            classname={"lg:col-span-6"}
            inputRegister={register("companyPan", {
              required: true,
            })}
            error={errors.companyPan ? "Required" : ""}
          />
          <File classname={"lg:col-span-6"} title={"Upload PAN Card Copy*"} />

          <Input
            label={"Aadhar No.*"}
            placeholder={"Aadhar No."}
            classname={"lg:col-span-6"}
            inputRegister={register("companyAadhar", {
              required: true,
            })}
            error={errors.companyAadhar ? "Required" : ""}
          />
          <File
            classname={"lg:col-span-6"}
            title={"Upload Aadhar Card Copy*"}
          />

          <Input
            label={"GST No.*"}
            placeholder={"GST No."}
            classname={"lg:col-span-6"}
            inputRegister={register("gstNo", {
              required: true,
            })}
            error={errors.gstNo ? "GST Number is Required" : ""}
          />
          <File classname={"lg:col-span-6"} title={"Upload GST No.*"} />

          <Input
            label={"MSME Registration Number*"}
            placeholder={"MSME Registration Number"}
            classname={"lg:col-span-6"}
            inputRegister={register("msmeRegNo", {
              required: true,
            })}
            error={
              errors.msmeRegNo ? "MSME Registration Number is Required" : ""
            }
          />
          <File
            classname={"lg:col-span-6"}
            title={"Upload MSME Registration Number*"}
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
            inputRegister={register("bankName", {
              required: true,
            })}
            error={errors.bankName ? "Bank Name is Required" : ""}
          />

          <Input
            label={"Account Number*"}
            placeholder={"Account Number"}
            classname={"lg:col-span-6"}
            inputRegister={register("bankAccNo", {
              required: true,
            })}
            error={errors.bankAccNo ? "Bank Account Number is Required" : ""}
          />

          <Input
            label={"Branch*"}
            placeholder={"Branch"}
            classname={"lg:col-span-6"}
            inputRegister={register("bankBranch", {
              required: true,
            })}
            error={errors.bankBranch ? "Branch is Required" : ""}
          />

          <Input
            label={"IFSC Code*"}
            placeholder={"IFSC Code"}
            classname={"lg:col-span-6"}
            inputRegister={register("ifscCode", {
              required: true,
            })}
            error={errors.ifscCode ? "IFSC Code is Required" : ""}
          />

          <Input
            label={"Address*"}
            placeholder={"Address"}
            classname={"lg:col-span-6"}
            inputRegister={register("bankAddress", {
              required: true,
            })}
            error={errors.bankAddress ? "Address is Required" : ""}
          />
          <File classname={"lg:col-span-6"} title={"Upload Canceled Cheque*"} />
        </div>
      </div>
    </form>
  );
};

export default AddNewVendorPage;
