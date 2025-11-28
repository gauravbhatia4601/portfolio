"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, ExternalLink, Code, Database, Zap, Globe, ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    "Backend Developer",
    "AI Automation Architect", 
    "Laravel Expert",
    "System Architect",
    "Co-founder of Technioz"
  ];

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const floatingIcons = [
    { icon: <Code className="w-6 h-6" />, delay: 0, position: "top-20 left-10" },
    { icon: <Database className="w-6 h-6" />, delay: 0.5, position: "top-32 right-20" },
    { icon: <Zap className="w-6 h-6" />, delay: 1, position: "bottom-32 left-20" },
    { icon: <Globe className="w-6 h-6" />, delay: 1.5, position: "bottom-20 right-10" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#fff' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5"
          style={{ backgroundColor: '#fff' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-4"
          style={{ backgroundColor: '#fff' }}
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position}`}
          style={{ color: `rgba(18, 27, 47, 0.4)` }}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: item.delay }}
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              delay: item.delay,
              ease: "easeInOut"
            }}
          >
            {item.icon}
          </motion.div>
        </motion.div>
      ))}

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Location Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-8 border border-white/20"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm">Based in Dubai, UAE</span>
          </motion.div> */}

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <motion.span 
              className="text-2xl md:text-3xl font-light"
              style={{ color: '#121b2f' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm
            </motion.span>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold gradient-text mt-2 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
            >
              Gaurav Bhatia
            </motion.h1>
          </motion.div>

          {/* Animated Role Display */}
          <motion.div
            className="h-12 md:h-16 mb-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-2xl md:text-3xl font-semibold"
                style={{ color: '#121b2f' }}
              >
                {roles[currentRole]}
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto"
            style={{ color: '#121b2f' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting <span 
              className="font-semibold"
              style={{ color: '#121b2f' }}
            >scalable backend systems</span> and 
            <span 
              className="font-semibold"
                  style={{ color: '#121b2f' }}
            > AI-powered solutions</span> that drive business growth
          </motion.p>

          {/* Key Highlights */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              { text: "5+ Years Experience" },
              { text: "10x Revenue Impact" },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                className="rounded-full px-4 py-2 text-sm backdrop-blur-sm border"
                style={{
                  backgroundColor: 'rgba(18, 27, 47, 0.05)',
                  borderColor: 'rgba(18, 27, 47, 0.2)',
                  color: '#121b2f',
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  backgroundColor: 'rgba(18, 27, 47, 0.1)',
                  boxShadow: '0 4px 20px rgba(18, 27, 47, 0.1)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
              >
                {badge.text}
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="group btn-primary flex items-center gap-2 px-8 py-4 rounded-full font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.a
              href="#contact"
              className="group btn-secondary flex items-center gap-2 px-8 py-4 rounded-full font-semibold"
              style={{
                borderColor: '#121b2f',
                color: '#121b2f',
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Project</span>
              <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              { icon: <Github size={24} />, href: "https://github.com/gauravbhatia4601", label: "GitHub" },
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/gauravbhatia1064", label: "LinkedIn" },
              { icon: <ExternalLink size={24} />, href: "https://www.upwork.com/freelancers/~0120500524197e5864", label: "Upwork" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-colors duration-300 relative"
                style={{ 
                  color: '#121b2f',
                }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  color: '#121b2f',
                }}
              >
                <div className="relative">
                  {social.icon}
                  <motion.div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      backgroundColor: '#121b2f',
                      color: '#121b2f',
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {social.label}
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-6 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <button
              onClick={scrollToAbout}
              className="transition-colors duration-300 group"
              style={{ color: '#121b2f' }}
            >
              <div className="flex flex-col items-center gap-2">
                <motion.span 
                  className="text-xs transition-colors"
                  style={{ color: '#121b2f' }}
                  whileHover={{ color: '#121b2f' }}
                >
                  Scroll to explore
                </motion.span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;