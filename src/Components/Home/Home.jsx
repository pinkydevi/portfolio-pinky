
import avatarImg from "../../assets/pinky.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <br></br>
        <p className="text-sm md:text-2xl tracking-tight ">
          I am Fullstack Developer. I specialize in building scalable web applications.
          I've worked on both startup projects and enterprise systems.Always excited to learn new technology and grow with the industry.
        </p>
       <a href="https://drive.google.com/file/d/12SQTG_1GiJ_W1lcTWgK5smc1ekzIU5e3/view" download>
  <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
    Get Resume
  </button>
</a>

      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
