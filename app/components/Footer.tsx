
  

import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold font-mono inline-block mb-4">
              Daniel<span className="text-accent">.</span>
            </a>
            <p className="text-text-secondary text-sm">
              Building digital experiences with passion and precision.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-text-secondary hover:text-accent transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="block text-text-secondary hover:text-accent transition-colors text-sm">
                About
              </a>
              <a href="#projects" className="block text-text-secondary hover:text-accent transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="block text-text-secondary hover:text-accent transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
          
          {/* Social */}
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-accent hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-accent hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-accent hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-text-secondary text-sm">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Daniel. All rights reserved. 
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}