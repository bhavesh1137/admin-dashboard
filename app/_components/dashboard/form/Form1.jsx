import React from 'react'

const Form1 = ({ incrementStep, decrimentStep, setFormData }) => {

    return (
        <>
            <form className="sm:flex sm:flex-col sm:gap-[24px] md:grid gap-y-2 text-sm grid-cols-1 md:grid-cols-6 p-[16px] bg-white ring-1 ring-gray-300 rounded-md">
                <h1 className="text-[20px] font-medium col-span-6">Personal Details</h1>
                <div className="relative h-[58px] col-span-1 md:col-span-6">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Center Name*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Email Address*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Phone Number*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-6">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Alternate Phone Number*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="flex justify-between col-span-6">
                    <p className="text-[16px] font-medium">Center Type*</p>
                    <div className="flex gap-[24px]">
                        <div class="flex items-center">
                            <input type="radio" class="w-4 h-4" />
                            <label class="ms-2 text-[16px] font-normal">School</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" class="w-4 h-4" />
                            <label class="ms-2 text-[16px] font-normal">College</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" class="w-4 h-4" />
                            <label class="ms-2 text-[16px] font-normal">Training Institute</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" class="w-4 h-4" />
                            <label class="ms-2 text-[16px] font-normal">Test Center</label>
                        </div>
                    </div>
                </div>

                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Pin Code*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        State*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        District*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Taluka*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        City*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Village*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-6">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Address Line 1*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-6">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Address Line 2*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-6">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Address Line 3*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Landmark*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Google Map Link*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Nearest AirPort*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Distance from AirPort (in KM)*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Nearest Railway Station*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Distance from Railway Station (in KM)*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Nearest Bus Stand*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Distance from Bus Stand (in KM)*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        GST Number*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Upload GST Certificate*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        PAN Card Number*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Upload PAN Card Copy*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Aadhar Card Number*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Upload Aadhar Card Copy*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-6">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Agreement Copy signed with Venue Partner
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        SPOC 1 Name*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        SPOC 2 Name*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        SPOC 1 Email ID*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        SPOC 2 Email ID*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        SPOC 1 Phone Number*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        SPOC 2 Phone Number*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
            </form>
        </>
    )
}

export default Form1