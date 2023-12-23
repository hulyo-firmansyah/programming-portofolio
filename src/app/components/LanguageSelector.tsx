import { LangContextType } from "@/@types/lang";
import { useContext } from "react";
import { LangContext } from "../context/langContext";

const LanguageSelector = () => {
  const { changeLang } = useContext(LangContext) as LangContextType;

  const changeLangHandler = (lang: "in" | "eng") => {
    changeLang({
      lang,
    });
  };

  return (
    <div className="text-xs text-gray-400 mt-5 tracking-wide uppercase divide-x divide-gray-400">
      <span
        onClick={() => changeLangHandler("in")}
        className="hover:text-gray-100 transition-colors ease-in cursor-pointer pr-3"
      >
        Indonesia
      </span>
      <span
        onClick={() => changeLangHandler("eng")}
        className="hover:text-gray-100 transition-colors ease-in cursor-pointer pl-3"
      >
        English
      </span>
    </div>
  );
};

export default LanguageSelector;
