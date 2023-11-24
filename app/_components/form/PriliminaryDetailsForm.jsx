import React from 'react'
import Radio from "../../_components/radio/Radio";
import Input from "../../_components/input/Input";

const LabForm1 = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
                <Input
                    label={"Building Name*"}
                    classname={"lg:col-span-6 mb-3"}
                    type={"text"} />

                <Input
                    label={"Floor*"}
                    classname={"lg:col-span-6 mb-3"}
                    type={"text"} />

                <Input
                    label={"Lab Name*"}
                    classname={"lg:col-span-6 mb-3"}
                    type={"text"} />

                <Input
                    label={"Lab Number*"}
                    classname={"lg:col-span-6 mb-3"}
                    type={"text"} />


                <Input
                    label={"No. Of Nodes*"}
                    classname={"lg:col-span-6 mb-3"}
                    type={"text"} />


                <Input
                    label={"No. Of CCTVs*"}
                    classname={"lg:col-span-6 mb-3"}
                    type={"text"} />
            </div>


            <Radio
                title={"AC Available?*"}
                options={["Yes", "No"]}
            />
            <Radio
                title={"Fans Available?*"}
                options={["Yes", "No"]}
            />
            <Radio
                title={"Is Noice Free And Soundproof?*"}
                options={["Yes", "No"]}
            />
            <Radio
                title={"Partition Available Between 2 Nodes*"}
                options={["Yes", "No"]}
            />
            <Radio
                title={"Appropriate Lighting Available?*"}
                options={["Yes", "No"]}
            />
            <Radio
                title={"Printer Available?*"}
                options={["Yes", "No"]}
            />
            <p className="text-[16px] font-normal text-[#864F20] mb-5">
                Printer Details
            </p>

            <div className="relative h-[58px] mb-5">
                <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                    Printer Make And Model*
                </label>
                <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
            </div>
        </>
    )
}

export default LabForm1