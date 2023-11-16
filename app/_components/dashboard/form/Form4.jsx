import React from 'react'

const Form4 = () => {
    return (
        <>
            <form className="sm:flex sm:flex-col gap-[24px] sm:gap-[16px] md:grid gap-y-2 text-sm grid-cols-1 md:grid-cols-6 p-[16px] bg-white ring-1 ring-gray-300 rounded-md">
                <h1 className="text-[20px] font-medium col-span-6">Power Genset Details</h1>

                <div className="flex justify-between col-span-6">
                    <p className="text-[16px] font-medium">Power Genset Type*</p>
                    <div className="flex gap-[24px]">
                        <div className="flex items-center">
                            <input type="radio" className="w-4 h-4" />
                            <label className="ms-2 text-[16px] font-normal">Petrol</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" className="w-4 h-4" />
                            <label className="ms-2 text-[16px] font-normal">Diesel</label>
                        </div>
                    </div>
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        DG Capicity*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Fuel Comsumption Per Hour*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        UPS Capicity*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        UPS Backup Time (In Mins)*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        UPS Service Date*
                    </label>
                    <input
                        className="cursor-pointer absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" type='date' />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-3">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        DG Service Date*
                    </label>
                    <input
                        className="cursor-pointer absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"  type="date" />
                </div>
                <div className="relative h-[58px] col-span-1 md:col-span-6">
                    <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                        Upload Genset Image*
                    </label>
                    <input
                        className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
                </div>
            </form>
        </>
    )
}

export default Form4