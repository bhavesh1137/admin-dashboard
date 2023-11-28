"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";

// Icons and Images
import Logo from "../assets/images/Ampersand_group_logo 1.png";
import LoginImg from "../assets/images/loginImg.jpg";
import SliderImg1 from "../assets/images/loginImg.jpg";
import SliderImg2 from "../assets/images/loginImg.jpg";
import SliderImg3 from "../assets/images/loginImg.jpg";
import { IoMdArrowBack } from "react-icons/io";

// Swiperjs
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Validation Imports
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../helpers/validations/schema/login";

//Loader
import { ClipLoader } from "react-spinners";

//API Function
import { singInUser, verifyOTPUser } from "../api/user";

const images = [SliderImg1, SliderImg2, SliderImg3];

const LoginPage = () => {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpId, setOtpId] = useState("");
  const [activOtpIndex, setActivOtpIndex] = useState(0);
  const inputRef = useRef(null);
  const [seconds, setSeconds] = useState(60);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  //Validation Schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  useEffect(() => {
    inputRef.current?.focus();
  }, [activOtpIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [seconds, login]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit(handleEmail);
    }
  };

  const handleEmail = async (data) => {
    setLoading(true);
    setEmail(data.email);

    const response = await singInUser({ email_id: data.email });

    if (response.error) {
      console.log(response.error);
      if (response.error.code === 404) {
        setLoading(false);
        toast.error("User not Exists");
      } else if (response.error.code === 400) {
        setLoading(false);
        toast.error("Request body error");
      }
    } else {
      setOtpId(response.data.otp_id);
      toast.success("OTP Sent Successfully");
      setLoading(false);
      setLogin(true);
    }
  };

  // const handleVerifyOtp = async () => {
  //   setError(false);
  //   try {
  //     const resp = await axios
  //       .post(
  //         "https://node-backend-tvwblrb2za-el.a.run.app/api/v1/user/verify-otp",
  //         {
  //           email_id: email,
  //           otp_id: otpId,
  //           otp: parseInt(otp.join("")),
  //         }
  //       )
  //       .then((res) => {
  //         console.log(res);
  //         toast.success(res.data.message);
  //         setTimeout(() => {
  //           router.push("/dashboard");
  //         }, 2000);
  //       });
  //   } catch (err) {
  //     if (err.request.status === 400) {
  //       toast.error(err.message);
  //     } else if (err.request.status === 401) {
  //       console.error("Invalid OTP");
  //       setError(true);
  //     }
  //   }
  // };

  // const getTokenFromCookie = () => {
  //   const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  //   let token = "";

  //   cookies.forEach((cookie) => {
  //     const [name, value] = cookie.split("=");
  //     if (name === "yourTokenCookieName") {
  //       // Replace 'yourTokenCookieName' with your actual cookie name
  //       token = value;
  //     }
  //   });

  //   return token;
  // };

  // console.log(getTokenFromCookie())

  const handleVerifyOtp = async () => {
    setError(false);
    setLoading(true);

    const payload = {
      email_id: email,
      otp_id: otpId,
      otp: parseInt(otp.join("")),
    };

    const response = await verifyOTPUser(payload);

    setLoading(false);

    if (response.error) {
      if (response.error.code === 400) {
        toast.error(response.error.message);
      } else if (response.error.code === 401) {
        toast.error(response.error.message);
        setError(true);
      } else if (response.error.code === 404) {
        toast.error(response.error.message);
      }
    } else if (response.status === 200) {
      console.log('aa gaya me');
      console.log(document.cookie);
      toast.success(response.data.message);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    }
  };

  const handleOtp = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);

    if (!value) {
      setActivOtpIndex(index - 1);
    } else {
      setActivOtpIndex(index + 1);
    }
    setOtp(newOtp);
  };

  return (
    <section className="flex p-3 md:px-5 md:gap-5 bg-[#FBF5F2] h-screen w-full relative flex-col md:flex-row">
      <div className="cursor-pointer absolute top-[20px] left-[20px]">
        <Image src={Logo} height={45} width={45} alt="logoImg" />
      </div>

      <div className="flex justify-center items-center lg:w-1/2 h-full w-full">
        <form
          className="relative h-auto flex flex-col justify-center items-center bg-white shadow-sm p-3 md:px-[48px] md:py-[56px] w-max rounded-[8px]"
          onSubmit={
            !login ? handleSubmit(handleEmail) : handleSubmit(handleVerifyOtp)
          }
        >
          {login ? (
            //Enetr OTP Section
            <>
              <span
                className="absolute left-[24px] top-[24px] cursor-pointer"
                onClick={() => setLogin(false)}
              >
                <IoMdArrowBack className="h-[24px] w-[24px]" />
              </span>

              <h1 className="text-[25px] md:text-[34px] mb-[20px] text-[#212121]">
                Enter OTP
              </h1>
              <p className="text-[15px] md:text-[18px] max-w-[412px] mb-[30px] md:mb-[48px] text-[#666666] text-center leading-[29px]">
                Please enter OTP sent on your email id ak*********ta0@gmail.com
              </p>

              <div className="mb-[20px] md:mb-[56px] w-full">
                <div
                  id="otp"
                  className="flex flex-row justify-center gap-2 md:gap-[24px] mb-[8px]"
                >
                  {otp.map((_, index) => {
                    return (
                      <input
                        key={index}
                        className="otpField border border-[#A3A3A3] max-w-[48px] h-[48px] text-center rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        type="text"
                        value={otp[index]}
                        onChange={(e) => handleOtp(e, index)}
                        ref={index === activOtpIndex ? inputRef : null}
                        maxLength="1"
                      />
                    );
                  })}
                </div>
                <div className="w-full flex justify-between">
                  <span
                    className={`${
                      seconds === 0
                        ? "text-[#E6393E] text-[12px]"
                        : "text-[#38AC4A] text-[12px]"
                    }`}
                  >
                    00:{seconds < 10 ? `0${seconds}` : seconds}
                  </span>
                  <span className="text-[#E6393E] text-[12px]">
                    {error ? "Incorrect OTP" : ""}
                  </span>
                  <span className="text-[#666] text-[12px]">
                    {otp.join("").length}/6
                  </span>
                </div>
              </div>

              <button
                disabled={loading}
                className="flex items-center gap-[6px] px-[40px] py-[10px] md:px-[56px] md:py-[13px] bg-[#AE0005] rounded-full uppercase text-white mb-[16px] shadow-sm"
                // onClick={handleVerifyOtp}
              >
                Continue
                {loading ? (
                  <ClipLoader color="#ffffff" loading={loading} size={20} />
                ) : (
                  ""
                )}
              </button>
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
            // Enter Email Section
            <>
              <h1 className="text-[25px] md:text-[34px] mb-[20px] text-[#212121]">
                User Login
              </h1>
              <p className="text-[15px] md:text-[18px] max-w-[412px] mb-[30px] md:mb-[48px] text-[#666666] text-center leading-[29px]">
                Effortless Access: Seamlessly log in to access your account and
                unlock a world of possibilities
              </p>

              <div className="mb-[20px] md:mb-[56px] w-full">
                <input
                  className="w-full p-3 rounded-[8px] border-[2px]"
                  type="email"
                  placeholder="abc@ampersandgroup.in"
                  {...register("email")}
                />
                {errors.email?.message && (
                  <p className="text-red-500">{errors.email?.message}</p>
                )}
              </div>

              <button
                disabled={loading}
                className="flex items-center gap-2 px-[40px] py-[10px] md:px-[56px] md:py-[13px] bg-[#AE0005] rounded-full uppercase text-white mb-[16px] shadow-sm"
              >
                Generate OTP
                {loading ? (
                  <ClipLoader color="#ffffff" loading={loading} size={20} />
                ) : (
                  ""
                )}
              </button>
            </>
          )}
        </form>
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
              <Image
                src={LoginImg}
                className="h-full w-full object-cover"
                alt="sliderImg"
              />
              hello
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ToastContainer />
    </section>
  );
};

export default LoginPage;
