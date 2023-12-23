import { Fragment, useContext, useState } from "react";
import LANG_SELECTOR from "../lang/lang";
import { LangContext } from "../context/langContext";
import { LangContextType } from "@/@types/lang";

const DisplayTitleText = () => {
  const { lang } = useContext(LangContext) as LangContextType;
  const [wordlist] = useState<(typeof LANG_SELECTOR)["eng"]>(
    LANG_SELECTOR[`${lang.lang}`]
  );

  return (
    <Fragment>
      <h1 className="text-4xl font-bold">{wordlist.name}</h1>
      <h2 className="mt-3 text-lg">{wordlist.subtitle}</h2>
      <p className="mt-3 text-gray-400">{wordlist.shortdesc}</p>
    </Fragment>
  );
};

export default DisplayTitleText;
