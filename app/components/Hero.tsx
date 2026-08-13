            


// 'use client';

// import { useEffect, useState } from 'react';
// import { Github, Linkedin, Twitter, Mail, ArrowRight, Download } from 'lucide-react';
// import Image from 'next/image';

// const roles = ['Frontend Developer', 'Software Engineer','Backend developer'];

// export default function Hero() {
//   const [currentRole, setCurrentRole] = useState(0);
//   const [displayedText, setDisplayedText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const fullText = roles[currentRole];

//     const timeout = setTimeout(() => {
//       if (!isDeleting && displayedText !== fullText) {
//         setDisplayedText(fullText.slice(0, displayedText.length + 1));
//       } else if (isDeleting && displayedText !== '') {
//         setDisplayedText(fullText.slice(0, displayedText.length - 1));
//       } else if (!isDeleting && displayedText === fullText) {
//         setTimeout(() => setIsDeleting(true), 1500);
//       } else if (isDeleting && displayedText === '') {
//         setIsDeleting(false);
//         setCurrentRole((prev) => (prev + 1) % roles.length);
//       }
//     }, isDeleting ? 50 : 100);

//     return () => clearTimeout(timeout);
//   }, [displayedText, isDeleting, currentRole]);

//   return (
//     <section id="home" className="section-padding min-h-screen flex items-center">
//       <div className="container-custom">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left */}
//           <div>
//             <p className="text-accent text-lg mb-4 font-mono">Hi, I'm</p>

//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text">
//               Daniel
//             </h1>

//             <div className="text-xl md:text-2xl text-text-secondary mb-6 h-12 flex items-center">
//               <span className="text-accent font-mono">{displayedText}</span>
//               <span className="text-accent animate-blink ml-1">|</span>
//             </div>

//             <p className="text-text-secondary mb-8 max-w-lg">
//               Developing beautiful websites. I write clean code,
//               design with purpose, and build solutions that make an impact.
//             </p>

//             <div className="flex flex-wrap gap-4 mb-8">
//               <a href="#projects" className="btn-primary">
//                 View Projects <ArrowRight size={18} />
//               </a>
//               <a href="/resume.pdf" download className="btn-secondary">
//                 <Download size={18} /> Resume
//               </a>
//             </div>

//             <div className="flex gap-4">
//               {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
//                 <a
//                   key={i}
//                   href="  https://github.com/Daniel-Andu "
//                   className="p-3 border border-secondary rounded-lg
//                              hover:border-accent hover:text-accent transition-colors"
//                 >
//                   <Icon size={20} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Right */}
//           <div className="relative">
//             <div className="w-64 h-64 md:w-96 md:h-96 mx-auto relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-cyan-400/20 rounded-full animate-pulse" />
//               <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/30">
//                 <Image
//                   src="/images/profile2.jpg"
//                   alt="Daniel - Portfolio"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Instagram, ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';

const roles = [
  'Frontend Developer',
  'Software Engineer',
  'Backend Developer',
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRole];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayedText !== fullText) {
          setDisplayedText(
            fullText.slice(0, displayedText.length + 1)
          );
        } else if (isDeleting && displayedText !== '') {
          setDisplayedText(
            fullText.slice(0, displayedText.length - 1)
          );
        } else if (!isDeleting && displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && displayedText === '') {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="section-padding min-h-screen flex items-center"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* =========================
              LEFT SIDE
          ========================== */}
          <div>
            <p className="text-accent text-lg mb-4 font-mono">
              Hi, I'm
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text">
              Daniel
            </h1>

            {/* Animated Role */}
            <div className="text-xl md:text-2xl text-text-secondary mb-6 h-12 flex items-center">
              <span className="text-accent font-mono">
                {displayedText}
              </span>

              <span className="text-accent animate-blink ml-1">
                |
              </span>
            </div>

            {/* Description */}
            <p className="text-text-secondary mb-8 max-w-lg">
              Developing beautiful websites. I write clean code,
              design with purpose, and build solutions that make an
              impact.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="btn-primary"
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="btn-secondary"
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            {/* =========================
                SOCIAL LINKS
            ========================== */}
            <div className="flex gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/Daniel-Andu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 border border-secondary rounded-lg hover:border-accent hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/daniel-andualem-603313389/?lipi=urn%3Ali%3Apage%3Ad_flagship3_notifications%3BvmqrlgSfSnGViTVTak3prQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 border border-secondary rounded-lg hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ze_anbessa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 border border-secondary rounded-lg hover:border-accent hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>

            </div>
          </div>

          {/* =========================
              RIGHT SIDE - PROFILE IMAGE
          ========================== */}
          <div className="relative">
            <div className="w-64 h-64 md:w-96 md:h-96 mx-auto relative">

              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-cyan-400/20 rounded-full animate-pulse" />

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/30">
                <Image
                  src="/images/profile2.jpg"
                  alt="Daniel - Portfolio"
                  fill
                  className="object-cover"
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
