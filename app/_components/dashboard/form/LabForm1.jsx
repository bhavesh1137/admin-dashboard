import React from 'react'

const LabForm1 = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Building Name*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Floor*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

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

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        No. Of Nodes*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        No. Of CCTVs*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
            </div>

            <div className="flex justify-between">
                <p className="text-[16px] font-normal">AC Available?*</p>
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
                <p className="text-[16px] font-normal">Fans Available?*</p>
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
                    Is Noice Free And Soundproof?*
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
                    Partition Available Between 2 Nodes*
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
                    Appropriate Lighting Available?*
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
                <p className="text-[16px] font-normal">Printer Available?*</p>
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

            <p className="text-[16px] font-normal text-[#864F20]">
                Printer Details
            </p>

            <div className="relative h-[58px]">
                <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                    Printer Make And Model*
                </label>
                <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
            </div>
        </>
    )
}

export default LabForm1