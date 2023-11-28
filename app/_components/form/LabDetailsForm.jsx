"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import NetworkDetailsForm from './NetworkDetailsForm'
import PriliminaryDetailsForm from './PriliminaryDetailsForm'
import SurveilanceDetailsForm from './SurveilanceDetailsForm'
import ComputerDetailsForm from './ComputerDetailsForm'
import Add from '../../assets/icons/add.svg'
import Remove from '../../assets/icons/remove.svg'
import DownArrow from '../../assets/icons/down-arrow.svg'
import { useSearchParams } from 'next/navigation';
import Input from '../input/Input';

const Accordion = ({ items, register, errors }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <div className="w-full h-full bg-black">
                {items.map((item, index) => (
                    <div key={index} className="accordion h-max w-full">
                        <div className="accordion-item w-full ">
                            <h2 className="relative font-normal p-[16px] bg-green-400 text-[20px] text-[#864F20] accordion-header w-full accordion-button cursor-pointer"
                                onClick={() => toggleAccordion(index)}>
                                {item.title}
                                <Image src={DownArrow} alt='arrow' className={`h-[24px] w-[24px] absolute ${openIndex === index ? "rotate-180" : "rotate-[180]"} right-[16px] top-[16px] text-[#000]`} />
                            </h2>
                            {openIndex === index && (
                                <div className="accordion-content">
                                    {item.title === "Preliminary Details" && <PriliminaryDetailsForm register={register} errors={errors} />}
                                    {item.title === "Surveilance Details" && <SurveilanceDetailsForm register={register} errors={errors} />}
                                    {item.title === "Network Details" && <NetworkDetailsForm register={register} errors={errors} />}
                                    {item.title === "Computer / System Details" && <ComputerDetailsForm register={register} errors={errors} />}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

const LabDetailsForm = (props) => {
    let { register, errors } = props;
    const searchParams = useSearchParams()
    const auditor = searchParams.get('auditor')
    console.log(auditor);
    const accordionData = [
        {
            title: 'Preliminary Details'
        },
        {
            title: 'Surveilance Details'
        },
        {
            title: 'Network Details'
        },
        {
            title: 'Computer / System Details'
        }
    ];

    return <div className='w-full flex flex-col gap-[24px]'>
        <div className="w-full bg-[#FBF5F2] rounded-lg flex flex-col gap-[24px]">
            <div className='ring-1 ring-gray-300 bg-white rounded-md flex justify-between items-center p-[16px]'>
                <h1 className="text-[20px] font-medium">Lab Details</h1>
                <p className='flex items-center gap-[6px] text-[14px] font-medium text-[#06C270] uppercase'>
                    <Image src={Add} alt='arrow' className={`h-[14px] w-[14px]`} />
                    Add Lab</p>
            </div>
            <div className='bg-white ring-1 ring-gray-300 rounded-md'>
                <div className='flex justify-between p-[16px] items-center'>
                    <h1 className="text-[20px] text-[#864F20] font-bold uppercase">LAB 001</h1>
                    <div className='flex gap-[16px]'>
                        <p className='flex items-center gap-[5px] text-[14px] uppercase font-medium text-[#AE0005]'>
                            <Image src={Remove} alt='arrow' className={`h-[15px] w-[15px]`} />
                            Remove Lab</p>
                        <Image src={DownArrow} alt='arrow' className={`h-[24px] w-[24px] text-[#000]`} />
                    </div>
                </div>
                <Accordion register={register} errors={errors} items={accordionData} />
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
    </div>

};

export default LabDetailsForm;
