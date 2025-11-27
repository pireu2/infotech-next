"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/getDictionary";

interface LanguageContextType {
  locale: Locale;
  toggleLanguage: () => void;
  dictionary: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
  locale: Locale;
  dictionary: Dictionary;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  locale,
  dictionary,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ro" : "en";
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
};
