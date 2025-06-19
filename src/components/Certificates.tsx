
import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface Certificate {
  title: string;
  organization: string;
  date: string;
  description: string;
  credentialUrl?: string;
  skills: string[];
}

interface Achievement {
  title: string;
  description: string;
  date: string;
  type: 'competition' | 'recognition' | 'milestone';
}

const Certificates = () => {
  const certificates: Certificate[] = [
    {
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      date: '2024',
      description: 'Demonstrated expertise in designing distributed systems on AWS',
      credentialUrl: 'https://aws.amazon.com',
      skills: ['AWS', 'Cloud Architecture', 'System Design']
    },
    {
      title: 'React Developer Certification',
      organization: 'Meta',
      date: '2023',
      description: 'Advanced React development and best practices',
      credentialUrl: 'https://developers.facebook.com',
      skills: ['React', 'JavaScript', 'Frontend Development']
    },
    {
      title: 'Full Stack Web Development',
      organization: 'FreeCodeCamp',
      date: '2023',
      description: 'Comprehensive full-stack development bootcamp',
      credentialUrl: 'https://freecodecamp.org',
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB']
    }
  ];

  const achievements: Achievement[] = [
    {
      title: 'Hackathon Winner',
      description: 'First place in TechCrunch Disrupt Hackathon 2024',
      date: '2024',
      type: 'competition'
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributed to 50+ open source projects with 1000+ stars',
      date: '2023-2024',
      type: 'milestone'
    },
    {
      title: 'Developer of the Month',
      description: 'Recognized by company for outstanding performance',
      date: '2023',
      type: 'recognition'
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
              <div key={index} className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" size={32} />
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </h4>
                
                <p className="text-blue-300 font-medium mb-3">{cert.organization}</p>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
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
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    View Credential
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Notable Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{getAchievementIcon(achievement.type)}</span>
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {achievement.date}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {achievement.title}
                </h4>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
