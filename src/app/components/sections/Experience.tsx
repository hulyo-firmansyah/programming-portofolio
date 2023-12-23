import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => (
  <section className="text-gray-400 pb-28" id="work-experience" data-section>
    <div className="font-bold uppercase text-sm tracking-widest mb-7 text-gray-100">
      Experience
    </div>
    {[1, 2, 3, 4].map((v) => (
      <ExperienceCard key={v} />
    ))}
  </section>
);

export default ExperienceSection;
