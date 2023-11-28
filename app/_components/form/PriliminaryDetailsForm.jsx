import React from 'react'
import Radio from "../../_components/radio/Radio";
import Input from "../../_components/input/Input";

const LabForm1 = (props) => {

    let { register, errors } = props;
    return (
        <>
            <div className='p-[16px] h-full'>
                <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
                    <Input
                        label={"Building Name*"}
                        classname={"lg:col-span-6"}
                        type={"text"}
                        inputRegister={{ ...register('buildingName', { required: true }) }}
                        error={errors.buildingName ? "Required" : ""}
                    />

                    <Input
                        label={"Floor*"}
                        classname={"lg:col-span-6"}
                        type={"text"}
                        inputRegister={{ ...register('floor', { required: true }) }}
                        error={errors.floor ? "Required" : ""}
                    />
                    <Input
                        label={"Lab Name*"}
                        classname={"lg:col-span-6"}
                        type={"text"}
                        inputRegister={{ ...register('labName', { required: true }) }}
                        error={errors.floor ? "Required" : ""}
                    />

                    <Input
                        label={"No. of CCTVs*"}
                        classname={"lg:col-span-6"}
                        type={"text"}
                        inputRegister={{ ...register('labNumber', { required: true }) }}
                        error={errors.labNumber ? "Required" : ""}
                    />

                </div>
                <div className='p-[16px] flex flex-col'>
                    <Radio
                        title={"Do the Labs have AC Available?*"}
                        options={["Yes", "No"]}
                        radioRegister={{ ...register('availableAC', { required: true }) }}
                        error={errors.availableAC ? "Required" : ""}
                    />
                    <Radio
                        title={"Do the Labs have Fans Available?*"}
                        options={["Yes", "No"]}
                        radioRegister={{ ...register('availableFan', { required: true }) }}
                        error={errors.availableFan ? "Required" : ""}
                    />
                    <Radio
                        title={"Are the labs noise free and soundproof?*"}
                        options={["Yes", "No"]}
                        radioRegister={{ ...register('soundProof', { required: true }) }}
                        error={errors.soundProof ? "Required" : ""}
                    />
                    <Radio
                        title={"Do the Labs have Partition available between 2 nodes ?*"}
                        options={["Yes", "No"]}
                        radioRegister={{ ...register('partitionBetween2Nodes', { required: true }) }}
                        error={errors.partitionBetween2Nodes ? "Required" : ""}
                    />

                    <Radio
                        title={"Does All the Labs have Appropriate lighting available?*"}
                        options={["Yes", "No"]}
                        radioRegister={{ ...register('appropriateLighting', { required: true }) }}
                        error={errors.appropriateLighting ? "Required" : ""}
                    />

                    <Radio
                        title={"Do the Labs have Printer Available?*"}
                        options={["Yes", "No"]}
                        radioRegister={{ ...register('printerAvailable', { required: true }) }}
                        error={errors.printerAvailable ? "Required" : ""}
                    />
                </div>

                <Input
                    label={"Printer Make And Model*"}
                    classname={"lg:col-span-12"}
                    type={"text"}
                    inputRegister={{ ...register('printerModel', { required: true }) }}
                    error={errors.printerModel ? "Required" : ""}
                />

            </div>

        </>
    )
}

export default LabForm1