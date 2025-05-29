
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import EducationSection from '@/components/EducationSection';
import WorkExperienceSection from '@/components/WorkExperienceSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
        <WorkExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
