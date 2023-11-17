import React from 'react'

const LabForm3 = () => {
    return (
        <>
            <div className="flex justify-between">
                <p className="text-[16px] font-normal">Type Of Network*</p>
                <div className="flex gap-[24px flex-col sm:flex-row]">
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">LAN</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">WAN</label>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <p className="text-[16px] font-normal">Single / Multiple LAN*</p>
                <div className="flex gap-[24px] flex-col sm:flex-row">
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">Single</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">Multiple</label>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <p className="text-[16px] font-normal">Topology*</p>
                <div className="flex gap-[24px] flex-col sm:flex-row">
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">Star</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">Bus</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">Ring</label>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Total LAN Available*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        No. Of Nodes Under LAN*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Network Speed*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Total No. Of Nodes Under LAN*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Total No. Of Switches Available*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-6 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Core Switch Speed*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>

                <div className="lg:col-span-12 relative h-[58px]">
                    <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Switch Make And Model Number*
                    </label>
                    <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
            </div>

            <div className="flex justify-between">
                <p className="text-[16px] font-normal">Are Switches Manageble?*</p>
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
                <p className="text-[16px] font-normal">LAN Type*</p>
                <div className="flex gap-[24px]">
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">CAT 5E</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" class="w-4 h-4" />
                        <label class="ms-2 text-[16px] font-normal">CAT 6</label>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <p className="text-[16px] font-normal">
                    Can DHCP Server Be Switched Off (If Available)?*
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
                    Can Wireless Router Be Switched Off (If Available)?*
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
        </>
    )
}

export default LabForm3