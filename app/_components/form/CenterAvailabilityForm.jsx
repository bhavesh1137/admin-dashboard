import React from 'react'
import Input from "../../_components/input/Input";
import Plus from '../../assets/icons/red-plus.svg'
import Image from 'next/image';


const CenterAvailabilityForm = (props) => {

  let { register, errors } = props;
  return (
    <>
      <div className="w-full h-full bg-[#FBF5F2] rounded-lg flex flex-col gap-[24px]">
        <div className="p-[16px] rounded-lg ring-1 ring-gray-300 bg-white grid md:grid-cols-2 lg:grid-cols-12 gap-x-[24px]">
          <h1 className="p-[16px] text-[20px] font-normal lg:col-span-12">Primary Details</h1>
          <Input
            label={"Exam Name*"}
            classname={"lg:col-span-4"}
            type={"text"}
            inputRegister={{ ...register('CAexamName', { required: true }) }}
            error={errors.CAexamName ? "Required" : ""}
          />
          <Input
            label={"Start Date*"}
            classname={"lg:col-span-4"}
            type={"text"}
            inputRegister={{ ...register('CAstartDate', { required: true }) }}
            error={errors.CAstartDate ? "Required" : ""}
          />
          <Input
            label={"End Date*"}
            classname={"lg:col-span-4"}
            type={"text"}
            inputRegister={{ ...register('CAendDate', { required: true }) }}
            error={errors.CAendDate ? "Required" : ""}
          />
        </div>


        <div className='p-[16px] rounded-lg ring-1 ring-gray-300 bg-white gap-[24px]'>
          <div className="grid md:grid-cols-2 lg:grid-cols-11 gap-[16px] justify-center"> 
            <h1 className="text-[20px] font-normal lg:col-span-12">Seats Availability</h1>
            <p className='font-semibold text-[16px] text-[#212121] text-start lg:col-span-1'>Lab Names</p>
            <p className='font-semibold text-[16px] text-[#212121] text-center lg:col-span-2'>Laptops Available</p>
            <p className='font-semibold text-[16px] text-[#212121] text-center lg:col-span-2'>Laptops Offered</p>
            <p className='font-semibold text-[16px] text-[#212121] text-center lg:col-span-2'>Desktops Available</p>
            <p className='font-semibold text-[16px] text-[#212121] text-center lg:col-span-2'>Desktops Offered</p>
            <p className='font-semibold text-[16px] text-[#212121] text-center lg:col-span-2'>Total no. of Devices Offered</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-11 gap-[16px]">
            <p className='text-[16px] flex justify-start items-end text-[#212121] lg:col-span-1 h-full font-semibold'>LAB001</p>
            <Input
              classname={"lg:col-span-2"}
              type={"text"}
              inputRegister={{ ...register('CAlaptopsAvailable', { required: true }) }}
              error={errors.CAlaptopsAvailable ? "Required" : ""}
            />
            <Input
              classname={"lg:col-span-2"}
              type={"number"}
              inputRegister={{ ...register('CAlaptopsOffered', { required: true }) }}
              error={errors.CAlaptopsOffered ? "Required" : ""}
            />
            <Input
              classname={"lg:col-span-2"}
              type={"text"}
              inputRegister={{ ...register('CAdesktopsAvailable', { required: true }) }}
              error={errors.CAdesktopsAvailable ? "Required" : ""}
            />
            <Input
              classname={"lg:col-span-2"}
              type={"number"}
              inputRegister={{ ...register('CAdesktopsOffered', { required: true }) }}
              error={errors.CAdesktopsOffered ? "Required" : ""}
            />
            <Input
              classname={"lg:col-span-2"}
              type={"text"}
              inputRegister={{ ...register('CAtotalDevicesOffered', { required: true }) }}
              error={errors.CAtotalDevicesOffered ? "Required" : ""}
            />

            {/* LAB2  */}
            <p className='text-[16px] flex justify-start items-end text-[#212121] text-start lg:col-span-1 font-semibold'>LAB002</p>
            <Input
              classname={"lg:col-span-2"}
              type={"text"}
              inputRegister={{ ...register('CAlaptopsAvailable', { required: true }) }}
              error={errors.CAlaptopsAvailable ? "Required" : ""}
            />
            <Input
              classname={"lg:col-span-2"}
              type={"number"}
              inputRegister={{ ...register('CAlaptopsOffered', { required: true }) }}
              error={errors.CAlaptopsOffered ? "Required" : ""}
            />
            <Input
              classname={"lg:col-span-2"}
              type={"text"}
              inputRegister={{ ...register('CAdesktopsAvailable', { required: true }) }}
              error={errors.CAdesktopsAvailable ? "Required" : ""}
            />
            <Input
              classname={"lg:col-span-2"}
              type={"number"}
              inputRegister={{ ...register('CAdesktopsOffered', { required: true }) }}
              error={errors.CAdesktopsOffered ? "Required" : ""}
            />
            <Input
              classname={"lg:col-span-2"}
              type={"text"}
              inputRegister={{ ...register('CAtotalDevicesOffered', { required: true }) }}
              error={errors.CAtotalDevicesOffered ? "Required" : ""}
            />

          </div>
        </div>

        <div className="p-[16px] rounded-lg ring-1 ring-gray-300 bg-white grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
          <h1 className="text-[20px] font-normal lg:col-span-12">Dates Availability</h1>

          <Input
            label={"Start Date*"}
            classname={"lg:col-span-6"}
            type={"date"}
            inputRegister={{ ...register('CAdateAvailabilityStart', { required: true }) }}
            error={errors.CAdateAvailabilityStart ? "Required" : ""} />
          <Input
            label={"End Date*"}
            classname={"lg:col-span-6"}
            type={"date"}
            inputRegister={{ ...register('CAdateAvailabilityEnd', { required: true }) }}
            error={errors.CAdateAvailabilityEnd ? "Required" : ""} />

          <button className='flex items-center gap-[6px] uppercase lg:col-span-12 text-[14px] text-[#AE0005] font-medium' type='button'>
            <Image src={Plus} alt='arrow' className={`h-[14px] w-[14px]`} />
            Add Intervals</button>

        </div>

        <div className="p-4 rounded-lg ring-1 ring-gray-300 bg-white grid md:grid-cols-2 lg:grid-cols-12 gap-[24px] items-center">
          <div className='lg:col-span-12 p-4'>
            <p className='text-[20px] mb-4'>Declaration</p>
            <div>
              <div className='flex items-center'>
                <input type="checkbox" className='m-3' name="agree" {...register("documentsGenuine", { required: true })} />
                <p className='text-[#666666]'>I/We here by confirm that the information provided herein is accurate, correct and complete and that the documents submitted along with this application form are genuine.</p>
                <p className='text-[12px] text-red-500'>{errors.documentsGenuine ? "Required" : ""}</p>
              </div>
              <div className='flex items-center'>
                <input type="checkbox" className='m-3' name="agree" {...register("finalAndIrrvocable", { required: true })} />
                <p className='text-[#666666]'>I understand and agree that this declaration is final and irrevocable, and that it is not subject to any ammendments.</p>
                <p className='text-[12px] text-red-500'>{errors.finalAndIrrvocable ? "Required" : ""}</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>

  )
}

export default CenterAvailabilityForm