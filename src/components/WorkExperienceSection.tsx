
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const WorkExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 to-slate-200 bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to make my mark in the tech industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all duration-500 animate-scale-in">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="space-y-6">
                {/* Icon */}
                <div className="mx-auto w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center animate-glow">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>

                {/* Status Badge */}
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-6 py-2 text-lg font-semibold animate-pulse">
                  Open to Work
                </Badge>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-200">
                    Fresh Graduate
                  </h3>
                  <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    As a recent graduate with a strong foundation in full-stack development, 
                    I'm excited to bring fresh perspectives, modern technical skills, and 
                    enthusiasm to a dynamic development team.
                  </p>
                </div>

                {/* Skills Highlight */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-violet-300">Ready to contribute with:</h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      'Modern Web Development',
                      'Problem Solving',
                      'Team Collaboration',
                      'Continuous Learning',
                      'Clean Code Practices'
                    ].map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 bg-violet-500/20 text-violet-300 rounded-full text-sm border border-violet-500/30 hover:bg-violet-500/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <Button 
                    className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
                    onClick={() => window.open('mailto:dhanushv136@gmail.com', '_blank')}
                  >
                    Let's Work Together
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
