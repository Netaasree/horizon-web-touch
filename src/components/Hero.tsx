
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import TypingEffect from './TypingEffect';

const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'UI/UX Designer',
    'Problem Solver',
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="text-gradient">John Doe</span>
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 h-16">
            <TypingEffect texts={roles} />
          </h2>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, functional, and user-centered digital experiences
            with modern technologies and creative problem-solving.
          </p>
        </div>

        <div className="animate-fade-in-up space-y-6" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 neon-glow"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 glass border border-white/20 text-foreground font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:john@example.com"
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
