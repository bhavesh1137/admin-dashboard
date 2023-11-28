"use client";
import Image from "next/image";
import React, { useState } from "react";
import corssIcon from "../assets/icons/u_multiply.svg";
import Input from "../_components/input/Input";
import Link from "next/link";

const ComparisonPage = () => {
  const compareData = {
    CenterDetails: {
      title: "Center Details",
      questions: [
        "Center name*",
        "Center ID*",
        "Email Address*",
        "Mobile Number*",
        "Alternate Mobile Number",
        "Center Type*",
        "Pin Code*",
        "State*",
        "District*",
        "Taluka*",
        "City/Village",
        "Address 1*",
        "Address 2*",
        "Landmark*",
        "Google Map Link*",
        "Nearest Airport*",
        "Distance from Airport (in KMs)*",
        "Nearest Railway Station*",
        "Distance from Railway Station (in KMs)*",
        "Nearest Bus Stand*",
        "GST Number*",
        "PAN Card Number*",
        "Aadhar Card Number",
        "SPOC 1 Name*",
        "SPOC 1 Email ID*",
        "SPOC 1 Phone Number*",
        "SPOC 2 Name*",
        "SPOC 2 Email ID*",
        "SPOC 2 Phone Number*",
      ],
      centerOwnerDetails: [
        "Center ABC",
        "CID002",
        "Center@gmail.com",
        "9876543210",
        "1234567890",
        "Collage",
        "400001",
        "Maharashtra",
        "Mumbai",
        "Mumbai",
        "Mumbai",
        "Address1",
        "Address2",
        "Marine Lines",
        "googlemap.com",
        "Andheri",
        "200",
        "CST",
        "10",
        "bustand",
        "GST001",
        "ABCCD0909G",
        "111122223333",
        "SPOC 1",
        "spoc1@gmail.com",
        "1111111111",
        "SPOC2",
        "spoc2@gmail.com",
        "2222222222",
      ],
      auditorResponse: [
        "Center ABC",
        "CID002",
        "Center@gmail.com",
        "9876543210",
        "1234567098",
        "Collage",
        "400001",
        "Maharashtra",
        "Mumbai",
        "Mumbai",
        "Mumbai",
        "Address1",
        "Address2",
        "Marine Lines",
        "googlemap.com",
        "Andheri",
        "200",
        "CST",
        "10",
        "bustand",
        "GST001",
        "ABCCD0909G",
        "111122223333",
        "SPOC 1",
        "spoc1@gmail.com",
        "1111111111",
        "SPOC2",
        "spoc2@gmail.com",
        "2222222222",
      ],
    },
    InfrastructureDetails: {
      title: "Infrastructure Details",
      questions: [
        "Wing - Floor / Building*",
        "Total No of Labs*",
        "Building Type*",
        "Parking Facility*",
        "Are Candidates Allowed To Park Their Vehicle Inside The Venue?*",
        "If No is selected, What is the Nearest Pay and Park? *",
        "Reception Area *",
        "Waiting Area *",
        "Suitable For PWD *",
        "Ramp Facility For PWD Candidates *",
        "Railing Support For PWD Candidates *",
        "Wheelchair Support / Availability",
        "Lift Available?*",
        "Washrooms Available On Each Floor?*",
        "Are There Separate Male and Female Washrooms?*",
        "CCTV Available*",
        "Drinking Water*",
        "Separate Entry And Exit Gates*",
        "Is It Located In A Safe Area Where There Is No Obvious Threat To Personal Safety And General Public?*",
        "Is It Safe To Access The Venue During Early And Late Hours?*",
        "Is It Adequate Hygiene Maintained Across The Venue?*",
        "Server Room Available?*",
        "AC Available In Server Room?*",
        "Does The Server Room Have UPS Power Points / Network Points?*",
      ],
      centerOwnerDetails: [
        "B Wing",
        "2",
        "Commercial",
        "Yes",
        "No",
        "NA",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "No",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "No",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      auditorResponse: [
        "B Wing",
        "2",
        "Commercial",
        "Yes",
        "Yes",
        "NA",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "No",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    SafetyDetails: {
      title: "Safety Details",
      questions: [
        "First Aid Kit*",
        "Fire Extinguishers On Each Floor*",
        "Are Fire Extinguishers Easily Accessible During Fire Emergency?*",
        "Date Of Last Clearance*",
        "Date Of Last Refilling Of Fire Extinguisher*",
        "Assembly Area In Case Of Fire Emergency*",
        "Safety Signage For Emergency Evacuation?*",
        "Does The Examination Venue Have Insurance Covered For Risk Of Assets Loss, Third Party Accidents Etc?*",
      ],
      centerOwnerDetails: [
        "Yes",
        "Yes",
        "Yes",
        "25-05-2023",
        "10-02-2023",
        "Yes",
        "No",
        "Yes",
      ],
      auditorResponse: [
        "Yes",
        "No",
        "Yes",
        "25-05-2023",
        "10-02-2023",
        "Yes",
        "No",
        "Yes",
      ],
    },
    PowerBackupDetails: {
      title: "Power Backup Details",
      questions: [
        "Power Genset Type*",
        "DG Capacity*",
        "Fuel Comsumption Per Hour*",
        "UPS Capicity*",
        "UPS Backup Time (In Mins)*",
        "UPS Service Date*",
        "DG Service Date*",
        "Upload Genset Image*",
      ],
      centerOwnerDetails: [
        "Petrol",
        "100",
        "5L",
        "10",
        "10 Min",
        "11-09-2023",
        "10-05-2023",
        "image",
      ],
      auditorResponse: [
        "Petrol",
        "100",
        "5L",
        "10",
        "12 Min",
        "11-09-2023",
        "10-05-2023",
        "image",
      ],
    },
    LabDetails: {
      title: "Lab Details",
      questions: [
        "Preliminary Details",
        "Building name*",
        "Floor*",
        "No. of CCTVs*",
        "Does the Labs have AC Available? *",
        "Does the Labs have Fans Available? *",
        "Are the labs noise free and soundproof? *",
        "Do the Labs have Partition available between 2 nodes ? *",
        "Do the Labs have Printer Available? *",
        "Does All the Labs have Appropriate lighting available?*",
        "Printer make and model",

        "Surveilance Details",
        "Areas Covered Under Surveillance*",
        "Labs Covered Under Surveillance*",
        "Total No. Of Per Lab Systems Under Surveillance*",
        "No. Of CCTVs Installed Per Lab*",
        "No. Of Days Recording Available Per Lab*",
        "Recording Size Per CCTV Camera Per Hour*",
        "CCTV Data Backup Available?*",
        "Visible Notices Informing Individuals About Present Of CCTV Surveillance System?*",
        "No. Of DVR Available Per Lab*",
        "Make And Model Of DVR Per Lab*",
        "Size Of DVR Hard Disk*",
        "All Critical Areas, Including Entry And Exit Points, Exam Rooms And Storage Areas?*",
        "Blind Spots?*",
        "Capture Clear And High Quality Images?*",
        "Access To Authorized Personal Only*",

        "Network Details",
        "Single / Multiple LAN?*",
        "LAN Type?*",
        "Topology?*",
        "Total LAN Available*",
        "No. Of Nodes Under LAN*",
        "Network Speed*",
        "Total No. Of Nodes Under LAN*",
        "Total No. Of Switches Available*",
        "Core Switch Speed*",
        "Switch Make And Model Number*",
        "Switch Model Number*",
        "Are Switches Manageble?*",
        "Can DHCP Server Be Switched Off (If Available)?*",
        "Can Wireless Router Be Switched Off (If Available)?*",
        "ISP Name*",
        "Bandwidth (Download And Upload) in Mbps*",
        "Network Speed*",
        "Security Patches Updated Regularly And Applied?*",
        "Network Mornitoring Tools And Procedures In Place?*",
        "Comprehencive Logs Are Maintained To Track Network Activity?*",
        "Comprehencive Disaster Recovery Plan In Place?*",

        "Computer / System Details",
        "No. Of Desktops Available*",
        "No. Of Laptops Available*",
        "Model*",
        "RAM*",
        "HDD Type?*",
        "Mouse Available?*",
        "Keyboard Available?*",
        "Is Operating System Genuine?*",
        "Antivirus Installed On All Systems?*",
        "Is Antivirus Genuine?*",
        "Antivirus Name*",
        "Browser Name*",
        "Browser Version*",
        "Monitor Type*",
        "Display Size*",
        "Can System Configurations Be Viewed?*",
        "Blockers Enabled During Exam?*",
      ],
      centerOwnerDetails: [
        "",
        "Building 1",
        "2",
        "20",
        "Yes",
        "Yes",
        "No",
        "Yes",
        "Yes",
        "Yes",
        "Yes",

        "",
        "Yes",
        "Yes",
        "3",
        "2",
        "30",
        "100GB",
        "Yes",
        "Yes",
        "1",
        "1",
        "1TB",
        "Yes",
        "No",
        "Yes",
        "Yes",

        "",
        "Multiple",
        "CAT 6",
        "Star",
        "200",
        "20",
        "100 MBPS",
        "800",
        "5",
        "233",
        "12345",
        "12345",
        "Yes",
        "Yes",
        "Yes",
        "ISP12",
        "100Mbps*",
        "200 MBPS",
        "Yes",
        "Yes",
        "Yes",
        "Yes",

        "",
        "400",
        "150",
        "Model123",
        "16 GB",
        "SSD",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Antivirus123",
        "Chrome",
        "10.2",
        "LCD",
        "20 Inch",
        "No",
        "Yes",
      ],
      auditorResponse: [
        "",
        "Building 1",
        "2",
        "18",
        "Yes",
        "Yes",
        "No",
        "Yes",
        "No",
        "Yes",
        "Yes",

        "",
        "Yes",
        "Yes",
        "3",
        "2",
        "25",
        "100GB",
        "Yes",
        "Yes",
        "2",
        "2",
        "1TB",
        "Yes",
        "Yes",
        "Yes",
        "Yes",

        "",
        "Multiple",
        "CAT 6",
        "Star",
        "250",
        "20",
        "200 MBPS",
        "800",
        "4",
        "233",
        "12345",
        "12345",
        "Yes",
        "Yes",
        "Yes",
        "ISP12",
        "100Mbps*",
        "100 MBPS",
        "No",
        "Yes",
        "Yes",
        "Yes",

        "",
        "390",
        "180",
        "Model123",
        "16 GB",
        "SSD",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Antivirus123",
        "Chrome",
        "10.2",
        "LCD",
        "20 Inch",
        "No",
        "Yes",
      ],
    },
  };

  const [currentData, setCurrentData] = useState(compareData.CenterDetails);

  const [isapproveModalOpen, setApproveModalOpen] = useState(false);
  const [isrejectModalOpen, setRejectModalOpen] = useState(false);
  const [menuSelected, setMenuSelected] = useState("CenterDetails");
  const [isShowMismatchedChecked, setIsShowMismatchedChecked] = useState(false);

  // console.log(currentData);

  return (
    <>
      <div className="flex items-center justify-between gap-4 p-4 flex-col md:flex-row sticky top-0 bg-[#FBF5F2]">
        <div className="flex gap-4 items-center ">
          <Link href={"/centre-audits"}>
            <Image src={corssIcon} alt="X" />
          </Link>
          <p className="text-[24px] text-[#212121] capitalize tracking-[0.48px]">
            Audit Report
          </p>
        </div>

        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
          <button
            type="button"
            onClick={() => {
              setRejectModalOpen(true);
            }}
            className="px-[24px] py-[10px] bg-[#FFF] uppercase text-[14px] font-medium border border-[#00000036] rounded-[100px] tracking-[0.28px]"
          >
            reject
          </button>
          <button
            type="button"
            onClick={() => {
              setApproveModalOpen(true);
            }}
            className="px-[24px] py-[12px] bg-[#AE0005] uppercase text-[14px] font-medium text-white rounded-[40px] tracking-[0.28px]"
          >
            approve
          </button>
        </div>
      </div>

      <div className=" w-full grid lg:grid-cols-12 gap-6 items-start p-4">
        <div className=" w-full col-span-12 lg:col-span-3 flex flex-col bg-white pr-4 py-4 border border-[#E0E0E0] rounded-lg">
          <div class="flex items-center gap-1">
            <input
              id="show-mismatch"
              type="checkbox"
              value=""
              checked={isShowMismatchedChecked}
              onChange={() => {
                setIsShowMismatchedChecked(!isShowMismatchedChecked);
                console.log(isShowMismatchedChecked);
              }}
              class="w-4 h-4 m-[11px]"
            />
            <label
              htmlFor="show-mismatch"
              className={
                "text-[18px] text-[#666] font-medium uppercase tracking-[0.36px] cursor-pointer"
              }
            >
              show all incorrect
            </label>
          </div>
          <ul>
            <li
              onClick={() => {
                setCurrentData(compareData.CenterDetails);
                setMenuSelected("CenterDetails");
              }}
              className={`px-4 py-[12.5px] text-[14px] text-[#864F20] font-medium uppercase tracking-[0.175px] rounded-tr-[32px] rounded-br-[32px] cursor-pointer ${
                menuSelected === "CenterDetails" ? "bg-[#F2E2BE]" : ""
              }`}
            >
              Centre Details
              {isShowMismatchedChecked && (
                <span className="float-right bg-[#AE0005] text-[11px] text-[#fff] rounded-[100px] px-1">
                  3
                </span>
              )}
            </li>
            <li
              onClick={() => {
                setCurrentData(compareData.InfrastructureDetails);
                setMenuSelected("InfrastructureDetails");
              }}
              className={`px-4 py-[12.5px] text-[14px] text-[#864F20] font-medium uppercase tracking-[0.175px] rounded-tr-[32px] rounded-br-[32px] cursor-pointer ${
                menuSelected === "InfrastructureDetails" ? "bg-[#F2E2BE]" : ""
              }`}
            >
              Infrastructure Details
              {isShowMismatchedChecked && (
                <span className="float-right bg-[#AE0005] text-[11px] text-[#fff] rounded-[100px] px-1">
                  3
                </span>
              )}
            </li>
            <li
              onClick={() => {
                setCurrentData(compareData.SafetyDetails);
                setMenuSelected("SafetyDetails");
              }}
              className={`px-4 py-[12.5px] text-[14px] text-[#864F20] font-medium uppercase tracking-[0.175px] rounded-tr-[32px] rounded-br-[32px] cursor-pointer ${
                menuSelected === "SafetyDetails" ? "bg-[#F2E2BE]" : ""
              }`}
            >
              Safety Details
              {isShowMismatchedChecked && (
                <span className="float-right bg-[#AE0005] text-[11px] text-[#fff] rounded-[100px] px-1">
                  3
                </span>
              )}
            </li>
            <li
              onClick={() => {
                setCurrentData(compareData.PowerBackupDetails);
                setMenuSelected("PowerBackupDetails");
              }}
              className={`px-4 py-[12.5px] text-[14px] text-[#864F20] font-medium uppercase tracking-[0.175px] rounded-tr-[32px] rounded-br-[32px] cursor-pointer ${
                menuSelected === "PowerBackupDetails" ? "bg-[#F2E2BE]" : ""
              }`}
            >
              Power backup Details
              {isShowMismatchedChecked && (
                <span className="float-right bg-[#AE0005] text-[11px] text-[#fff] rounded-[100px] px-1">
                  3
                </span>
              )}
            </li>
            <li
              onClick={() => {
                setCurrentData(compareData.LabDetails);
                setMenuSelected("LabDetails");
              }}
              className={`px-4 py-[12.5px] text-[14px] text-[#864F20] font-medium uppercase tracking-[0.175px] rounded-tr-[32px] rounded-br-[32px] cursor-pointer ${
                menuSelected === "LabDetails" ? "bg-[#F2E2BE]" : ""
              }`}
            >
              Lab Details
              {isShowMismatchedChecked && (
                <span className="float-right bg-[#AE0005] text-[11px] text-[#fff] rounded-[100px] px-1">
                  3
                </span>
              )}
            </li>
          </ul>
        </div>
        <div className="w-full col-span-12 md:col-span-4 lg:col-span-3 flex flex-col bg-white border border-[#E0E0E0] rounded-lg">
          <p className="p-4 text-[20px] text-[#864F20] font-medium capitalize text-center">
            Parameters
          </p>

          {currentData.title == "Lab Details" && (
            <p className="p-4 text-[20px] text-[#864F20] font-medium capitalize bg-[#F8F0DE]">
              LAB001
            </p>
          )}

          {currentData.questions.map((item, index) => {
            return (
              <p
                key={index}
                className="px-4 py-[14px] text-[16px] text-[#212121] tracking-[0.5px]"
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className="w-full col-span-12 md:col-span-4 lg:col-span-3 flex flex-col bg-white border border-[#E0E0E0] rounded-lg ">
          <p
            className={`p-4 text-[20px] text-[#864F20] font-medium capitalize text-center ${
              currentData.title == "Lab Details" && "mb-[80px]"
            }`}
          >
            Centre Owner Details
          </p>

          {currentData.centerOwnerDetails.map((item, index) => {
            return (
              <p
                key={index}
                className="px-4 py-[14px] text-[16px] text-[#212121] tracking-[0.5px] text-center"
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className="w-full col-span-12 md:col-span-4 lg:col-span-3 flex flex-col bg-white border border-[#E0E0E0] rounded-lg">
          <p
            className={`p-4 text-[20px] text-[#864F20] font-medium capitalize text-center ${
              currentData.title == "Lab Details" && "mb-[80px]"
            }`}
          >
            Auditor Response
          </p>

          {currentData.auditorResponse.map((item, index) => {
            return (
              <p
                key={index}
                className="px-4 py-[14px] text-[16px] text-[#212121] tracking-[0.5px] text-center"
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>

      {isapproveModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-[430px] px-[32px] py-[24px] bg-[#fff] rounded-lg flex flex-col gap-6 relative">
            <Image
              src={corssIcon}
              alt="cross"
              className="cursor-pointer absolute top-[20px] right-[20px]"
              onClick={() => setApproveModalOpen(false)}
            />
            <div className="flex flex-col gap-[20px]">
              <p className="text-[28px] text-black text-opacity-90 font-medium tracking-[0.25px] text-center">
                Audit Declaration
              </p>
              <p className="text-[18px] text-black text-opacity-60 tracking-[0.18px] text-center">
                By clicking on Approve below, I hereby confirm that I have
                thoroughly reviewed all sections of the Audit form and are aware
                that no amendments can be carried out.
              </p>
            </div>
            <Input label={"Remark*"} classname={""} />

            <button
              type="button"
              className="p-4 text-[16px] text-[#fff] font-medium tracking-[0.32px] bg-[#AE0005] rounded-[40px] uppercase"
            >
              approve
            </button>
          </div>
        </div>
      )}
      {isrejectModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-[430px] px-[32px] py-[24px] bg-[#fff] rounded-lg flex flex-col gap-6 relative">
            <Image
              src={corssIcon}
              alt="cross"
              className="cursor-pointer absolute top-[20px] right-[20px]"
              onClick={() => setRejectModalOpen(false)}
            />
            <div className="flex flex-col gap-[20px]">
              <p className="text-[28px] text-black text-opacity-90 font-medium tracking-[0.25px] text-center">
                Audit Declaration
              </p>
              <p className="text-[18px] text-black text-opacity-60 tracking-[0.18px] text-center">
                By clicking on Reject below, I hereby confirm that I have
                thoroughly reviewed all sections of the Audit form and are aware
                that no amendments can be carried out.
              </p>
            </div>
            <Input label={"Remark*"} classname={""} />
            <button
              type="button"
              className="p-4 text-[16px] text-[#fff] font-medium tracking-[0.32px] bg-[#AE0005] rounded-[40px] uppercase"
            >
              reject
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ComparisonPage;
