
import React from 'react';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
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
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
        
        {/* Floating orbs with enhanced glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float opacity-80"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float opacity-80" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float opacity-80" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional smaller floating elements */}
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-cyan-400/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-emerald-400/30 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl animate-float" style={{ animationDelay: '5s' }}></div>
        
        {/* Sparkle particles */}
        <div className="absolute top-1/4 left-1/2 text-blue-400/40 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Sparkles size={16} />
        </div>
        <div className="absolute top-1/2 right-1/4 text-purple-400/40 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <Sparkles size={20} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-pink-400/40 animate-pulse" style={{ animationDelay: '2.5s' }}>
          <Sparkles size={14} />
        </div>
        <div className="absolute top-3/4 left-3/4 text-cyan-400/40 animate-pulse" style={{ animationDelay: '3.5s' }}>
          <Sparkles size={18} />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8">
            Hi, I'm{' '}
            <span className="text-gradient relative">
              John Doe
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl"></div>
            </span>
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 h-20">
            <TypingEffect texts={roles} />
          </h2>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting beautiful, functional, and user-centered digital experiences
            with modern technologies and creative problem-solving.
          </p>
        </div>

        <div className="animate-fade-in-up space-y-8" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 neon-glow hover:scale-105 transform"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-10 py-4 glass border-2 border-white/30 text-foreground font-semibold rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 transform"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 glass rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-125 transform relative"
            >
              <Github size={28} className="group-hover:text-blue-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 glass rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-125 transform relative"
            >
              <Linkedin size={28} className="group-hover:text-blue-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            </a>
            <a
              href="mailto:john@example.com"
              className="group p-4 glass rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-125 transform relative"
            >
              <Mail size={28} className="group-hover:text-blue-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
