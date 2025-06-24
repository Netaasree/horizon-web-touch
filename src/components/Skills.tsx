
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Code, Server, Database, Cloud, Palette, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-500 to-yellow-400' },
        { name: 'CSS/Tailwind', level: 90, color: 'from-purple-500 to-pink-500' },
        { name: 'Vue.js', level: 75, color: 'from-green-500 to-green-400' },
        { name: 'Next.js', level: 85, color: 'from-gray-600 to-gray-400' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-400' },
        { name: 'Python', level: 80, color: 'from-blue-500 to-green-500' },
        { name: 'Express.js', level: 85, color: 'from-gray-600 to-gray-500' },
        { name: 'Django', level: 75, color: 'from-green-600 to-green-500' },
        { name: 'FastAPI', level: 70, color: 'from-teal-500 to-teal-400' },
        { name: 'GraphQL', level: 70, color: 'from-pink-500 to-pink-400' }
      ]
    },
    database: {
      title: 'Database & Storage',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'MongoDB', level: 75, color: 'from-green-600 to-green-500' },
        { name: 'PostgreSQL', level: 80, color: 'from-blue-700 to-blue-500' },
        { name: 'MySQL', level: 75, color: 'from-orange-500 to-orange-400' },
        { name: 'Redis', level: 70, color: 'from-red-500 to-red-400' },
        { name: 'Firebase', level: 75, color: 'from-yellow-500 to-orange-500' }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'AWS', level: 80, color: 'from-orange-500 to-orange-400' },
        { name: 'Google Cloud', level: 75, color: 'from-blue-500 to-blue-400' },
        { name: 'Docker', level: 80, color: 'from-blue-600 to-blue-500' },
        { name: 'Kubernetes', level: 70, color: 'from-blue-700 to-blue-600' },
        { name: 'GitHub Actions', level: 75, color: 'from-gray-600 to-gray-500' }
      ]
    }
  };

  const tools = [
    { name: 'Git', category: 'Version Control', color: 'from-orange-500 to-red-500' },
    { name: 'Figma', category: 'Design', color: 'from-purple-500 to-pink-500' },
    { name: 'VS Code', category: 'IDE', color: 'from-blue-500 to-blue-400' },
    { name: 'Postman', category: 'API Testing', color: 'from-orange-500 to-orange-400' },
    { name: 'Jira', category: 'Project Management', color: 'from-blue-600 to-blue-500' },
    { name: 'Slack', category: 'Communication', color: 'from-purple-600 to-purple-500' }
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
        <div className="absolute top-1/2 right-1/3 text-cyan-500/20 animate-sparkle" style={{ animationDelay: '3s' }}>
          <Zap size={22} />
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-green-500/20 animate-sparkle" style={{ animationDelay: '4s' }}>
          <Palette size={20} />
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

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(skillCategories).map(([key, category], categoryIndex) => (
            <div key={key} className="animate-slide-in-left" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <div className="glass-vibrant rounded-xl p-6 hover:bg-white/15 transition-all duration-500 hover:scale-105 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="flex items-center mb-6 relative z-10">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg mr-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-gradient transition-all duration-500">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="group/skill hover-lift">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-medium group-hover/skill:text-gradient transition-all duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden relative group/skill">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000"></div>
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left relative overflow-hidden`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * category.skills.length + index) * 100}ms`,
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 transform -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="animate-slide-in-right">
          <h3 className="text-2xl font-bold mb-8 text-center hover:text-gradient transition-all duration-500">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="glass p-4 rounded-lg text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 group shimmer hover-lift relative overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-lg`}></div>
                <span className="font-medium group-hover:text-gradient transition-all duration-300 relative z-10 block">
                  {tool.name}
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 relative z-10">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>

          {/* Enhanced info card */}
          <div className="glass p-8 rounded-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 group relative overflow-hidden">
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
    </section>
  );
};

export default Skills;
