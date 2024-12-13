import { useState, useEffect } from 'react';

// Custom hook for managing dark mode
export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to apply the theme class to the body element
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}