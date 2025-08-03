import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Kuldeep</h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Passionate about coding and continuous learning. Open to entry-level opportunities and internships.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Ksr123456789/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kuldeep-rawat-254943271/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                onClick={(e)=>{ e.preventDefault(); scrollToSection("contact")}}
                className="cursor-pointer p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in-delay">
            <h4 className="text-base font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a  onClick={(e)=>{ e.preventDefault(); scrollToSection("about")}} className="cursor-pointer hover:text-white transition-colors">About</a></li>
              <li><a onClick={(e)=>{ e.preventDefault(); scrollToSection("education")}}  className="cursor-pointer hover:text-white transition-colors">Education</a></li>
              <li><a onClick={(e)=>{ e.preventDefault(); scrollToSection("projects")}} className="cursor-pointer hover:text-white transition-colors">Projects</a></li>
              <li><a onClick={(e)=>{ e.preventDefault(); scrollToSection("skills")}}  className="cursor-pointer cursor-pointerhover:text-white transition-colors">Skills</a></li>
              <li><a onClick={(e)=>{ e.preventDefault(); scrollToSection("contact")}}  className="cursor-pointer hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="animate-fade-in-delay-2">
            <h4 className="text-base font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>Web Development</li>
              <li>Problem Solving</li>
              <li>Learning & Growth</li>
              <li>Team Collaboration</li>
              <li>Code Quality</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center animate-fade-in-delay-3">
          <p className="text-slate-400 flex items-center justify-center gap-2 text-sm">
            Built by Kuldeep
            <span className="mx-2">•</span>
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;