import { LangContextType } from "@/@types/lang";
import { LangContext } from "@/app/context/langContext";
import LANG_SELECTOR from "@/app/lang/lang";
import { useContext, useState } from "react";

const AboutSection = () => {
  const { lang } = useContext(LangContext) as LangContextType;
  const [wordlist] = useState<any>(LANG_SELECTOR[`${lang.lang}`]);

  return (
    <section id="about" data-section className="pb-28 lg:pb-44 pt-28">
      <div className="font-bold uppercase text-sm tracking-widest mb-7 lg:hidden">
        {wordlist.navigator[0].text}
      </div>
      <div className="text-gray-400 flex flex-col gap-5 tracking-wide">
        {wordlist.aboutDesc.map((v: any, i: any) => (
          <p key={i}>{v}</p>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
