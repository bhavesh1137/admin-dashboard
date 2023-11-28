"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CenterDetailsForm from "../../_components/form/CenterDetailsForm";
import InfrastructureDetailsForm from "../../_components/form/InfrastructureDetailsForm";
import SafteyDetailsForm from "../../_components/form/SafteyDetailsForm";
import PowerBackupForm from "../../_components/form/PowerBackupForm";
import LabDetailsForm from "../../_components/form/LabDetailsForm";
import CenterAvailabilityForm from "@/app/_components/form/CenterAvailabilityForm";
import { ClipLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

const CenterPage = () => {
  const steps = 6;
  const [formStep, setFormStep] = useState(1);
  const [addLab, setAddLab] = useState(["Lab 001"]);
  const [loading, setLoading] = useState(false);
  const initialFormValues = {}
  const searchParams = useSearchParams()
  const auditor = searchParams.get('auditor')
  console.log(auditor);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialFormValues });


  const handleCenterForm = (data) => {
    console.log("Submitting...");
    setLoading(true)
    setTimeout(() => {
      console.log(data);
      setLoading(false)
      next()
    }, 2000);
  };

  const next = () => {
    if (formStep < steps) {
      setFormStep((step) => step + 1);
    }
  };

  const previous = () => {
    if (formStep > 0) {
      setFormStep((step) => step - 1);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleCenterForm)} className="h-full on-scrollbar p-[16px]">
      <div className="flex items-center justify-between w-full mb-[24px]">
        <p className="text-[20px] font-medium">Add Center</p>
        <div className="flex gap-4">
          {formStep === 1 ? (
            <button
              className="flex items-center gap-[6px] px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px]"
              type="submit"
            >
              Next
              {loading ? (
                <ClipLoader color="#ffffff" loading={loading} size={20} />
              ) : (
                ''
              )}
            </button>
          ) : (
            <>
              <button
                onClick={previous}
                className="px-[24px] py-[12px] bg-white uppercase text-[14px] font-medium rounded-[40px]"
                type="button">
                Back
              </button>
              <button
                className="flex items-center gap-[6px] px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px]"
                type="submit"
              >
                {formStep === 6 ? "Submit" : "Next"}
                {loading ? (
                  <ClipLoader color="#ffffff" loading={loading} size={20} />
                ) : (
                  ''
                )}
              </button>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="bg-white p-[16px] rounded-md ring-1 ring-gray-300 h-max lg:w-max">
          <ol className="ms-[16px] max-h-max w-max flex flex-col gap-[48px] relative border-s-2 border-gray-400 uppercase">
            <li
              onClick={() => setFormStep(1)}
              className="cursor-pointer ms-6 flex items-center"
            >
              <span
                className={`absolute flex items-center justify-center w-8 h-8 ${formStep === 1
                  ? "bg-[#864F20] text-white"
                  : "ring-1 ring-gray-400 text-[#864F20] bg-white"
                  } rounded-full -start-4`}
              >
                1
              </span>
              <h3
                className={`font-medium lg:block ${formStep === 1 ? "text-[#864F20]" : "text-gray-400"
                  } `}
              >
                Center details
              </h3>
            </li>
            <li
              onClick={() => setFormStep(2)}
              className="cursor-pointer ms-6 flex items-center"
            >
              <span
                className={`absolute flex items-center justify-center w-8 h-8 ${formStep === 2
                  ? "bg-[#864F20] text-white"
                  : "ring-1 ring-gray-400 text-[#864F20] bg-white"
                  } rounded-full -start-4`}
              >
                2
              </span>
              <h3
                className={`font-medium lg:block text-[#864F20] ${formStep === 2 ? "text-[#864F20]" : "text-gray-400"
                  } `}
              >
                Infrastructure details
              </h3>
            </li>
            <li
              onClick={() => setFormStep(3)}
              className="cursor-pointer ms-6 flex items-center"
            >
              <span
                className={`absolute flex items-center justify-center w-8 h-8 ${formStep === 3
                  ? "bg-[#864F20] text-white"
                  : "ring-1 ring-gray-400 text-[#864F20] bg-white"
                  } rounded-full -start-4`}
              >
                3
              </span>
              <h3
                className={`font-medium lg:block ${formStep === 3 ? "text-[#864F20]" : "text-gray-400"
                  } `}
              >
                Saftey details
              </h3>
            </li>
            <li
              onClick={() => setFormStep(4)}
              className="cursor-pointer ms-6 flex items-center"
            >
              <span
                className={`absolute flex items-center justify-center w-8 h-8 ${formStep === 4
                  ? "bg-[#864F20] text-white"
                  : "ring-1 ring-gray-400 text-[#864F20] bg-white"
                  } rounded-full -start-4`}
              >
                4
              </span>
              <h3
                className={`font-medium lg:block ${formStep === 4 ? "text-[#864F20]" : "text-gray-400"
                  } `}
              >
                Power backup details
              </h3>
            </li>
            <li
              onClick={() => setFormStep(5)}
              className="cursor-pointer ms-6 flex items-center"
            >
              <span
                className={`absolute flex items-center justify-center w-8 h-8 ${formStep === 5
                  ? "bg-[#864F20] text-white"
                  : "ring-1 ring-gray-400 text-[#864F20] bg-white"
                  } rounded-full -start-4`}
              >
                5
              </span>
              <h3
                className={`font-medium lg:block ${formStep === 5 ? "text-[#864F20]" : "text-gray-400"
                  } `}
              >
                Lab details
              </h3>

            </li>
            {formStep === 5 ? (
              <>
                {
                  addLab.map((lab, i) => {
                    return (
                      <p
                        key={i}
                        className={`relative -mt-[30px] ps-2 ms-[16px] before:content-[''] before:absolute before:h-[2px] before:rounded-full before:w-[20px] before:bg-[#864F20] before:top-1/2 before:-left-[17px] block font-medium lg:block text-[#864F20]`}
                      >
                        {lab}
                      </p>
                    );
                  })
                }
              </>
            ) : (
              ""
            )}
            {auditor !== "true" && (<li
              onClick={() => setFormStep(6)}
              className="cursor-pointer ms-6 flex items-center"
            >
              <span
                className={`absolute flex items-center justify-center w-8 h-8 ${formStep === 6
                  ? "bg-[#864F20] text-white"
                  : "ring-1 ring-gray-400 text-[#864F20] bg-white"
                  } rounded-full -start-4 bottom-0`}
              >
                6
              </span>
              <h3
                className={`font-medium lg:block ${formStep === 6 ? "text-[#864F20]" : "text-gray-400"
                  } `}
              >
                Center Availability
              </h3>
            </li>)}
          </ol>

          {/* <button
            onClick={() => {
              setAddLab((prev) => [
                ...prev,
                "Lab 00" + parseInt(prev.length + 1),
              ]);
            }}
            className="text-green-400 ms-5 mt-5 font-medium"
          >
            Add Lab +
          </button> */}
        </div>

        <div className="h-screen bottom-[16px] no-scrollbar overflow-scroll rounded-lg w-full">
          {formStep === 1 && <CenterDetailsForm register={register} errors={errors} />}
          {formStep === 2 && <InfrastructureDetailsForm register={register} errors={errors} />}
          {formStep === 3 && <SafteyDetailsForm register={register} errors={errors} />}
          {formStep === 4 && <PowerBackupForm register={register} errors={errors} />}
          {formStep === 5 && <LabDetailsForm register={register} errors={errors} />}
          {(formStep === 6 && auditor !== "true") && <CenterAvailabilityForm register={register} errors={errors} />}
        </div>
      </div >
    </form>
  );
};

export default CenterPage;
