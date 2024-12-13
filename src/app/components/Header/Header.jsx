"use client";
import Image from "next/image";
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from '../../Functions/useDarkMode'; // Import the custom hook

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useDarkMode(); // Use the custom hook

  return (
    <header
      className={`flex items-center justify-between px-4 py-4 shadow-md ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-700'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/Logo.avif" // Replace with your logo path
          alt="Latore Atelier Logo"
          width={130}
          height={120}
        />
      </div>

      {/* Navigation and Icons */}
      <div className="flex items-center justify-center space-x-6 w-full ml-16">
        {/* Navigation Bar */}
        <nav className="flex items-center space-x-6">
          <a href="#" className={`hover:text-gray-900 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Home</a>
          <a href="#" className={`hover:text-gray-900 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Catalogues</a>
          <a href="#" className={`hover:text-gray-900 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>About</a>
          <a href="#" className={`hover:text-gray-900 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Contact</a>
          <a href="#" className={`hover:text-gray-900 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Conditions</a>
        </nav>
      </div>

      {/* Cart and Theme Toggle */}
      <div className="flex items-center space-x-4">
        {/* Cart Icon */}
        <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-200">
          <Image
            src="/cart-icon.svg" // Replace with your cart icon path
            alt="Cart Icon"
            width={20}
            height={20}
          />
        </button>

        {/* Theme Toggle Button */}
        <button
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
}
