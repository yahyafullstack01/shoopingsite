// Functions/useLanguage.js
import { useState } from "react";

export function useLanguage() {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "FR" : "EN"));
  };

  return { language, toggleLanguage };
}
