'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowRight, Download } from 'lucide-react';
import Image from 'next/image'; // Import Image component

const roles = ['Frontend Developer', 'Software Engineer'];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect

  useEffect(() => {
    const currentFullText = roles[currentRole];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText !== currentFullText) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
      } else if (isDeleting && displayedText !== '') {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole]);

  return (
    <section id="home" className="section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-accent text-lg mb-4 font-mono">Hi, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text">
              Daniel
            </h1>
            
            <div className="text-xl md:text-2xl text-text-secondary mb-6 h-12 flex items-center">
              <span className="text-accent font-mono">{displayedText}</span>
              <span className="text-accent animate-blink ml-1">|</span>
            </div>
            
            <p className="text-text-secondary mb-8 max-w-lg">
              Developing beautifull websites . I write clean code, 
              design with purpose, and build solutions that truly make an impact — 
              shaping the web one project at a time.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="/resume.pdf" download className="btn-secondary">
                <Download size={18} /> Resume
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://github.com/" className="p-3 border border-secondary rounded-lg hover:border-accent hover:text-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/" className="p-3 border border-secondary rounded-lg hover:border-accent hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/" className="p-3 border border-secondary rounded-lg hover:border-accent hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://mail.com/" className="p-3 border border-secondary rounded-lg hover:border-accent hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          
          <div className="relative">
            <div className="w-64 h-64 md:w-96 md:h-96 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-cyan-400/20 rounded-full animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/30">
             
                <Image
                  src="/images/profile2.jpg" 
                  alt="Daniel - Portfolio"
                  fill 
                  className="object-cover rounded-full" 
                  sizes="(max-width: 768px) 256px, 384px" 
                  priority 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}