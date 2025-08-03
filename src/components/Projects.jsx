import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React.js and Tailwind CSS. Features responsive design, smooth animations, and modern UI components.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "JavaScript", "Tailwind CSS", "CSS3"],
      github: "https://github.com/Ksr123456789/portfolio"
    },
    {
      title: "Todo Application",
      description: "Interactive todo application with CRUD operations. Built with React hooks for state management and local storage for data persistence.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "JavaScript", "CSS3", "Local Storage"],
      github: "https://github.com/Ksr123456789/To-do-List-MERN-STACK-"
    },
    {
     title: "Password Generator",
     description: "A simple and responsive password generator that allows users to customize password length and include uppercase, lowercase, numbers, and symbols. Built entirely with React.js.",
     image: "https://images.pexels.com/photos/5380596/pexels-photo-5380596.jpeg?auto=compress&cs=tinysrgb&w=800",
     tech: ["React", "JavaScript", "CSS3"],
     github: "https://github.com/Ksr123456789/password-generator"
    },
    {
     title: "Fullstack Chat Application",
     description: "Real-time chat application with user authentication, instant message updates. Built with React on the frontend and Node.js with Socket.io on the backend.",
     image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
     tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
     github: "https://github.com/Ksr123456789/chat-app"
    }


  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 mb-4">
            <span className="text-sm font-medium text-indigo-700">Projects</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-200 group hover:scale-105 hover:-translate-y-2 `}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-md font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-500 hover:text-slate-700 transition-colors text-sm hover:scale-105"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;