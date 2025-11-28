"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Mail, Phone, MessageCircle, ArrowUp } from 'lucide-react';

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const actions = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      action: () => window.open('mailto:gauravbhatia172@gmail.com', '_blank'),
      color: "bg-blue-500"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Contact",
      action: scrollToContact,
      color: "bg-emerald-500"
    },
    {
      icon: <ArrowUp className="w-5 h-5" />,
      label: "Top",
      action: scrollToTop,
      color: "bg-purple-500"
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Action Buttons */}
          <AnimatePresence>
            {isOpen && (
              <div className="mb-4 space-y-3">
                {actions.map((action, index) => (
                  <motion.button
                    key={action.label}
                    initial={{ opacity: 0, x: 20, scale: 0 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    onClick={action.action}
                    className={`${action.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {action.icon}
                    <span className="absolute right-full mr-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {action.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronUp className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionButton; 