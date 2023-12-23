import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section data-section id="project" className="pb-44">
      <div className="">
        {[1, 2, 3, 4, 5].map((v) => (
          <ProjectCard key={v} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
