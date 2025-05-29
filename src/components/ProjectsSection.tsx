
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ChevronDown, ChevronUp } from 'lucide-react';

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'AI-Driven Digital Content Management and Retrieval System',
      shortDescription: 'An intelligent browser extension for capturing and retrieving digital content',
      fullDescription: 'A sophisticated browser extension that captures important text and images from any site or application (email, blog, Instagram, etc.). The system stores this information in a user-specific knowledge graph and retrieves it intelligently via a BigB-style GPT query engine with source links. Built with advanced AI capabilities for semantic search and content organization.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Database: Milvus'],
      github: 'https://github.com/DhanushXploit/BIG-B',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 to-slate-200 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Showcasing my latest work and innovations
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 p-6 lg:p-8">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-violet-300 mb-3">
                      {project.title}
                    </CardTitle>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Expandable Description */}
                    <div className="space-y-4">
                      {expandedProject === index && (
                        <div className="animate-fade-in">
                          <p className="text-slate-400 leading-relaxed">
                            {project.fullDescription}
                          </p>
                        </div>
                      )}
                      
                      <Button
                        variant="ghost"
                        onClick={() => toggleExpand(index)}
                        className="text-violet-400 hover:text-violet-300 hover:bg-violet-500/10 p-0 h-auto font-semibold"
                      >
                        {expandedProject === index ? (
                          <>
                            Show Less <ChevronUp className="ml-1 w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Learn More <ChevronDown className="ml-1 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-slate-200 font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm border border-violet-500/30 hover:bg-violet-500/30 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <Button 
                        className="bg-violet-600 hover:bg-violet-700 text-white flex items-center gap-2 transition-all duration-300 hover:scale-105"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github size={18} />
                        View Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
