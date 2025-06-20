
import React, { useRef, useEffect } from 'react';
import { ExternalLink, Github, Video } from 'lucide-react';

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

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
  onClick: (index: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  index, 
  featured = false, 
  onClick 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const card = cardRef.current;
    
    if (!video || !card || project.media[0].type !== 'video') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in viewport, enable hover effects
            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);
          } else {
            // Video is out of viewport, clean up
            video.pause();
            video.currentTime = 0;
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log('Autoplay prevented by browser');
        });
      }
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 group cursor-pointer relative hover:border-2 hover:border-gradient-to-r hover:from-blue-400/60 hover:via-purple-400/60 hover:to-pink-400/60 hover:shadow-2xl hover:shadow-purple-500/30 ${
        featured ? 'lg:col-span-2' : ''
      }`}
      onClick={() => onClick(index)}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500 opacity-0 group-hover:opacity-100 animate-pulse"></div>
      
      <div className="relative overflow-hidden">
        {project.media[0].type === 'video' ? (
          <div className="relative">
            <video
              ref={videoRef}
              src={project.media[0].src}
              poster={project.media[0].thumbnail}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-80 group-hover:opacity-0 transition-all duration-300 pointer-events-none">
              <Video size={40} className="text-white" />
            </div>
          </div>
        ) : (
          <img
            src={project.media[0].src}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-blue-500/80 text-white px-2 py-1 rounded text-sm font-medium shadow-lg">
            View Details
          </span>
        </div>
      </div>
      
      <div className="p-6 relative z-10">
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
              className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded group-hover:bg-blue-500/30 group-hover:text-blue-200 transition-all duration-300"
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
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 hover:text-blue-400"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} className="mr-1" />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 hover:text-purple-400"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={16} className="mr-1" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
