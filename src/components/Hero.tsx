
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Full Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            I create beautiful, functional web applications that solve real-world problems. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-200">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-200">
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform">
              <Github size={28} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-200 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
