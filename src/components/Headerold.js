import React from "react";
import logo from "../assets/Logo.png";
import vector from "../assets/Vector.png";
function Header() {
  return (
    <header className="flex items-center bg-customBlue h-[99px] fixed top-0 left-0 w-full">
      <div className="container mx-auto flex justify-start items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 w-[125px] h-[40px]">
          <div className="rounded-full w-6 h-6 flex items-center justify-center">
            <span className="text-white text-xl font-bold">
              <img src={logo} alt="Logo" />
            </span>
          </div>
          <span className="text-white text-xl font-semibold">Whale.</span>
        </div>
        {/* Menu */}
        <div className="flex justify-between">
          <nav className="hidden md:flex space-x-6 text-white">
            <img src={vector} alt="Vector" />
            <a href="#buy-crypto" className="hover:text-gray-400">
              Buy Crypto
            </a>
            <a href="#market" className="hover:text-gray-400">
              Market
            </a>
            <a href="#nft" className="relative hover:text-gray-400">
              NFT
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                New
              </span>
            </a>
            <a href="#promotion" className="hover:text-gray-400">
              Promotion
            </a>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#blog" className="hover:text-gray-400">
              Blog
            </a>
          </nav>

          {/* Language Selector */}
          <div className="flex items-center space-x-2 ">
            <img
              src="https://flagcdn.com/w320/gb.png"
              alt="English"
              className="w-6 h-6"
            />
            <span className="text-white">English</span>
            <button className="text-white focus:outline-none">▼</button>
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden flex justify-center mt-4">
        <button className="text-white focus:outline-none">☰</button>
      </div>
    </header>
  );
}

export default Header;
