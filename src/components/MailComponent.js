import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

const EmailVerificationOption = ({ email }) => {
  const maskEmail = (email) => {
    const [localPart, domain] = email.split("@");
    const maskedLocal = localPart.slice(0, 2) + "*".repeat(localPart.length - 4) + localPart.slice(-2);
    return `${maskedLocal}@${domain}`;
  };

  return (
    <div className="flex items-center space-x-4 bg-gray-800 rounded-2xl p-4">
      <FaRegDotCircle className="text-green-500 text-xl" />
      <div>
        <p className="text-white text-sm font-semibold">Get the code by email at :</p>
        <p className="text-gray-400 text-lg">{maskEmail(email)}</p>
      </div>
    </div>
  );
};

export default EmailVerificationOption;
