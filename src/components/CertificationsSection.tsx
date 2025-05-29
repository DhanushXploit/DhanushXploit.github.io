
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date_issued: string;
  category: string;
  certificate_url?: string;
}

const CertificationsSection = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const { data, error } = await supabase
          .from('certificates')
          .select('*')
          .order('date_issued', { ascending: false });

        if (error) {
          console.error('Error fetching certificates:', error);
          return;
        }

        setCertificates(data || []);
      } catch (error) {
        console.error('Error fetching certificates:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai/ml':
      case 'ai':
      case 'ml':
        return 'bg-violet-500/20 text-violet-300 border-violet-500/30';
      case 'security':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'database':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      default:
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <section id="certifications" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 to-slate-200 bg-clip-text text-transparent mb-4">
              Certifications
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Continuous learning and professional development
            </p>
          </div>
          <div className="text-center py-8">
            <p className="text-slate-400">Loading certifications...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 to-slate-200 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        {certificates.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-slate-400">No certifications available at the moment.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <Card 
                key={cert.id}
                className="bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-slide-in-left cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => cert.certificate_url && window.open(cert.certificate_url, '_blank')}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <Badge className={getCategoryColor(cert.category)}>
                      {cert.category}
                    </Badge>
                    {cert.certificate_url && (
                      <ExternalLink className="w-4 h-4 text-slate-400 hover:text-violet-400 transition-colors" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-200 mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-violet-300 font-semibold mb-3">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{formatDate(cert.date_issued)}</span>
                  </div>

                  {cert.certificate_url && (
                    <div className="pt-2 border-t border-slate-700">
                      <span className="text-sm text-slate-500 hover:text-violet-400 transition-colors flex items-center gap-1">
                        View Certificate <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
