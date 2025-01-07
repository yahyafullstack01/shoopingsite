"use client"; 
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useHeaderState } from "../../hooks/useHeader"; 
import { useLanguage } from "../../Functions/useLanguage"; 


const Header = React.memo(({ isDarkMode, toggleDarkMode }) => {
  const { translateList, language, setLanguage } = useLanguage(); // Access the language context
  const menuItems = translateList("home", "header");
  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "EN" ? "FR" : prevLanguage === "FR" ? "UA" : "EN"
    );
  };
  
  const {
    isMenuOpen,
    toggleMenu,
    closeMenu,
  } = useHeaderState();
   {/*useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    console.log("Dark mode in localStorage:", darkMode);
    console.log("HTML class on load:", document.documentElement.className);
  }, []);
  
 */}
  return (
    <>
      <header
        className={`flex items-center justify-between px-4 py-1 shadow-md ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        } `}
      >
        <div className="flex-shrink-0 ml-0 sm:ml-8">
          <Link href="/">
            <Image
            src="/light-logo.avif"
            alt="Latore Atelier Logo"
            href="/"
            width={180}
            height={160}
            quality={100}
            className={`${
              isDarkMode ? "filter invert" : ""
            } w-[80px] h-[60px] sm:w-[80px] sm:h-[60px] md:w-[80px] md:h-[60px] lg:w-[120px] lg:h-[80px]`}
          />
          </Link>
          
        </div>
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-full  hover:bg-gray-200 dark:hover:bg-gray-700`}
          >
            <FaBars className="sm:xl md:text-2xl lg:text-3xl" />
          </button>
          <ul className="hidden lg:flex space-x-4 text-xs sm:text-sm md:text-base lg:text-lg">
          <li className="min-w-[80px] text-center">
      <Link
        href="/"
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
        {menuItems[0]}
      </Link>
    </li>
    <li className="min-w-[80px] text-center">
      <a
        href="/All_products"
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
        {menuItems[1]}
      </a>
    </li>
    <li className="min-w-[80px] text-center">
      <a
        href="/#about"
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
       {menuItems[2]}
      </a>
    </li>
    <li className="min-w-[80px] text-center">
      <Link
        href="/contact"
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
        {menuItems[3]}
      </Link>
    </li>
    
    <li className="min-w-[80px] text-center">
      <Link
        href="/Conditions"
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
        {menuItems[4]}
      </Link>
    </li>
          </ul>
        </nav>
        <div className="hidden lg:flex items-center space-x-2">
          <button
            onClick={toggleLanguage}
            className="p-1 sm:p-2  rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center"
          >
           
           {language === "EN" ? "🇬🇧 EN" : language === "FR" ? "🇫🇷 FR" : "🇺🇦 UA"}
            </button>
          <button
            onClick={() => toggleDarkMode(!isDarkMode)}
            className="p-1 sm:p-2  rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
          >
            {isDarkMode ? (
              <FaSun className="text-xs sm:text-sm md:text-base lg:text-lg" />
            ) : (
              <FaMoon className="text-xs sm:text-sm md:text-base lg:text-lg" />
            )}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
      <nav
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 h-full w-1/2 sm:w-1/3 bg-white dark:bg-black shadow-lg z-50 transition-transform duration-300 ease-in-out lg:hidden justify-start space-y-4`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500"
        >
          <FaTimes />
        </button>
        <div className="flex items-center justify-start space-x-4 px-6 py-4 border-b border-gray-300 dark:border-gray-600">
          <button
            onClick={toggleLanguage}
            className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center"
          >
            {language === "EN" ? "🇬🇧 EN" : language === "FR" ? "🇫🇷 FR" : "🇺🇦 UA"}
           </button>
          <button
            onClick={() => toggleDarkMode(!isDarkMode)}
            className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
          >
            {isDarkMode ? (
              <FaSun className="text-xs sm:text-sm md:text-base lg:text-lg" />
            ) : (
              <FaMoon className="text-xs sm:text-sm md:text-base lg:text-lg" />
            )}
          </button>
        </div>
        <ul className="flex flex-col items-start space-y-4 p-6 text-xs sm:text-sm md:text-base lg:text-lg">
        <li className=" text-center">
      <Link
        href="/"
        className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
        {menuItems[0]}
      </Link>
    </li>
    <li className=" text-center">
      <a
        href="/All_products"
        className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
        {menuItems[1]}
      </a>
    </li>
    <li className="text-center">
      <a
        href="/#about"
        className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
       {menuItems[2]}
      </a>
    </li>
    <li className="text-center">
      <Link
        href="/contact"
        className=" font-bold text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
        {menuItems[3]}
      </Link>
    </li>
    <li className="text-center">
      <Link
        href="/"
        className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
       {menuItems[4]}
      </Link>
    </li>
    <li className="text-center">
      <Link
        href="/"
        className="font-bold text-base sm:text-lg md:text-xl lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
       {menuItems[5]}
      </Link>
    </li>
        </ul>
      </nav>
    </>
  );
});
Header.displayName = "Header";

export default Header;
