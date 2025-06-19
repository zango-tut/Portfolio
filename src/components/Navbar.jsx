import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection , setActiveSection] = useState('home')

    const handleNavClick = (section) => {
        setActiveSection(section);
        setIsMenuOpen(false);
      };
    
      const navItemActive = (section) =>{
          return `${activeSection === section ? 'text-indigo-400' : 'text-gray-300'} hover:text-indigo-400 cursor-pointer transition-colors`;
      }
  return (
    <>
<div className='bg-gradient-to-b via-purple-900 to-gray-900  '>

{/* Mobile Navigation */}
      <nav className={`sticky w-full bg-gray-900/80 backdrop-blur-md z-50 md:hidden`}>
        <div className={`container mx-auto px-3 py-3`}>
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
              <NavLink
                to={'/Portfolio'}
                spy={true}
                smooth={true}
                className={`block ${navItemActive('portfolio')}`}
                onClick={() => handleNavClick('portfolio')}
              >
                Home
              </NavLink>
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
            <NavLink
                to={'/Portfolio/'}
                className={`${navItemActive('portfolio')}`}
                onClick={() => handleNavClick('portfolio')}
              >
                Home
              </NavLink>
              <Link
                to="about"
                spy={true}
                smooth={true}
                className={`${navItemActive('about')}`}
                onClick={() => handleNavClick('about')}
              >
                About
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                className={`${navItemActive('projects')}`}
                onClick={() => handleNavClick('projects')}
              >
                Projects
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                className={`${navItemActive('contact')}`}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      </div>
    </>
  )
}

export default Navbar
