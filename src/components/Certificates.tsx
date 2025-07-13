
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
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);
  const [isAchievementFullScreen, setIsAchievementFullScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const certificates: Certificate[] = [
    {
      title: 'Cloud Computing',
      organization: 'NPTEL',
      date: '2024',
      description: 'I successfully completed the 12-week NPTEL course on Cloud Computing conducted by IIT Kharagpur with an Elite certificate, scoring 71% overall.',
      credentialUrl: 'https://nptel.ac.in/noc',
      credentialId: 'NPTEL24CS118S1055701255',
      skills: ['Virtualization', 'Cloudsecurity', 'Networking', 'Loadbalancing', 'Deployment'],
      image: '/images/certificates/cloudcomputingcer.jpg'
    },
    {
      title: 'The Joy of Computing using Python',
      organization: 'NPTEL',
      date: '2023',
      description: 'I successfully completed the 12-week NPTEL course "The Joy of Computing Using Python" conducted by IIT Madras and received an Elite certificate with a score of 69%.',
      credentialUrl: 'https://nptel.ac.in/noc',
      credentialId: 'NPTEL23CS10S844983440',
      skills: ['Programming', 'Debugging', 'Problem-solving', 'Python', 'Logic'],
      image: '/images/certificates/pythoncer.jpg'
    },
    {
      title: 'OpenCV Bootcamp',
      organization: 'OpenCV University',
      date: '2023',
      description: 'Completed the OpenCV Bootcamp with 100% grade, focused on computer vision, image processing, and OpenCV tools.',
      credentialUrl: 'https://opencv.org/courses/',
      credentialId: '22KN1A0516',
      skills: ['OpenCV', 'ComputerVision', 'ImageProcessing', 'Python', 'MachineLearning'],
      image: '/images/certificates/opencvcer.jpg'
    },
    {
      title: 'Android App Development Hackathon',
      organization: 'Techgyan & BITS Pilani, Hyderabad Campus',
      date: 'February 2025',
      description: 'Participated in and completed the Android App Development Hackathon demonstrating creativity, innovation, and problem-solving skills.',
      credentialUrl: 'https://www.bits-pilani.ac.in/hyderabad/',
      credentialId: '22KN1A0516',
      skills: ['Android', 'AppDevelopment', 'ProblemSolving', 'Creativity', 'Teamwork'],
      image: '/images/certificates/bitshackathoncer.jpg'
    },
    {
      title: 'Generative AI Internship',
      organization: 'Codegnan IT Solutions Pvt Ltd & APSCHE',
      date: 'May–July 2024',
      description: 'Completed a 120-hour short-term internship on Generative AI organized by Codegnan IT Solutions in collaboration with APSCHE and JNTU Kakinada.',
      credentialUrl: 'https://codegnan.com/',
      credentialId: '22KN1A0516',
      skills: ['GenerativeAI', 'DeepLearning', 'AIModels', 'PromptEngineering', 'MachineLearning'],
      image: '/images/certificates/genaicer.jpg'
    },
    {
      title: 'TechTrek Webathon/Hackathon',
      organization: 'Siddhartha Academy of Higher Education',
      date: 'January 2025',
      description: 'Participated in TechTrek – a 24-hour National Level Industry Driven Webathon/Hackathon as part of the Research Conclave 2025 held at Siddhartha Academy, Vijayawada.',
      credentialUrl: '',
      credentialId: '22KN1A0516',
      skills: ['WebDevelopment', 'Hackathon', 'ProblemSolving', 'Teamwork', 'Innovation'],
      image: '/images/certificates/vrhackathoncer.jpg'
    },
    {
      title: 'Full Stack Hackathon 2K24',
      organization: 'NRI Institute of Technology & Codegnan IT Solutions',
      date: 'December 2024',
      description: 'Participated in Hackathon 2K24 focused on Full Stack Development, organized by the Department of CSE, NRI Institute of Technology in collaboration with Codegnan.',
      credentialUrl: '',
      credentialId: '22KN1A0516',
      skills: ['FullStack', 'WebDevelopment', 'ProblemSolving', 'Collaboration', 'Creativity'],
      image: '/images/certificates/nrihackthoncer.jpg'
    }
  ];

  const achievements: Achievement[] = [
    {
      title: 'Code Sankalp - Code Debugging Competition Winner',
      description: 'Secured 1st place in the Code Sankalp event at SUNRISE 2K25, a national-level technical fest held at NRI Institute of Technology. Awarded a cash prize of ₹1500.',
      date: 'February 2025',
      type: 'competition',
      image: '/images/certificates/bugwarcer.jpeg'   
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

  const openAchievementFullScreen = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setIsAchievementFullScreen(true);
  };

  const closeAchievementFullScreen = () => {
    setSelectedAchievement(null);
    setIsAchievementFullScreen(false);
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
      } else if (isAchievementFullScreen) {
        if (event.key === 'Escape') {
          closeAchievementFullScreen();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullScreenOpen, isAchievementFullScreen, currentIndex]);

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
                   style={{ animationDelay: `${index * 0.2}s` }}
                   onClick={() => openAchievementFullScreen(achievement)}>
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

        {/* Achievement Full Screen Modal */}
        {isAchievementFullScreen && selectedAchievement && (
          <div className="fullscreen-modal" onClick={closeAchievementFullScreen}>
            <div className="certificate-preview" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gradient">{selectedAchievement.title}</h2>
                <button
                  onClick={closeAchievementFullScreen}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {selectedAchievement.image && (
                  <div>
                    <img
                      src={selectedAchievement.image}
                      alt={selectedAchievement.title}
                      className="w-full h-96 object-cover rounded-lg neon-glow"
                    />
                  </div>
                )}
                
                <div className={`space-y-6 ${!selectedAchievement.image ? 'md:col-span-2' : ''}`}>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">Achievement Type</h3>
                    <p className="text-lg text-gray-300 flex items-center">
                      <span className="text-2xl mr-2">{getAchievementIcon(selectedAchievement.type)}</span>
                      {selectedAchievement.type.charAt(0).toUpperCase() + selectedAchievement.type.slice(1)}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">Date Achieved</h3>
                    <p className="text-lg text-gray-300">{selectedAchievement.date}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">Description</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedAchievement.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
