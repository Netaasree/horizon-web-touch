
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
    { name: 'JavaScript', level: 95, color: 'from-yellow-500 to-yellow-400' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-green-400' },
    { name: 'Python', level: 80, color: 'from-blue-500 to-green-500' },
    { name: 'CSS/Tailwind', level: 90, color: 'from-purple-500 to-pink-500' },
    { name: 'MongoDB', level: 75, color: 'from-green-600 to-green-500' },
    { name: 'PostgreSQL', level: 80, color: 'from-blue-700 to-blue-500' },
  ];

  const tools = [
    'React', 'Next.js', 'Vue.js', 'Node.js', 'Express',
    'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS',
    'Git', 'Figma', 'Photoshop', 'VS Code'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 text-blue-500/20 animate-sparkle">
          <Sparkles size={24} />
        </div>
        <div className="absolute bottom-16 left-16 text-purple-500/20 animate-sparkle" style={{ animationDelay: '1s' }}>
          <Sparkles size={20} />
        </div>
        <div className="absolute top-1/3 left-10 text-pink-500/20 animate-sparkle" style={{ animationDelay: '2s' }}>
          <Sparkles size={18} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Skills Progress Bars */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8 hover:text-gradient transition-all duration-500">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group hover-lift">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium group-hover:text-gradient transition-all duration-300">{skill.name}</span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left relative overflow-hidden`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Tools & Technologies */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-8 hover:text-gradient transition-all duration-500">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="glass p-4 rounded-lg text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 group shimmer hover-lift relative overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 rounded-lg"></div>
                  <span className="font-medium group-hover:text-gradient transition-all duration-300 relative z-10">
                    {tool}
                  </span>
                </div>
              ))}
            </div>

            {/* Enhanced info card */}
            <div className="mt-12 glass p-8 rounded-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <h4 className="text-xl font-bold mb-4 text-gradient relative z-10">What I Bring</h4>
              <ul className="space-y-3 text-muted-foreground relative z-10">
                <li className="flex items-center group/item hover:text-foreground transition-colors duration-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/item:animate-pulse"></span>
                  5+ years of professional development experience
                </li>
                <li className="flex items-center group/item hover:text-foreground transition-colors duration-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover/item:animate-pulse"></span>
                  Strong focus on user experience and performance
                </li>
                <li className="flex items-center group/item hover:text-foreground transition-colors duration-300">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover/item:animate-pulse"></span>
                  Agile development and team collaboration
                </li>
                <li className="flex items-center group/item hover:text-foreground transition-colors duration-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover/item:animate-pulse"></span>
                  Continuous learning and adaptation to new technologies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
