"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/gauravbhatia4601",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/gauravbhatia1064",
      label: "LinkedIn"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      href: "https://www.upwork.com/freelancers/~0120500524197e5864",
      label: "Upwork"
    }
  ];

  return (
    <footer className="bg-black/30 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0"
          >
            {/* <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>by Gaurav Bhatia</span> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 pt-6 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Gaurav Bhatia. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;