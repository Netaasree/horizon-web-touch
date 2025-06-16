import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      longDescription: 'A comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, payment integration with Stripe, order tracking, and an admin dashboard. Built with modern technologies and following best practices for scalability and security.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      longDescription: 'A collaborative task management application with real-time synchronization, drag-and-drop functionality, team collaboration features, file attachments, and detailed analytics. Perfect for teams looking to improve their productivity and workflow management.',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      images: ['/placeholder.svg', '/placeholder.svg'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with forecasts and location-based data',
      longDescription: 'A comprehensive weather dashboard providing current conditions, 7-day forecasts, interactive maps, weather alerts, and historical data. Features a beautiful, responsive design with smooth animations and intuitive user experience.',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      images: ['/placeholder.svg'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio with modern design and animations',
      longDescription: 'A stunning personal portfolio website showcasing projects, skills, and experience. Features smooth scrolling, animated elements, dark/light mode toggle, contact form, and fully responsive design. Built with attention to detail and performance optimization.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      images: ['/placeholder.svg', '/placeholder.svg'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const openProject = (index: number) => {
    setSelectedProject(index);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const project = projects[selectedProject!];
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    const project = projects[selectedProject!];
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const ProjectCard = ({ project, index, featured = false }: { project: any, index: number, featured?: boolean }) => (
    <div 
      className={`glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 group cursor-pointer ${
        featured ? 'lg:col-span-2' : ''
      }`}
      onClick={() => openProject(index)}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-blue-500/80 text-white px-2 py-1 rounded text-sm font-medium">
            View Details
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} className="mr-1" />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={16} className="mr-1" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={projects.indexOf(project)}
              featured={true}
            />
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={index + featuredProjects.length}
                project={project}
                index={projects.indexOf(project)}
              />
            ))}
          </div>
        </div>

        {/* Project Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={() => closeProject()}>
          <DialogContent className="max-w-4xl glass border border-white/20">
            {selectedProject !== null && (
              <div>
                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors duration-300 z-10"
                >
                  <X size={20} />
                </button>

                <div className="relative mb-6">
                  <img
                    src={projects[selectedProject].images[currentImageIndex]}
                    alt={projects[selectedProject].title}
                    className="w-full h-64 sm:h-80 object-cover rounded-lg"
                  />
                  
                  {projects[selectedProject].images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300"
                      >
                        <ChevronRight size={20} />
                      </button>
                      
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {projects[selectedProject].images.map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i === currentImageIndex ? 'bg-white' : 'bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {projects[selectedProject].title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {projects[selectedProject].longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[selectedProject].tech.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={projects[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                  <a
                    href={projects[selectedProject].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
