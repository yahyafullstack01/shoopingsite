
"use client"; 
import Head from "next/head";
 import React, {useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMoon, FaSun, FaBars, FaTimes, FaChevronDown,FaHeart } from "react-icons/fa";
import { useHeaderState } from "../../hooks/useHeader"; 
import { useLanguage } from "../../Functions/useLanguage"; 
import { useRouter } from "next/navigation"
import CartIcon from "../CartIcon/CartIcon"; 
const Header = React.memo(({ isDarkMode, toggleDarkMode }) => {
  const { translateList, language, setLanguage } = useLanguage();
  const menuItems = translateList("home", "header");
 

 const toggleLanguage = () => {
  setLanguage((prevLanguage) => (prevLanguage === "EN" ? "UA" : "EN"));
};

  const [isDesktopCategoriesOpen, setIsDesktopCategoriesOpen] = useState(false);
const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const toggleCategories = (e) => {
    e.stopPropagation(); // Запобігає переходу при натисканні на іконку
    setIsCategoriesOpen((prev) => !prev);
  };
  
  const goToCatalog = () => {
    router.push("/All-products", { scroll: true });
  };
  const { isMenuOpen, toggleMenu, closeMenu } = useHeaderState();
  const router = useRouter();

  const categories = [
    { name: menuItems[5], path: "" }, 
    { name: menuItems[6], path: "costumes" },
    { name: menuItems[7], path: "dresses" },
    {name: menuItems[8], path: "Shirts"},
    { name: menuItems[9], path: "skirts" },
    { name: menuItems[10], path: "sweaters" },
    { name: menuItems[11], path: "pants" },
    { name: menuItems[12], path: "jackets" },
    { name: menuItems[13], path: "tops" },
    { name: menuItems[14], path: "outerwear" },
    {name: menuItems[15], path: "shorts"}
];
const [count, setCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      const favorites = JSON.parse(stored);
      setCount(favorites.length);
    }

    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem('favorites') || '[]');
      setCount(updated.length);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  const handleCategoryClick = (categoryPath) => {
    router.push(`/All-products?category=${categoryPath}`, { scroll: true });
    setIsCategoriesOpen(false);
    closeMenu();
  };
 const catalogRef = useRef();
const desktopCatalogRef = useRef();
const mobileCatalogRef = useRef();

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      desktopCatalogRef.current &&
      !desktopCatalogRef.current.contains(event.target)
    ) {
      setIsDesktopCategoriesOpen(false);
    }

    if (
      mobileCatalogRef.current &&
      !mobileCatalogRef.current.contains(event.target)
    ) {
      setIsMobileCategoriesOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  return (
    <header className={`flex items-center justify-between px-4 py-1 shadow-md
      ${isDarkMode ? "bg-black text-white shadow-gray-800" : "bg-white text-black shadow-gray-300"}`} role="banner">
         <div className="flex-shrink-0 ml-0 sm:ml-8">
           <Head>
             <link rel="preload" as="image" href="/light-logo.avif" type="image/avif" media="(max-width: 480px)" />
           </Head>
           <Link href="/" aria-label="Home">
             <h1 className="sr-only">Latore Atelier</h1>
             <Image
               src="/light-logo.avif"
               alt="Latore Atelier Logo – High-Quality Clothing"
               width={128}
               height={69}
               quality={90}
               sizes="(max-width: 480px) 50px, (max-width: 768px) 80px, (max-width: 1200px) 100px, 128px"
               className={`w-16 h-auto sm:w-24 md:w-32 lg:w-40 ${isDarkMode ? "filter invert" : ""}`}
               priority
             />
           </Link>
         </div>
         <div className="flex items-center space-x-4 lg:hidden">
            <Link href="/favorites" aria-label="Go to Favorites">
    <div className="relative p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300">
      <FaHeart className="text-gray-900 dark:text-gray-300" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
          {count}
        </span>
      )}
    </div>
  </Link>
           <button
             onClick={toggleMenu}
             aria-label="Open Menu"
             aria-expanded={isMenuOpen ? "true" : "false"}
             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
           >
             <FaBars className="sm:xl md:text-2xl lg:text-3xl" />
           </button>
        
          <CartIcon />
       
          
         </div>
   
        
         <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-4 lg:space-x-6">
           <ul className="flex space-x-4 text-xs sm:text-sm md:text-base lg:text-lg" role="menubar">
             <li className="min-w-[80px] text-center" role="menuitem">
               <Link href="/" aria-label={`Go to ${menuItems[0]} page`}>
                 {menuItems[0]}
               </Link>
             </li>
           <li className="relative hidden lg:block" role="menuitem" ref={desktopCatalogRef}>
  <div className="flex items-center">
    <button
      onClick={() => setIsDesktopCategoriesOpen((prev) => !prev)}
      className="flex-grow text-left"
      aria-haspopup="true"
      aria-expanded={isDesktopCategoriesOpen}
    >
      {menuItems[1]}
    </button>
    <FaChevronDown className={`ml-1 transition-transform ${isDesktopCategoriesOpen ? "rotate-180" : ""}`} />
  </div>

  {isDesktopCategoriesOpen && (
    <ul
      className="absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 rounded-md shadow-md p-2 w-48 z-50"
      role="menu"
    >
      {categories.map((category) => (
        <li key={category.path} role="menuitem">
          <button
            onClick={() => handleCategoryClick(category.path)}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md"
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  )}
</li>



             <li className="min-w-[80px] text-center" role="menuitem">
               <Link href="/#about" aria-label={`Learn more ${menuItems[2]}`}>
                 {menuItems[2]}
               </Link>
             </li>
             <li className="min-w-[80px] text-center" role="menuitem">
               <Link href="/contact" aria-label={`Go to ${menuItems[3]} page`}>
                 {menuItems[3]}
               </Link>
             </li>
             <li className="min-w-[80px] text-center" role="menuitem">
               <Link href="/Conditions" aria-label={`View ${menuItems[4]}`}>
                 {menuItems[4]}
               </Link>
             </li>
           </ul>
         </nav>
   
         <div className="hidden lg:flex items-center space-x-2">
          
         
            <Link href="/favorites" aria-label="Go to Favorites">
    <div className="relative p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300">
      <FaHeart className="text-gray-900 dark:text-gray-300" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
          {count}
        </span>
      )}
    </div>
  </Link>
     <button
  onClick={toggleLanguage}
  aria-label="Toggle Language"
  className=" p-1 sm:p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-700 transition text-[11px] sm:text-sm font-semibold flex items-center justify-center"
>
  {language === "EN" ? "EN 🇬🇧" : "UA 🇺🇦"}
</button>

   
           <button
             onClick={() => toggleDarkMode(!isDarkMode)}
             aria-label="Toggle Dark Mode"
             className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
           >
             {isDarkMode ? <FaSun className="text-xs sm:text-sm md:text-base lg:text-lg" /> : <FaMoon className="text-xs sm:text-sm md:text-base lg:text-lg" />}
           </button>
           <CartIcon />
         </div>
   
         {isMenuOpen && (
           <div
             className="fixed inset-0 bg-black opacity-50 z-40"
             aria-hidden="true"
             onClick={closeMenu}
             role="presentation"
           ></div>
         )}
   
         <nav
           className={`${isMenuOpen ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 h-full w-1/2 sm:w-1/3 bg-white dark:bg-black shadow-lg z-50 transition-transform duration-300 ease-in-out lg:hidden`}
           aria-label="Mobile Menu"
         >
           <button
             onClick={closeMenu}
             aria-label="Close Menu"
             className="absolute top-4 right-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500"
           >
             <FaTimes />
           </button>
   
           <div className="flex items-center justify-start space-x-4 px-6 py-4 border-b border-gray-300 dark:border-gray-600">
             <button
               onClick={toggleLanguage}
               aria-label={`Switch language, current language is ${language}`}
               className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center"
             >
                {language === "EN" ? "🇬🇧 EN" : "🇺🇦 UA"}
             </button>
             <button
               onClick={() => toggleDarkMode(!isDarkMode)}
               aria-label="Toggle Dark Mode"
               className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
             >
               {isDarkMode ? <FaSun className="text-xs sm:text-sm md:text-base lg:text-lg" /> : <FaMoon className="text-xs sm:text-sm md:text-base lg:text-lg" />}
             </button>
           </div>
   
           <ul className="flex flex-col items-start space-y-4 p-6 text-xs sm:text-sm md:text-base lg:text-lg" role="menubar">
           <li className="text-center" role="menuitem">
               <Link href="/" aria-label={`Go to ${menuItems[0]} page`}>
                 {menuItems[0]}
               </Link>
             </li>
            <li className="relative block lg:hidden" role="menuitem" ref={mobileCatalogRef}>
  <button
    onClick={() => setIsMobileCategoriesOpen((prev) => !prev)}
    className="flex items-center justify-between w-full text-left"
    aria-haspopup="true"
    aria-expanded={isMobileCategoriesOpen}
  >
    {menuItems[1]}
    <FaChevronDown className={`ml-1 transition-transform ${isMobileCategoriesOpen ? "rotate-180" : ""}`} />
  </button>

  {isMobileCategoriesOpen && (
    <ul
      className="absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 rounded-md shadow-md p-2 w-48 z-50"
      role="menu"
    >
      {categories.map((category) => (
        <li key={category.path} role="menuitem">
          <button
            onClick={() => handleCategoryClick(category.path)}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md"
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  )}
</li>

             <li className="text-center" role="menuitem">
               <Link href="/#about" aria-label={`Learn more about ${menuItems[2]}`}>
                 {menuItems[2]}
               </Link>
             </li>
             <li className="text-center" role="menuitem">
               <Link href="/contact" aria-label={`Navigate to ${menuItems[3]} page`}>
                 {menuItems[3]}
               </Link>
             </li>
             <li className="text-center" role="menuitem">
               <Link href="/Conditions" aria-label={`View terms and conditions on the ${menuItems[4]} page`}>
                 {menuItems[4]}
               </Link>
             </li>
           </ul>
         </nav>
       </header>
     );
   });
   
   Header.displayName = "Header";
   
   export default Header;
   