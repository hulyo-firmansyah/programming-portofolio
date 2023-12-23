"use client";

import { LangContextType, LangInterface } from "@/@types/lang";
import { createContext, ReactNode, useState, useEffect } from "react";

export const LangContext = createContext<LangContextType | null>(null);

const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<LangInterface>({
    lang: "in",
  });

  useEffect(() => {
    const lsLang = getLSLang();

    if (lsLang !== null && (lsLang === "in" || lsLang === "eng"))
      setLang({ lang: lsLang });
  }, []);

  const setLSLang = (lang: "eng" | "in") => {
    window.localStorage.setItem("lang", lang);
  };

  const getLSLang = () => window.localStorage.getItem("lang");

  const changeLang = ({ lang }: LangInterface) => {
    setLSLang(lang);
    setLang({
      lang: lang,
    });
  };

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;
