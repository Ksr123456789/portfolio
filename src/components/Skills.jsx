import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["JavaScript", "React", "HTML/CSS", "Tailwind CSS", "Git"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "MySQL"]
    },
    {
      category: "Problem Solving",
      skills: ["Data Structures", "Algorithms", "LeetCode", "Debugging", "Code Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 mb-4">
            <span className="text-sm font-medium text-indigo-700">Skills</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Technical Expertise</h2>
          <p className="text-slate-600 mt-4 text-base max-w-2xl mx-auto">
            A quick glance at the tools, technologies, and concepts I work with regularly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm 
                         hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">{category.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="px-3 py-1 bg-slate-100 text-sm text-slate-700 rounded-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
