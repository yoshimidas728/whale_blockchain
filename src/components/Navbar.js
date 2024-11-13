import React, { useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import logo from "../assets/Logo.png";
import vector from "../assets/Vector.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Buy Crypto", href: "#" },
    { name: "Market", href: "#" },
    { name: "NFT", href: "#", badge: "New" },
    { name: "Promotion", href: "#" },
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <nav className="bg-customBlue text-white h-[99px] flex items-center pl-32 fixed top-0 w-full gap-[20rem]">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 gap-20 ">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-9">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" />
              <span className="font-bold text-xl">Whale.</span>
            </div>
            <img src={vector} alt="vector" />
          </div>

          <div className="flex items-center gap-x-72 ">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  {item.name}
                  {item.badge && (
                    <span className="absolute -top-[0.5rem] -right-[0.9rem] bg-[#ff6b4a] text-white text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Language Selector */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center ml-4 justify-end">
        <button className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
          <Flag code="GB" className="w-6 h-6" />
          <span>English</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              {item.name}
              {item.badge && (
                <span className="ml-2 bg-orange-500 text-white text-xs px-1.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
          <button className="w-full text-left flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            <Globe className="w-4 h-4" />
            <span>English</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
