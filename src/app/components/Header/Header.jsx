"use client"; 
import React from "react";
import Image from "next/image";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useHeaderState } from "../../hooks/useHeader"; // Імпортуємо хук
import { useLanguage } from "../../Functions/useLanguage"; 

const Header = React.memo(({ isDarkMode, setIsDarkMode }) => {
  const {  translateList } = useLanguage(); 
  const menuItems = translateList("home", "header");

  const {
    language,
    isMenuOpen,
    toggleLanguage,
    toggleMenu,
    closeMenu,
  } = useHeaderState();

  return (
    <>
      <header
        className={`flex items-center justify-between px-4 py-3 shadow-md ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex-shrink-0">
          <Image
            src="/light-logo.avif"
            alt="Latore Atelier Logo"
            width={100}
            height={80}
            quality={100}
            className={`${
              isDarkMode ? "filter invert" : ""
            } sm:w-[120px] sm:h-[90px] md:w-[140px] md:h-[100px] lg:w-[160px] lg:h-[120px]`}
          />
        </div>
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <button
            onClick={toggleMenu}
            className="lg:hidden p-1 sm:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FaBars className="text-sm sm:text-base md:text-2xl lg:text-3xl" />
          </button>
          <ul className="hidden lg:flex space-x-4 text-xs sm:text-sm md:text-base lg:text-lg">
          <li className="min-w-[80px] text-center">
      <a
        href="/"
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
        {menuItems[0]}
      </a>
    </li>
    <li className="min-w-[80px] text-center">
      <a
        href="/about"
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
        {menuItems[1]}
      </a>
    </li>
    <li className="min-w-[80px] text-center">
      <a
        href="/services"
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
       {menuItems[2]}
      </a>
    </li>
    <li className="min-w-[80px] text-center">
      <a
        href="/contact"
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
        {menuItems[3]}
      </a>
    </li>
          </ul>
        </nav>
        <div className="hidden lg:flex items-center space-x-2">
          <button
            onClick={toggleLanguage}
            className="p-1 sm:p-2 md:p-3 lg:p-4 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center"
          >
            {language === "EN" ? (
              <span>
                <strong>EN</strong> | FR
              </span>
            ) : (
              <span>
                EN | <strong>FR</strong>
              </span>
            )}
          </button>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1 sm:p-2 md:p-3 lg:p-4 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
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
        } fixed top-0 left-0 h-full w-3/4 bg-white dark:bg-black shadow-lg z-50 transition-transform duration-300 ease-in-out lg:hidden`}
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
            {language === "EN" ? (
              <span>
                <strong>EN</strong> | FR
              </span>
            ) : (
              <span>
                EN | <strong>FR</strong>
              </span>
            )}
          </button>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
          >
            {isDarkMode ? (
              <FaSun className="text-xs sm:text-sm md:text-base lg:text-lg" />
            ) : (
              <FaMoon className="text-xs sm:text-sm md:text-base lg:text-lg" />
            )}
          </button>
        </div>
        <ul className="flex flex-col items-start space-y-3 p-6 text-xs sm:text-sm md:text-base lg:text-lg">
        <li className="min-w-[80px] text-center">
      <a
        href="/"
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
        {menuItems[0]}
      </a>
    </li>
    <li className="min-w-[80px] text-center">
      <a
        href="/about"
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
        {menuItems[1]}
      </a>
    </li>
    <li className="min-w-[80px] text-center">
      <a
        href="/services"
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
       {menuItems[2]}
      </a>
    </li>
    <li className="min-w-[80px] text-center">
      <a
        href="/contact"
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap"
      >
        {menuItems[3]}
      </a>
    </li>
        </ul>
      </nav>
    </>
  );
});
Header.displayName = "Header";

export default Header;
