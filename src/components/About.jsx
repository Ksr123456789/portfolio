import React from 'react';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Learning React, Node.js, and modern web technologies"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile First",
      description: "Responsive design that works on all devices"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Active on LeetCode, solving algorithmic challenges"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 ">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 mb-4">
            <span className="text-sm font-medium text-indigo-700">About</span>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            As a fresh Computer Science graduate, I'm passionate about learning new technologies 
            and solving complex problems through code. Currently pursuing MCA to deepen my technical expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-delay">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">My approach</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I believe in continuous learning and writing clean, efficient code. My academic background 
              in Computer Science combined with hands-on projects has given me a strong foundation 
              in programming fundamentals and problem-solving.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I actively practice coding on platforms like LeetCode and stay updated with the latest 
              technologies and industry trends to build modern, scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in-delay-2">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:scale-105 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="text-indigo-600 mb-3">{feature.icon}</div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;