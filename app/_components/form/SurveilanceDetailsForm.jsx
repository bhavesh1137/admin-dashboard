import React from "react";
import downArrow from "../../assets/icons/VectordownArrow.svg";
import Image from "next/image";
import Radio from "../../_components/radio/Radio";
import Input from "../../_components/input/Input";
import MultiSelect from '../../_components/multiselect-dropdown/MultiSelect'

const LabForm2 = (props) => {
  let { register, errors } = props;

  return (
    <>
      <div className='h-full p-[16px] '>
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px] mb-4">
          {/* <div className="lg:col-span-12 relative h-[58px]">
            <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Areas Covered Under Surveillance*
            </label>
            <select className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10 appearance-none">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <Image src={downArrow} className="absolute top-6 right-5 z-20" alt="arrow" />
          </div> */}
          <MultiSelect
            classname={"lg:col-span-12 relative h-[58px]"} />
          <MultiSelect
            classname={"lg:col-span-12 relative h-[58px]"}
          />

          {/* <div className="lg:col-span-12 relative h-[58px]">
            <label className="absolute top-[-12px] left-[20px] text-[12px] z-20 text-[rgba(0,0,0,0.6)] bg-white p-1 tracking-wide">
              Labs Covered Under Surveillance*
            </label>
            <select className="absolute top-0 left-0 w-full bg-none border border-slate-400 outline-none p-4 text-[16px] rounded-lg font-normal z-10 appearance-none">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <Image src={downArrow} className="absolute top-6 right-5 z-20" alt="arrow" />
          </div> */}

          <Input
            label={"Total No. Of Per Lab Systems Under Surveillance*"}
            classname={"lg:col-span-6"}
            type={"number"}
            inputRegister={{ ...register('printerModel', { required: true }) }}
            error={errors.printerModel ? "Required" : ""}
          />

          <Input
            label={"No. Of CCTVs Installed Per Lab*"}
            classname={"lg:col-span-6"}
            type={"number"}
            inputRegister={{ ...register('CCTVinstalledPerLab', { required: true }) }}
            error={errors.CCTVinstalledPerLab ? "Required" : ""}
          />

          <Input
            label={"No. Of Days Recording Available Per Lab*"}
            classname={"lg:col-span-6"}
            type={"number"}
            inputRegister={{ ...register('noOfDaysRecordingAvailable', { required: true }) }}
            error={errors.noOfDaysRecordingAvailable ? "Required" : ""}
          />

          <Input
            label={"Recording Size Per CCTV Camera Per Hour*"}
            classname={"lg:col-span-6"}
            type={"number"}
            inputRegister={{ ...register('recordingSizePerHour', { required: true }) }}
            error={errors.recordingSizePerHour ? "Required" : ""}
          />
        </div>

        <Radio
          title={"CCTV Data Backup Available?*"}
          classname={"text-[#864F20]"}
          options={["Yes", "No"]}
          radioRegister={{ ...register('CCTVDataBackup', { required: true }) }}
          error={errors.CCTVDataBackup ? "Required" : ""}
        />

        <div className='relative ps-[50px] mt-2'>
          <span className=' left-0 -top-[25px] border-b-2 ms-3  border-s-2 border-black absolute w-[40px] h-full'></span>
          <Radio
            title={"Visible Notices Informing Individuals About Present Of CCTV Surveillance System?*"}
            options={["Yes", "No"]}
            classname={"ms-1"}
            radioRegister={{ ...register('CCTVnotice', { required: true }) }}
            error={errors.CCTVnotice ? "Required" : ""}
          />
        </div>

        <div className='relative ps-[50px]'>
          <span className=' left-0 -top-[25px] border-b-2 ms-3  border-s-2 border-black absolute w-[40px] h-full'></span>
          <Radio
            title={"Availability of the backup camera?*"}
            options={["Yes", "No"]}
            classname={"ms-1"}
            radioRegister={{ ...register('backupAvailability', { required: true }) }}
            error={errors.backupAvailability ? "Required" : ""}
          />
        </div>

        <div className='relative ps-[50px]'>
          <span className=' left-0 -top-[25px] border-b-2 ms-3  border-s-2 border-black absolute w-[40px] h-full'></span>
          <Radio
            title={"Regular maintainance is followed?*"}
            options={["Yes", "No"]}
            classname={"ms-1"}
            radioRegister={{ ...register('regularMaintanance', { required: true }) }}
            error={errors.regularMaintanance ? "Required" : ""}
          />
        </div>

        <div className='relative ps-[50px] mb-4'>
          <span className=' left-0 -top-[25px] border-b-2 ms-3  border-s-2 border-black absolute w-[40px] h-full'></span>
          <Radio
            title={"Frequency of sharing the CCTV data?*"}
            options={["Yes", "No"]}
            classname={"ms-1"}
            radioRegister={{ ...register('CCTVDataSharingFrequency', { required: true }) }}
            error={errors.CCTVDataSharingFrequency ? "Required" : ""}
          />
        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-[24px]">
          <p className="text-[20px] font-normal text-[#864F20] lg:col-span-12">DVR Details</p>

          <Input
            label={"No. Of DVR Available Per Lab*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={{ ...register('DVRperLab', { required: true }) }}
            error={errors.DVRperLab ? "Required" : ""}
          />
          <Input
            label={"Make And Model Of DVR Per Lab*"}
            classname={"lg:col-span-6"}
            type={"text"}
            inputRegister={{ ...register('DVRmodel', { required: true }) }}
            error={errors.DVRmodel ? "Required" : ""}
          />
          <Input
            label={"Size Of DVR Hard Disk*"}
            classname={"lg:col-span-12"}
            type={"text"}
            inputRegister={{ ...register('DVRdiskSize', { required: true }) }}
            error={errors.DVRdiskSize ? "Required" : ""}
          />

        </div>

        <Radio
          title={"All Critical Areas, Including Entry And Exit Points, Exam Rooms And Storage Areas?*"}
          classname={"mt-4"}
          options={["Yes", "No"]}
          radioRegister={{ ...register('criticalAreas', { required: true }) }}
          error={errors.criticalAreas ? "Required" : ""}
        />

        <Radio
          title={"Blind Spots?*"}
          options={["Yes", "No"]}
          radioRegister={{ ...register('blindSpots', { required: true }) }}
          error={errors.blindSpots ? "Required" : ""}
        />

        <Input
          label={"If Yes is selected, Please List The Blind Spots*"}
          classname={"lg:col-span-12 my-4"}
          type={"text"}
          radioRegister={{ ...register('blindSpotsDetails', { required: true }) }}
          error={errors.blindSpotsDetails ? "Required" : ""}
        />

        <Radio
          title={"Capture Clear And High Quality Images?*"}
          options={["Yes", "No"]}
          radioRegister={{ ...register('highQualityImg', { required: true }) }}
          error={errors.highQualityImg ? "Required" : ""}
        />

        <Radio
          title={"Access To Authorized Personal Only*"}
          options={["Yes", "No"]}
          radioRegister={{ ...register('accessToAuthorize', { required: true }) }}
          error={errors.accessToAuthorize ? "Required" : ""}
        />
      </div>
    </>
  );
};

export default LabForm2;
