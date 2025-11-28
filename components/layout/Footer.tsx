"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative border-t"
      style={{
        backgroundColor: '#fff',
        borderColor: 'rgba(18, 27, 47, 0.1)',
      }}
    >
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm" style={{ color: 'rgba(18, 27, 47, 0.7)' }}>
            © {currentYear} Gaurav Bhatia. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;