
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/DhanushXploit/DhanushV',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/dhanush-viswalingam',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://x.com/DhanushXploit?t=qPAzVEZsJeXOLBOd9mDCFQ&s=09',
      label: 'Twitter'
    },
    {
      icon: Mail,
      href: 'mailto:dhanushv136@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer id="contact" className="py-12 border-t border-slate-700/50 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          {/* Logo and Name */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-slate-200 bg-clip-text text-transparent mb-2">
              Dhanush V
            </h3>
            <p className="text-slate-400 text-lg">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 border border-slate-700 transition-all duration-300 hover:scale-110 hover:bg-violet-500/20 hover:border-violet-500/50 text-slate-400 hover:text-violet-400"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <p className="text-slate-300 text-lg">Let's work together!</p>
            <a 
              href="mailto:dhanushv136@gmail.com" 
              className="text-violet-400 hover:text-violet-300 text-lg font-semibold transition-colors duration-300"
            >
              dhanushv136@gmail.com
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-slate-700/50">
            <p className="text-slate-500 flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Dhanush V
            </p>
            <p className="text-slate-600 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
