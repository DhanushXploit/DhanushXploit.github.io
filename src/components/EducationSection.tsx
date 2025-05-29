
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'B.Tech Computer Science and Engineering',
      institution: 'Periyar Maniammai Institute of Science and Technology',
      location: 'Thanjavur',
      grade: '7.0 CGPA',
      year: '2021-2025',
      level: 'undergraduate'
    },
    {
      degree: '12th Grade (Higher Secondary)',
      institution: 'Government Higher Secondary School',
      location: 'Thamarankottai',
      grade: '85.6%',
      year: '2020-2021',
      level: 'secondary'
    },
    {
      degree: '10th Grade (Secondary)',
      institution: 'Government High School',
      location: 'Moothakkurichi',
      grade: '80.8%',
      year: '2018-2019',
      level: 'secondary'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'undergraduate':
        return 'from-violet-500 to-purple-500';
      case 'secondary':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 to-slate-200 bg-clip-text text-transparent mb-4">
            Education Timeline
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-slate-600"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative flex items-start animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline node */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${getLevelColor(edu.level)} border-4 border-slate-900 z-10`}></div>

                  {/* Content */}
                  <div className="ml-16 w-full">
                    <Card className="bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-3">
                              <GraduationCap className={`w-6 h-6 mt-1 text-violet-400`} />
                              <div>
                                <h3 className="text-xl lg:text-2xl font-bold text-slate-200 mb-2">
                                  {edu.degree}
                                </h3>
                                <p className="text-violet-300 font-semibold mb-1">
                                  {edu.institution}
                                </p>
                                <div className="flex items-center gap-1 text-slate-400 mb-2">
                                  <MapPin className="w-4 h-4" />
                                  <span>{edu.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="lg:text-right space-y-2">
                            <div className="inline-block lg:block">
                              <span className="px-4 py-2 bg-violet-500/20 text-violet-300 rounded-full text-sm font-semibold border border-violet-500/30">
                                {edu.year}
                              </span>
                            </div>
                            <div className="text-lg font-bold text-slate-200">
                              {edu.grade}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
