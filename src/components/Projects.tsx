import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

interface MediaItem {
  type: 'video' | 'image';
  src: string;
  thumbnail?: string;
}

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  media: MediaItem[];
  github: string;
  live: string;
  featured: boolean;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      longDescription: 'A comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, payment integration with Stripe, order tracking, and an admin dashboard. Built with modern technologies and following best practices for scalability and security.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      media: [
        { type: 'video', src: '/src/assets/videos/ecommerce-demo.mp4', thumbnail: '/placeholder.svg' },
        { type: 'image', src: '/placeholder.svg' },
        { type: 'image', src: '/placeholder.svg' }
      ],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      longDescription: 'A collaborative task management application with real-time synchronization, drag-and-drop functionality, team collaboration features, file attachments, and detailed analytics. Perfect for teams looking to improve their productivity and workflow management.',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      media: [
        { type: 'video', src: '/src/assets/videos/task-management-demo.mp4', thumbnail: '/placeholder.svg' },
        { type: 'image', src: '/placeholder.svg' },
        { type: 'image', src: '/placeholder.svg' }
      ],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with forecasts and location-based data',
      longDescription: 'A comprehensive weather dashboard providing current conditions, 7-day forecasts, interactive maps, weather alerts, and historical data. Features a beautiful, responsive design with smooth animations and intuitive user experience.',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      media: [
        { type: 'video', src: '/src/assets/videos/weather-demo.mp4', thumbnail: '/placeholder.svg' },
        { type: 'image', src: '/placeholder.svg' }
      ],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio with modern design and animations',
      longDescription: 'A stunning personal portfolio website showcasing projects, skills, and experience. Features smooth scrolling, animated elements, dark/light mode toggle, contact form, and fully responsive design. Built with attention to detail and performance optimization.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      media: [
        { type: 'video', src: '/src/assets/videos/portfolio-demo.mp4', thumbnail: '/placeholder.svg' },
        { type: 'image', src: '/placeholder.svg' }
      ],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const openProject = (index: number) => {
    setSelectedProject(index);
    setCurrentMediaIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentMediaIndex(0);
  };

  const nextMedia = () => {
    const project = projects[selectedProject!];
    setCurrentMediaIndex((prev) => 
      prev === project.media.length - 1 ? 0 : prev + 1
    );
  };

  const prevMedia = () => {
    const project = projects[selectedProject!];
    setCurrentMediaIndex((prev) => 
      prev === 0 ? project.media.length - 1 : prev - 1
    );
  };

  const selectedProjectData = selectedProject !== null ? projects[selectedProject] : null;

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
              onClick={openProject}
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
                onClick={openProject}
              />
            ))}
          </div>
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProjectData}
          isOpen={selectedProject !== null}
          currentMediaIndex={currentMediaIndex}
          onClose={closeProject}
          onNextMedia={nextMedia}
          onPrevMedia={prevMedia}
        />
      </div>
    </section>
  );
};

export default Projects;
