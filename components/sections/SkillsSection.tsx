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
      case 'Expert': 
        return {
          color: '#121b2f',
          bg: 'rgba(18, 27, 47, 0.1)',
          border: 'rgba(255, 255, 255, 0.4)',
        };
      case 'Advanced': 
        return {
          color: '#121b2f',
          bg: 'rgba(18, 27, 47, 0.08)',
          border: 'rgba(18, 27, 47, 0.15)',
        };
      case 'Intermediate': 
        return {
          color: '#121b2f',
          bg: 'rgba(255, 255, 255, 0.1)',
          border: 'rgba(18, 27, 47, 0.12)',
        };
      default: 
        return {
          color: '#121b2f',
          bg: 'rgba(18, 27, 47, 0.08)',
          border: 'rgba(18, 27, 47, 0.15)',
        };
    }
  };

  const getCategoryColor = (color: string) => {
    // All categories use the same coral accent with varying opacity for visual distinction
    const opacityMap: { [key: string]: { bg: number, border: number } } = {
      'emerald': { bg: 0.18, border: 0.35 },
      'purple': { bg: 0.15, border: 0.3 },
      'blue': { bg: 0.12, border: 0.25 },
      'orange': { bg: 0.2, border: 0.4 },
    };
    
    const opacities = opacityMap[color] || { bg: 0.15, border: 0.3 };
    
    return {
      bg: `rgba(255, 255, 255, ${opacities.bg})`,
      border: `rgba(255, 255, 255, ${opacities.border})`,
      icon: '#121b2f',
    };
  };

  return (
    <section 
      id="skills" 
      className="py-20 relative"
      style={{ backgroundColor: '#fff' }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#121b2f' }}>
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
              className="backdrop-blur-lg rounded-xl p-6 transition-all duration-300 border"
              style={{
                backgroundColor: getCategoryColor(category.color).bg,
                borderColor: getCategoryColor(category.color).border,
              }}
              whileHover={{
                y: -5,
                borderColor: getCategoryColor(category.color).icon,
                backgroundColor: '#fafafa',
              }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="mr-3" style={{ color: getCategoryColor(category.color).icon }}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold" style={{ color: '#121b2f' }}>
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
                    className="backdrop-blur-sm rounded-lg p-4 transition-all duration-300 border group"
                    style={{
                      backgroundColor: '#fff',
                      borderColor: 'rgba(18, 27, 47, 0.1)',
                    }}
                    whileHover={{ 
                      y: -2,
                      borderColor: getCategoryColor(category.color).icon,
                      backgroundColor: '#fff',
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div 
                          className="mr-2 group-hover:scale-110 transition-transform"
                          style={{ color: getCategoryColor(category.color).icon }}
                        >
                          {skill.icon}
                        </div>
                        <span className="font-medium text-sm" style={{ color: '#121b2f' }}>{skill.name}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-xs px-2 py-1 rounded-full border"
                        style={getLevelColor(skill.level)}
                      >
                        {skill.level}
                      </span>
                      <span className="text-xs" style={{ color: '#121b2f' }}>
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
          <div 
            className="backdrop-blur-lg rounded-xl p-8 max-w-4xl mx-auto border"
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              borderColor: 'rgba(18, 27, 47, 0.15)',
            }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#121b2f' }}>
              Continuous Growth & Innovation
            </h3>
            <p className="mb-6" style={{ color: '#121b2f' }}>
              Technology evolves rapidly, and I'm committed to continuous learning and staying ahead of the curve. 
              I actively explore emerging technologies to deliver cutting-edge solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "AI/ML", icon: <Brain className="w-6 h-6" /> },
                { name: "Microservices", icon: <GitBranch className="w-6 h-6" /> },
                { name: "Cloud Architecture", icon: <Cloud className="w-6 h-6" /> },
                { name: "Design Systems", icon: <Code className="w-6 h-6" /> }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-3 rounded-lg transition-all duration-300 border"
                  style={{
                    backgroundColor: '#fff',
                    borderColor: 'rgba(18, 27, 47, 0.1)',
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    backgroundColor: '#fff',
                  }}
                >
                  <div className="mb-2" style={{ color: '#121b2f' }}>
                    {tech.icon}
                  </div>
                  <span className="text-sm text-center" style={{ color: '#121b2f' }}>{tech.name}</span>
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