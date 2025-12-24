
  

  
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const experiences = [
  {
    type: 'EXP',
    duration: '1+ years',
    title: 'Frontend Developer',
    company: 'Self-Employed',
    period: '2024 - Present',
    location: 'Remote & Local',
    description: 'Building modern web applications for clients and personal projects. Creating interactive websites, managing end-to-end development.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    highlights: [
      'Delivered 5+ client projects independently',
      'Developed and launched personal projects'
    ],
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    type: 'EDU',
    duration: '4 years',
    title: 'BSc in Software Engineering',
    company: 'Bahir Dar University',
    period: '2022 - 2026(present)',
    location: 'Bahir dar',
    description: 'Specialized in software development and web technologies. Completed capstone project.',
    tech: ['Java', 'Python', 'SQL', 'Algorithms'],
    highlights: [
      'Completed 10+ projects',
      " List"
    ],
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    type: 'EXP',
    duration: '1 year',
    title: 'Web Development Intern',
    company: 'Company Name',
    period: '2022 - 2023',
    location: 'Bahir dar , Bahir dar',
    description: 'Developed responsive web applications using React and Next.js. Collaborated with design team.',
    tech: ['React', 'Next.js', 'CSS3'],
    highlights: [
      'Built 10+ components',
      'Reduced load time by 30%'
    ],
    icon: <Briefcase className="w-5 h-5" />
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">
          <span className="title-number">4</span> Journey & Growth
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent/30 to-cyan-400/30"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`mb-12 relative ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-2 border-primary -ml-1.5 z-10`}></div>
              
              <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-secondary rounded-xl border border-gray-800 p-6 hover:border-accent/50 transition-colors">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        {exp.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold bg-accent/20 text-accent px-3 py-1 rounded-full">
                            {exp.type}
                          </span>
                          <span className="text-sm text-text-secondary">{exp.duration}</span>
                        </div>
                        <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                      </div>
                    </div>
                    
                    <div className="text-sm text-text-secondary">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Company */}
                  <p className="text-accent mb-3">{exp.company}</p>
                  
                  {/* Description */}
                  <p className="text-text-secondary mb-4">{exp.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-3 py-1 bg-primary text-text-secondary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Highlights */}
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  