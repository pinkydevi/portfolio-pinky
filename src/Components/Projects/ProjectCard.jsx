

const ProjectCard = ({ title, main, demo, code, banner }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
   <a href={banner} target="_blank" rel="noopener noreferrer">
  <img
    className="p-4 w-full h-40 object-cover rounded-xl cursor-pointer hover:opacity-80"
    src={banner}
    alt={`${title} banner`}
  />
</a>

      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <button className=" text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Demo
            </button>
          </a>
        )}
        {code && (
          <a href={code} target="_blank" rel="noopener noreferrer">
            <button className=" text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Source Code
            </button>
          </a>
        )}
      </div>
    </div>
  );
};


export default ProjectCard;
