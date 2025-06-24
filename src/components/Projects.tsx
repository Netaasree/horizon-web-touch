
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
      title: 'Object detection using YOLOv5',
      description: 'An object detection system using YOLOv5 that processes video input to identify and highlight objects in real-time.',
      longDescription: 'This project implements real-time object detection on video input using the YOLOv5 deep learning model. It identifies and highlights multiple objects frame-by-frame, providing a visual output with bounding boxes and class labels.',
      tech: ['Python', 'PyTorch', 'YOLOv5','OpenCV','NumPy','Matplotlib','Torchvision'],
      media: [
        { type: 'video', src: '/videos/ecommerce-demo.mp4', thumbnail: '/images/ecommerce-thumbnail.jpg' },
        { type: 'image', src: '/images/ecommerce-screenshot1.jpg' },
        { type: 'image', src: '/images/ecommerce-screenshot2.jpg' }
      ],
      github: 'https://github.com/Netaasree/object-detection-project2.git',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      longDescription: 'A collaborative task management application with real-time synchronization, drag-and-drop functionality, team collaboration features, file attachments, and detailed analytics. Perfect for teams looking to improve their productivity and workflow management.',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      media: [
        { type: 'video', src: '/videos/task-management-demo.mp4', thumbnail: '/images/task-management-thumbnail.jpg' },
        { type: 'image', src: '/images/task-management-screenshot1.jpg' },
        { type: 'image', src: '/images/task-management-screenshot2.jpg' }
      ],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'Diary writing app',
      description: 'Share your thoughts and experiences with a beautiful diary app',
      longDescription:'A personal diary writing app that allows users to write and upload their daily experiences and thoughts.',
      tech: ['Python', 'Flask', 'Gunicorn', 'MongoDB','Render'],
      media: [
        { type: 'video', src: '/videos/diary2.mp4', thumbnail: '/placeholder.svg' },
        { type: 'image', src: '/images/diaryimg.png', thumbnail:'/placeholder.svg' }
      ],
      github: 'https://github.com/Netaasree/deployement.git',
      live: 'https://deployement-4chj.onrender.com/',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio with modern design and animations',
      longDescription: 'A stunning personal portfolio website showcasing projects, skills, and experience. Features smooth scrolling, animated elements, dark/light mode toggle, contact form, and fully responsive design. Built with attention to detail and performance optimization.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      media: [
        { type: 'video', src: '/videos/portfolio-demo.mp4', thumbnail: '/images/portfolio-thumbnail.jpg' },
        { type: 'image', src: '/images/portfolioimg.png' }
      ],
      github: 'https://github.com/Netaasree/horizon-web-touch.git',
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
