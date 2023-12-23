import { useContext, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { LangContext } from "@/app/context/langContext";
import { LangContextType } from "@/@types/lang";
import LANG_SELECTOR from "@/app/lang/lang";

const ExperienceSection = () => {
  const { lang } = useContext(LangContext) as LangContextType;
  const [wordlist] = useState<any>(LANG_SELECTOR[`${lang.lang}`]);

  return (
    <section className="text-gray-400 pb-28" id="work-experience" data-section>
      <div className="font-bold uppercase text-sm tracking-widest mb-7 text-gray-100 lg:hidden">
        {wordlist.navigator[1].text}
      </div>
      {wordlist.experiences.map((v: any, i: any) => (
        <ExperienceCard key={i} {...v} />
      ))}
    </section>
  );
};

export default ExperienceSection;
