"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import translationsData from "../../../public/locales/translations.json";

const LanguageContext = createContext();
const LANG_KEY = "latore_language";

function readSavedLanguage() {
  if (typeof window === "undefined") return null;
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "EN" || saved === "UA") return saved;
  } catch {
    /* ignore */
  }
  return null;
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("EN");
  const [translations] = useState(translationsData);

  const setLanguage = useCallback((next) => {
    setLanguageState((prev) => {
      const value = typeof next === "function" ? next(prev) : next;
      if (value === "EN" || value === "UA") {
        try {
          localStorage.setItem(LANG_KEY, value);
        } catch {
          /* ignore */
        }
        return value;
      }
      return prev;
    });
  }, []);

  // Restore saved language, or detect once via geolocation
  useEffect(() => {
    const saved = readSavedLanguage();
    if (saved) {
      setLanguageState(saved);
      return;
    }

    let cancelled = false;
    const setDefaultLanguage = async () => {
      try {
        const res = await fetch("/api/geolocation");
        if (!res.ok) throw new Error("Failed to fetch geolocation data");
        const data = await res.json();
        if (cancelled) return;
        const detected = data.country === "UA" ? "UA" : "EN";
        setLanguageState(detected);
        try {
          localStorage.setItem(LANG_KEY, detected);
        } catch {
          /* ignore */
        }
      } catch (error) {
        console.error("Failed to fetch geolocation. Defaulting to English.");
      }
    };

    setDefaultLanguage();
    return () => {
      cancelled = true;
    };
  }, []);

  const translateList = useCallback(
    (page, component) => {
      return translations?.[language]?.[page]?.[component];
    },
    [translations, language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translateList }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
