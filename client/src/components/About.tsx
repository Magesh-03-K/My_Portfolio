/**
 * About Section Component
 * Displays professional summary and personal profile
 * Design: Neomorphic Minimalism - soft cards with subtle shadows
 */

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate frontend developer with a strong foundation in modern web technologies and a keen eye for user-centric design. My journey in tech is driven by a desire to create engaging, responsive web applications that solve real-world problems.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                With expertise in building interactive interfaces and a commitment to clean, maintainable code, I aim to contribute to organizations that value innovation, continuous learning, and collaborative problem-solving. I'm particularly interested in exploring emerging technologies like AI app development and creating immersive digital experiences.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Key Strengths
                </h3>
                <ul className="space-y-3">
                  {[
                    'User-centric web design and development',
                    'Modern frontend technologies and frameworks',
                    'Responsive and accessible interfaces',
                    'Problem-solving and logical thinking',
                    'Collaborative teamwork and communication',
                  ].map((strength, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Personal Info Card */}
            <div className="neomorphic-card p-8 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Personal Profile
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                    Date of Birth
                  </p>
                  <p className="text-lg text-foreground">June 3, 2006</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                    Marital Status
                  </p>
                  <p className="text-lg text-foreground">Single</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                    Location
                  </p>
                  <p className="text-lg text-foreground">Ranipet, Tamil Nadu, India</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                    Languages
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      Tamil
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      English
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-foreground/60 italic pt-4 border-t border-border">
                "I'm committed to continuous learning and growth, bringing innovation and dedication to every project I undertake."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
