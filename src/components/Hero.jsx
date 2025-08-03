import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImage from '../images/kuldeep.jpeg'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-400 via-white to-slate-200 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image */}
          <div className="flex justify-center lg:justify-start ">
            <img
              src={profileImage}
              alt="Kuldeep - Computer Science Graduate"
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl object-cover shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left ">

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6  animate-fade-in-delay-2">
              Hi, I'm <span className="text-indigo-600">Kuldeep</span>
            </h1>

            <h2 className="text-xl lg:text-2xl text-slate-600 mb-6 font-medium animate-fade-in-delay-3">
              Computer Science Student
            </h2>

            <p className="text-lg text-slate-600 mb-8 max-w-xl  animate-fade-in-delay-3">
              Passionate about coding and continuous learning. Currently pursuing MCA while building
              modern web applications and solving algorithmic challenges on LeetCode.
            </p>

            <div className="mb-8 animate-fade-in-delay-4">
              <a
                href="https://drive.google.com/file/d/1QSNBmlwPHcMBVDbal0f0s5bA96F-GFYL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer">
                <button
                  className="border border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-medium hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-1"
                >
                  <Download size={20} />
                  Download Resume
                </button>
              </a>
            </div>


            <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in-delay-4">
              <a
                href="https://github.com/Ksr123456789/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-all duration-200 border border-slate-200 hover:border-slate-300 hover:scale-110 hover:-translate-y-1"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kuldeep-rawat-254943271/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-all duration-200 border border-slate-200 hover:border-slate-300 hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="p-3 rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-all duration-200 border border-slate-200 hover:border-slate-300 hover:scale-110 hover:-translate-y-1"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;