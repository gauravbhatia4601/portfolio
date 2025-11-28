"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechFlow Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Gaurav delivered exceptional work on our e-commerce platform. His attention to detail and ability to solve complex problems made him an invaluable team member. The project was completed ahead of schedule with outstanding quality.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "Digital Innovations",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Working with Gaurav was a game-changer for our startup. His full-stack expertise and modern development practices helped us build a scalable application that exceeded our expectations. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "Creative Studio",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Gaurav has an excellent eye for translating designs into pixel-perfect implementations. His collaboration skills and technical expertise made our design-to-development process seamless and efficient.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Startup Founder",
      company: "NextGen Apps",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Gaurav's ability to understand business requirements and translate them into technical solutions is remarkable. He helped us launch our MVP in record time while maintaining high code quality standards.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Engineering Manager",
      company: "CloudTech Corp",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Gaurav's expertise in modern web technologies and his proactive communication style made him a pleasure to work with. He consistently delivered high-quality code and valuable technical insights.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Project Director",
      company: "Enterprise Solutions",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Gaurav demonstrated exceptional problem-solving skills and technical leadership throughout our project. His ability to mentor junior developers while delivering complex features was truly impressive.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-black/10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Don't just take my word for it. Here's what clients and colleagues have to say 
            about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-4 right-4 text-teal-400/30">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-teal-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-lg rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-6">
              Join the list of satisfied clients who have transformed their ideas into 
              successful digital products. Let's discuss your next project.
            </p>
            <motion.a
              href="#contact"
              className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;