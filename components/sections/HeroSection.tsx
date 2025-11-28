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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} text-emerald-400/30`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: item.delay }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: item.delay }}
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
            <span className="text-2xl md:text-3xl text-gray-300 font-light">Hi, I'm</span>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent mt-2 mb-4">
              Gaurav Bhatia
            </h1>
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-white"
              >
                {roles[currentRole]}
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting <span className="text-emerald-400 font-semibold">scalable backend systems</span> and 
            <span className="text-teal-400 font-semibold"> AI-powered solutions</span> that drive business growth
          </motion.p>

          {/* Key Highlights */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              className="bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 text-sm text-emerald-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              5+ Years Experience
            </motion.div>
            <motion.div
              className="bg-teal-500/20 border border-teal-500/30 rounded-full px-4 py-2 text-sm text-teal-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              14 GitHub Repos
            </motion.div>
            <motion.div
              className="bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 text-sm text-blue-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              10x Revenue Impact
            </motion.div>
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
              className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.a
              href="#contact"
              className="group border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
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
                className="group text-gray-400 hover:text-emerald-400 transition-colors duration-300 relative"
                whileHover={{ scale: 1.2 }}
              >
                <div className="relative">
                  {social.icon}
                  <motion.div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
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
              className="text-white hover:text-emerald-400 transition-colors duration-300 group"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-gray-400 group-hover:text-emerald-400 transition-colors">Scroll to explore</span>
                <ChevronDown size={24} />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;