import React from 'react'
import Radio from "../../_components/radio/Radio";
import Input from "../../_components/input/Input";

const LabForm4 = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
                <Input
                    label={"Lab Name*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"Lab Number*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
            </div>

            <p className="text-[16px] font-normal mb-5">Desktop Details</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
                <Input
                    label={"No. Of Desktop Available*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"No. Of Desktop Available For Exam*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"Model*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"IP Address*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"RAM*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"HDD Capacity*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"Operating System*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"Processor*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
            </div>

            <Radio
                title={"HDD Type?*"}
                options={["HDD", "SATA HDD"]}
            />
            <Radio
                title={"Mouse Available?*"}
                options={["Yes", "No"]}
            />
            <Radio
                title={"Keyboard Available?*"}
                options={["Yes", "No"]}
            />
            <Radio
                title={"Is Operating System Genuine?*"}
                options={["Yes", "No"]}
            />
            <Radio
                title={"Antivirus Installed On All Systems*"}
                options={["Yes", "No"]}
            />
            <Radio
                title={"Is Antivirus Genuine?*"}
                options={["Yes", "No"]}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">

                <Input
                    label={"Antivirus Name*"}
                    classname={"lg:col-span-12"}
                    type={"text"} />
                <Input
                    label={"Browser Name*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"Browser Version*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"Monitor Type*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"Display Size*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
            </div>

            <p className="text-[16px] font-normal mb-5">Laptop Details</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">

                <Input
                    label={"No. Of Laptop Available*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"No. Of Laptop Available For Exam*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"Model*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"IP Address*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"RAM*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"HDD Capacity*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"Operating System*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
                <Input
                    label={"Processor*"}
                    classname={"lg:col-span-6"}
                    type={"text"} />
            </div>
        </>
    )
}

export default LabForm4