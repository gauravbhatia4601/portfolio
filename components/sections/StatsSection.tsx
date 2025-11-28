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
    {
      icon: <Star className="w-8 h-8" />,
      number: "117",
      label: "GitHub Stars",
      description: "Community recognition and code quality"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "10x",
      label: "Revenue Generation",
      description: "Business impact through technology"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "6",
      label: "GitHub Followers",
      description: "Professional network and influence"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "85%",
      label: "Efficiency Improvement",
      description: "System optimization achievements"
    }
  ];

  return (
    <section id="stats" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
              Key Metrics & Impact
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Quantifiable achievements and statistics that demonstrate my expertise 
              and the value I bring to projects and organizations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10 group-hover:border-teal-400/50">
                  <div className="text-teal-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-lg rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Proven Track Record
              </h3>
              <p className="text-gray-300 mb-6">
                These metrics represent real-world impact and demonstrate my ability to deliver 
                high-quality solutions that drive business growth and technical excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-semibold text-white mb-2">Technical Excellence</h4>
                  <p className="text-gray-300 text-sm">Consistent delivery of robust, scalable backend systems</p>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-semibold text-white mb-2">Business Impact</h4>
                  <p className="text-gray-300 text-sm">Measurable results that drive revenue and efficiency</p>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-semibold text-white mb-2">Community Recognition</h4>
                  <p className="text-gray-300 text-sm">Acknowledged contributions and professional growth</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection; 