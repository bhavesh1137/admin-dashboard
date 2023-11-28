import React from 'react'
import Radio from "../../_components/radio/Radio";
import Input from "../../_components/input/Input";
import Date from '../date/Date';
import File from '../file-input/File';
import { useSearchParams } from 'next/navigation';
import DropDown from '../dropdown/DropDown';

const PowerBackupForm = (props) => {
    let { register, errors } = props;
    const searchParams = useSearchParams()
    const auditor = searchParams.get('auditor')
    console.log(auditor);
    return (
        <div className='w-full h-full flex flex-col gap-[24px]'>
            <div className="w-full p-4 bg-white border ring-1 ring-gray-300 rounded-lg flex flex-col gap-[24px]">

                <h1 className="text-[20px] font-medium">Power Genset Details</h1>

                <div className='grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]'>

                    <DropDown
                        classname={"lg:col-span-12"}
                        title="Power Genset Type"
                        options={["Petrol", "Diesel"]}
                    />
                    <Input
                        label={"DG Capicity*"}
                        classname={"lg:col-span-6"}
                        type={"text"}
                        inputRegister={{ ...register('DGCapacity', { required: true }) }}
                        error={errors.DGCapacity ? "Required" : ""}
                    />
                    <Input
                        label={"Fuel Comsumption Per Hour*"}
                        classname={"lg:col-span-6"}
                        type={"text"}
                        inputRegister={{ ...register('fuelCapacity', { required: true }) }}
                        error={errors.fuelCapacity ? "Required" : ""}
                    />
                    <Input
                        label={"UPS Capicity*"}
                        classname={"lg:col-span-6"}
                        type={"text"}
                        inputRegister={{ ...register('UPSCapacity', { required: true }) }}
                        error={errors.UPSCapacity ? "Required" : ""}
                    />
                    <Input
                        label={"UPS Backup Time (In Mins)*"}
                        classname={"lg:col-span-6"}
                        type={"text"}
                        inputRegister={{ ...register('UPSBackUpTime', { required: true }) }}
                        error={errors.UPSBackUpTime ? "Required" : ""}
                    />

                    <Date
                        label={"UPS Service Date*"}
                        classname={"lg:col-span-6"}
                        inputRegister={{ ...register('UPSServiceDate', { required: true }) }}
                        error={errors.UPSServiceDate ? "Required" : ""}
                    />
                    <Date
                        label={"DG Service Date*"}
                        classname={"lg:col-span-6"}
                        inputRegister={{ ...register('DGServiceDate', { required: true }) }}
                        error={errors.DGServiceDate ? "Required" : ""}
                    />

                    <File
                        title={"Upload Genset Image*"}
                        classname={"lg:col-span-12"}
                    />
                </div>
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
    )
}

export default PowerBackupForm