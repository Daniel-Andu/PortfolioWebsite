
  

import { Code2, Server, Wrench, Database, Palette, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript']
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6" />,
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST APIs']
  },
  {
    title: 'Tools',
    icon: <Wrench className="w-6 h-6" />,
    skills: ['Git', 'GitHub', 'Figma', 'Vercel', 'VS Code', 'Postman', 'Docker']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <h2 className="section-title">
          <span className="title-number">3</span> Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-primary rounded-xl p-6 border border-gray-800 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <div className="text-accent">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <span className="text-text-primary">{skill}</span>
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-primary rounded-xl border border-gray-800">
            <Database className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="font-bold mb-2">Database</h4>
            <p className="text-sm text-text-secondary">MongoDB, PostgreSQL</p>
          </div>
          <div className="text-center p-6 bg-primary rounded-xl border border-gray-800">
            <Palette className="w-8 h-8 text-accent mx-auto mb-3" />
           
          </div>
          <div className="text-center p-6 bg-primary rounded-xl border border-gray-800">
            <Cpu className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="font-bold mb-2">AI/ML</h4>
            <p className="text-sm text-text-secondary">Prompt Engineering</p>
          </div>
          <div className="text-center p-6 bg-primary rounded-xl border border-gray-800">
            <Wrench className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="font-bold mb-2">DevOps</h4>
            <p className="text-sm text-text-secondary">Docker, Vercel</p>
          </div>
        </div>
      </div>
    </section>
  );
}
  