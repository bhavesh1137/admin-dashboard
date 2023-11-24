"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import fileImg from "../../assets/icons/file.png";
import Image from "next/image";
import Papa from "papaparse";

//React Hook Form
import { useForm } from "react-hook-form";
// import { examValidation } from '../../helpers/validations/schema/exam'
//Input Component
import Input from "../../_components/input/Input";
import Date from "@/app/_components/date/Input";

const ExamPage = () => {

  // const form = useForm({ defaultValues: {} })
  // const { register, handleSubmit, formState, watch } = form;
  // const { errors } = formState;
  const [isFileUpload, setFileUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [csvData, setCSVData] = useState([]);

  // useEffect(() => {
  //   watch((value) => {

  //   })
  // }, [watch])

  // const handlexamForm = (data) => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     console.log(data);
  //     setLoading(false)
  //   }, 2000);
  // };

  const handleFile = (e) => {
    const file = e.target.files[0];
    // if (value.file) {
      // const file = value.file[0];
      if (file) {
        Papa.parse(file, {
          header: true,
          complete: (results) => {
            setCSVData(results.data);
          },
          error: (err, file) => {
            console.error("Error occurred while parsing", err, file);
          },
        });
        setSelectedFile(file);
        setTimeout(() => {
          setFileUpload(!isFileUpload);
        }, 2000);
      }
      // console.log(value.file);
    // }
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4 flex-col sm:flex-row ">
          <p className="text-[20px] font-medium">Exam Management</p>
          <div className="flex gap-4">
            <Link href={"/exams"}>
              <button className="px-[24px] py-[12px] bg-white uppercase text-[14px] font-medium rounded-[40px] border-2 border-slate-300">
                Cancel
              </button>
            </Link>
            <button
              className="px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px]"
            // onClick={handleSubmit(handlexamForm)}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>

        <form className="p-4 bg-white border border-slate-400 rounded-lg flex flex-col gap-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
            <Input
              label={"Exam Name*"}
              classname={"lg:col-span-12"}
            // error={errors.examName?.message}
            // inputRegister={...register("examName", examValidation.examName)}
            />

            <Date
              label={"Start Date*"}
              classname={"lg:col-span-6"}
            // error={errors.startDate?.message}
            // inputRegister={...register("startDate", examValidation.startDate)}
            />
            <Date
              label={"End Date*"}
              classname={"lg:col-span-6"}
            // error={errors.endDate?.message}
            // inputRegister={...register("endDate", examValidation.endDate)}
            />
          </div>

          {
            isFileUpload
              ? (<>
                <div className="flex justify-between items-center">
                  <p className="text-[14px] font-medium">City & Candidates</p>
                  <button
                    onClick={() => setFileUpload(!isFileUpload)}
                    className="px-[24px] py-[12px] border-2 border-[#AE0005] text-[#AE0005] uppercase text-[14px] font-medium rounded-[40px]"
                  >
                    Reupload Exam Details File
                  </button>
                </div>
              </>)
              : (<>
                <p className="text-[14px] font-medium">Exam details</p>
              </>)
          }

          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className={`${isFileUpload ? "hidden" : "flex"
                } flex-col items-center justify-center w-full p-[32px] border-2 border-[#864F20] border-dashed rounded-2xl cursor-pointer`}
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <Image src={fileImg} alt="fileImg" />
                {selectedFile && (
                  <p className="flex gap-2">
                    {selectedFile.name}
                    <span
                      onClick={() => {
                        setSelectedFile(null);
                      }}
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      Clear
                    </span>
                  </p>
                )}
                <p className="text-[16px] font-normal text-[#864F20] flex gap-2">
                  Drag and drop a file or
                  <span className="underline">browse file</span>
                </p>
                <p className="text-[14px] font-normal text-[#C2A78F] italic tracking-[0.3px]">
                  (Supported Only .pdf, .cSV File )
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                accept=".csv, .pdf"
                className="hidden"
                onChange={(e) => handleFile(e)}
              // {...register("file", examValidation.file)}
              />
            </label>
          </div>
          {/* {errors.file?.message && <p className="text-red-400 text-[12px]">{errors.file?.message}</p>} */}

          <div className={`${isFileUpload ? "flex" : "hidden"} flex-col gap-[24px]`}>
            <div className="p-4 bg-white border border-slate-400 rounded-lg grid gap-x-8 md:grid-cols-2 lg:grid-cols-12 cursor-pointer">
              <div className="lg:col-span-6">
                <div className="flex justify-between capitalize">
                  <p className="text-[14px] font-medium flex-1">State</p>
                  <p className="text-[14px] font-medium flex-1">District</p>
                  <p className="text-[14px] font-medium flex-1">City</p>
                  <p className="text-[14px] font-medium flex-1 text-center">Candidates</p>
                </div>
              </div>
              <div className="lg:col-span-6 hidden md:block">
                <div className="flex justify-between capitalize">
                  <p className="text-[14px] font-medium flex-1">State</p>
                  <p className="text-[14px] font-medium flex-1">District</p>
                  <p className="text-[14px] font-medium flex-1">City</p>
                  <p className="text-[14px] font-medium text-center flex-1">Candidates</p>
                </div>
              </div>

              {csvData &&
                csvData.map((data, index) => {
                  return (
                    <div className="lg:col-span-6" key={index}>
                      <div className="flex justify-between">
                        <p className="text-[16px] text-[0.0.0.87] text-left flex-1">{data.State}</p>
                        <p className="text-[16px] text-[0.0.0.87] text-left flex-1">{data.District}</p>
                        <p className="text-[16px] text-[0.0.0.87] text-left flex-1">{data.City}</p>
                        <p className="text-[16px] text-[0.0.0.87] text-center flex-1">{data.Candidates}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </form>

      </div>
    </>
  );
};

export default ExamPage;
