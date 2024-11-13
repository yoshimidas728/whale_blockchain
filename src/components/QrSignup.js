import React from "react";
import Qr from "../assets/signup/Qrcode2.png";
import { Lock } from "lucide-react";

export default function QrSignup() {
  return (
    <div className="mt-24  ">
      <img
        src={Qr}
        className="mx-auto w-3/4  "
        alt="QR Code"
      />
      <div className="text-center mt-4 sm:mt-6">
        <p className="text-lg sm:text-xl md:text-2xl font-Poppins font-bold text-white">
          Log in with QR Code
        </p>
        <p className="text-sm sm:text-base md:text-lg font-Poppins text-white mt-2">
          Scan QR Code with
          <span className="text-customgreen ml-1">app</span>
        </p>
      </div>
      <div className="flex items-center gap-2 bg-gray-800 rounded-[1em] px-3 py-2 mx-auto mt-8 sm:mt-10  ">
        <div className="flex items-center justify-center bg-emerald-500 rounded-full p-1">
          <Lock className="w-4 h-4 text-white" />
        </div>
        <div className="flex items-center text-sm sm:text-base text-center">
          <span className="text-emerald-500">https://</span>
          <span className="text-white text-center">www.cryptowhale.com</span>
        </div>
      </div>
      <div className="text-center mt-12 sm:mt-16 md:mt-20">
        <p className="text-xs sm:text-sm md:text-base font-Poppins text-zinc-500">
          Whale.io, Trade anything anywhere
          <br />
          with Whale.io
        </p>
      </div>
    </div>
  );
}
