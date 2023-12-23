import LANG_SELECTOR from "@/app/lang/lang";
import Image from "next/image";

const ProjectCard = (props: (typeof LANG_SELECTOR)["in"]["projects"][0]) => {
  return (
    <div className="grid grid-cols-10 mb-10 gap-5">
      <div className="relative col-span-10 sm:col-span-3 sm:order-1 order-2">
        <Image
          src={props.imageUrl}
          width={250}
          height={144}
          alt={props.heading}
          className="rounded border-2 border-gray-600"
        />
      </div>
      <div className="sm:col-span-7 col-span-10 sm:order-2 order-1">
        <div className="font-medium text-gray-100 group-hover:text-cyan-400 transition-colors ease-in">
          {props.heading}
        </div>
        <div className="text-gray-400 text-sm mt-2">{props.shortdesc}</div>
        <div className="mt-3 flex gap-3 flex-wrap">
          {props.tags.map((v, i) => (
            <span className="tech-badge" key={i}>
              {v}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
