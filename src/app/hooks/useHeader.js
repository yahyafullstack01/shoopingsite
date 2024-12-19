// hooks.js
import { useState } from "react";
import { useLanguage } from "../Functions/useLanguage";

export function useHeaderState() {
  const { language, setLanguage, translateList } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = translateList("home", "header") || [];

  const toggleLanguage = () => {
    const newLanguage = language === "EN" ? "FR" : "EN";
    setLanguage(newLanguage);
    localStorage.setItem("appLanguage", newLanguage);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return {
    language,
    menuItems,
    isMenuOpen,
    toggleLanguage,
    toggleMenu,
    closeMenu,
  };
}
