
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices"
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Design Focused",
      description: "Creating beautiful, intuitive user interfaces and experiences"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with a love for creating digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive applications using the latest technologies. My journey started 
              with a curiosity about how websites work, and it has evolved into a passion for 
              crafting exceptional digital experiences.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              I believe that great software is not just about functionality—it's about creating 
              intuitive, beautiful, and accessible experiences that solve real problems for real people.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'PostgreSQL'].map((tech) => (
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
