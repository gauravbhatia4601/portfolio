"use client";

import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import StatsSection from '@/components/sections/StatsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ThreeBackground from '@/components/effects/ThreeBackground';
import FloatingActionButton from '@/components/ui/FloatingActionButton';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <ScrollProgress />
      <ThreeBackground />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <StatsSection />
        <AchievementsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <FloatingActionButton />
    </div>
  );
}