// src/app/Functions/LanguageContext.js
import { useState, useContext, createContext } from "react";
import translations from "../locales/translations.json";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("EN");

  const translateList = (page, component) => {
    return translations[language]?.[page]?.[component] || [];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translateList }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}