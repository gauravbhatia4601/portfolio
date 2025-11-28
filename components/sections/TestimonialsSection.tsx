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

  const testimonials: Array<{
    name: string;
    role: string;
    company: string;
    image?: string;
    content: string;
    rating: number;
  }> = [
    {
      name: "Ali",
      role: "Founder & CEO",
      company: "Hatta Sky",
      // image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Managing bus ticket sales through manual coordination with agencies was becoming a real headache. We needed a digital solution to streamline online sales, and Gaurav delivered exactly that. The system he built is fast, reliable, and our team finds it incredibly easy to use. Couldn't be happier with how it turned out.",
      rating: 5
    },
    {
      name: "Abdul Rehman",
      role: "Founder & CEO",
      company: "Hatta Food Hub",
      // image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Our existing food delivery platform was constantly bugging out and running slow, which was hurting our business. Instead of starting from scratch, Gaurav worked his magic on optimization. He transformed the same system into something fast and rock-solid. The improvement has been incredible, and our customers noticed the difference immediately.",
      rating: 5
    },
    {
      name: "Rashid Alkhanjry",
      role: "Founder & CEO",
      company: "Alkhanjry Transport",
      // image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "We'd had enough of our manual ticketing process—it was time-consuming and error-prone. That's when we decided to build something modern from the ground up. Gaurav came through with a brand new ticketing system that's not only fast and reliable, but also intuitive for both our team and customers. It's been a game-changer for our operations.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-current' : ''
        }`}
        style={{
          color: index < rating ? '#121b2f' : 'rgba(18, 27, 47, 0.2)',
        }}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20" style={{ backgroundColor: '#fff' }}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            What Clients Say
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#121b2f' }}>
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
              className="rounded-xl p-6 transition-all duration-300 relative border"
              style={{
                backgroundColor: '#fafafa',
                borderColor: 'rgba(18, 27, 47, 0.1)',
              }}
              whileHover={{ 
                scale: 1.02,
                borderColor: 'rgba(18, 27, 47, 0.3)',
                boxShadow: '0 4px 20px rgba(18, 27, 47, 0.1)',
              }}
            >
              <div className="absolute top-4 right-4" style={{ color: 'rgba(18, 27, 47, 0.2)' }}>
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-4">
                {'image' in testimonial && testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2"
                    style={{ borderColor: 'rgba(18, 27, 47, 0.1)' }}
                  />
                ) : (
                  <div
                    className="w-12 h-12 rounded-full mr-4 border-2 flex items-center justify-center font-semibold"
                    style={{ 
                      borderColor: 'rgba(18, 27, 47, 0.1)',
                      backgroundColor: 'rgba(18, 27, 47, 0.05)',
                      color: '#121b2f'
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-semibold" style={{ color: '#121b2f' }}>{testimonial.name}</h4>
                  <p className="text-sm" style={{ color: 'rgba(18, 27, 47, 0.7)' }}>{testimonial.role}</p>
                  <p className="text-sm" style={{ color: '#121b2f' }}>{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-sm leading-relaxed" style={{ color: '#121b2f' }}>
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
          <div 
            className="rounded-xl p-8 max-w-2xl mx-auto border"
            style={{
              backgroundColor: '#fafafa',
              borderColor: 'rgba(18, 27, 47, 0.2)',
            }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#121b2f' }}>
              Ready to Work Together?
            </h3>
            <p className="mb-6" style={{ color: '#121b2f' }}>
              Join the list of satisfied clients who have transformed their ideas into 
              successful digital products. Let's discuss your next project.
            </p>
            <motion.a
              href="#contact"
              className="inline-block btn-primary px-8 py-3 rounded-full font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
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