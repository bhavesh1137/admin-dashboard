"use client"
import React, { useState } from 'react'
import LabForm1 from './LabForm1'
import LabForm2 from './LabForm2'
import LabForm3 from './LabForm3'
import LabForm4 from './LabForm4'


const Form5 = () => {
    const [labStep, setLabStep] = useState(1)

    return (
        <>
            <form className="p-4 bg-white border border-slate-400 rounded-lg flex flex-col gap-[24px]">
                <h1 className="text-[20px] font-medium">Lab Details</h1>

                <ol className="w-full flex justify-center items-start gap-4 md:gap-0 md:items-center flex-col md:flex-row text-[#AE0005] text-center sm:text-base">
                    <li onClick={() => setLabStep(1)} className={`text-[12px] flex justify-center items-center after:hidden md:after:content-[''] after:w-[30px] after:h-1 after:border-b after:border-gray-200 after:border-1 sm:after:inline-block after:mx-2 xl:after:mx-2`}>
                        <span className={`cursor-pointer p-2 md:p-1 md:ps-4 rounded-md flex items-center  ${labStep === 1 ? " bg-[#AE0005] text-white" : "bg-white ring-1 ring-[#AE0005]"} after:mx-2 after:text-gray-200`}>
                            Preliminary Details
                        </span>
                    </li>
                    <li onClick={() => setLabStep(2)} className={`text-[12px] flex items-center after:hidden md:after:content-[''] after:w-[30px] after:h-1 after:border-b after:border-gray-200 after:border-1 sm:after:inline-block after:mx-2 xl:after:mx-2`}>
                        <span className={`cursor-pointer p-2 md:p-1 md:ps-4 rounded-md flex items-center ${labStep === 2 ? " bg-[#AE0005] text-white" : "bg-white ring-1 ring-[#AE0005]"} after:mx-2 after:text-gray-200`}>
                            Surveillance Details
                        </span>
                    </li>
                    <li onClick={() => setLabStep(3)} className={`text-[12px] flex items-center after:hidden md:after:content-[''] after:w-[30px] after:h-1 after:border-b after:border-gray-200 after:border-1 sm:after:inline-block after:mx-2 xl:after:mx-2`}>
                        <span className={`cursor-pointer p-2 md:p-1 md:ps-4 rounded-md flex items-center  ${labStep === 3 ? " bg-[#AE0005] text-white" : "bg-white ring-1 ring-[#AE0005]"} after:mx-2 after:text-gray-200`}>
                            Network Details
                        </span>
                    </li>
                    <li onClick={() => setLabStep(4)} className={`text-[12px] flex items-center`}>
                        <span className={`cursor-pointer p-2 md:p-1 rounded-md ${labStep === 4 ? " bg-[#AE0005] text-white" : "bg-white ring-1 ring-[#AE0005]"}`}>
                            Computer / System Details
                        </span>
                    </li>
                </ol>
                <LabForm data={labStep} />
            </form>
        </>
    )
}



const LabForm = ({ data }) => {

    switch (data) {
        case 1:
            return <LabForm1 />
        case 2:
            return <LabForm2 />
        case 3:
            return <LabForm3 />
        case 4:
            return <LabForm4 />
        default:
            return null
    }
}

export default Form5