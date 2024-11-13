import React from "react";

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-52 py-10">
      <div className="max-w-6xl w-full bg-gray-800 rounded-xl p-6 md:flex md:space-x-6">
        
        {/* Forgot Password Section */}
        <div className="flex flex-col items-center justify-center bg-gray-900 rounded-xl p-6 w-full md:w-5/12 text-center md:text-left space-y-6">
          <h2 className="text-2xl font-semibold text-white">Forgot password?</h2>
          <p className="text-gray-400">Enter your email below, you will receive an email with password reset link.</p>
          
          <div className="w-full flex items-center border border-gray-700 rounded-full p-3 bg-gray-800">
            <span className="text-gray-400 pl-2 pr-4">@</span>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent text-white focus:outline-none placeholder-gray-500"
            />
            <button className="text-gray-400 pr-2 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16.88 3.549L7.12 20.451M16.88 3.549a9 9 0 00-1.38-1.451c-2.63-2.206-7.12.7-7.12.7s-3.093-3.21-.68-6.72a9 9 0 011.38 1.451c2.63 2.206 7.12-.7 7.12-.7s3.093 3.21.68 6.72z"
                />
              </svg>
            </button>
          </div>

          <button className="bg-green-500 hover:bg-green-600 w-full text-white py-3 rounded-full flex justify-center items-center space-x-2">
            <span>Continue</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        {/* QR Code Login Section */}
        <div className="flex flex-col items-center justify-center bg-gray-900 rounded-xl p-6 w-full md:w-7/12 text-center space-y-4">
          <img
            src="https://via.placeholder.com/150"
            alt="QR Code"
            className="w-36 h-36"
          />
          <h2 className="text-white text-xl font-semibold">Login With QR code</h2>
          <p className="text-gray-400">Scan QR code with <span className="text-green-500 font-medium">app</span></p>
          
          <div className="bg-gray-800 rounded-full px-4 py-2 flex items-center space-x-2">
            <span className="text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zM2 10a8 8 0 1016 0A8 8 0 002 10z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M10 6a1 1 0 000 2h1.586L9.293 10.293a1 1 0 101.414 1.414L13 9.414V11a1 1 0 102 0V8a1 1 0 00-1-1h-4z" clipRule="evenodd" />
              </svg>
            </span>
            <a href="https://www.cryptowhale.com" className="text-gray-400 text-sm">https://www.cryptowhale.com</a>
          </div>

          <p className="text-gray-400 text-sm">Whale.io, Trade anything anywhere with Whale.io!</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
