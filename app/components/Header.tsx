// export default function Header() {
//     return (
//       <header className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-md z-50 p-4">
//         <nav className="container-custom flex justify-between items-center">
//           <h1 className="font-bold text-xl">Your Name</h1>
//           <ul className="flex gap-6">
//             <li><a href="#about">About</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </header>
//     );
//   }







'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-md border-b border-secondary">
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold font-mono hover:text-accent transition-colors"
          >
            Daniel<span className="text-accent"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg text-text-secondary hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-secondary">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-text-secondary hover:text-accent transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}