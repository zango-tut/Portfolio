import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Links, NavLink } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import TypingEffect from '../components/TypeEffect';
import AboutSection from '../components/AboutSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const [state, handleSubmit] = useForm("mrbkkbjb");


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const redirectHandel = (e) => {
    window.open(e, '_blank');
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


  const buttonStyles = `w-full bg-gradient-to-r from-pink-400 to-indigo-400 text-white py-2 md:py-3 rounded-lg hover:opacity-90 transition-opacity text-sm md:text-base`;

  const inputStyles = `w-full bg-gray-700 rounded-lg p-3 md:p-4 text-sm md:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400`;

  return (
    <div className={`min-h-screen`}>

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
      <AboutSection/>
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
          <div className="more text-end my-4">
            <NavLink to='Projects' className='text-purple-100 cursor-pointer'><span className='text-cyan-400 font-bold'>Click</span> here to see more</NavLink>
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