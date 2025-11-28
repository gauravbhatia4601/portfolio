"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Database, Smartphone } from 'lucide-react';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Hatta Food Hub",
      description: "A comprehensive delivery app project using Laravel for the backend API, React Native for the mobile app, and Node.js with Socket.io for real-time order tracking. Features geolocation for driver proximity, separate dashboards for users, restaurants, drivers, and admins, and Telr for secure payment integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "React Native", "Node.js", "Socket.io", "Telr Payment", "Geolocation"],
      github: "https://github.com/gauravbhatia4601",
      live: "#",
      category: "Full-Stack"
    },
    {
      title: "Booking Platform",
      description: "A ticket booking system for a Dubai transport company, allowing sales across 3 Gulf countries. Built with Laravel for the backend, React.js for the frontend, and MySQL for database management. Manages various user roles (admins, branch managers, ticket agents) and tracks revenue, users, bookings, routes, and seat availability.",
      image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "React.js", "MySQL", "Multi-role System", "Revenue Tracking"],
      github: "https://github.com/gauravbhatia4601",
      live: "#",
      category: "Full-Stack"
    },
    {
      title: "Lead Magnet Analyzer",
      description: "A powerful web scraping and analysis tool that evaluates websites for lead magnet effectiveness using Playwright and BeautifulSoup. Automatically crawls websites and analyzes pages for email capture opportunities and lead generation potential.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
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
        return <Code className="w-5 h-5" />;
      case 'Backend':
        return <Database className="w-5 h-5" />;
      case 'Mobile':
        return <Smartphone className="w-5 h-5" />;
      case 'AI/ML':
        return <Code className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
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
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center border border-white/20">
                  {getCategoryIcon(project.category)}
                  <span className="text-white text-sm ml-2 font-medium">{project.category}</span>
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-white text-sm font-medium">View Project</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-emerald-600/20 text-emerald-300 px-2 py-1 rounded text-xs"
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
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                  
                  <motion.button
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
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