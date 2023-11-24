import React from 'react'
import { useForm } from 'react-hook-form';
import { centerValidation } from '../../helpers/validations/schema/center'
import Input from "../../_components/input/Input";
import Radio from "../../_components/radio/Radio";

const InfrastructureDetailForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {/* <form className="p-4 bg-white border ring-1 ring-gray-300 rounded-lg flex flex-col gap-[24px]"> */}
      <h1 className="text-[20px] font-medium">Infrastructure Details</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
        <Input
          label={"Wing - Floor / Building*"}
          classname={"lg:col-span-6"}
          type={"text"} />
        <Input
          label={"Total No. Of Labs*"}
          classname={"lg:col-span-6"}
          type={"number"} />
      </div>

      <Radio
        title={"Building Type*"}
        options={["Residential", "Commercial"]}
        error={errors.buildingType?.message}
        radioRegister={{ ...register('buildingType', centerValidation.infrastructureDetails.buildingType) }} />

      <h1 className="text-[20px] font-medium">Facilities Available</h1>

      <Radio
        title={"Parking Facility"}
        options={["Yes", "No"]}
        error={errors.parkingFacility?.message}
        radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />

      <Radio
        title={"Are Candidates Allowed To Park Their Vehicle Inside The Venue?*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />

      <div className="relative h-[58px]">
        <label className=" absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
          If No is selected, What is the Nearest Pay and Park?*
        </label>
        <input className=" absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10" />
      </div>


      <Radio
        title={"Reception Area*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />
      <Radio
        title={"Waiting Area*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />

      <p className="text-[16px] font-normal text-[#864F20]">
        Suitable For PWD (Person With Disability)?*
      </p>

      <Radio
        title={"Ramp Facility For PWD CAndidates*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />

      <Radio
        title={"Railing Support For PWD Candidates*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />
      <Radio
        title={"Wheelchair Support / Availability*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />
      <Radio
        title={"Lift Available?*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />

      <p className="text-[16px] font-normal text-[#864F20]">Washrooms*</p>

      <Radio
        title={"Washrooms Available On Each Floor?*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />
      <Radio
        title={"Are There Separate Male and Female Washrooms?*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />
      <Radio
        title={"CCTV Available*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />
      <Radio
        title={"Drinking Water*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />

      <div className="flex flex-col gap-[24px]">
        <p className="text-[16px] font-normal text-[#864F20]">
          Separate Entry and Exit Gate
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
          <Input
            label={"No. Of Entry Gates*"}
            classname={"lg:col-span-6"}
            type={"number"} />
          <Input
            label={"No. Of Exit Gates*"}
            classname={"lg:col-span-6"}
            type={"number"} />
        </div>
      </div>


      <Radio
        title={"Is It Located In A Safe Area Where There Is No Obvious Threat To Personal Safety And General Public?*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />
      <Radio
        title={"Is It Safe To Access The Venue During Early And Late Hours?*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />
      <Radio
        title={"Is It Adequate Hygiene Maintained Across The Venue?*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />
      <Radio
        title={"Server Room Available?*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />
      <Radio
        title={"AC Available In Server Room?*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />
      <Radio
        title={"Does The Server Room Have UPS Power Points / Network Points?*"}
        options={["Yes", "No"]}
      error={errors.parkingFacility?.message}
      radioRegister={{ ...register('parkingFacility', centerValidation.infrastructureDetails.parkingFacility) }}
      />
      <button className='bg-red-300' onClick={handleSubmit(onSubmit)}>onSubmit</button>
      {/* </form> */}
    </>
  )
}

export default InfrastructureDetailForm