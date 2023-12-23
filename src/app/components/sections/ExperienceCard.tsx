import LANG_SELECTOR from "@/app/lang/lang";

const ExperienceCard = (
  props: (typeof LANG_SELECTOR)["in"]["experiences"][0]
) => (
  <a
    href={props.link}
    className="lg:grid lg:grid-cols-12 gap-8 lg:hover:bg-slate-800 lg:p-9 rounded-md lg:hover:bg-opacity-45 lg:hover:shadow-lg lg:border border-gray-700 lg:hover:border-t lg:hover:border-t-gray-600 transition-all ease-in group hover:cursor-pointer lg:mb-5 mb-10 w-full block"
  >
    <div className="lg:col-span-2 text-xs uppercase font-medium pt-1 shrink-0">
      {props.dateyear}
    </div>
    <div className="lg:col-span-8">
      <div className="font-medium text-gray-100 group-hover:text-cyan-400 transition-colors ease-in">
        {props.heading}
      </div>
      {props.subheading.map((v, i) => (
        <div key={i} className="text-gray-500 font-medium">
          {v}
        </div>
      ))}
      <p className="text-gray-400 mt-3 text-sm">{props.shortdesc}</p>
      <div className="mt-3 flex gap-3 flex-wrap">
        {props.tags.map((v, i) => (
          <span className="tech-badge" key={i}>
            {v}
          </span>
        ))}
      </div>
    </div>
  </a>
);

export default ExperienceCard;
