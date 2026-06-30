/**
 * Footer Component
 * Displays footer with copyright and navigation
 * Design: Neomorphic Minimalism - subtle, clean footer
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Magesh K
              </h3>
              <p className="text-foreground/60">
                Frontend Developer & Creative Problem Solver
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                Quick Links
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {navLinks.slice(0, 4).map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                Connect
              </h4>
              <div className="flex justify-center md:justify-end gap-4">
                <a
                  href="https://www.linkedin.com/in/magesh03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-foreground/60 text-sm">
              &copy; {currentYear} Magesh K. All rights reserved. | Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
