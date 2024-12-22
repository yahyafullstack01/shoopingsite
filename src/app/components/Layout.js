import { useDarkMode } from "../Functions/useDarkMode"; // Import the custom hook
import { LanguageProvider } from "../Functions/useLanguage"; // Import LanguageProvider
import Header from "./Header/Header"; // Import the Header component
import Footer from "./Footer/Footer"; // Import the Footer component

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useDarkMode(); // Use the dark mode state

  return (
    <LanguageProvider>
      <div
        className={`${
          isDarkMode ? "dark bg-black text-white" : "light bg-white text-black"
        } transition-colors min-h-screen`}
      >
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main>{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
