"use client";
import React, { useState } from "react";
import Form from "../_components/dashboard/form/Form";

const CenterPage = () => {
  const [formStep, setFormStep] = useState(1);
  const [addLab, setAddLab] = useState(["Lab 1", "Lab 2", "Lab 3"]);

  const incrementStep = () => {
    setFormStep((step) => step + 1);
  };

  const decrimentStep = () => {
    setFormStep((step) => step - 1);
  };
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <p className="text-[20px] font-medium">Add Center</p>
        <div className="flex gap-4">
          {formStep === 1 ? (
            <button
              onClick={incrementStep}
              className="px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px]"
            >
              Next
            </button>
          ) : (
            <>
              <button
                onClick={decrimentStep}
                className="px-[24px] py-[12px] bg-white uppercase text-[14px] font-medium rounded-[40px]"
              >
                Back
              </button>
              <button
                onClick={incrementStep}
                className="px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px]"
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="bg-white p-[30px] rounded-md ring-1 ring-gray-300 h-max lg:w-max">
          <ol className="max-h-max flex flex-col gap-[50px] relative border-s-2 border-gray-400 uppercase">
            <li
              onClick={() => setFormStep(1)}
              className="cursor-pointer ms-6 flex items-center"
            >
              <span
                className={`absolute flex items-center justify-center w-8 h-8 ${
                  formStep === 1
                    ? "bg-[#864F20] text-white"
                    : "ring-1 ring-gray-400 text-[#864F20] bg-white"
                } rounded-full -start-4`}
              >
                1
              </span>
              <h3
                className={`font-medium lg:block ${
                  formStep === 1 ? "text-[#864F20]" : "text-gray-400"
                } `}
              >
                {" "}
                Center details
              </h3>
            </li>
            <li
              onClick={() => setFormStep(2)}
              className="cursor-pointer ms-6 flex items-center"
            >
              <span
                className={`absolute flex items-center justify-center w-8 h-8 ${
                  formStep === 2
                    ? "bg-[#864F20] text-white"
                    : "ring-1 ring-gray-400 text-[#864F20] bg-white"
                } rounded-full -start-4`}
              >
                2
              </span>
              <h3
                className={`font-medium lg:block ${
                  formStep === 2 ? "text-[#864F20]" : "text-gray-400"
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
                className={`absolute flex items-center justify-center w-8 h-8 ${
                  formStep === 3
                    ? "bg-[#864F20] text-white"
                    : "ring-1 ring-gray-400 text-[#864F20] bg-white"
                } rounded-full -start-4`}
              >
                3
              </span>
              <h3
                className={`font-medium lg:block ${
                  formStep === 3 ? "text-[#864F20]" : "text-gray-400"
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
                className={`absolute flex items-center justify-center w-8 h-8 ${
                  formStep === 4
                    ? "bg-[#864F20] text-white"
                    : "ring-1 ring-gray-400 text-[#864F20] bg-white"
                } rounded-full -start-4`}
              >
                4
              </span>
              <h3
                className={`font-medium lg:block ${
                  formStep === 4 ? "text-[#864F20]" : "text-gray-400"
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
                className={`absolute flex items-center justify-center w-8 h-8 ${
                  formStep === 5
                    ? "bg-[#864F20] text-white"
                    : "ring-1 ring-gray-400 text-[#864F20] bg-white"
                } rounded-full -start-4`}
              >
                5
              </span>
              <h3
                className={`font-medium lg:block ${
                  formStep === 5 ? "text-[#864F20]" : "text-gray-400"
                } `}
              >
                Lab details
              </h3>
            </li>
          </ol>
          {formStep === 5 ? (
            <>
              {addLab.map((lab, i) => {
                return (
                  <p
                    key={i}
                    className={`ms-5 mt-5 font-medium lg:block ${
                      formStep === 5 ? "text-[#864F20]" : "text-gray-400"
                    } `}
                  >
                    {lab}
                  </p>
                );
              })}
            </>
          ) : (
            ""
          )}
          <button className="text-green-400 ms-5 mt-5 font-medium">
            Add Lab +
          </button>
        </div>

        <div className="w-full">
          <Form
            data={{ formStep, setFormStep, incrementStep, decrimentStep }}
          />
        </div>
      </div>
    </>
  );
};

export default CenterPage;
