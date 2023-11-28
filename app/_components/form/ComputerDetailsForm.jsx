"use client"
import React, { useState } from 'react'
import Radio from "../../_components/radio/Radio";
import Input from "../../_components/input/Input";
import FileImg from '../../assets/icons/file.png'
import Image from 'next/image';
import DropDown from '../dropdown/DropDown';

const ComputerDetails = (props) => {

    let { register, errors } = props;
    const [isFileUpload, setFileUpload] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [csvData, setCSVData] = useState([]);
    return (
        <>
            <div className='p-[16px] h-full'>
                {
                    isFileUpload ? (
                        <>
                            <h2 className="text-[20px] font-normal mb-5">Computer Details</h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px] mb-4">
                                <Input
                                    label={"No. Of Desktops Available*"}
                                    classname={"lg:col-span-6"}
                                    type={"number"}
                                    inputRegister={{ ...register('desktopsAvailable', { required: true }) }}
                                    error={errors.desktopsAvailable ? "Required" : ""}
                                />
                                <Input
                                    label={"No. Of Laptops Available*"}
                                    classname={"lg:col-span-6"}
                                    type={"number"}
                                    inputRegister={{ ...register('laptopAvailable', { required: true }) }}
                                    error={errors.laptopAvailable ? "Required" : ""}
                                />

                                <Input
                                    label={"Model*"}
                                    classname={"lg:col-span-6"}
                                    type={"text"}
                                    inputRegister={{ ...register('model', { required: true }) }}
                                    error={errors.model ? "Required" : ""}
                                />

                                <Input
                                    label={"RAM*"}
                                    classname={"lg:col-span-6"}
                                    type={"text"}
                                    inputRegister={{ ...register('RAM', { required: true }) }}
                                    error={errors.RAM ? "Required" : ""}
                                />

                            </div>

                            <h2 className="text-[20px] font-normal mb-5">System Details</h2>

                            <div className="px-[16px] grid md:grid-cols-2 lg:grid-cols-12 mb-4">

                                <DropDown
                                    title={"HDD Type?*"}
                                    options={["HDD", "SATA HDD"]}
                                    classname={"lg:col-span-12"}
                                />
                                <Radio
                                    title={"Mouse Available?*"}
                                    options={["Yes", "No"]}
                                    span={"lg:col-span-12"}
                                    radioRegister={{ ...register('mouseAvailable', { required: true }) }}
                                    error={errors.mouseAvailable ? "Required" : ""}
                                />
                                <Radio
                                    title={"Keyboard Available?*"}
                                    options={["Yes", "No"]}
                                    span={"lg:col-span-12"}
                                    radioRegister={{ ...register('keyboardAvailable', { required: true }) }}
                                    error={errors.keyboardAvailable ? "Required" : ""}
                                />
                                <Radio
                                    title={"Is Operating System Genuine?*"}
                                    options={["Yes", "No"]}
                                    span={"lg:col-span-12"}
                                    radioRegister={{ ...register('genuineOS', { required: true }) }}
                                    error={errors.genuineOS ? "Required" : ""}

                                />
                                <Radio
                                    title={"Antivirus Installed On All Systems?*"}
                                    options={["Yes", "No"]}
                                    span={"lg:col-span-12"}
                                    radioRegister={{ ...register('antivirusInAllSystem', { required: true }) }}
                                    error={errors.antivirusInAllSystem ? "Required" : ""}
                                />
                                <Radio
                                    title={"Is Antivirus Genuine?*"}
                                    options={["Yes", "No"]}
                                    span={"lg:col-span-12"}
                                    radioRegister={{ ...register('antivirusGenuine', { required: true }) }}
                                    error={errors.antivirusGenuine ? "Required" : ""}
                                />
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px] mb-4">

                                <Input
                                    label={"Antivirus Name*"}
                                    classname={"lg:col-span-12"}
                                    type={"text"}
                                    inputRegister={{ ...register('antivirusName', { required: true }) }}
                                    error={errors.antivirusName ? "Required" : ""}
                                />
                                <Input
                                    label={"Browser Name*"}
                                    classname={"lg:col-span-6"}
                                    type={"text"}
                                    inputRegister={{ ...register('browserName', { required: true }) }}
                                    error={errors.browserName ? "Required" : ""}
                                />
                                <Input
                                    label={"Browser Version*"}
                                    classname={"lg:col-span-6"}
                                    type={"text"}
                                    inputRegister={{ ...register('browserVersion', { required: true }) }}
                                    error={errors.browserVersion ? "Required" : ""}
                                />
                                <Input
                                    label={"Monitor Type*"}
                                    classname={"lg:col-span-6"}
                                    type={"text"}
                                    inputRegister={{ ...register('monitorType', { required: true }) }}
                                    error={errors.monitorType ? "Required" : ""}
                                />
                                <Input
                                    label={"Display Size*"}
                                    classname={"lg:col-span-6"}
                                    type={"text"}
                                    inputRegister={{ ...register('displaySize', { required: true }) }}
                                    error={errors.displaySize ? "Required" : ""}
                                />
                            </div>

                            <Radio
                                title={"Can System Configurations Be Viewed?*"}
                                options={["Yes", "No"]}
                                radioRegister={{ ...register('canSysConfigBeViewed', { required: true }) }}
                                error={errors.canSysConfigBeViewed ? "Required" : ""}
                            />
                            <Radio
                                title={"Blockers Enabled During Exam?*"}
                                options={["Yes", "No"]}
                                radioRegister={{ ...register('blockersEnableDuringExam', { required: true }) }}
                                error={errors.blockersEnableDuringExam ? "Required" : ""}
                            />
                        </>
                    )
                        : (
                            <>
                                <label
                                    htmlFor="dropzone-file"
                                    className={`${isFileUpload ? "hidden" : "flex"
                                        } flex-col items-center justify-center w-full p-[32px] border-2 border-[#864F20] border-dashed rounded-2xl cursor-pointer`}
                                >
                                    <div className="flex flex-col items-center justify-center gap-3">
                                        <Image src={FileImg} alt="fileImg" />
                                        {selectedFile && (
                                            <p className="flex gap-2">
                                                {selectedFile.name}
                                                <span
                                                    onClick={() => {
                                                        setSelectedFile(null);
                                                    }}
                                                    className="text-red-500 hover:text-red-700 focus:outline-none"
                                                >
                                                    Clear
                                                </span>
                                            </p>
                                        )}
                                        <p className="text-[16px] font-normal text-[#864F20] flex gap-2">
                                            Drag and drop a file or
                                            <span className="underline">browse file</span>
                                        </p>
                                        <p className="text-[14px] font-normal text-[#C2A78F] italic tracking-[0.3px]">
                                            (Supported Only .pdf, .cSV File )
                                        </p>
                                    </div>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        accept=".csv, .pdf"
                                        className="hidden"
                                        onChange={() => setFileUpload(true)}
                                    />
                                </label>
                            </>
                        )
                }
            </div>
        </>
    )
}

export default ComputerDetails