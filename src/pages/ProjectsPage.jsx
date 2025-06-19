import { useEffect , useState } from 'react';
import AOS from 'aos';
import MyGitprojects from '../apis/GitPorojectsAPI';
import Loading from '../components/Loading';
import Error from '../components/Error';
import 'aos/dist/aos.css';
import { Links, NavLink } from 'react-router-dom';
import Portfolio from './Portfolio';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(false)

  const fetchProjects = async () => {
    try {
      const projectsData = await MyGitprojects();
      setProjects(projectsData);
      setLoading(false)   
    } catch (error) {
      seterror(true)
      setLoading(false)
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects()
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const redirectHandel = (e) => {
    window.open(e, '_blank');
  };

  

  if(loading){
    return <Loading/>
  }
  if(error){
    return <Error/>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="pt-24 md:pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-down">
            My Full Project Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.github}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow "
              >
                <img
                  src={project.image || '/corrected_logo_.png'}
                  alt={`Project ${project.name}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Project: {project.name}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <div className="buttons *:ms-3 mt-4 px-2.5 *:cursor-pointer *:bg-gray-700 *:px-3 *:p-1 *:rounded-md">
                    {project.github !==null ? <a href={project.github} target='_blank' >View Project</a>: ""}
                    {project.demo !==null ? <a href={project.demo} target='_blank'>Try Project</a>:""}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-6 text-center">
        <p className="text-gray-400 text-sm">
          ï¿½ {new Date().getFullYear()} Mujahid Zafree. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ProjectsPage