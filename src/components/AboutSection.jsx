import { useState } from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 px-3 md:py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image with glowing border */}
          <div data-aos="fade-right" className="w-full md:w-2/6 max-md:flex max-md:justify-center">
            <div className="relative group p-2"> {/* Added p-1 for border spacing */}
              <img
                src="corrected_logo_.png"
                alt="Profile Picture"
                className="w-full p-6 h-auto object-cover rounded-lg transition-all duration-300 group-hover:scale-105 "
              />
            </div>
          </div>

          {/* About content */}
          <div data-aos="fade-left" className="w-full md:w-3/5 mt-6 md:mt-0">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-purple-400">Me</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
              <p>
              <span className='text-purple-500'>"</span> I'm a React developer who loves creating engaging UIs with thoughtful details. I specialize in building responsive, performant interfaces using modern JavaScript and CSS. When I'm not coding, I enjoy exploring new ways to blend design and technology to create memorable user experiences. <span className='text-purple-600'>"</span>
              </p>
              <p className="text-cyan-400 font-medium">
                Let's collaborate on your next project!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;