"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building, TrendingUp, Users, Award } from 'lucide-react';

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Co-founder & Backend Developer",
      company: "Technioz",
      location: "Dubai, UAE",
      period: "February 2025 - Present",
      duration: "Current",
      description: [
        "Co-founded Technioz, a technology company specializing in AI automation and backend development",
        "Led development of AI-powered solutions and scalable backend systems",
        "Managed client relationships and project delivery for multiple high-profile clients",
        "Implemented innovative AI integration solutions for business automation",
        "Built and maintained robust backend infrastructure supporting multiple applications"
      ],
      technologies: ["PHP", "Laravel", "Node.js", "AI/ML", "MySQL", "AWS", "Docker"],
      impact: "AI Automation Solutions",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Backend Engineer",
      company: "Al Meqbali group of companies",
      location: "Dubai, UAE",
      period: "May 2024 - April 2025",
      duration: "1 Year",
      description: [
        "Optimized legacy code by upgrading the tech stack and improving code standards for better performance",
        "Profiled code and database to identify bottlenecks and implemented caching for faster API responses",
        "Implemented an exceptional handler to alert on application downtime",
        "Configured AWS S3 for cloud-based media storage",
        "Implemented session-based Telr payment for online payments via Apple Pay and cards",
        "Established a dedicated staging server for smooth transitions from development to production",
        "Implemented Cloudflare (CF) for enhanced protection against bots and performance optimization using its caching feature",
        "Developed a booking platform for a transport agency in the UAE, generating 10x revenue"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "AWS S3", "Cloudflare", "Telr Payment", "Redis"],
      impact: "10x Revenue Generation",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Backend Engineer",
      company: "Code Brew Labs",
      location: "Chandigarh, India",
      period: "May 2023 - April 2024",
      duration: "1 Year",
      description: [
        "Led a team, organized daily scrum meetings with project managers, and achieved monthly targets",
        "Improved system efficiency by 85% using database internal functions, reducing query response time, and implemented performance monitoring",
        "Established WebSocket connections for real-time chat environments across devices",
        "Implemented video call features using Agora WebRTC API",
        "Conducted client calls for product demonstrations and training sessions"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "WebSocket", "WebRTC", "Agora API", "Redis"],
      impact: "85% Efficiency Improvement",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black/10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            My professional journey in software development, working with amazing teams 
            and building impactful solutions that drive business growth.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-16 last:mb-0"
            >
              {/* Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-px h-16 bg-gradient-to-b from-emerald-400 to-transparent"></div>
              )}
              
              <div className="flex items-start gap-6">
                {/* Timeline Dot */}
                <motion.div
                  className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {exp.icon}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="flex-1 bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-emerald-400/30"
                  whileHover={{ y: -5 }}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold text-white">
                        {exp.title}
                      </h3>
                      <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center text-emerald-400 mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm gap-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start text-gray-300"
                        >
                          <span className="text-emerald-400 mr-3 mt-1">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                          className="bg-emerald-600/20 text-emerald-300 px-3 py-1 rounded-full text-sm border border-emerald-500/30 hover:bg-emerald-600/30 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-lg rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Proven Track Record of Success
            </h3>
            <p className="text-gray-300 mb-6">
              From leading development teams to co-founding a technology company, my experience 
              demonstrates consistent delivery of high-impact solutions that drive business growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">10x</div>
                <div className="text-gray-300">Revenue Impact</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
                <div className="text-gray-300">Efficiency Gain</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;