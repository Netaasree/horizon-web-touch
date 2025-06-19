
import React from 'react';
import { Code, Lightbulb, Users, Award, Sparkles, FileText, Download } from 'lucide-react';
import { Button } from './ui/button';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Always exploring new technologies and methodologies',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Committed to delivering high-quality solutions',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-blue-500/20 animate-pulse">
          <Sparkles size={24} />
        </div>
        <div className="absolute bottom-20 right-10 text-purple-500/20 animate-pulse" style={{ animationDelay: '2s' }}>
          <Sparkles size={20} />
        </div>
        <div className="absolute top-1/2 left-1/4 text-pink-500/20 animate-pulse" style={{ animationDelay: '4s' }}>
          <Sparkles size={16} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer and want to create some amazing projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="relative glass rounded-3xl p-8 group-hover:bg-white/15 transition-all duration-500">
                <div className="w-72 h-72 mx-auto rounded-full flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                   <img 
                   src='/src/assets/images/netaimg.jpg' 
                   alt="Profile" 
                   className="w-full h-full object-cover rounded-full"
                   />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Resume Buttons */}
            <div className="mt-8 flex justify-center gap-4">
              <Button variant="outline" className="gap-2 group hover:bg-blue-500/20 transition-all duration-300">
                <FileText className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-300" />
                <a href="/src/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="group-hover:text-blue-400 transition-colors duration-300">
                  View Resume
                </a>
              </Button>
              <Button variant="outline" className="gap-2 group hover:bg-purple-500/20 transition-all duration-300">
                <Download className="w-5 h-5 group-hover:text-purple-400 transition-colors duration-300" />
                <a href="/src/assets/resume.pdf" download className="group-hover:text-purple-400 transition-colors duration-300">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-bold mb-6">
              Hello! I'm Bhimaraju Netaasree,
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Currently I am pursuing my BTech degreee in NRIIT university.I specialize 
              in creating modern, responsive, and user-friendly applications. I'm passionate 
              about clean code, innovative solutions, and continuous learning.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              other develpers.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group glass p-6 rounded-xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className={`text-transparent bg-gradient-to-r ${item.color} bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-500`}>
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 relative z-10">{item.title}</h4>
                  <p className="text-muted-foreground text-sm relative z-10">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
