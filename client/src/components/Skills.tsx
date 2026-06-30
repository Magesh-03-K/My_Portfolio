/**
 * Skills Section Component
 * Displays technical, soft skills, tools, and languages
 * Design: Neomorphic Minimalism - organized skill cards with categories
 */

import { Code2, Briefcase, Globe, BookOpen } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: 'Technical Skills',
      icon: Code2,
      skills: [
        'React.js',
        'JavaScript (ES6+)',
        'TypeScript',
        'HTML5',
        'CSS3 / Tailwind CSS',
        'Responsive Design',
        'Web APIs',
        'Git & Version Control',
      ],
    },
    {
      id: 2,
      title: 'Tools & Frameworks',
      icon: Briefcase,
      skills: [
        'Vite',
        'npm / pnpm',
        'VS Code',
        'Chrome DevTools',
        'Figma',
        'GitHub',
        'REST APIs',
        'Firebase',
      ],
    },
    {
      id: 3,
      title: 'Soft Skills',
      icon: Globe,
      skills: [
        'Project Management',
        'Public Relations',
        'Teamwork',
        'Time Management',
        'Leadership',
        'Effective Communication',
        'Critical Thinking',
        'Problem Solving',
      ],
    },
    {
      id: 4,
      title: 'Languages',
      icon: BookOpen,
      skills: [
        'Python',
        'JavaScript',
        'SQL',
        'HTML',
        'CSS',
        'English',
        'Tamil',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-secondary relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663769130711/in3VCyne2FjPNyuXicYiks/skills-background-KsEFq58FNYS5FWoaWoWxvQ.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-secondary/95" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-lg text-foreground/70 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit of technical and professional competencies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.id} className="neomorphic-card p-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Proficiency Note */}
          <div className="mt-16 text-center">
            <p className="text-foreground/70 italic">
              Continuously learning and expanding expertise in emerging technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
