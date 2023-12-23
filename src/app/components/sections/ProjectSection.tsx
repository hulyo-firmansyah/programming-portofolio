import { useContext, useState } from "react";
import ProjectCard from "./ProjectCard";
import { LangContext } from "@/app/context/langContext";
import { LangContextType } from "@/@types/lang";
import LANG_SELECTOR from "@/app/lang/lang";

const ProjectSection = () => {
  const { lang } = useContext(LangContext) as LangContextType;
  const [wordlist] = useState<any>(LANG_SELECTOR[`${lang.lang}`]);

  return (
    <section data-section id="project" className="pb-28">
      <div className="font-bold uppercase text-sm tracking-widest mb-7 text-gray-100 lg:hidden">
        {wordlist.navigator[2].text}
      </div>
      <div className="">
        {wordlist.projects.map((v: any, i: any) => (
          <ProjectCard key={i} {...v} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
