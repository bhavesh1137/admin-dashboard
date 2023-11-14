"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Logo from "../assets/images/Ampersand_group_logo 1.png";
import LoginImg from "../assets/images/loginImg.jpg";

// icons
import { IoMdArrowBack } from "react-icons/io";
import Image from "next/image";

const page = () => {
  const [login, setLogin] = useState(false);
  const router = useRouter();
  return (
    <section className="flex bg-[#FBF5F2] h-screen w-full relative flex-col md:flex-row">
      <div className="absolute top-[20px] left-[20px]">
        <Image src={Logo} height={45} width={45} />
      </div>
      <div className=" flex justify-center items-center md:w-1/2 h-full w-full">
        <div className="relative h-auto flex flex-col justify-center items-center bg-white shadow-sm px-[48px] py-[56px] w-max rounded-[8px]">
          {login ? (
            <span
              className="absolute left-[24px] top-[24px] cursor-pointer"
              onClick={() => setLogin(false)}
            >
              <IoMdArrowBack className="h-[24px] w-[24px]" />
            </span>
          ) : (
            ""
          )}
          <h1 className="text-[34px] mb-[20px] text-[#212121]">
            {login ? "Enter OTP" : "User Login"}
          </h1>
          <p className="text-[18px] max-w-[412px] mb-[48px] text-[#666666] text-center leading-[29px]">
            {login
              ? "Please enter OTP sent on your email id ak*********ta0@gmail.com"
              : "Effortless Access: Seamlessly log in to access your account and unlock a world of possibilities"}
          </p>

          <div className="mb-[56px] w-full">
            {login ? (
              <>
                {/* <input className='w-full rounded-[8px] border-[2px] p-3 mb-[8px]' type="text" placeholder='OTP' /> */}
                <div
                  id="otp"
                  class="flex flex-row justify-center gap-[24px] mb-[8px]"
                >
                  <input
                    class="border border-[#A3A3A3] max-w-[48px] h-[48px] text-center rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    id="first"
                    maxlength="1"
                  />
                  <input
                    class="border border-[#A3A3A3] max-w-[48px] h-[48px] text-center rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    id="second"
                    maxlength="1"
                  />
                  <input
                    class="border border-[#A3A3A3] max-w-[48px] h-[48px] text-center rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    id="third"
                    maxlength="1"
                  />
                  <input
                    class="border border-[#A3A3A3] max-w-[48px] h-[48px] text-center rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    id="fourth"
                    maxlength="1"
                  />
                  <input
                    class="border border-[#A3A3A3] max-w-[48px] h-[48px] text-center rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    id="fifth"
                    maxlength="1"
                  />
                  <input
                    class="border border-[#A3A3A3] max-w-[48px] h-[48px] text-center rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    id="sixth"
                    maxlength="1"
                  />
                </div>
                <div className="w-full flex justify-between">
                  <span className="text-[#38AC4A] text-[12px]">00:60</span>
                  <span className="text-[#E6393E] text-[12px]">
                    Incorrect OTP
                  </span>
                  <span className="text-[#666] text-[12px]">0/6</span>
                </div>
              </>
            ) : (
              <input
                className="w-full p-3 rounded-[8px] border-[2px]"
                type="text"
                placeholder="abc@ampersandgroup.in"
              />
            )}
          </div>

          <button
            className="px-[56px] py-[13px] bg-[#AE0005] rounded-full uppercase text-white mb-[16px] shadow-sm"
            onClick={(e) => {
              e.target.innerText === "CONTINUE"
                ? router.push("/dashboard")
                : setLogin(true);
            }}
          >
            {login ? "Continue" : "Generate OTP"}
          </button>
          {login ? (
            <>
              <div className="flex justify-center items-center gap-[12px]">
                <span className="text-[#666666] text-[14px] font-normal">
                  Haven’t received OTP yet?
                </span>
                <span className="text-[#A3A3A3] text-[14px] font-medium underline cursor-pointer">
                  RESEND OTP
                </span>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="w-full h-full md:w-1/2">
        <Image src={LoginImg} className="h-full w-full object-cover" />
      </div>
    </section>
  );
};

export default page;
