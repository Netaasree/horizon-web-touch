
import React from 'react';
import { Github, Linkedin, Mail, Sparkles, Star, Zap } from 'lucide-react';
import TypingEffect from './TypingEffect';

const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'AI/ML Engineer',
    'Problem Solver',
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Animated Background with more effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
        
        {/* Multiple layers of floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float opacity-80"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float opacity-80" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float opacity-80" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional medium orbs */}
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-emerald-400/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-32 h-32 bg-yellow-400/30 rounded-full blur-xl animate-float" style={{ animationDelay: '5s' }}></div>
        
        {/* Small floating particles */}
        <div className="absolute top-1/5 right-1/5 w-24 h-24 bg-rose-400/25 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/5 right-2/5 w-20 h-20 bg-indigo-400/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-3/5 right-1/6 w-16 h-16 bg-teal-400/35 rounded-full blur-lg animate-float" style={{ animationDelay: '4.5s' }}></div>
        
        {/* Enhanced sparkle particles with different icons */}
        <div className="absolute top-1/4 left-1/2 text-blue-400/40 animate-pulse animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
          <Sparkles size={16} />
        </div>
        <div className="absolute top-1/2 right-1/4 text-purple-400/40 animate-pulse animate-spin-slow" style={{ animationDelay: '1.5s' }}>
          <Star size={20} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-pink-400/40 animate-pulse animate-bounce-slow" style={{ animationDelay: '2.5s' }}>
          <Sparkles size={14} />
        </div>
        <div className="absolute top-3/4 left-3/4 text-cyan-400/40 animate-pulse animate-spin-slow" style={{ animationDelay: '3.5s' }}>
          <Zap size={18} />
        </div>
        <div className="absolute top-1/6 right-1/3 text-green-400/35 animate-pulse animate-bounce-slow" style={{ animationDelay: '4.5s' }}>
          <Star size={12} />
        </div>
        <div className="absolute bottom-1/6 left-1/5 text-yellow-400/40 animate-pulse animate-spin-slow" style={{ animationDelay: '5.5s' }}>
          <Sparkles size={22} />
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse-slow opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-500/5 to-transparent animate-pulse-slow opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 relative">
            <span className="text-gradient relative whitespace-nowrap">
              Bhimaraju Netaasree
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl animate-pulse-slow"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-rose-500/10 to-yellow-500/10 rounded-lg blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </span>
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 h-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg animate-pulse-slow"></div>
            <TypingEffect texts={roles} />
          </h2>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed relative">
            <span className="relative z-10">
              Crafting beautiful, functional, and user-centered digital experiences
              with modern technologies and creative problem-solving.
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg animate-pulse-slow opacity-50"></div>
          </p>
        </div>

        <div className="animate-fade-in-up space-y-8" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 neon-glow hover:scale-105 transform overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-10 py-4 glass border-2 border-white/30 text-foreground font-semibold rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 transform overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/Netaasree"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 glass rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-125 transform relative overflow-hidden"
            >
              <Github size={28} className="group-hover:text-blue-400 transition-colors duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500"></div>
            </a>
            <a
              href="https://www.linkedin.com/in/netaasree-bhimaraju-35261826a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 glass rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-125 transform relative overflow-hidden"
            >
              <Linkedin size={28} className="group-hover:text-blue-400 transition-colors duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500"></div>
            </a>
            <a
              href="mailto:bnssrs05@gmail.com"
              className="group p-4 glass rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-125 transform relative overflow-hidden"
            >
              <Mail size={28} className="group-hover:text-blue-400 transition-colors duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500"></div>
            </a>
          </div>
        </div>

        {/* Floating decorative elements around the content */}
        <div className="absolute -top-10 -left-10 w-20 h-20 border border-blue-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute -bottom-10 -right-10 w-16 h-16 border border-purple-400/20 rounded-full animate-spin-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 -left-16 w-12 h-12 border border-pink-400/20 rounded-full animate-spin-slow" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/4 -right-12 w-14 h-14 border border-cyan-400/20 rounded-full animate-spin-slow" style={{ animationDelay: '6s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
