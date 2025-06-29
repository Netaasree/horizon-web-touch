
import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Netaasree', name: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/netaasree-bhimaraju-35261826a/', name: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: 'https://x.com/netaasree', name: 'Twitter' },
    { icon: <Mail size={20} />, url: 'mailto:bnssrs05@gmail.com', name: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Bhimaraju Netaasree</h3>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about creating amazing digital experiences
              with modern technologies and innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                  aria-label={social.name}
                >
                  <div className="group-hover:text-blue-400 transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative inline-block w-fit"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>bnssrs05@gmail.com</p>
              <p>+1 (555) 123-4567</p>
              <p>India</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Always open to interesting conversations and collaboration opportunities.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Bhimaraju Netaasree. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
