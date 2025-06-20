
import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface Certificate {
  title: string;
  organization: string;
  date: string;
  description: string;
  credentialUrl?: string;
  skills: string[];
  image?: string; // Path to certificate image in assets folder
}

interface Achievement {
  title: string;
  description: string;
  date: string;
  type: 'competition' | 'recognition' | 'milestone';
  image?: string; // Path to achievement image in assets folder
}

const Certificates = () => {
  const certificates: Certificate[] = [
    {
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      date: '2024',
      description: 'Demonstrated expertise in designing distributed systems on AWS',
      credentialUrl: 'https://aws.amazon.com',
      skills: ['AWS', 'Cloud Architecture', 'System Design'],
      image: '/src/assets/aws-cert.jpg' // Add your certificate image here
    },
    {
      title: 'React Developer Certification',
      organization: 'Meta',
      date: '2023',
      description: 'Advanced React development and best practices',
      credentialUrl: 'https://developers.facebook.com',
      skills: ['React', 'JavaScript', 'Frontend Development'],
      image: '/src/assets/react-cert.jpg' // Add your certificate image here
    },
    {
      title: 'Full Stack Web Development',
      organization: 'FreeCodeCamp',
      date: '2023',
      description: 'Comprehensive full-stack development bootcamp',
      credentialUrl: 'https://freecodecamp.org',
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      image: '/src/assets/fullstack-cert.jpg' // Add your certificate image here
    }
  ];

  const achievements: Achievement[] = [
    {
      title: 'Hackathon Winner',
      description: 'First place in TechCrunch Disrupt Hackathon 2024',
      date: '2024',
      type: 'competition',
      image: '/src/assets/hackathon-winner.jpg' // Add your achievement image here
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributed to 50+ open source projects with 1000+ stars',
      date: '2023-2024',
      type: 'milestone',
      image: '/src/assets/opensource-contrib.jpg' // Add your achievement image here
    },
    {
      title: 'Developer of the Month',
      description: 'Recognized by company for outstanding performance',
      date: '2023',
      type: 'recognition',
      image: '/src/assets/developer-month.jpg' // Add your achievement image here
    }
  ];

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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and notable achievements in my career
          </p>
        </div>

        {/* Certificates */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Certificates</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:-translate-y-2 relative hover:border-2 hover:border-gradient-to-r hover:from-blue-400/60 hover:via-purple-400/60 hover:to-pink-400/60 hover:shadow-2xl hover:shadow-blue-500/30">
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                
                {/* Certificate Image */}
                {cert.image && (
                  <div className="relative overflow-hidden">
                    <img
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                )}
                
                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <Award className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 group-hover:scale-110" size={32} />
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {cert.date}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {cert.title}
                  </h4>
                  
                  <p className="text-blue-300 font-medium mb-3 group-hover:text-blue-200 transition-colors duration-300">{cert.organization}</p>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded group-hover:bg-blue-500/30 group-hover:text-blue-200 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm hover:underline"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      View Credential
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Notable Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:-translate-y-2 relative hover:border-2 hover:border-gradient-to-r hover:from-purple-400/60 hover:via-pink-400/60 hover:to-orange-400/60 hover:shadow-2xl hover:shadow-purple-500/30">
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-orange-500/20 transition-all duration-500 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                
                {/* Achievement Image */}
                {achievement.image && (
                  <div className="relative overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={`${achievement.title} Achievement`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop';
                      }}
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
                  
                  <h4 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">
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
