import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id="About" className="text-white bg-black bg-opacity-30 p-6 md:p-12 rounded-lg shadow-xl mx-4 md:mx-20">
      <h2 className="text-2xl md:text-4xl font-bold mb-6">About</h2>

      <ul>
        <li className="flex gap-3 py-4">
          <IoArrowForward size={30} className="mt-1 text-blue-500" />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-500">
              Frontend Developer
            </h3>
            <p className="text-sm md:text-md leading-tight">
              I developed responsive web applications using HTML5, CSS3, JavaScript, and modern frameworks like React.js and Vue.js. Collaborated with designers and backend developers to deliver seamless, user-friendly interfaces. Implemented reusable UI components and state management using Redux and Context API.Integrating RESTful APIs and handling asynchronous data loading with Axios and Fetch API for real-time user interactions.Prioritizing performance, accessibility (WCAG standards), and testing using tools like Jest, React Testing Library, and Chrome DevTools.
            </p>
          </div>
        </li>

        <li className="flex gap-3 py-4">
          <IoArrowForward size={30} className="mt-1 text-blue-500" />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-500">
              Database Developer
            </h3>
            <p className="text-sm md:text-md leading-tight">
              Designed, developed, and optimized complex SQL queries, stored procedures, and triggers to support data-driven applications. Collaborated with application developers to integrate backend database functionality with frontend systems. Migrated legacy systems to modern RDBMS platforms like SQL Server.Implemented database-level security using roles, permissions, and user access policies, in accordance with organizational compliance requirements.Designed normalized and denormalized schemas tailored to application needs, enabling efficient storage and retrieval while maintaining referential integrity.
            </p>
          </div>
        </li>

        <li className="flex gap-3 py-4">
          <IoArrowForward size={30} className="mt-1 text-blue-500" />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-500">
              Backend Developer
            </h3>
            <p className="text-sm md:text-md leading-tight">
             I develop and maintain scalable RESTful APIs using Node.js, Express, and Laravel. I collaborate closely with front-end teams to design seamless API interactions that enhance the overall user experience. My work includes integrating MongoDB and MySQL databases, and implementing secure authentication using JWT and OAuth2. I follow best practices in API versioning, error handling, and documentation to ensure maintainability and clarity. I have experience designing database schemas and handling complex relationships across multiple services. I use tools like Postman and Swagger for API testing and documentation.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default About;
