
import React, { useState, useEffect } from 'react';
import { Award, ExternalLink, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Certificate {
  title: string;
  organization: string;
  date: string;
  description: string;
  credentialUrl?: string;
  credentialId?: string;
  skills: string[];
  image?: string;
}

interface Achievement {
  title: string;
  description: string;
  date: string;
  type: 'competition' | 'recognition' | 'milestone';
  image?: string;
}

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const certificates: Certificate[] = [
    {
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      date: '2024',
      description: 'Demonstrated expertise in designing distributed systems on AWS',
      credentialUrl: 'https://aws.amazon.com',
      credentialId: 'AWS-CSA-2024-001234',
      skills: ['AWS', 'Cloud Architecture', 'System Design', 'EC2', 'S3', 'Lambda'],
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop'
    },
    {
      title: 'React Developer Certification',
      organization: 'Meta',
      date: '2023',
      description: 'Advanced React development and best practices',
      credentialUrl: 'https://developers.facebook.com',
      credentialId: 'META-REACT-2023-567890',
      skills: ['React', 'JavaScript', 'Frontend Development', 'Redux', 'Hooks'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop'
    },
    {
      title: 'Full Stack Web Development',
      organization: 'FreeCodeCamp',
      date: '2023',
      description: 'Comprehensive full-stack development bootcamp',
      credentialUrl: 'https://freecodecamp.org',
      credentialId: 'FCC-FULLSTACK-2023-112233',
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop'
    },
    {
      title: 'Google Cloud Professional',
      organization: 'Google Cloud',
      date: '2024',
      description: 'Professional cloud architect certification',
      credentialUrl: 'https://cloud.google.com',
      credentialId: 'GCP-PROF-2024-445566',
      skills: ['Google Cloud', 'Kubernetes', 'DevOps', 'Docker', 'Terraform'],
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop'
    },
    {
      title: 'Azure DevOps Engineer',
      organization: 'Microsoft',
      date: '2024',
      description: 'Expert-level Azure DevOps and CI/CD practices',
      credentialUrl: 'https://azure.microsoft.com',
      credentialId: 'AZ-DEVOPS-2024-778899',
      skills: ['Azure', 'DevOps', 'CI/CD', 'PowerShell', 'ARM Templates'],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop'
    }
  ];

  const achievements: Achievement[] = [
    {
      title: 'Hackathon Winner',
      description: 'First place in TechCrunch Disrupt Hackathon 2024',
      date: '2024',
      type: 'competition',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop'
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributed to 50+ open source projects with 1000+ stars',
      date: '2023-2024',
      type: 'milestone',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop'
    },
    {
      title: 'Developer of the Month',
      description: 'Recognized by company for outstanding performance',
      date: '2023',
      type: 'recognition',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    }
  ];

  const openFullScreen = (certificate: Certificate, index: number) => {
    setSelectedCertificate(certificate);
    setCurrentIndex(index);
    setIsFullScreenOpen(true);
  };

  const closeFullScreen = () => {
    setSelectedCertificate(null);
    setIsFullScreenOpen(false);
  };

  const nextCertificate = () => {
    if (currentIndex < certificates.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        setSelectedCertificate(certificates[nextIndex]);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const prevCertificate = () => {
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        const prevIndex = currentIndex - 1;
        setCurrentIndex(prevIndex);
        setSelectedCertificate(certificates[prevIndex]);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const getAchievementIcon = (type: Achievement['type']) => {
    switch (type) {
      case 'competition':
        return '🏆';
      case 'recognition':
        return '⭐';
      case 'milestone':
        return '🎯';
      default:
        return '🏅';
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isFullScreenOpen) {
        if (event.key === 'Escape') {
          closeFullScreen();
        } else if (event.key === 'ArrowLeft') {
          prevCertificate();
        } else if (event.key === 'ArrowRight') {
          nextCertificate();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullScreenOpen, currentIndex]);

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and notable achievements in my career
          </p>
        </div>

        {/* Certificates Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gradient-lightblue">Professional Certificates</h3>
          
          {/* Stable Certificate Display */}
          <div className="flex justify-center items-center mb-8">
            <div className="relative w-full max-w-6xl">
              <div className={`flex items-center justify-center space-x-4 transition-all duration-500 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
                {/* Previous Certificate (Faded) */}
                {currentIndex > 0 && (
                  <div className="hidden lg:block opacity-30 scale-75 transition-all duration-500">
                    <div className="certificate-card glass-vibrant rounded-xl overflow-hidden w-80 h-[32rem]">
                      <img
                        src={certificates[currentIndex - 1].image}
                        alt="Previous Certificate"
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                          {certificates[currentIndex - 1].title}
                        </h4>
                        <p className="text-sm text-gray-300 mb-2">
                          {certificates[currentIndex - 1].organization}
                        </p>
                        <p className="text-xs text-gray-400 mb-2">
                          ID: {certificates[currentIndex - 1].credentialId}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {certificates[currentIndex - 1].skills.slice(0, 2).map((skill, i) => (
                            <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Main Certificate (Center) - Full Photo Display */}
                <div className="certificate-card glass-vibrant rounded-xl overflow-hidden w-96 h-[36rem] neon-glow-multi hover-glow cursor-pointer transform transition-all duration-500 hover:scale-105"
                     onClick={() => openFullScreen(certificates[currentIndex], currentIndex)}>
                  <div className="relative">
                    <img
                      src={certificates[currentIndex].image}
                      alt={certificates[currentIndex].title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Award className="text-yellow-400 mb-2 animate-pulse" size={24} />
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-vibrant">
                    <h4 className="text-xl font-bold mb-2 text-gradient">
                      {certificates[currentIndex].title}
                    </h4>
                    
                    <p className="text-blue-300 font-medium mb-2">
                      {certificates[currentIndex].organization}
                    </p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {certificates[currentIndex].date}
                      </span>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-gray-400 mb-1">Credential ID:</p>
                      <p className="text-sm font-mono text-blue-300 bg-black/20 p-2 rounded">
                        {certificates[currentIndex].credentialId}
                      </p>
                    </div>
                    
                    <div className="mb-2">
                      <p className="text-xs text-gray-400 mb-2">Skills Acquired:</p>
                      <div className="flex flex-wrap gap-1">
                        {certificates[currentIndex].skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full animate-pulse-slow"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Next Certificate (Faded) */}
                {currentIndex < certificates.length - 1 && (
                  <div className="hidden lg:block opacity-30 scale-75 transition-all duration-500">
                    <div className="certificate-card glass-vibrant rounded-xl overflow-hidden w-80 h-[32rem]">
                      <img
                        src={certificates[currentIndex + 1].image}
                        alt="Next Certificate"
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                          {certificates[currentIndex + 1].title}
                        </h4>
                        <p className="text-sm text-gray-300 mb-2">
                          {certificates[currentIndex + 1].organization}
                        </p>
                        <p className="text-xs text-gray-400 mb-2">
                          ID: {certificates[currentIndex + 1].credentialId}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {certificates[currentIndex + 1].skills.slice(0, 2).map((skill, i) => (
                            <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              {currentIndex > 0 && (
                <button
                  onClick={prevCertificate}
                  disabled={isTransitioning}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full hover:from-blue-400 hover:to-purple-400 transition-all duration-300 neon-glow z-10 disabled:opacity-50"
                >
                  <ChevronLeft size={24} />
                </button>
              )}
              
              {currentIndex < certificates.length - 1 && (
                <button
                  onClick={nextCertificate}
                  disabled={isTransitioning}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:from-purple-400 hover:to-pink-400 transition-all duration-300 neon-glow z-10 disabled:opacity-50"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>
          </div>

          {/* Certificate Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsTransitioning(false);
                    }, 150);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125 neon-glow' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Full Screen Certificate Modal */}
        {isFullScreenOpen && selectedCertificate && (
          <div className="fullscreen-modal" onClick={closeFullScreen}>
            <div className="certificate-preview" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gradient">{selectedCertificate.title}</h2>
                <button
                  onClick={closeFullScreen}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-96 object-cover rounded-lg neon-glow"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">Organization</h3>
                    <p className="text-lg text-gray-300">{selectedCertificate.organization}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">Date Earned</h3>
                    <p className="text-lg text-gray-300">{selectedCertificate.date}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">Credential ID</h3>
                    <p className="text-lg font-mono text-gray-300 bg-gray-800/50 p-3 rounded-lg">
                      {selectedCertificate.credentialId}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">Description</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedCertificate.description}</p>
                  </div>
                  
                  {selectedCertificate.credentialUrl && (
                    <a
                      href={selectedCertificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      View Credential
                    </a>
                  )}
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Skills Acquired</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedCertificate.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Navigation in full screen */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevCertificate();
                  }}
                  disabled={currentIndex === 0}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} className="mr-2" />
                  Previous
                </button>
                
                <span className="text-gray-400">
                  {currentIndex + 1} of {certificates.length}
                </span>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextCertificate();
                  }}
                  disabled={currentIndex === certificates.length - 1}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gradient-lightblue">Notable Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-vibrant rounded-xl overflow-hidden hover-glow cursor-pointer certificate-card animate-float" 
                   style={{ animationDelay: `${index * 0.2}s` }}>
                {achievement.image && (
                  <div className="relative overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-3xl bg-black/50 p-2 rounded-full animate-sparkle-dance">
                        {getAchievementIcon(achievement.type)}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="p-6 bg-gradient-vibrant">
                  {!achievement.image && (
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-3xl animate-sparkle-dance">{getAchievementIcon(achievement.type)}</span>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {achievement.date}
                      </span>
                    </div>
                  )}
                  
                  {achievement.image && (
                    <div className="flex justify-end mb-4">
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {achievement.date}
                      </span>
                    </div>
                  )}
                  
                  <h4 className="text-lg font-bold mb-2 text-gradient">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
