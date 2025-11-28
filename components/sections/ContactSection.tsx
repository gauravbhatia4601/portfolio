"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "gauravbhatia172@gmail.com",
      href: "mailto:gauravbhatia172@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Dubai, UAE",
      href: "#",
      description: "Available for remote work"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      href: "https://github.com/gauravbhatia4601"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/gauravbhatia1064"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      name: "Upwork",
      href: "https://www.upwork.com/freelancers/~0120500524197e5864"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: '#fff' }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(18, 27, 47, 0.03) 2px, rgba(18, 27, 47, 0.03) 4px),
              repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(18, 27, 47, 0.03) 2px, rgba(18, 27, 47, 0.03) 4px)
            `,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            {/* <Sparkles className="w-5 h-5" style={{ color: '#121b2f' }} /> */}
            {/* <span className="text-sm font-medium tracking-wider uppercase" style={{ color: '#121b2f' }}>
              Let's Connect
            </span> */}
            {/* <Sparkles className="w-5 h-5" style={{ color: '#121b2f' }} /> */}
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#121b2f' }}>
            Ready to transform your ideas into reality? I'm always excited to collaborate on innovative projects.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  className="block group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div 
                    className="p-6 rounded-2xl border transition-all duration-300"
                    style={{
                      backgroundColor: '#fff',
                      borderColor: 'rgba(18, 27, 47, 0.15)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#121b2f';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(18, 27, 47, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(18, 27, 47, 0.15)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="p-3 rounded-xl flex-shrink-0"
                        style={{
                          backgroundColor: 'rgba(18, 27, 47, 0.05)',
                        }}
                      >
                        <div style={{ color: '#121b2f' }}>
                          {method.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1" style={{ color: '#121b2f' }}>
                          {method.title}
                        </h3>
                        <p className="text-base mb-1" style={{ color: '#121b2f' }}>
                          {method.value}
                        </p>
                        <p className="text-sm" style={{ color: 'rgba(18, 27, 47, 0.6)' }}>
                          {method.description}
                        </p>
                      </div>
                      <ArrowRight 
                        className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" 
                        style={{ color: 'rgba(18, 27, 47, 0.4)' }}
                      />
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-6"
              >
                <h4 className="text-sm font-medium mb-4 uppercase tracking-wider" style={{ color: 'rgba(18, 27, 47, 0.6)' }}>
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border transition-all duration-300"
                      style={{
                        backgroundColor: '#fff',
                        borderColor: 'rgba(18, 27, 47, 0.15)',
                        color: '#121b2f',
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        borderColor: '#121b2f',
                        boxShadow: '0 4px 20px rgba(18, 27, 47, 0.1)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.name}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div 
                className="p-8 rounded-2xl border"
                style={{
                  backgroundColor: '#fff',
                  borderColor: 'rgba(18, 27, 47, 0.15)',
                }}
              >
                <h3 className="text-2xl font-bold mb-8" style={{ color: '#121b2f' }}>
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-medium mb-2 transition-all duration-300"
                        style={{ 
                          color: focusedField === 'name' ? '#121b2f' : 'rgba(18, 27, 47, 0.7)' 
                        }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none"
                        style={{
                          backgroundColor: '#fff',
                          borderColor: focusedField === 'name' ? '#121b2f' : 'rgba(18, 27, 47, 0.2)',
                          color: '#121b2f',
                        }}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="relative">
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-medium mb-2 transition-all duration-300"
                        style={{ 
                          color: focusedField === 'email' ? '#121b2f' : 'rgba(18, 27, 47, 0.7)' 
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none"
                        style={{
                          backgroundColor: '#fff',
                          borderColor: focusedField === 'email' ? '#121b2f' : 'rgba(18, 27, 47, 0.2)',
                          color: '#121b2f',
                        }}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label 
                      htmlFor="subject" 
                      className="block text-sm font-medium mb-2 transition-all duration-300"
                      style={{ 
                        color: focusedField === 'subject' ? '#121b2f' : 'rgba(18, 27, 47, 0.7)' 
                      }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none"
                      style={{
                        backgroundColor: '#fff',
                        borderColor: focusedField === 'subject' ? '#121b2f' : 'rgba(18, 27, 47, 0.2)',
                        color: '#121b2f',
                      }}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium mb-2 transition-all duration-300"
                      style={{ 
                        color: focusedField === 'message' ? '#121b2f' : 'rgba(18, 27, 47, 0.7)' 
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={6}
                      className="w-full px-4 py-3 border rounded-xl transition-all duration-300 resize-none focus:outline-none"
                      style={{
                        backgroundColor: '#fff',
                        borderColor: focusedField === 'message' ? '#121b2f' : 'rgba(18, 27, 47, 0.2)',
                        color: '#121b2f',
                      }}
                      placeholder="Tell me about your project, goals, and how we can work together..."
                      required
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full btn-primary px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-base"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;