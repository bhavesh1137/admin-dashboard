import React from 'react'
import Input from "../../_components/input/Input";


const CenterAvailabilityForm = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
        <h1 className="text-[20px] font-medium lg:col-span-12">Primary Details</h1>
        <Input
          label={"Exam Name*"}
          classname={"lg:col-span-4"}
          type={"text"} />
        <Input
          label={"Start Date*"}
          classname={"lg:col-span-4"}
          type={"text"} />
        <Input
          label={"End Date*"}
          classname={"lg:col-span-4"}
          type={"text"} />
      </div>


      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px] items-center">
        <h1 className="text-[20px] font-medium lg:col-span-12">Seats Availability</h1>
        <p className='text-[16px] text-[#212121] text-center lg:col-span-2'>Lab Names</p>
        <p className='text-[16px] text-[#212121] px-5 text-center lg:col-span-2'>Laptops Available</p>
        <p className='text-[16px] text-[#212121] px-7 text-center lg:col-span-2'>Laptops Offered</p>
        <p className='text-[16px] text-[#212121] px-5 text-center lg:col-span-2'>Desktops Available</p>
        <p className='text-[16px] text-[#212121] px-6 text-center lg:col-span-2'>Desktops Offered</p>
        <p className='text-[16px] text-[#212121] text-center lg:col-span-2'>Total no. of Devices Offered</p>
        <p className='text-[16px] text-[#212121] text-center lg:col-span-2'>LAB001</p>
        <Input
          classname={"lg:col-span-2"}
          type={"text"} />
        <Input
          classname={"lg:col-span-2"}
          type={"number"} />
        <Input
          classname={"lg:col-span-2"}
          type={"text"} />
        <Input
          classname={"lg:col-span-2"}
          type={"number"} />
        <Input
          classname={"lg:col-span-2"}
          type={"text"} />

        {/* LAB2  */}
        <p className='text-[16px] text-[#212121] text-center lg:col-span-2'>LAB002</p>
        <Input
          classname={"lg:col-span-2"}
          type={"text"} />
        <Input
          classname={"lg:col-span-2"}
          type={"number"} />
        <Input
          classname={"lg:col-span-2"}
          type={"text"} />
        <Input
          classname={"lg:col-span-2"}
          type={"number"} />
        <Input
          classname={"lg:col-span-2"}
          type={"text"} />


        <h1 className="text-[20px] font-medium lg:col-span-12">Dates Availability</h1>

        <Input
          label={"Start Date*"}
          classname={"lg:col-span-6"}
          type={"date"} />
        <Input
          label={"End Date*"}
          classname={"lg:col-span-6"}
          type={"date"} />

        <p className='uppercase lg:col-span-12 text-[14px] text-[#AE0005] font-medium'>+ Add Intervals</p>
        <div className='lg:col-span-12 p-4'>
          <p className='text-[20px] mb-4'>Declaration</p>
          <div>
            <div className='flex items-center'>
              <input type="checkbox" className='m-3' name="agree" />
              <p>I/We hearby confirm that the information provided herein is accurate, correct and complete and that the documents submitted along with this application form are genuine.</p>
            </div>
            <div className='flex items-center'>
              <input type="checkbox" className='m-3' name="agree" />
              <p>I understand and agree that this declaration is final and irrevocalble, and that it is not subject to any ammendments.</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default CenterAvailabilityForm