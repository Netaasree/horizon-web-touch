
import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificates: Certificate[] = [
    {
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      date: '2024',
      description: 'Demonstrated expertise in designing distributed systems on AWS',
      credentialUrl: 'https://aws.amazon.com',
      credentialId: 'AWS-CSA-2024-001234',
      skills: ['AWS', 'Cloud Architecture', 'System Design'],
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop'
    },
    {
      title: 'React Developer Certification',
      organization: 'Meta',
      date: '2023',
      description: 'Advanced React development and best practices',
      credentialUrl: 'https://developers.facebook.com',
      credentialId: 'META-REACT-2023-567890',
      skills: ['React', 'JavaScript', 'Frontend Development'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop'
    },
    {
      title: 'Full Stack Web Development',
      organization: 'FreeCodeCamp',
      date: '2023',
      description: 'Comprehensive full-stack development bootcamp',
      credentialUrl: 'https://freecodecamp.org',
      credentialId: 'FCC-FULLSTACK-2023-112233',
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop'
    },
    {
      title: 'Google Cloud Professional',
      organization: 'Google Cloud',
      date: '2024',
      description: 'Professional cloud architect certification',
      credentialUrl: 'https://cloud.google.com',
      credentialId: 'GCP-PROF-2024-445566',
      skills: ['Google Cloud', 'Kubernetes', 'DevOps'],
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop'
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

  const openCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    setIsModalOpen(false);
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

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient-lightblue">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and notable achievements in my career
          </p>
        </div>

        {/* Certificates Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-lightblue-400">Professional Certificates</h3>
          <div className="relative">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {certificates.map((cert, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div 
                      className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:-translate-y-2 cursor-pointer relative hover:border-2 hover:border-lightblue-400/60 hover:shadow-2xl hover:shadow-lightblue-500/30"
                      onClick={() => openCertificate(cert)}
                    >
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-lightblue-500/0 via-sky-500/0 to-cyan-500/0 group-hover:from-lightblue-500/20 group-hover:via-sky-500/20 group-hover:to-cyan-500/20 transition-all duration-500 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                      
                      <div className="relative overflow-hidden">
                        <img
                          src={cert.image}
                          alt={`${cert.title} Certificate`}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      
                      <div className="p-6 relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <Award className="text-lightblue-400 group-hover:text-lightblue-300 transition-colors duration-300 group-hover:scale-110" size={32} />
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {cert.date}
                          </span>
                        </div>
                        
                        <h4 className="text-xl font-bold mb-2 group-hover:text-lightblue-400 transition-colors duration-300">
                          {cert.title}
                        </h4>
                        
                        <p className="text-lightblue-300 font-medium mb-3 group-hover:text-lightblue-200 transition-colors duration-300">{cert.organization}</p>
                        
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                          {cert.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.slice(0, 3).map((skill, i) => (
                            <span
                              key={i}
                              className="text-xs bg-lightblue-500/20 text-lightblue-300 px-2 py-1 rounded group-hover:bg-lightblue-500/30 group-hover:text-lightblue-200 transition-all duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                          {cert.skills.length > 3 && (
                            <span className="text-xs text-lightblue-400">+{cert.skills.length - 3} more</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 border-lightblue-400/50 text-lightblue-400 hover:bg-lightblue-500/20 hover:border-lightblue-300" />
              <CarouselNext className="hidden md:flex -right-12 border-lightblue-400/50 text-lightblue-400 hover:bg-lightblue-500/20 hover:border-lightblue-300" />
            </Carousel>
          </div>
        </div>

        {/* Certificate Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto glass border-lightblue-400/30">
            {selectedCertificate && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-lightblue-400 mb-4">
                    {selectedCertificate.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={selectedCertificate.image}
                      alt={`${selectedCertificate.title} Certificate`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-lightblue-300 font-medium text-lg">{selectedCertificate.organization}</p>
                      <span className="text-muted-foreground flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {selectedCertificate.date}
                      </span>
                    </div>
                    
                    {selectedCertificate.credentialId && (
                      <div className="bg-lightblue-500/10 p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground">Credential ID:</p>
                        <p className="text-lightblue-300 font-mono">{selectedCertificate.credentialId}</p>
                      </div>
                    )}
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedCertificate.description}
                    </p>
                    
                    {selectedCertificate.credentialUrl && (
                      <a
                        href={selectedCertificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-lightblue-400 hover:text-lightblue-300 transition-colors duration-300 hover:underline"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Credential
                      </a>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-lightblue-400">Skills Acquired</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-lightblue-500/20 text-lightblue-300 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-lightblue-400">Notable Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:-translate-y-2 relative hover:border-2 hover:border-lightblue-400/60 hover:shadow-2xl hover:shadow-lightblue-500/30">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-lightblue-500/0 via-sky-500/0 to-cyan-500/0 group-hover:from-lightblue-500/20 group-hover:via-sky-500/20 group-hover:to-cyan-500/20 transition-all duration-500 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                
                {achievement.image && (
                  <div className="relative overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={`${achievement.title} Achievement`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-3xl bg-black/50 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                        {getAchievementIcon(achievement.type)}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="p-6 relative z-10">
                  {!achievement.image && (
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{getAchievementIcon(achievement.type)}</span>
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
                  
                  <h4 className="text-lg font-bold mb-2 group-hover:text-lightblue-400 transition-colors duration-300">
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
