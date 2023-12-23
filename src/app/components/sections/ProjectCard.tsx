import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-10 mb-10 gap-5">
      <div className="relative col-span-10 sm:col-span-3 sm:order-1 order-2">
        <Image
          src={
            "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75"
          }
          width={250}
          height={144}
          alt="project1"
          className="rounded border-2 border-gray-600"
        />
      </div>
      <div className="sm:col-span-7 col-span-10 sm:order-2 order-1">
        <div className="font-medium text-gray-100 group-hover:text-cyan-400 transition-colors ease-in">
          Spootify
        </div>
        <div className="text-gray-400 text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          voluptate sunt repellat aspernatur officia. Pariatur harum quas,
          recusandae laudantium vel repellat, accusantium nihil laboriosam quo
          distinctio atque. Mollitia, cumque officia.
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
