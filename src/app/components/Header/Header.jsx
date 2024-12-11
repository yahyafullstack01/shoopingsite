// components/Header.js
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-0 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.svg" // Replace with your logo path
          alt="Latore Atelier Logo"
          width={30}
          height={30}
        />
        <span className="ml-2 text-lg font-semibold">Latore Atelier</span>
      </div>

      {/* Cart Icon */}
      <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-200">
        <Image
          src="/cart-icon.svg" // Replace with your cart icon path
          alt="Cart Icon"
          width={20}
          height={20}
        />
      </button>
    </header>
  );
}
