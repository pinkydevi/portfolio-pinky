
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-blue-500">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 I Developed responsive web applications using HTML5, CSS3, JavaScript, and modern frameworks like React.js and Vue.js.Collaborated with designers and backend developers to deliver seamless, user-friendly interfaces.Implemented reusable UI components and state management using Redux and Context API.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl text-blue-500 md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 Designed, developed, and optimized complex SQL queries, stored procedures, and triggers to support data-driven applications.Collaborated with application developers to integrate backend database functionality with frontend systems.Migrated legacy systems to modern RDBMS platforms like  SQL Server, improving efficiency and maintainability.

                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl text-blue-500 md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 I Developed and maintained scalable RESTful APIs using Node.js ,Express and Laravel.Collaborated with front-end developers to design seamless API interactions and improve user experience.Integrated third-party services and databases like MongoDB and My SQL to support complex backend functionality.Implemented authentication and authorization systems using JWT and OAuth2 to enhance application security.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
