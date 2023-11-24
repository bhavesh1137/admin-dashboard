// "use client"
// import React, { useState } from 'react'
import Image from 'next/image'
import PriliminaryDetailsForm from './PriliminaryDetailsForm'
import SurveilanceDetailsForm from './SurveilanceDetailsForm'
import NetworkDetailsForm from './NetworkDetailsForm'
import ComputerDetailsForm from './ComputerDetailsForm'
import Arrow from '../../assets/icons/arrow-right.svg'

// const LabDetailsForm = () => {
//     const [labStep, setLabStep] = useState(1)

//     return (
//         <>
//             <h1 className="text-[20px] font-medium">Lab Details</h1>

//             <ol className="w-full flex justify-center items-start gap-4 md:gap-0 md:items-center flex-col md:flex-row text-[#AE0005] text-center sm:text-base">
//                 <li onClick={() => setLabStep(1)} className={`text-[12px] flex justify-center items-center after:hidden md:after:content-[''] after:w-[30px] after:h-1 after:border-b after:border-gray-200 after:border-1 sm:after:inline-block after:mx-2 xl:after:mx-2`}>
//                     <span className={`cursor-pointer p-2 md:p-1 md:ps-4 rounded-md flex items-center  ${labStep === 1 ? " bg-[#AE0005] text-white" : "bg-white ring-1 ring-[#AE0005]"} after:mx-2 after:text-gray-200`}>
//                         Preliminary Details
//                     </span>
//                 </li>
//                 <li onClick={() => setLabStep(2)} className={`text-[12px] flex items-center after:hidden md:after:content-[''] after:w-[30px] after:h-1 after:border-b after:border-gray-200 after:border-1 sm:after:inline-block after:mx-2 xl:after:mx-2`}>
//                     <span className={`cursor-pointer p-2 md:p-1 md:ps-4 rounded-md flex items-center ${labStep === 2 ? " bg-[#AE0005] text-white" : "bg-white ring-1 ring-[#AE0005]"} after:mx-2 after:text-gray-200`}>
//                         Surveillance Details
//                     </span>
//                 </li>
//                 <li onClick={() => setLabStep(3)} className={`text-[12px] flex items-center after:hidden md:after:content-[''] after:w-[30px] after:h-1 after:border-b after:border-gray-200 after:border-1 sm:after:inline-block after:mx-2 xl:after:mx-2`}>
//                     <span className={`cursor-pointer p-2 md:p-1 md:ps-4 rounded-md flex items-center  ${labStep === 3 ? " bg-[#AE0005] text-white" : "bg-white ring-1 ring-[#AE0005]"} after:mx-2 after:text-gray-200`}>
//                         Network Details
//                     </span>
//                 </li>
//                 <li onClick={() => setLabStep(4)} className={`text-[12px] flex items-center`}>
//                     <span className={`cursor-pointer p-2 md:p-1 rounded-md ${labStep === 4 ? " bg-[#AE0005] text-white" : "bg-white ring-1 ring-[#AE0005]"}`}>
//                         Computer / System Details
//                     </span>
//                 </li>
//             </ol>
//             <LabForm data={labStep} />
//         </>
//     )
// }



// const LabForm = ({ data }) => {

//     switch (data) {
//         case 1:
//             return <PriliminaryDetailsForm />
//         case 2:
//             return <SurveilanceDetailsForm />
//         case 3:
//             return <NetworkDetailsForm />
//         case 4:
//             return <ComputerDetailsForm />
//         default:
//             return null
//     }
// }

// export default LabDetailsForm

import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <div className="w-full h-max">
                {items.map((item, index) => (
                    <div key={index} className="accordion h-max w-full">
                        <div className="accordion-item w-full">
                            <h2 className="relative font-medium p-[16px] accordion-header w-full accordion-button cursor-pointer mb-5 transition-all ease-in-out delay-300"
                                onClick={() => toggleAccordion(index)}>
                                {item.title}
                                <Image src={Arrow} alt='arrow' className={`h-[24px] w-[24px] absolute ${openIndex=== index ? "rotate-90" : "rotate-[180]"} right-[16px] top-[16px] text-[#000]`} />
                            </h2>
                            {openIndex === index && (
                                <div className="accordion-content">
                                    {item.title === "Priliminary Details" && <PriliminaryDetailsForm />}
                                    {item.title === "Surveilance Details" && <SurveilanceDetailsForm />}
                                    {item.title === "Network Details" && <NetworkDetailsForm />}
                                    {item.title === "Computer Details" && <ComputerDetailsForm />}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

const LabDetailsForm = () => {
    const accordionData = [
        {
            title: 'Priliminary Details'
        },
        {
            title: 'Surveilance Details'
        },
        {
            title: 'Network Details'
        },
        {
            title: 'Computer Details'
        }
    ];

    return <>
        <div className='flex justify-between items-center p-[16px]'>
            <h1 className="text-[20px] font-medium">Lab Details</h1>
            <p className='text-[14px] font-medium text-[#06C270]'>+ Add Lab</p>
        </div>
        <div>
            <div className='flex justify-between p-[16px] items-center'>
                <h1 className="text-[20px] font-medium uppercase">LAB001</h1>
                <p className='text-[14px] uppercase font-medium text-[#AE0005]'>- Remove Lab</p>
            </div>

            <Accordion items={accordionData} />
        </div>
    </>

};

export default LabDetailsForm;
