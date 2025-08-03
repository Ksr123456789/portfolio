import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Education = () => {
  const Education = [
    {
      college: "Dev Bhoomi Uttarakhand University",
      course: "Master of Computer Applications (MCA)",
      duration: "2024 - 2026",
      location: "Dehradun, Uttarakhand",
      description: "Currently pursuing advanced studies in computer applications with focus on software development, data structures, algorithms, and modern web technologies.",
    },
    {
      college: "Pitambar Datt Barthwal P.G College",
      course: "Bachelor of Science (PCM)",
      duration: "2020 - 2023",
      location: "Kotdwar, Uttarakhand",
      description: "Completed undergraduate studies in Physics, Chemistry, and Mathematics. Developed strong analytical and problem-solving skills that form the foundation for programming.",
    },
  ];

  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 ">
          <div className="inline px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 mb-4">
            <span className="text-sm font-medium text-indigo-700">Education</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-slate-300"></div>

          {Education.map((edu, index) => (
            <div 
              key={index} 
              className={`relative mb-12 md:mb-16 ${index + 1}`}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-indigo-600 rounded-full border-2 border-white shadow-sm z-10 "></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-200 hover:scale-105 hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">{edu.course}</h3>
                        <h4 className="text-base font-medium text-indigo-600">{edu.college}</h4>
                      </div>
                      
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-500">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;