import ProjectCard from "./ProjectCard";
import gadgetBanner from "../../assets/gadget.png";
import tutorBanner from "../../assets/online-tutor1.png";
import bidBanner from "../../assets/bid7.png";


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Gadget Heaven Project"
          main="It's a dynamic web application using React to showcase the latest tech gadgets with interactive UI components. Integrated responsive design to ensure accessibility across all devices."
          demoLink="https://dapper-fenglisu-65e59e.netlify.app/"
          codeLink="https://github.com/your-username/gadget-heaven"
          banner ={gadgetBanner}
        />
        <ProjectCard
          title="Online Tutor Project"
          main="This is a Online Tutor project like UI built with react.js , styled with component libraries for fast and responsive performance.Implemented Firebase Authentication to enable secure user login, signup, and session management."
          demoLink="https://online-tutor-9a882.web.app/"
          codeLink="https://github.com/your-username/online-tutor"
          banner = {tutorBanner}
        />
        <ProjectCard
          title="Bidding System Project"
          main="Bidding system project using Laravel involves creating a platform where users can place bids on items and compete to win them. Users can view items up for bid, place bids, and monitor the bidding process in real-time."
          demoLink="https://github.com/pinkydevi/biddingSystemProject.git"
          codeLink="https://github.com/pinkydevi/biddingSystemProject.git"
          banner = {bidBanner}
        />
      </div>
    </div>
  );
};

export default Projects;
