import React, { useState  } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaApple, FaGoogle } from "react-icons/fa";
import Password from "../assets/Password-Icon.svg";
import RCode from "../assets/Referal-Code.svg";
import Arrow from "../assets/arrow.png";
import Check from "../assets/signup/Check.svg";
import MailICO from "../assets/Mail-Icon.svg";
import MM from "../assets/signup/Mail-Icon.png";
import QrSignup from "../components/QrSignup";
import Balance from "../assets/signup/Balance.svg";
import Bitcoin from "../assets/signup/Bitcoin.png";
import NFT from "../assets/signup/NFT.svg";
import Qe from "../assets/signup/Quick Exchage.png";
import Qr from "../assets/signup/QR-Code.png";
import trade from "../assets/signup/trade.png";
import watchit from "../assets/signup/watchit.svg";
import EmailVerificationOption from "../components/MailComponent";
import SMSVerificationOption from "../components/SMSComponent";
export default function Home() {
const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/'); // redirects to the specified page
  };
  const [activeComponent, setActiveComponent] = useState(1);
  const [activeTab, setActiveTab] = useState("signup");
  const [subTitle, setSubTitle] = useState(
    "Setting up an account takes less than 1 minute"
  );
  const [subTitle2, setSubTitle2] = useState(" Complete verification process");
  const [sys, setSys] = useState(true);
  const [title, setTitle] = useState("Create your account");
  const [qconfirm, setConfirm] = useState(0);
  const [mailVerify, setMailVerify] = useState(0);
  const [mailTitle, setMailTitle] = useState(
    "Pleae enter the 4-digit verification code that was sent to your email"
  );
  const handleContinue = () => {
    if (activeTab === "signup") {
      setActiveTab("login");
      setTitle("Welcome Back");
      setSubTitle("Please Enter your email and password");
      setActiveComponent(2);
    }
    if (activeTab === "login") {
      setTitle("Let's Confirm it's you!");
      setSubTitle("Complete verification process");
      setConfirm(1);
      setActiveComponent(2);
    }
  };
  const DefaultSignup = () => (
    <div className="relative w-full h-full text-center">
      <img
        src={Balance}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-2 lg:right-2 bg-gray-800 rounded-[1em]"
        alt="Balance"
      />
      <img
        src={Bitcoin}
        className="absolute top-8 right-16 sm:top-10 sm:right-20 md:top-12 md:right-28 lg:top-3 lg:right-36 bg-gray-800 rounded-[1em]"
        alt="Bitcoin"
      />
      <img
        src={NFT}
        className="absolute top-20 right-4 sm:top-24 sm:right-6 md:top-28 md:right-10 lg:top-20 lg:right-2 bg-gray-800 rounded-[1em] z-10"
        alt="NFT"
      />
      <img
        src={Qe}
        className="absolute top-[9rem] right-16 sm:top-[10rem] sm:right-20 md:top-[12rem] md:right-24 lg:top-[9rem] lg:right-20 bg-gray-800 rounded-[1em] z-0"
        alt="Quick Exchange"
      />
      <img
        src={Qr}
        className="absolute top-40 right-40 sm:top-44 sm:right-52 md:top-48 md:right-64 lg:top-40 lg:right-60 bg-green-800 rounded-[1em] z-10 cursor-pointer"
        alt="QR code"
        onClick={() => {
          setActiveComponent(2);
        }}
      />
      <img
        src={trade}
        alt="trade"
        className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-1/2 transform -translate-x-1/2"
      />
      <p className="text-white absolute bottom-12 sm:bottom-14 md:bottom-14 font-bold text-sm sm:text-base md:text-lg left-1/2 transform -translate-x-1/2">
        anything anywhere with Whales.io!
      </p>
    </div>
  );

  const LoginCompoment = () => (
    <div className="w-full mt-2 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="text-left px-5">
        <p className="font-Poppins text-custom-text text-[14px] md:text-[16px]">
          {subTitle}
        </p>
      </div>

      <div className="bg-gray-800 rounded-[1.5em] py-1 px-2 mt-4 mb-7 flex justify-start w-full sm:w-3/4 md:w-2/4">
        <button
          className={`${
            activeTab === "login" ? "bg-customgreen" : ""
          } px-4 py-2 rounded-3xl text-[12px] md:text-[14px] font-Poppins text-white`}
          onClick={() => {
            setActiveTab("login");
            setTitle("Welcome Back");
            setSubTitle("Please Enter your email and password");
          }}
        >
          Login
        </button>
        <button
          className={`${
            activeTab === "signup" ? "bg-green-500" : ""
          } px-4 py-2 rounded-3xl text-[12px] md:text-[14px] font-Poppins text-white`}
          onClick={() => {
            setActiveTab("signup");
            setActiveComponent(1);
            setTitle("Create Your Account");
            setSubTitle("Setting up an account takes less than 1 minute");
          }}
        >
          Signup
        </button>
      </div>

      <div className="flex items-center bg-gray-800 rounded-[1.2em] px-4 py-4 space-x-2 mb-6">
        <span className="text-white">
          <img
            src={MailICO}
            className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
            alt="Mail"
          />
        </span>
        <span className="text-gray-600">|</span>
        <input
          type="email"
          placeholder="Email Address"
          className="bg-gray-800 text-gray-600 placeholder-gray-400 focus:outline-none flex-1"
        />
        <span className="text-white">
          <img src={Check} alt="check" />
        </span>
      </div>

      <div className="flex items-center bg-gray-800 rounded-[1.2em] px-4 py-4 space-x-2 mb-6">
        <span className="text-white">
          <img
            src={Password}
            className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
            alt="Password"
          />
        </span>
        <span className="text-gray-600">|</span>
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-800 text-gray-600 placeholder-gray-400 focus:outline-none flex-1"
        />
      </div>

      <div className="flex items-center bg-gray-800 rounded-[1.2em] px-4 py-4 space-x-2 mb-6">
        <span className="text-white">
          <img
            src={RCode}
            className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
            alt="Rcode"
          />
        </span>
        <span className="text-gray-600">|</span>
        <input
          type="text"
          placeholder="Referral Code (Optional)"
          className="bg-gray-800 text-gray-600 placeholder-gray-400 focus:outline-none flex-1"
        />
      </div>

      <button
        className="
            flex items-center justify-between w-full px-6 sm:px-8 py-3 sm:py-4
            bg-emerald-500 hover:bg-emerald-600 text-white text-lg sm:text-xl font-medium
            rounded-3xl transition-colors duration-200
          "
        onClick={handleContinue}
      >
        <span className="flex-grow text-center">Continue</span>
        <img src={Arrow} alt="arrow" />
      </button>

      <div className="flex flex-col items-center space-y-4 mt-10">
        <div className="flex items-center space-x-2">
          <span className="border-t border-gray-600 w-8 sm:w-10 md:w-12"></span>
          <span className="text-gray-400">Or Continue with</span>
          <span className="border-t border-gray-600 w-8 sm:w-10 md:w-12"></span>
        </div>

        <div className="flex space-x-4">
          <button className="bg-gray-800 p-2 sm:p-3 rounded-full text-blue-500 hover:bg-gray-700">
            <FaFacebookF size={16} />
          </button>
          <button className="bg-gray-800 p-2 sm:p-3 rounded-full text-white hover:bg-gray-700">
            <FaApple size={16} />
          </button>
          <button className="bg-gray-800 p-2 sm:p-3 rounded-full text-red-500 hover:bg-gray-700">
            <FaGoogle size={16} />
          </button>
        </div>
      </div>
    </div>
  );
  const ConfirmComponent = () => (
    <div className="mt-2 text-left pb-20">
      <p className="text-sm md:text-base font-Poppins text-gray-400 px-10">
        {subTitle2}
      </p>
      <div className="px-12">
        <p className="mt-6 md:mt-10 text-sm md:text-base font-Poppins text-white font-bold">
          select confirming method:
        </p>
        <div className="bg-gray-800 rounded-[2em] py-1 px-2 mt-4 mb-7 flex justify-start w-full sm:w-4/5 md:w-[55%]">
          <button
            className={`${
              sys === true ? "bg-customgreen" : ""
            } px-4 py-2 rounded-3xl text-[12px] md:text-[14px] font-Poppins text-white`}
            onClick={() => {
              setSys(true);
            }}
          >
            System
          </button>
          <button
            className={`${
              sys === false ? "bg-green-500" : ""
            } px-4 py-2 rounded-3xl text-[12px] md:text-[14px] font-Poppins text-white`}
            onClick={() => {
              setSys(false);
            }}
          >
            Google
          </button>
        </div>
        <SMSVerificationOption phoneNumber="+1 202 555 0151" />
        <EmailVerificationOption email="example@gmail.com" />
        <button
          className="
        flex items-center justify-between mt-6 md:mt-9
        w-full  px-4 md:px-8 py-3 md:py-4
        bg-emerald-500 hover:bg-emerald-600
        text-white text-lg md:text-xl font-medium
        rounded-3xl transition-colors duration-200
      "
          onClick={() => {
            setTitle("Email Verification");
            setSubTitle2(
              "Please enter the 4-digit verification code sent to your email"
            );
            setConfirm(2);
          }}
        >
          <span className="flex-grow text-center">Continue</span>
          <img src={Arrow} alt="arrow" className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
  const ForgotMailComponent = () => (
    <div className="mt-10 sm:mt-12 md:mt-14">
      <img
        src={watchit}
        className="mx-auto mb-12 sm:mb-16 md:mb-20  sm:w-1/2 "
        alt="Watch it logo"
      />
      <div className="flex items-center bg-gray-800 rounded-lg px-3 md:px-4 py-2 md:py-3 space-x-2 sm:space-x-3 mb-6 w-full max-w-md mx-auto">
        <span className="text-white">
          <img src={MM} alt="Mail icon" className="w-[24px] h-[24px] " />
        </span>
        <span className="text-gray-600">|</span>
        <input
          type="email"
          placeholder="Email Address"
          className="bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none flex-1 px-2 text-sm sm:text-base"
        />
        <span className="text-white">
          <img src={Check} className="w-5 h-5 sm:w-6 sm:h-6" alt="Check icon" />
        </span>
      </div>
    </div>
  );
  const EmailConfirmComponent = () => (
    <div>
      <p className="mt-16 text-[16px] font-Poppins text-white font-bold text-start">
        Send Verification Code to:
      </p>
      <p className="text-[16px] font-Poppins text-gray-400 text-start mt-3">
        example@gmail.com
      </p>
      <div className="flex  justify-around mt-8 mb-20">
        <div className="py-4 px-5 bg-gray-800 rounded-2xl text-white text-[16px]">
          <p>4</p>
        </div>
        <div className="py-4 px-5 bg-gray-800 rounded-2xl text-white">
          <p>3</p>
        </div>
        <div className="py-4 px-5 bg-gray-800 rounded-2xl text-white">
          <p>1</p>
        </div>
        <div className="py-4 px-5 bg-gray-800 rounded-2xl text-white">
          <p>1</p>
        </div>
      </div>
    </div>
  );
  const EmailVerficationComponent = () => (
    <div className="mt-3 px-4 sm:px-8 md:px-11">
      <p className="text-sm md:text-base font-Poppins text-gray-400 text-start md:w-4/5 px-2">
        {mailTitle}
      </p>
      {mailVerify === 0 ? <EmailConfirmComponent /> : <ForgotMailComponent />}
      <button
        className="
      flex items-center justify-between mb-10 sm:mb-16 md:mb-20
      w-full px-4 md:px-8 py-3 md:py-4
      bg-emerald-500 hover:bg-emerald-600
      text-white text-lg sm:text-xl font-medium
      rounded-3xl transition-colors duration-200
    "
        onClick={() => {
          setTitle("Forgot password?");
          setMailTitle(
            "Enter your email below, you will receive an email with a password reset link"
          );
          setMailVerify(1);
          handleRedirect();
        }}
      >
        <span className="flex-grow text-center">Continue</span>
        <img src={Arrow} alt="arrow" className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-custommiddleBlue flex items-center justify-center p-4 sm:px-6 md:px-8 lg:px-52 pb-10 pt-32">
      <div className="w-full max-w-6xl bg-customBlackBlue rounded-[37px] p-4 sm:p-6 md:p-8 flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        {/* Left Column */}
        <div className="w-full md:w-5/12 flex flex-col items-center justify-center bg-customHeavyBlue rounded-[37px] p-4 sm:p-6 text-center md:text-left space-y-6">
          <p className="text-2xl sm:text-[30px] font-Poppins font-bold text-white">
            {title}
          </p>
          
          <div className="w-full">
            {qconfirm === 2 ? (
              <EmailVerficationComponent />
            ) : qconfirm === 1 ? (
              <ConfirmComponent />
            ) : (
              <LoginCompoment />
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-7/12 flex flex-col items-center justify-center rounded-[37px] px-4 sm:px-8 lg:px-28 pt-10 md:pt-20 space-y-4">
          {activeComponent === 1 ? <DefaultSignup /> : <QrSignup />}
        </div>
      </div>
    </div>
  );
}
