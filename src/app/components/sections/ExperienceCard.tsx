const ExperienceCard = () => (
  <div className="flex gap-8 hover:bg-slate-800 p-9 rounded-md hover:bg-opacity-45 hover:shadow-lg border border-gray-700 hover:border-t hover:border-t-gray-600 transition-all ease-in group hover:cursor-pointer mb-5">
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
