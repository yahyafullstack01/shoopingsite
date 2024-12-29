import { useState, useEffect, createContext, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("EN");
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    // Load translations
    const fetchTranslations = async () => {
      const res = await fetch("/locales/translations.json");
      const data = await res.json();
      setTranslations(data);
    };
    fetchTranslations();
  }, []);
  
  useEffect(() => {
    // Detect user's location and set default language
    const setDefaultLanguage = async () => {
      try {
        const res = await fetch(" https://ipapi.co/8.8.8.8/json/"); // Free IP geolocation API
        // const res = await fetch("https://ipwhois.app/json/");
        // const res = await fetch("http://ip-api.com/json/");

        const data = await res.json();

        if (data.country === "UA") {
          setLanguage("UA"); // Ukrainian
        } else if (data.country === "FR") {
          setLanguage("FR"); // French
        } else {
          setLanguage("EN"); // Default to English
        }
      } catch (error) {
        console.error("Failed to detect location. Defaulting to English.", error);
      }
    };

    setDefaultLanguage();
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
