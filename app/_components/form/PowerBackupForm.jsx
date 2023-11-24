import React from 'react'
import Radio from "../../_components/radio/Radio";
import Input from "../../_components/input/Input";

const PowerBackupForm = () => {
    return (
        <>
            <h1 className="text-[20px] font-medium">Power Genset Details</h1>

            <Radio
                title={"Power Genset Type*"}
                options={["Petrol", "Diesel"]}
            // error={errors.buildingType?.message}
            // radioRegister={{ ...register('buildingType', centerValidation.infrastructureDetails.buildingType) }}
            />


            <div className='grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]'>
                <Input
                    label={"DG Capicity*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"Fuel Comsumption Per Hour*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"UPS Capicity*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"UPS Backup Time (In Mins)*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <div className="relative h-[58px] lg:col-span-6">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        UPS Service Date*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" type='date' />
                </div>
                <div className="relative h-[58px] lg:col-span-6">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        DG Service Date*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" type='date' />
                </div>
                <Input
                    label={"Upload Genset Image*"}
                    classname={"lg:col-span-12"}
                    type={"text"} />
            </div>
        </>
    )
}

export default PowerBackupForm