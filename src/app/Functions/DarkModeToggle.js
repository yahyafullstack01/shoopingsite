"use client";

import { useDarkMode } from "../Functions/useDarkMode";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700"
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
