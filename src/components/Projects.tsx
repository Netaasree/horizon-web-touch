
import React, { useMemo, useState } from 'react';
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
  github?: string;
  live?: string;
  featured: boolean;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const projects: Project[] = [
    {
      title: 'Object detection using YOLOv5',
      description: 'An object detection system using YOLOv5 that processes video input to identify and highlight objects in real-time.',
      longDescription: 'This project implements real-time object detection on video input using the YOLOv5 deep learning model. It identifies and highlights multiple objects frame-by-frame, providing a visual output with bounding boxes and class labels.',
      tech: ['Python', 'PyTorch', 'YOLOv5', 'OpenCV', 'NumPy', 'Matplotlib', 'Torchvision'],
      media: [
        { type: 'video', src: '/videos/ecommerce-demo.mp4', thumbnail: '/images/ecommerce-thumbnail.jpg' },
        { type: 'image', src: '/images/ecommerce-screenshot1.jpg' },
        { type: 'image', src: '/images/ecommerce-screenshot2.jpg' }
      ],
      github: 'https://github.com/Netaasree/object-detection-project2.git',
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
      featured: true,
    },
    {
      title: 'Diary writing app',
      description: 'Share your thoughts and experiences with a beautiful diary app',
      longDescription: 'A personal diary writing app that allows users to write and upload their daily experiences and thoughts.',
      tech: ['Python', 'Flask', 'Gunicorn', 'MongoDB', 'Render'],
      media: [
        { type: 'video', src: '/videos/diary2.mp4', thumbnail: '/placeholder.svg' },
        { type: 'image', src: '/images/diaryimg.png', thumbnail: '/placeholder.svg' }
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
      live: 'https://netaportfolio.vercel.app',
      featured: false,
    },
  ];

  // Build filter chips from tech tags (with a curated "AI/ML" umbrella)
  const AI_ML_TAGS = new Set(['YOLOv5', 'PyTorch', 'OpenCV', 'Torchvision', 'NumPy', 'Matplotlib']);
  const allTech = useMemo(() => {
    const set = new Set<string>();
    projects.forEach(p => p.tech.forEach(t => set.add(t)));
    return Array.from(set);
  }, []);

  const priorityFilters = ['All', 'AI/ML', 'Python', 'React', 'TypeScript'];
  const filters = [
    ...priorityFilters,
    ...allTech.filter(t => !priorityFilters.includes(t) && !AI_ML_TAGS.has(t)),
  ];

  const matchesFilter = (project: Project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI/ML') return project.tech.some(t => AI_ML_TAGS.has(t));
    return project.tech.includes(activeFilter);
  };

  const visibleProjects = projects.filter(matchesFilter);
  const featuredProjects = visibleProjects.filter(p => p.featured);
  const otherProjects = visibleProjects.filter(p => !p.featured);

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
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => {
            const active = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  active
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg shadow-purple-500/30'
                    : 'border-white/15 text-muted-foreground hover:text-foreground hover:border-white/30'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {visibleProjects.length === 0 && (
          <p className="text-center text-muted-foreground">No projects match this filter.</p>
        )}

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={projects.indexOf(project)}
                featured={true}
                onClick={openProject}
              />
            ))}
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={projects.indexOf(project)}
                  onClick={openProject}
                />
              ))}
            </div>
          </div>
        )}

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
