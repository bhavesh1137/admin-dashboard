"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Logo from "../assets/images/Ampersand_group_logo 1.png";
import LoginImg from "../assets/images/loginImg.jpg";
import SliderImg1 from "../assets/images/loginImg.jpg";
import SliderImg2 from "../assets/images/loginImg.jpg";
import SliderImg3 from "../assets/images/loginImg.jpg";

// icons
import { IoMdArrowBack } from "react-icons/io";
import Image from "next/image";

// swiperjs
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const images = [
  SliderImg1,
  SliderImg2,
  SliderImg3
];

const LoginPage = () => {
  const [login, setLogin] = useState(false);
  const router = useRouter();
  return (
    <section className="flex p-3 md:px-5 md:gap-5 bg-[#FBF5F2] h-screen w-full relative flex-col md:flex-row">
      <div className="absolute top-[20px] left-[20px]">
        <Image src={Logo} height={45} width={45} alt="logoImg" />
      </div>
      <div className="flex justify-center items-center lg:w-1/2 h-full w-full">
        <div className="relative h-auto flex flex-col justify-center items-center bg-white shadow-sm p-3 md:px-[48px] md:py-[56px] w-max rounded-[8px]">
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
          <h1 className="text-[25px] md:text-[34px] mb-[20px] text-[#212121]">
            {login ? "Enter OTP" : "User Login"}
          </h1>
          <p className="text-[15px] md:text-[18px] max-w-[412px] mb-[30px] md:mb-[48px] text-[#666666] text-center leading-[29px]">
            {login
              ? "Please enter OTP sent on your email id ak*********ta0@gmail.com"
              : "Effortless Access: Seamlessly log in to access your account and unlock a world of possibilities"}
          </p>

          <div className="mb-[20px] md:mb-[56px] w-full">
            {login ? (
              <>
                <div id="otp" className="flex flex-row justify-center gap-2 md:gap-[24px] mb-[8px]">
                  <input
                    class="border border-[#A3A3A3] max-w-[48px] h-[48px] text-center rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    id="first"
                    maxlength="1"
                  />
                  <input
                    className="border border-[#A3A3A3] max-w-[48px] h-[48px] text-center rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    id="second"
                    maxlength="1"
                  />
                  <input
                    className="border border-[#A3A3A3] max-w-[48px] h-[48px] text-center rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    id="third"
                    maxlength="1"
                  />
                  <input
                    className="border border-[#A3A3A3] max-w-[48px] h-[48px] text-center rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    id="fourth"
                    maxlength="1"
                  />
                  <input
                    className="border border-[#A3A3A3] max-w-[48px] h-[48px] text-center rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    id="fifth"
                    maxlength="1"
                  />
                  <input
                    className="border border-[#A3A3A3] max-w-[48px] h-[48px] text-center rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
            className="px-[40px] py-[10px] md:px-[56px] md:py-[13px] bg-[#AE0005] rounded-full uppercase text-white mb-[16px] shadow-sm"
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
      <div className="hidden md:block md:w-1/3 h-full lg:w-1/2">
        <Swiper
          className="h-full w-full"
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide className="h-full w-full" key={index}>
              <Image src={LoginImg} className="h-full w-full object-cover" alt="sliderImg" />
              hello
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LoginPage;
