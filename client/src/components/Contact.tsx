/**
 * Contact Section Component
 * Displays contact information and social media links
 * Design: Neomorphic Minimalism - centered card with soft styling
 */

import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const contactInfo = [
    {
      id: 1,
      icon: Mail,
      label: 'Email',
      value: 'mageshkubendren1981@gmail.com',
      link: 'mailto:mageshkubendren1981@gmail.com',
    },
    {
      id: 2,
      icon: Phone,
      label: 'Phone',
      value: '+91 9629797906',
      link: 'tel:+919629797906',
    },
    {
      id: 3,
      icon: MapPin,
      label: 'Location',
      value: 'Ranipet, Tamil Nadu, India',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/magesh03',
    },
    {
      id: 2,
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-lg text-foreground/70 mt-6 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info) => {
              const IconComponent = info.icon;
              return (
                <a
                  key={info.id}
                  href={info.link}
                  className="neomorphic-card p-6 text-center hover:shadow-lg transition-all group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                    {info.label}
                  </p>
                  <p className="text-foreground font-medium break-all hover:text-accent transition-colors">
                    {info.value}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Main Contact Card */}
          <div className="neomorphic-card p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Let's Connect
            </h3>
            <p className="text-foreground/70 text-center mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="neomorphic-button bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => window.location.href = 'mailto:mageshkubendren1981@gmail.com'}
              >
                <Mail className="mr-2 w-4 h-4" />
                Send Email
              </Button>
              <Button
                variant="outline"
                className="neomorphic-button text-foreground border-2 border-accent hover:bg-secondary"
                onClick={() => window.open('https://www.linkedin.com/in/magesh03')}
              >
                <Linkedin className="mr-2 w-4 h-4" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-foreground/60 mb-6">
              Follow me on social media
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent/10 text-accent rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
