"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, FileText, Star, TrendingUp, Users } from 'lucide-react';

const AchievementsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Cyber Security Certification",
      description: "Completed 45-day cybersecurity training program and excelled in 16-hour penetration testing challenge, successfully penetrating 6 out of 8 machines",
      category: "Security"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "GitHub Pull Shark Achievement",
      description: "Earned GitHub's Pull Shark achievement for exceptional contributions and code quality across multiple repositories",
      category: "Development"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "10x Revenue Generation",
      description: "Developed booking platform for transport agency generating 10x revenue increase through optimized backend systems",
      category: "Business Impact"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "85% System Efficiency Improvement",
      description: "Improved system efficiency by 85% using database optimization and performance monitoring at Code Brew Labs",
      category: "Performance"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Leadership Excellence",
      description: "Successfully led development teams, organized daily scrum meetings, and achieved monthly targets consistently",
      category: "Leadership"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Co-founder Achievement",
      description: "Co-founded Technioz, establishing a successful technology company specializing in AI automation and backend development",
      category: "Entrepreneurship"
    }
  ];

  const getCategoryColor = (category: string) => {
    // All categories use coral with varying opacity for visual distinction
    const opacityMap: { [key: string]: { bg: number, border: number } } = {
      'Security': { bg: 0.2, border: 0.4 },
      'Development': { bg: 0.15, border: 0.3 },
      'Business Impact': { bg: 0.18, border: 0.35 },
      'Performance': { bg: 0.12, border: 0.25 },
      'Leadership': { bg: 0.16, border: 0.32 },
      'Entrepreneurship': { bg: 0.14, border: 0.28 },
    };
    
    const opacities = opacityMap[category] || { bg: 0.15, border: 0.3 };
    
    return {
      bg: `rgba(255, 255, 255, ${opacities.bg})`,
      border: `rgba(255, 255, 255, ${opacities.border})`,
      icon: '#121b2f',
    };
  };

  return (
    <section 
      id="achievements" 
      className="py-20 relative"
      style={{ backgroundColor: '#fff' }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Achievements & Certifications
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#121b2f' }}>
            Recognized accomplishments and certifications that demonstrate my expertise 
            and commitment to excellence in technology and business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="backdrop-blur-lg rounded-xl p-6 transition-all duration-300 border"
              style={{
                backgroundColor: getCategoryColor(achievement.category).bg,
                borderColor: getCategoryColor(achievement.category).border,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="mb-4 flex items-center justify-between" style={{ color: getCategoryColor(achievement.category).icon }}>
                {achievement.icon}
                <span 
                  className="text-xs px-2 py-1 rounded-full border"
                  style={{
                    backgroundColor: '#fafafa',
                    borderColor: getCategoryColor(achievement.category).border,
                    color: '#121b2f',
                  }}
                >
                  {achievement.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#121b2f' }}>
                {achievement.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#121b2f' }}>
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection; 