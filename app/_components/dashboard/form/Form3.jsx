import React from 'react'

const Form3 = () => {
  return (
    <>
      <form className="p-4 bg-white border border-slate-400 rounded-lg flex flex-col gap-[24px]">
        <h1 className="text-[20px] font-medium">Fire Safety</h1>

        <div className="flex justify-between">
          <p className="text-[16px] font-normal">First Aid Kit*</p>
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

        <div className="flex flex-col gap-[24px]">
          <div className="flex justify-between">
            <p className="text-[16px] font-normal text-[#864F20]">
              Fire Extinguishers On Each Floor*
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
          <div className="flex flex-col gap-[24px] ml-[50px]">
            <div className="flex justify-between">
              <p className="text-[16px] font-normal">
                Are Fire Extinguishers Easily Accessible During Fire Emergency?*
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
          </div>
        </div>

        <p className="text-[16px] font-normal text-[#864F20]">
          Fire Safety Clearance
        </p>

        <div className="flex flex-col gap-[24px]">
          <p className="text-[16px] font-normal">Date Of Last Refill*</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
            <div className="lg:col-span-6 relative h-[58px]">
              <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                Date Of Last Clearance*
              </label>
              <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" type='date' />
            </div>
            <div className="lg:col-span-6 relative h-[58px]">
              <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                Date Of Last Refill*
              </label>
              <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" type='date' />
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="text-[16px] font-normal">
            Assembly Area In Case Of Fire Emergency*
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
            Safety Signage For Emergency Evacuation?*
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
            Does The Examination Venue Have Insurance Covered For Risk Of Assets
            Loss, Third Party Accidents Etc?*
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
      </form>
    </>
  )
}

export default Form3