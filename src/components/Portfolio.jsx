import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useForm, ValidationError } from '@formspree/react';
import TypingEffect from './TypeEffect';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const [state, handleSubmit] = useForm("mrbkkbjb");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const redirectHandel = (e) => {
    window.open(e, '_blank');
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };




  const projects = [
    {
      name: "R.P.S Game",
      screenshot: "/Portfolio/ScreenShots/Thumnil_RPS.png",
      text: "A fast-paced hand game where players choose rock, paper, or scissors to outsmart their opponent.",
      url: "https://zango-tut.github.io/R.P.S_game/"
    },
    {
      name: "Weather App",
      screenshot: "/Portfolio/ScreenShots/Thumnil_weather.png",
      text: "A sleek app that shows real-time weather updates with forecasts for your location.",
      url: "https://zango-tut.github.io/SereneSky/"
    },
    {
      name: "Todo App",
      screenshot: "/Portfolio/ScreenShots/Thumnil_todo.png",
      text: "A simple and clean app to organize tasks, set reminders, and boost productivity.",
      url: "https://zango-tut.github.io/Zaf-tasks/"
    }
  ];

  // Style conditionals
  const navItemActive = (section) =>
    `${activeSection === section ? 'text-indigo-400' : 'text-gray-300'} hover:text-indigo-400 cursor-pointer transition-colors`;

  const buttonStyles = `w-full bg-gradient-to-r from-pink-400 to-indigo-400 text-white py-2 md:py-3 rounded-lg hover:opacity-90 transition-opacity text-sm md:text-base`;

  const inputStyles = `w-full bg-gray-700 rounded-lg p-3 md:p-4 text-sm md:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400`;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900`}>
      {/* Mobile Navigation */}
      <nav className={`sticky w-full bg-gray-900/80 backdrop-blur-md z-50 md:hidden`}>
        <div className={`container mx-auto px-4 py-4`}>
          <div className={`flex items-center justify-between`}>
            <span className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400`}>
              Mujahid Zafree
            </span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-gray-300 hover:text-indigo-400 focus:outline-none`}
            >
              <svg className={`w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className={`mt-4 space-y-4`}>
              <Link
                to="home"
                spy={true}
                smooth={true}
                className={`block ${navItemActive('home')}`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                className={`block ${navItemActive('about')}`}
                onClick={() => handleNavClick('about')}
              >
                About
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                className={`block ${navItemActive('projects')}`}
                onClick={() => handleNavClick('projects')}
              >
                Projects
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                className={`block ${navItemActive('contact')}`}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className={`sticky w-full bg-gray-900/80 backdrop-blur-md z-50 hidden md:block`}>
        <div className={`container mx-auto px-6 py-4`}>
          <div className={`flex items-center justify-between`}>
            <span className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400`}>
              Mujahid Zafree
            </span>
            <div className={`flex space-x-8`}>
              <Link
                to="home"
                spy={true}
                smooth={true}
                className={navItemActive('home')}
                onClick={() => handleNavClick('home')}
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                className={navItemActive('about')}
                onClick={() => handleNavClick('about')}
              >
                About
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                className={navItemActive('projects')}
                onClick={() => handleNavClick('projects')}
              >
                Projects
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                className={navItemActive('contact')}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-24 md:pt-32 pb-12 md:pb-20 px-4 `}>
        <div className={`container mx-auto text-center`}>
          <div data-aos="zoom-in">
          <TypingEffect/>
            <div className={`flex justify-center space-x-6`}>
              <a href="https://github.com/zango-tut" target="_blank" rel="noopener noreferrer" className={`social-icon`}>
                <i className={`fab fa-github text-xl md:text-2xl text-gray-300 hover:text-indigo-400 transition-colors`}></i>
              </a>
              <a href="www.linkedin.com/in/zango-das-085" className={`social-icon`}>
                <i className={`fab fa-linkedin text-xl md:text-2xl text-gray-300 hover:text-indigo-400 transition-colors`}></i>
              </a>
              <a href="#!" className={`social-icon`}>
                <i className={`fab fa-twitter text-xl md:text-2xl text-gray-300 hover:text-indigo-400 transition-colors`}></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-12 md:py-20 bg-gray-800/50`}>
        <div className={`container mx-auto px-4`}>
          <div className={`flex flex-col md:flex-row items-center gap-10`}>
            <div data-aos="fade-right" className={`w-full max-h-1/2 overflow-hidden md:w-1/3 max-md:w-3/4`}>
              <img
                src="corrected_logo_.png"
                alt="Profile Picture"
                className={`rounded-lg shadow-2xl  hover:scale-105 transition-transform`}
              />
            </div>
            <div data-aos="fade-left" className={`w-full px-3 md:w-1/2 mt-6 md:mt-0`}>
              <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4`}>About Me</h2>
              <p className={`text-gray-300 leading-relaxed text-sm md:text-base`}>
                Passionate developer with expertise in creating beautiful web experiences.
                Specializing in React development and UI/UX design. Bringing ideas to life
                through clean code and creative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`mx-4 py-12 md:py-20`}>
        <div className={`container mx-auto px-4`}>
          <h2 className={`text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12`} data-aos="fade-up">
            Featured Projects
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {projects.map((project, index) => (
              <div
                key={project.url}
                onClick={() => redirectHandel(project.url)}
                data-aos="flip-up"
                data-aos-delay={index * 100}
                className={`bg-gray-800 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer`}
              >
                <img
                  src={project.screenshot}
                  alt={`Project ${project.name}`}
                  className={`w-full h-48 object-cover`}
                />
                <div className={`p-4`}>
                  <h3 className={`text-lg md:text-xl font-bold text-white mb-2`}>Project: {project.name}</h3>
                  <p className={`text-gray-300 text-sm md:text-base`}>{project.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`m-6 rounded-2xl py-12 md:py-20 bg-gray-800/50`}>
        <div className={`container mx-auto px-8 md:px-4`}>
          <h2 className={`text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12`} data-aos="fade-up">
            Get In Touch
          </h2>
          <div className={`max-w-2xl mx-auto`} data-aos="zoom-in">
            <form className={`space-y-4`} onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={inputStyles}
                  required
                />

              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={inputStyles}
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Message"
                  className={inputStyles}
                  required
                ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
              </div>
              <button type="submit" disabled={state.submitting} className={buttonStyles}>
                Send Message
              </button>
            </form>
            {state.succeeded && <p className={`text-green-500 mt-2`}>Message sent successfully!</p>}
          </div>
        </div>
      </section>

      <footer className={`bg-gray-900 py-6 md:py-8 text-center`}>
        <p className={`text-gray-400 text-sm md:text-base`}>
        © {new Date().getFullYear()} Mujahid Zafree. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio