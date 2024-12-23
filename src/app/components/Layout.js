import { useDarkMode } from "../Functions/useDarkMode"; 
import { LanguageProvider } from "../Functions/useLanguage"; 
import Header from "./Header/Header"; 
import Footer from "./Footer/Footer"; 

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useDarkMode(); 

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
