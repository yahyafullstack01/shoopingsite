import Image from "next/image";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header
      className={` flex items-center justify-between px-4 py-4 shadow-md ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/Logo.avif" // Replace with your logo path
          alt="Latore Atelier Logo"
          width={130}
          height={120}
          className={isDarkMode ? "filter invert" : ""} // Invert logo for dark mode
        />
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-6">
        <a href="#" className="hover:opacity-80">
          Home
        </a>
        <a href="#" className="hover:opacity-80">
          Catalogues
        </a>
        <a href="#" className="hover:opacity-80">
          About
        </a>
        <a href="#" className="hover:opacity-80">
          Contact
        </a>
        <a href="#" className="hover:opacity-80">
          Conditions
        </a>
      </nav>

      {/* Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}
