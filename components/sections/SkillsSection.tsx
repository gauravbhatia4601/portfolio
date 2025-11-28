"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Zap, Cloud, Users, Brain, Server, Shield, Globe, Cpu, GitBranch, Rocket } from 'lucide-react';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Backend Technologies",
      icon: <Server className="w-8 h-8" />,
      color: "emerald",
      skills: [
        { name: "PHP", icon: <Code className="w-5 h-5" />, level: "Expert", experience: "5+ years" },
        { name: "Laravel", icon: <Database className="w-5 h-5" />, level: "Expert", experience: "4+ years" },
        { name: "MySQL", icon: <Database className="w-5 h-5" />, level: "Advanced", experience: "5+ years" },
        { name: "Node.js", icon: <Code className="w-5 h-5" />, level: "Advanced", experience: "3+ years" },
        { name: "REST API", icon: <Globe className="w-5 h-5" />, level: "Expert", experience: "5+ years" },
        { name: "Redis", icon: <Zap className="w-5 h-5" />, level: "Advanced", experience: "3+ years" }
      ]
    },
    {
      title: "AI & Automation",
      icon: <Brain className="w-8 h-8" />,
      color: "purple",
      skills: [
        { name: "AI/ML Integration", icon: <Brain className="w-5 h-5" />, level: "Advanced", experience: "2+ years" },
        { name: "Automation", icon: <Zap className="w-5 h-5" />, level: "Expert", experience: "3+ years" },
        { name: "API Development", icon: <Globe className="w-5 h-5" />, level: "Expert", experience: "5+ years" },
        { name: "System Architecture", icon: <Server className="w-5 h-5" />, level: "Advanced", experience: "4+ years" },
        { name: "Microservices", icon: <GitBranch className="w-5 h-5" />, level: "Advanced", experience: "3+ years" },
        { name: "Scalable Systems", icon: <Rocket className="w-5 h-5" />, level: "Expert", experience: "4+ years" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      color: "blue",
      skills: [
        { name: "AWS S3", icon: <Cloud className="w-5 h-5" />, level: "Advanced", experience: "3+ years" },
        { name: "Cloudflare", icon: <Shield className="w-5 h-5" />, level: "Advanced", experience: "2+ years" },
        { name: "GCP", icon: <Cloud className="w-5 h-5" />, level: "Intermediate", experience: "2+ years" },
        { name: "Docker", icon: <Cpu className="w-5 h-5" />, level: "Advanced", experience: "3+ years" },
        { name: "Git", icon: <GitBranch className="w-5 h-5" />, level: "Expert", experience: "5+ years" },
        { name: "Ubuntu", icon: <Server className="w-5 h-5" />, level: "Advanced", experience: "4+ years" }
      ]
    },
    {
      title: "Business & Leadership",
      icon: <Users className="w-8 h-8" />,
      color: "orange",
      skills: [
        { name: "Leadership", icon: <Users className="w-5 h-5" />, level: "Expert", experience: "3+ years" },
        { name: "Problem-solving", icon: <Brain className="w-5 h-5" />, level: "Expert", experience: "5+ years" },
        { name: "Client Relations", icon: <Users className="w-5 h-5" />, level: "Expert", experience: "4+ years" },
        { name: "Project Management", icon: <Rocket className="w-5 h-5" />, level: "Advanced", experience: "3+ years" },
        { name: "Team Collaboration", icon: <Users className="w-5 h-5" />, level: "Expert", experience: "4+ years" },
        { name: "Business Strategy", icon: <Brain className="w-5 h-5" />, level: "Advanced", experience: "2+ years" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-emerald-400 bg-emerald-400/20 border-emerald-400/30';
      case 'Advanced': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'Intermediate': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getCategoryColor = (color: string) => {
    switch (color) {
      case 'emerald': return 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30';
      case 'purple': return 'from-purple-500/20 to-purple-600/20 border-purple-500/30';
      case 'blue': return 'from-blue-500/20 to-blue-600/20 border-blue-500/30';
      case 'orange': return 'from-orange-500/20 to-orange-600/20 border-orange-500/30';
      default: return 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30';
    }
  };

  return (
    <section id="skills" className="py-20 bg-black/10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A comprehensive showcase of my technical expertise and professional capabilities 
            across different technologies and domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className={`bg-gradient-to-r ${getCategoryColor(category.color)} backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border`}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="text-emerald-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-emerald-400/30 group"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="text-emerald-400 mr-2 group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </div>
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {skill.experience}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-lg rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Growth & Innovation
            </h3>
            <p className="text-gray-300 mb-6">
              Technology evolves rapidly, and I'm committed to continuous learning and staying ahead of the curve. 
              I actively explore emerging technologies to deliver cutting-edge solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: "AI/ML", icon: <Brain className="w-6 h-6" /> },
                { name: "Web3", icon: <Globe className="w-6 h-6" /> },
                { name: "Microservices", icon: <GitBranch className="w-6 h-6" /> },
                { name: "Cloud Architecture", icon: <Cloud className="w-6 h-6" /> },
                { name: "Design Systems", icon: <Code className="w-6 h-6" /> }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-emerald-400 mb-2">
                    {tech.icon}
                  </div>
                  <span className="text-gray-300 text-sm text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;