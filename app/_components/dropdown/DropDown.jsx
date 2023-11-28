import React from 'react'

const DropDown = (props) => {
    let { title, options, classname } = props;
    return (
        <div className={`${classname} mt-[10px] relative h-[58px]`}>
            <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                {title}
            </label>
            <select
                className="top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10"
            >
                <option value="-">Choose</option>
                {
                    options.map((option, index) => {
                        return <option key={index} value={option}>{option}</option>
                    })
                }
            </select>
        </div>



    )
}

export default DropDown