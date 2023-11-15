import React from 'react'

const LabForm4 = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Lab Name*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Lab Number*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
            </div>

            <p className="text-[16px] font-normal">Desktop Details</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        No. Of Desktop Available*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        No. Of Desktop Available For Exam*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Model*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        IP Address*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        RAM*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        HDD Capacity*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Operating System*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Processor*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
            </div>

            <div className="flex justify-between">
                <p className="text-[16px] font-normal">HDD Type?*</p>
                <div className="flex gap-[24px]">
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">HDD</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">SATA HDD</label>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <p className="text-[16px] font-normal">Mouse Available?*</p>
                <div className="flex gap-[24px]">
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">Yes</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">No</label>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <p className="text-[16px] font-normal">Keyboard Available?*</p>
                <div className="flex gap-[24px]">
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">Yes</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">No</label>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <p className="text-[16px] font-normal">
                    Is Operating System Genuine?*
                </p>
                <div className="flex gap-[24px]">
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">Yes</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">No</label>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <p className="text-[16px] font-normal">
                    Antivirus Installed On All Systems*
                </p>
                <div className="flex gap-[24px]">
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">Yes</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">No</label>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <p className="text-[16px] font-normal">Is Antivirus Genuine?*</p>
                <div className="flex gap-[24px]">
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">Yes</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">No</label>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
                <div className="lg:col-span-12 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Antivirus Name*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Browser Name*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Browser Version*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Monitor Type*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Display Size*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
            </div>

            <p className="text-[16px] font-normal">Laptop Details</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        No. Of Laptop Available*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        No. Of Laptop Available For Exam*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Model*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        IP Address*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        RAM*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        HDD Capacity*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Operating System*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Processor*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
            </div>
        </>
    )
}

export default LabForm4