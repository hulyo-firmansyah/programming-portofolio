import { useContext, useState } from "react";
import NavigationItem from "./NavigationItem";
import { LangContext } from "../context/langContext";
import { LangContextType } from "@/@types/lang";
import LANG_SELECTOR from "../lang/lang";

export type Navigation = {
  text: string;
  link: string;
};

const Navigation = ({ currentActive }: { currentActive: string }) => {
  const { lang } = useContext(LangContext) as LangContextType;
  const [wordlist] = useState<any>(LANG_SELECTOR[`${lang.lang}`]);

  const [navigations] = useState<Navigation[]>(wordlist.navigator);

  return (
    <ul className="mt-20 uppercase font-semibold text-xs hidden lg:block">
      {navigations.map((v, i) => (
        <NavigationItem
          key={i}
          active={v.link.includes(currentActive)}
          {...v}
        />
      ))}
    </ul>
  );
};

export default Navigation;
