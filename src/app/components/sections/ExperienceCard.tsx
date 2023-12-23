const ExperienceCard = () => (
  <div className="lg:flex gap-8 lg:hover:bg-slate-800 lg:p-9 rounded-md lg:hover:bg-opacity-45 lG:hover:shadow-lg lg:border border-gray-700 lg:hover:border-t lg:hover:border-t-gray-600 transition-all ease-in group hover:cursor-pointer lg:mb-5 mb-10">
    <div className="text-xs uppercase font-medium pt-1 shrink-0">
      2020 &#8212; Present
    </div>
    <div>
      <div className="font-medium text-gray-100 group-hover:text-cyan-400 transition-colors ease-in">
        Lead Engineer · Vercel
      </div>
      <div className="text-gray-500 font-medium">Project Engineer</div>
      <p className="text-gray-400 mt-3 text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum
        facere numquam possimus cupiditate quae beatae porro nemo facilis
        delectus?
      </p>
      <div className="mt-3 flex gap-3">
        <span className="bg-cyan-400 bg-opacity-30 px-3 py-2 rounded-full text-xs text-cyan-400 font-medium">
          React JS
        </span>
        <span className="bg-cyan-400 bg-opacity-30 px-3 py-2 rounded-full text-xs text-cyan-400 font-medium">
          React JS
        </span>
      </div>
    </div>
  </div>
);

export default ExperienceCard;
