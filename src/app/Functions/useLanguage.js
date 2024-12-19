import { useState, useEffect, createContext, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("EN");
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      const res = await fetch("/locales/translations.json");
      const data = await res.json();
      setTranslations(data);
    };
    fetchTranslations();
  }, []);

  const translateList = (page, component) => {
    const result = translations[language]?.[page]?.[component];
    return result || [];
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