
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Building } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SmartPool – Object-Oriented Carpooling System",
      description: "A comprehensive Java-based carpool application featuring object-oriented design principles and an intuitive Swing GUI. The system enables efficient ride-sharing with user management, route optimization, and real-time coordination.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Java", "Object-Oriented Programming", "Swing GUI", "Desktop Application"],
      duration: "Feb 2025 – Apr 2025",
      association: "UPES",
      githubUrl: "https://github.com/varchasv2005"
    },
    {
      title: "GEETA – Guided Electronic Efficiency Task Assistant",
      description: "An intelligent Python-based voice assistant designed to enhance desktop productivity. Features advanced speech recognition, text-to-speech capabilities, and automated task management for seamless user interaction.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      technologies: ["Python", "Speech Recognition", "Text-to-Speech", "Desktop Automation"],
      duration: "Apr 2024 – May 2024",
      association: "UPES",
      githubUrl: "https://github.com/varchasv2005"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase my skills in AI, programming, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    {project.association}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
