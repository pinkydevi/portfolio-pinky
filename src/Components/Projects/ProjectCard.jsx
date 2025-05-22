const ProjectCard = ({ title, main, demoLink, codeLink, banner }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img
        className="p-4 w-full h-48 object-cover rounded-xl"
        src={banner}
        alt="Project Banner"
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>

      {/* Button group */}
      <div className="mt-4 p-2 md:p-4 flex gap-4 justify-start">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Demo
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
