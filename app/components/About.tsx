
  
import { Code2, Palette, Server, Cpu } from 'lucide-react';

const skills = [
  { name: 'Frontend Developer', icon: <Code2 className="w-5 h-5" /> },
  { name: 'Software Engineer', icon: <Server className="w-5 h-5" /> },
 
];

const techStack = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'TypeScript',
  'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Git'
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <h2 className="section-title">
          <span className="title-number">1</span> About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Changing bussiness ideas into Code
              </h3>
              <p className="text-text-secondary mb-4">
                I'm a passionate frontend developer from Bahir dar. I build fast, modern, 
                and responsive websites using React, Next.js, and Tailwind CSS. 
                I love turning creative ideas into smooth digital solutions that people enjoy using.
              </p>
              <p className="text-text-secondary mb-4">
                Curiosity led me into coding, and now I focus on clean, high-quality projects 
                with great design and user experience. I keep learning, improving, and creating 
                things that make a real impact.
              </p>
              <p className="text-text-secondary">
                When I'm not coding, I explore design trends, contribute to open source, 
                and share ideas with the developer community. I believe teamwork and creativity 
                build the best products.
              </p>
            </div>
            
            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg border border-gray-800"
                >
                  {skill.icon}
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Technologies I Use</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="p-4 bg-primary/50 rounded-lg border border-gray-800 hover:border-accent hover:bg-primary transition-colors text-center"
                >
                  <span className="text-text-primary">{tech}</span>
                </div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-primary/30 rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-accent">2+</div>
                <div className="text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-primary/30 rounded-xl border border-gray-800">
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-text-secondary">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  