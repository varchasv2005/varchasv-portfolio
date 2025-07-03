
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Brain, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI/ML Focus",
      description: "Specializing in artificial intelligence and machine learning technologies"
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Creating innovative solutions that solve real-world problems"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate BTech Computer Science (AIML) student with a love for creating digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently pursuing BTech in Computer Science with specialization in Artificial Intelligence 
              and Machine Learning. My journey in technology started with curiosity about how intelligent 
              systems work, and it has evolved into a passion for creating innovative AI-powered solutions.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              I believe that great software is not just about functionality—it's about creating 
              intelligent, intuitive, and accessible experiences that solve real problems for real people. 
              My focus is on bridging the gap between complex AI technologies and practical applications.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {['Python', 'Java', 'Machine Learning', 'AI', 'Object-Oriented Programming', 'Speech Recognition'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
