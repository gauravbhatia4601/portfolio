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
    switch (category) {
      case 'Security':
        return 'from-red-600/20 to-orange-600/20';
      case 'Development':
        return 'from-blue-600/20 to-cyan-600/20';
      case 'Business Impact':
        return 'from-green-600/20 to-emerald-600/20';
      case 'Performance':
        return 'from-purple-600/20 to-pink-600/20';
      case 'Leadership':
        return 'from-yellow-600/20 to-orange-600/20';
      case 'Entrepreneurship':
        return 'from-teal-600/20 to-cyan-600/20';
      default:
        return 'from-emerald-600/20 to-teal-600/20';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-black/10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
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
              className={`bg-gradient-to-r ${getCategoryColor(achievement.category)} backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10`}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-teal-400 mb-4 flex items-center justify-between">
                {achievement.icon}
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full text-white">
                  {achievement.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
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
          <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-lg rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Growth & Learning
            </h3>
            <p className="text-gray-300 mb-6">
              I believe in continuous improvement and staying ahead of technology trends. 
              These achievements reflect my commitment to excellence and innovation in every project.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Security", "Performance", "Leadership", "Innovation", "Excellence"].map((value, index) => (
                <span
                  key={index}
                  className="bg-emerald-600/30 text-emerald-300 px-4 py-2 rounded-full text-sm"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection; 