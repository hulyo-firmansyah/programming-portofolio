import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => (
  <section className="text-gray-400 pb-28" id="work-experience" data-section>
    {[1, 2, 3, 4].map((v) => (
      <ExperienceCard key={v} />
    ))}
  </section>
);

export default ExperienceSection;
