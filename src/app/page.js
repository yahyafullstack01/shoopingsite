"use client"; // Ensure this is a client-side component

import { useDarkMode } from "./Functions/useDarkMode"; // Import the custom hook
import Header from "./components/Header/Header"; // Import the Header component
import Home from "./pages/index"; // Import the Home component

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useDarkMode(); // Use the dark mode state

  return (
    <div
      className={`${ 
        isDarkMode ? "dark bg-black text-white" : "light bg-white text-black"
      } transition-colors min-h-screen `} //container mx-auto p-4  the Css was like that 
    >
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main>
        {/* Your page content */}
        <Home />
        {/* Other page content */}
      </main>
    </div>
  );
}
