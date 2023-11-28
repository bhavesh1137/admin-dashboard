import React from 'react'
import Image from 'next/image'
import FileUpload from '../../assets/icons/red_paperclip.svg'

const File = (props) => {
    const { classname, title } = props
    return (
        <div className={`mb-3 ${classname}`}>
            <label className="w-full bg-red-400">
                <div className="w-full bg-none border flex justify-between items-center border-[#A3A3A3] outline-none  text-[16px] text-[#212121] rounded-[8px] font-normal p-4">
                    <p className='text-[#212121] text-[16px]'>{title}</p>
                    <div className='flex items-center gap-[6px]'>
                        <Image src={FileUpload} className="h-[24] w-[24]" alt="" />
                        <span className="text-[#E6393E] text-[16px] text-base leading-normal">Upload Attachment</span>
                    </div>
                    <input type='file' className="hidden w-full" />
                </div>
            </label>
        </div>
    )
}

export default File