"use client";  
import { ThemeProvider } from "./contexts/ThemeContext";
//import { useDarkMode } from "./Functions/useDarkMode"; // Import the custom hook
import "./globals.css";
export default function RootLayout({ children }) {
 // const [isDarkMode] = useDarkMode(); 

  return (
    <html lang="en">
      <body 
            className="transition-colors min-h-screen"
      >
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
   
  );
}
