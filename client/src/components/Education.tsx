/**
 * Education Section Component
 * Displays educational background and certifications
 * Design: Neomorphic Minimalism - timeline layout with soft cards
 */

import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      id: 1,
      type: 'degree',
      institution: 'Prathyusha Engineering College',
      degree: 'B.Tech in Artificial Intelligence & Data Science',
      year: '2023 - 2027',
      details: 'Currently pursuing a degree in AI & Data Science with a focus on modern technologies and practical applications.',
    },
    {
      id: 2,
      type: 'degree',
      institution: 'Dr. VGN Matric HR Secondary School',
      degree: '12th Grade',
      year: '2022 - 2023',
      details: 'Scored 96% in 12th grade with strong fundamentals in mathematics and science.',
    },
  ];

  const certifications = [
    {
      id: 1,
      title: 'The Joy Of Computing Using Python',
      issuer: 'IIT through SWAYAM (NPTEL)',
      date: 'Jul - Oct 2024',
      achievement: 'Achieved Silver+ Elite status with 82% score',
    },
    {
      id: 2,
      title: 'Introduction to Machine Learning',
      issuer: 'IIT through SWAYAM (NPTEL)',
      date: 'Feb - Apr 2025',
      achievement: 'Achieved completed status with 58% score',
    },
    {
      id: 3,
      title: 'Codeathon Participant',
      issuer: 'Intera College Tech Fest',
      date: '2024',
      achievement: 'Participated in competitive coding event',
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Education & Certifications
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-accent" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="neomorphic-card p-8">
                  <div className="grid md:grid-cols-3 gap-4 md:gap-8">
                    <div className="md:col-span-2">
                      <h4 className="text-2xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-lg text-accent font-semibold mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-foreground/70">{edu.details}</p>
                    </div>
                    <div className="flex items-center justify-start md:justify-end">
                      <div className="text-right">
                        <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                          Duration
                        </p>
                        <p className="text-lg font-bold text-foreground">
                          {edu.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-accent" />
              Certifications & Achievements
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="neomorphic-card p-6">
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-accent font-semibold text-sm mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-foreground/70 mb-4">
                    {cert.date}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-foreground/80 italic">
                      {cert.achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 neomorphic-card p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Continuous Learning
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Actively participating in workshops and training programs on emerging technologies including Dark Web & Cybersecurity, AI App Development, Game Development, and AR/VR. Committed to staying updated with the latest industry trends and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
