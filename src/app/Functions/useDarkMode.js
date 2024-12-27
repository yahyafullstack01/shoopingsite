"use client";

import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Статичне значення на сервері

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setIsDarkMode(savedMode === "true");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;

      if (isDarkMode) {
        root.classList.add("dark");
        root.classList.remove("light");
      } else {
        root.classList.add("light");
        root.classList.remove("dark");
      }

      localStorage.setItem("darkMode", isDarkMode);
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}

{/*
import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
 
 useEffect(() => {
 const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [isDarkMode]);
  return [isDarkMode, setIsDarkMode];
}
  */}
  {/*
import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Початкове значення

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setIsDarkMode(savedMode === "true");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;

      if (isDarkMode) {
        root.classList.add("dark");
        root.classList.remove("light");
      } else {
        root.classList.add("light");
        root.classList.remove("dark");
      }

      localStorage.setItem("darkMode", isDarkMode);
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}
*/}