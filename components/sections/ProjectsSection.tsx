"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Database, Smartphone, Layers, Brain } from 'lucide-react';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Hatta Food Hub",
      description: "A comprehensive delivery app project using Laravel for the backend API, React Native for the mobile app, and Node.js with Socket.io for real-time order tracking. Features geolocation for driver proximity, separate dashboards for users, restaurants, drivers, and admins, and Telr for secure payment integration.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "React Native", "Node.js", "Socket.io", "Telr Payment", "Geolocation"],
      github: "https://github.com/gauravbhatia4601",
      live: "#",
      category: "Full-Stack"
    },
    {
      title: "Booking Platform",
      description: "A ticket booking system for a Dubai transport company, allowing sales across 3 Gulf countries. Built with Laravel for the backend, React.js for the frontend, and MySQL for database management. Manages various user roles (admins, branch managers, ticket agents) and tracks revenue, users, bookings, routes, and seat availability.",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "React.js", "MySQL", "Multi-role System", "Revenue Tracking"],
      github: "https://github.com/gauravbhatia4601",
      live: "#",
      category: "Full-Stack"
    },
    {
      title: "Lead Magnet Analyzer",
      description: "A powerful web scraping and analysis tool that evaluates websites for lead magnet effectiveness using Playwright and BeautifulSoup. Automatically crawls websites and analyzes pages for email capture opportunities and lead generation potential.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Playwright", "BeautifulSoup", "Web Scraping", "Data Analysis"],
      github: "https://github.com/gauravbhatia4601/lead-magnet-analyzer",
      live: "#",
      category: "AI/ML"
    },
    {
      title: "Sky Growers Farm Website",
      description: "A modern, scalable farm website for SKY GROWERS, built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Fully responsive, accessible, and designed for premium farm-fresh vegetable businesses with advanced features.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Responsive Design"],
      github: "https://github.com/gauravbhatia4601/sky-growers",
      live: "#",
      category: "Frontend"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code className="w-4 h-4" />;
      case 'Backend':
        return <Database className="w-4 h-4" />;
      case 'Mobile':
        return <Smartphone className="w-4 h-4" />;
      case 'Full-Stack':
        return <Layers className="w-4 h-4" />;
      case 'AI/ML':
        return <Brain className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section 
      id="projects" 
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
            Featured Projects
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#121b2f' }}>
            A showcase of my recent work, demonstrating expertise across different technologies 
            and problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 group border"
              style={{
                backgroundColor: '#fafafa',
                borderColor: 'rgba(18, 27, 47, 0.1)',
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                    borderColor: 'rgba(18, 27, 47, 0.4)',
                backgroundColor: '#fafafa',
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div 
                  className="absolute top-4 left-4 rounded-lg px-3 py-1.5 flex items-center gap-2 border backdrop-blur-sm"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderColor: 'rgba(18, 27, 47, 0.2)',
                    boxShadow: '0 2px 8px rgba(18, 27, 47, 0.1)',
                  }}
                >
                  <div style={{ color: '#121b2f' }}>
                    {getCategoryIcon(project.category)}
                  </div>
                  <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#121b2f' }}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div 
                    className="backdrop-blur-sm rounded-lg px-3 py-2"
                    style={{ backgroundColor: '#fafafa' }}
                  >
                    <div className="text-sm font-medium" style={{ color: '#121b2f' }}>View Project</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#121b2f' }}>
                  {project.title}
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#121b2f' }}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded text-xs border"
                      style={{
                        backgroundColor: 'rgba(18, 27, 47, 0.08)',
                        color: '#121b2f',
                        borderColor: 'rgba(18, 27, 47, 0.15)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300"
                      style={{ color: '#121b2f' }}
                      whileHover={{ scale: 1.1, color: '#121b2f' }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="transition-colors duration-300"
                      style={{ color: '#121b2f' }}
                      whileHover={{ scale: 1.1, color: '#121b2f' }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                  
                  <motion.button
                    className="btn-primary px-4 py-2 rounded-lg text-sm font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;