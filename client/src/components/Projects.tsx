/**
 * Projects Section Component
 * Displays portfolio projects with descriptions and technologies
 * Design: Neomorphic Minimalism - staggered card layout with hover effects
 */

import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce platform built with React and Tailwind CSS. Features include product filtering, shopping cart, and checkout flow with smooth animations.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'REST API'],
      liveLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates. Users can create projects, assign tasks, and track progress with an intuitive interface.',
      technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather application that displays real-time weather data with location-based forecasts. Features include search functionality and responsive design.',
      technologies: ['React', 'Weather API', 'CSS3', 'JavaScript'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Built with React and featuring smooth scrolling, animations, and neomorphic design.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'A dashboard for managing social media accounts with analytics, posting tools, and engagement metrics. Includes dark mode and responsive design.',
      technologies: ['React', 'Chart.js', 'Tailwind CSS', 'REST API'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-lg text-foreground/70 mt-6 max-w-2xl mx-auto">
              A selection of projects demonstrating my skills in frontend development and design
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.slice(0, 4).map((project, idx) => (
              <div
                key={project.id}
                className="neomorphic-card overflow-hidden group hover:shadow-xl transition-all duration-300"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                {/* Project Header */}
                <div className="p-8 pb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-accent hover:bg-accent/10 gap-2"
                      onClick={() => window.open(project.liveLink)}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-accent hover:bg-accent/10 gap-2"
                      onClick={() => window.open(project.githubLink)}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Other Projects
            </h3>
            <div className="neomorphic-card p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {projects.slice(4).map((project) => (
                  <div key={project.id} className="pb-6 border-b border-border last:border-b-0 md:last:border-b-0">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-foreground/70 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-foreground/70 mb-6">
              Want to see more of my work? Check out my GitHub profile.
            </p>
            <Button
              className="neomorphic-button bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => window.open('https://github.com')}
            >
              View GitHub Profile
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
