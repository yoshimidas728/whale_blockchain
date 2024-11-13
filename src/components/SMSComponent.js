import React from "react";

const SMSVerificationOption = ({ phoneNumber }) => {
  const maskPhoneNumber = (number) => {
    return number.replace(/(\+\d{1,3}\s\d{3})\s\d{3}/, "$1 ***");
  };

  return (
    <div className="flex items-center space-x-4 bg-gray-800 rounded-2xl p-4 w-full max-w-sm mb-5">
      <div className="h-5 w-5 border-2 border-gray-400 rounded-full"></div>
      <div>
        <p className="text-white text-sm font-semibold">Get the code by (SMS) at :</p>
        <p className="text-gray-400 text-lg">{maskPhoneNumber(phoneNumber)}</p>
      </div>
    </div>
  );
};

export default SMSVerificationOption;
