
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/DhanushXploit/DhanushV',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/dhanush-viswalingam',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      href: 'https://x.com/DhanushXploit?t=qPAzVEZsJeXOLBOd9mDCFQ&s=09',
      label: 'Twitter',
      color: 'hover:text-blue-300'
    },
    {
      icon: Mail,
      href: 'mailto:dhanushv136@gmail.com',
      label: 'Email',
      color: 'hover:text-violet-400'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-slate-900 to-slate-800"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="lg:order-2 animate-fade-in animate-delay-300">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-violet-500/50 shadow-2xl animate-glow">
                <img
                  src="/lovable-uploads/0c7068dc-f4b4-4586-9aac-a1e93a816979.png"
                  alt="Dhanush V"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-1 text-center lg:text-left space-y-6 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-violet-400 via-violet-300 to-slate-200 bg-clip-text text-transparent animate-fade-in">
                Dhanush V
              </h1>
              <p className="text-2xl lg:text-3xl text-violet-300 font-semibold animate-fade-in animate-delay-200">
                Full Stack Developer
              </p>
            </div>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed animate-fade-in animate-delay-500">
              A passionate full stack developer who loves transforming ideas into interactive, 
              scalable web experiences. Focused on performance, clean code, and user-first design.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 animate-fade-in animate-delay-700">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-slate-800/50 border border-slate-700 transition-all duration-300 hover:scale-110 hover:bg-slate-700/50 hover:border-violet-500/50 ${color}`}
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animate-delay-1000">
              <Button 
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-violet-500 text-violet-300 hover:bg-violet-500/10 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-violet-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-violet-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
