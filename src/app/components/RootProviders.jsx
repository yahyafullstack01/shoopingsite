"use client";

import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../Functions/useLanguage";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootProviders({ children }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ErrorBoundary>{children}</ErrorBoundary>
      </LanguageProvider>
      <SpeedInsights />
    </ThemeProvider>
  );
}
