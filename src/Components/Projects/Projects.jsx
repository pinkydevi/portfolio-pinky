
import ProjectCard from "./ProjectCard";
import gadgetBanner from "../../assets/dapper-fenglisu-65e59e.netlify.app_.png";
import onlineTutor from "../../assets/online-tutor-9a882.web.app_.png";





const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Gadget Heaven Project"
          main="It's a dynamic web application using React to showcase the latest tech gadgets with interactive UI components. Integrated responsive design to ensure accessibility across all devices."
          demo="https://dapper-fenglisu-65e59e.netlify.app/"
          code="https://github.com/pinkydevi/gadget-heaving"
          banner={gadgetBanner}
         
        />
        <ProjectCard
          title="Online Tutor Project"
          main="This is a Online Tutor project like UI built with react.js , styled with component libraries for fast and responsive performance.Implemented Firebase Authentication to enable secure user login, signup, and session management."
          demo="https://online-tutor-9a882.web.app/"
          code="https://github.com/yourusername/youtube-clone"
          banner={onlineTutor}
         
        />
        <ProjectCard
          title="Bidding System Project"
          main="A Netflix-style movie browser built with Next.js, including dynamic routing and movie info pulled from an API."
          demo="https://your-netflix-demo-link.netlify.app/"
          code="https://github.com/pinkydevi/biddingSystemProject.git"
          
        />
      </div>
    </div>
  );
};

export default Projects;

