/**
 * Experience Section Component
 * Displays work history and professional experience
 * Design: Neomorphic Minimalism - timeline layout with soft cards
 */

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'Tech Startup Inc.',
      position: 'Frontend Developer',
      duration: 'Jan 2024 - Present',
      responsibilities: [
        'Develop responsive web applications using React and modern JavaScript',
        'Collaborate with design and backend teams to implement user-centric features',
        'Optimize application performance and ensure cross-browser compatibility',
        'Participate in code reviews and contribute to team knowledge sharing',
      ],
    },
    {
      id: 2,
      company: 'Digital Solutions Ltd.',
      position: 'Junior Frontend Developer',
      duration: 'Jun 2023 - Dec 2023',
      responsibilities: [
        'Built interactive UI components using React and Tailwind CSS',
        'Implemented responsive designs for mobile, tablet, and desktop platforms',
        'Debugged and fixed frontend issues in production environments',
        'Assisted in migrating legacy code to modern frameworks',
      ],
    },
    {
      id: 3,
      company: 'Web Design Agency',
      position: 'Frontend Intern',
      duration: 'Mar 2023 - May 2023',
      responsibilities: [
        'Assisted in developing static websites and landing pages',
        'Learned best practices in HTML, CSS, and JavaScript',
        'Collaborated with senior developers on real-world projects',
        'Gained hands-on experience with version control and development workflows',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="relative">
                {/* Timeline Line */}
                {idx !== experiences.length - 1 && (
                  <div className="absolute left-0 md:left-1/2 top-24 bottom-0 w-1 bg-gradient-to-b from-accent to-accent/20 transform md:-translate-x-1/2" />
                )}

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-accent rounded-full transform md:-translate-x-1/2 -translate-x-1.5 ring-4 ring-background" />

                {/* Experience Card */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'} ml-8`}>
                  <div className="neomorphic-card p-6 md:p-8 hover:shadow-lg transition-shadow">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-accent font-semibold mt-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-foreground/60 mt-2">
                        {exp.duration}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                        Key Responsibilities
                      </p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIdx) => (
                          <li key={respIdx} className="flex gap-3 text-foreground/80">
                            <span className="text-accent font-bold flex-shrink-0">
                              •
                            </span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline End */}
          <div className="mt-12 text-center">
            <p className="text-foreground/60 italic">
              Always eager to take on new challenges and expand my skill set
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
