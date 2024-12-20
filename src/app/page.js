"use client"; // Ensure this is a client-side component

import { useDarkMode } from "./Functions/useDarkMode"; // Import the custom hook
import { LanguageProvider } from "./Functions/useLanguage"; // Import LanguageProvider
import Header from "./components/Header/Header"; // Import the Header component
import Home from "./home"; // Import the Home component
import Footer from "./components/Footer/Footer";

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useDarkMode(); // Use the dark mode state

  return (
    <LanguageProvider>
      <div
        className={`${
          isDarkMode ? "dark bg-black text-white" : "light bg-white text-black"
        } transition-colors min-h-screen`}
      >
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <main>
          {/* Your page content */}
          <Home />
          {/* Other page content */}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
