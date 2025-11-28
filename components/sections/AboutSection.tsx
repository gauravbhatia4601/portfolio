"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust, scalable backend systems with Laravel, Node.js, and modern architectures"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Automation",
      description: "Creating intelligent automation solutions and AI-powered applications for business growth"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership",
      description: "Co-founding Technioz and leading teams to deliver innovative technology solutions"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Client Success",
      description: "Delivering high-impact solutions that drive business value and exceed client expectations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm an experienced Backend Developer and AI Automation Architect with 5+ years of expertise specializing in building scalable backend systems and AI-powered solutions. Co-founder of Technioz, I excel in Laravel, Node.js, and AI integration, delivering innovative web development solutions that drive business growth. Based in Dubai, UAE, I've successfully delivered projects across logistics, real estate, eCommerce, and B2B automation domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-teal-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-lg rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Whether you need a full-stack application, a beautiful frontend, or technical consultation, 
              I'm here to help bring your vision to life.
            </p>
            <motion.a
              href="#contact"
              className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;