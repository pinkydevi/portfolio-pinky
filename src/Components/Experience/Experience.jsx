
import { FaBootstrap, FaChalkboardTeacher, FaCss3, FaFigma, FaGit, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact, FaUniversity } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import {  SiPostman, SiSqlite } from "react-icons/si";

import { SiMongodb } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaBootstrap color="#1572B6" size={50} />
          </span>
        
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPhp color="#47A248" size={50} />
          </span>
          
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaLaravel color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiSqlite color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPostman color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGit color="#FF4438" size={50} />
          </span>


        </div>
        <div>
        <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaChalkboardTeacher color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">ICT Teacher,</h2>
              <p className="text-sm leading-tight font-thin">
                March 2019 -May 2020
              </p>
              <ul className="text-sm p-2">
                <li>- Knowledge  School & College</li>
                
              </ul>
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl text-white font-bold">Education</h1>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <FaUniversity color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight font-bold">Premier University,Chittagong</h2>
              <p className="text-sm leading-tight font-thin">
               B.sc. in CSE
              </p>
              <ul className="text-sm p-2">
                <li>- Chittagong </li>
                
              </ul>
            </span>


          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <FaSchool color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight font-bold">Hathazari College</h2>
              <p className="text-sm leading-tight font-thin">
               Science
              </p>
              <ul className="text-sm p-2">
                <li>- Hathazari,Chittagong </li>
                
              </ul>
            </span>


          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <FaSchool color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight font-bold">Hathazari Girl's High School</h2>
              <p className="text-sm leading-tight font-thin">
              Science
              </p>
              <ul className="text-sm p-2">
                <li>- Hathazari,Chittagong </li>
                
              </ul>
            </span>


          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Experience;
