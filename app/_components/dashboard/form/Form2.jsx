import React from 'react'

const Form2 = () => {
  return (
    <>
      <form className="p-4 bg-white border ring-1 ring-gray-300 rounded-lg flex flex-col gap-[24px]">
        <h1 className="text-[20px] font-medium">Infrastructure Details</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
          <div className="lg:col-span-6 relative h-[58px]">
            <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Wing - Floor / Building*
            </label>
            <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
          </div>
          <div className="lg:col-span-6 relative h-[58px]">
            <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Total No. Of Labs*
            </label>
            <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
          </div>
        </div>

        <div className="flex justify-between">
          <p className="text-[16px] font-normal">Building Type*</p>
          <div className="flex gap-[24px]">
            <div class="flex items-center">
              <input type="radio" class="w-4 h-4" />
              <label class="ms-2 text-[16px] font-normal">Residential</label>
            </div>
            <div class="flex items-center">
              <input type="radio" class="w-4 h-4" />
              <label class="ms-2 text-[16px] font-normal">Commercial</label>
            </div>
          </div>
        </div>

        <h1 className="text-[20px] font-medium">Facilities Available</h1>

        <div className="flex justify-between">
          <p className="text-[16px] font-normal">Parking Facility*</p>
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
          <p className="text-[16px] font-normal text-[#864F20]">
            Are Candidates Allowed To Park Their Vehicle Inside The Venue?*
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

        <div className="relative h-[58px]">
          <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
            If No is selected, What is the Nearest Pay and Park?*
          </label>
          <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
        </div>

        <div className="flex justify-between">
          <p className="text-[16px] font-normal">Reception Area*</p>
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
          <p className="text-[16px] font-normal">Waiting Area*</p>
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
          <p className="text-[16px] font-normal text-[#864F20]">
            Are Candidates Allowed To Park Their Vehicle Inside The Venue?*
          </p>

          <div className="flex flex-col gap-[24px] ml-[50px]">
            <div className="flex justify-between">
              <p className="text-[16px] font-normal">
                Ramp Facility For PWD CAndidates*
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
                Railing Support For PWD Candidates*
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
                Wheelchair Support / Availability*
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

        <div className="flex justify-between">
          <p className="text-[16px] font-normal">Lift Available?*</p>
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
          <p className="text-[16px] font-normal text-[#864F20]">Washrooms*</p>

          <div className="flex flex-col gap-[24px] ml-[50px]">
            <div className="flex justify-between">
              <p className="text-[16px] font-normal">
                Washrooms Available On Each Floor?*
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
                Are There Separate Male and Female Washrooms?*
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

        <div className="flex justify-between">
          <p className="text-[16px] font-normal">CCTV Available*</p>
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
          <p className="text-[16px] font-normal">Drinking Water*</p>
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
          <p className="text-[16px] font-normal text-[#864F20]">
            Separate Entry and Exit Gate
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
            <div className="lg:col-span-6 relative h-[58px]">
              <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                No. Of Entry Gates*
              </label>
              <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
            </div>
            <div className="lg:col-span-6 relative h-[58px]">
              <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
                No. Of Exit Gates*
              </label>
              <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="text-[16px] font-normal">
            Is It Located In A Safe Area Where There Is No Obvious Threat To
            Personal Safety And General Public?*
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
            Is It Safe To Access The Venue During Early And Late Hours?*
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
            Is It Adequate Hygiene Maintained Across The Venue?*
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
          <p className="text-[16px] font-normal">Server Room Available?*</p>
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
            AC Available In Server Room?*
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
            Does The Server Room Have UPS Power Points / Network Points?*
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

export default Form2