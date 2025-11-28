"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Users, Star, TrendingUp, Clock, Award } from 'lucide-react';

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <Clock className="w-8 h-8" />,
      number: "5+",
      label: "Years Experience",
      description: "Backend development and AI automation"
    },
    {
      icon: <Code className="w-8 h-8" />,
      number: "14",
      label: "GitHub Repositories",
      description: "Open source contributions and projects"
    },
    // {
    //   icon: <Star className="w-8 h-8" />,
    //   number: "117",
    //   label: "GitHub Stars",
    //   description: "Community recognition and code quality"
    // },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "10x",
      label: "Revenue Generation",
      description: "Business impact through technology"
    },
    // {
    //   icon: <Users className="w-8 h-8" />,
    //   number: "6",
    //   label: "GitHub Followers",
    //   description: "Professional network and influence"
    // },
    {
      icon: <Award className="w-8 h-8" />,
      number: "85%",
      label: "Efficiency Improvement",
      description: "System optimization achievements"
    }
  ];

  return (
    <section 
      id="stats" 
      className="py-20 relative"
      style={{ backgroundColor: '#fff' }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Key Metrics & Impact
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#121b2f' }}>
              Quantifiable achievements and statistics that demonstrate my expertise 
              and the value I bring to projects and organizations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div 
                  className="backdrop-blur-lg rounded-xl p-6 transition-all duration-300 border group"
                  style={{
                    backgroundColor: '#fafafa',
                    borderColor: 'rgba(18, 27, 47, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.backgroundColor = '#fafafa';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(18, 27, 47, 0.1)';
                    e.currentTarget.style.backgroundColor = '#fafafa';
                  }}
                >
                  <div className="mb-4 flex justify-center" style={{ color: '#121b2f' }}>
                    {stat.icon}
                  </div>
                  <motion.div
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: '#121b2f' }}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#121b2f' }}>
                    {stat.label}
                  </h3>
                  <p className="text-sm" style={{ color: '#121b2f' }}>
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection; 