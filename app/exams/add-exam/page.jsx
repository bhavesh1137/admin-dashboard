"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Papa from "papaparse";
import Link from "next/link";
import fileImg from "../../assets/icons/file.png";
import Image from "next/image";
import Input from "../../_components/input/Input";
import { ClipLoader } from "react-spinners";

const ExamPage = () => {
  const [isFileUpload, setFileUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [csvData, setCSVData] = useState([]);
  const initialFormValues = {
    examName: "",
    startDate: "",
    endDate: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: initialFormValues });

  useEffect(() => {
    watch((value) => {
      if (value.file) {
        const file = value.file[0];
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
      }
    });
  }, [watch]);

  const handlexamForm = (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handlexamForm)}
      >
        <div className="flex items-center justify-between gap-4 flex-col sm:flex-row ">
          <p className="text-[20px] font-medium">Exam Management</p>
          <div className="flex gap-4">
            <Link href={"/exams"}>
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
              Save
              {loading ? (
                <ClipLoader color="#ffffff" loading={loading} size={20} />
              ) : (
                ""
              )}
            </button>
          </div>
        </div>

        <div className="p-4 bg-white border border-slate-400 rounded-lg flex flex-col gap-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
            <Input
              label={"Exam Name*"}
              classname={"lg:col-span-12"}
              inputRegister={register("examName", {
                required: true,
                minLength: 3,
              })}
              error={errors.examName ? "Exam name required" : ""}
            />

            <div className={`${"md:col-span-2"}`}>
              <div className=" flex flex-col gap-4">
                <label className="block text-[14px] leading-[16px] font-medium bg-white tracking-wide">
                  Exam Start Date
                </label>
                <input
                  className="w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[#212121] rounded-[8px] font-normal"
                  type="date"
                  {...register("startDate", { required: true })}
                />
              </div>
              <p className="text-red-500 text-[12px]">
                {errors.startDate ? "Start Date is required" : ""}
              </p>
            </div>

            <div className={`${"md:col-span-2"}`}>
              <div className=" flex flex-col gap-4">
                <label className="block text-[14px] leading-[16px] font-medium bg-white tracking-wide">
                  Exam End Date
                </label>
                <input
                  className="w-full bg-none border border-[#A3A3A3] outline-none p-4 text-[16px] leading-[24px] text-[#212121] rounded-[8px] font-normal"
                  type="date"
                  {...register("endDate", { required: true })}
                />
              </div>
              <p className="text-red-500 text-[12px]">
                {errors.endDate ? "End Date is required" : ""}
              </p>
            </div>
          </div>

          {isFileUpload ? (
            <>
              <div className="flex justify-between items-center">
                <p className="text-[14px] font-medium">City & Candidates</p>
                <button
                  onClick={() => setFileUpload(!isFileUpload)}
                  className="px-[24px] py-[12px] border-2 border-[#AE0005] text-[#AE0005] uppercase text-[14px] font-medium rounded-[40px]"
                >
                  Reupload Exam Details File
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-[14px] font-medium">Exam details</p>
            </>
          )}

          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className={`${
                isFileUpload ? "hidden" : "flex"
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
                {...register("file", {
                  required:
                    "Invalid file format. Only PDF/CSV files are allowed.",
                  validate: (value) => {
                    const acceptedFormats = ["csv", "pdf"];
                    const fileExtension = value[0]?.name
                      .split(".")
                      .pop()
                      .toLowerCase();
                    if (!acceptedFormats.includes(fileExtension)) {
                      return "Invalid file format. Only PDF/CSV files are allowed.";
                    }
                    return true;
                  },
                })}
              />
            </label>
          </div>
          <p className="text-red-400 text-[12px]">
            {errors.file ? errors.file.message : ""}
          </p>

          <div
            className={`${
              isFileUpload ? "flex" : "hidden"
            } flex-col gap-[24px]`}
          >
            <div className="p-4 bg-white border border-slate-400 rounded-lg grid gap-x-8 md:grid-cols-2 lg:grid-cols-12 cursor-pointer">
              <div className="md:col-span-12">
                <div className="flex justify-between capitalize text-[#864F20] font-medium ">
                  <p className="text-[16px] font-medium flex-1 ">State</p>
                  <p className="text-[16px] font-medium flex-1 ">District</p>
                  <p className="text-[16px] font-medium flex-1 ">City</p>
                  <p className="text-[16px] font-medium flex-1 text-center ">
                    Candidates
                  </p>
                </div>
              </div>

              {csvData &&
                csvData.map((data, index) => {
                  return (
                    <div className="md:col-span-12" key={index}>
                      <div className="flex justify-between">
                        <p className="text-[16px] text-left flex-1 text-[rgba(0,0,0,0.8)]">
                          {data.State}
                        </p>
                        <p className="text-[16px] text-left flex-1 text-[rgba(0,0,0,0.8)]">
                          {data.District}
                        </p>
                        <p className="text-[16px] text-left flex-1 text-[rgba(0,0,0,0.8)]">
                          {data.City}
                        </p>
                        <p className="text-[16px] text-center flex-1 text-[rgba(0,0,0,0.8)]">
                          {data.Candidates}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ExamPage;
