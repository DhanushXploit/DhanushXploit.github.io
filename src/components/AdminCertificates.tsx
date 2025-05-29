
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Calendar, Edit, Trash2, Plus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date_issued: string;
  category: string;
  certificate_url?: string;
}

const AdminCertificates = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    issuer: '',
    date_issued: '',
    category: '',
    certificate_url: ''
  });
  const { toast } = useToast();

  const fetchCertificates = async () => {
    try {
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .order('date_issued', { ascending: false });

      if (error) throw error;
      setCertificates(data || []);
    } catch (error) {
      console.error('Error fetching certificates:', error);
      toast({
        title: "Error",
        description: "Failed to fetch certificates",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (editingId) {
        const { error } = await supabase
          .from('certificates')
          .update(formData)
          .eq('id', editingId);

        if (error) throw error;
        toast({
          title: "Success",
          description: "Certificate updated successfully",
        });
      } else {
        const { error } = await supabase
          .from('certificates')
          .insert([formData]);

        if (error) throw error;
        toast({
          title: "Success",
          description: "Certificate added successfully",
        });
      }

      setFormData({
        title: '',
        issuer: '',
        date_issued: '',
        category: '',
        certificate_url: ''
      });
      setIsEditing(false);
      setEditingId(null);
      fetchCertificates();
    } catch (error) {
      console.error('Error saving certificate:', error);
      toast({
        title: "Error",
        description: "Failed to save certificate",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (certificate: Certificate) => {
    setFormData({
      title: certificate.title,
      issuer: certificate.issuer,
      date_issued: certificate.date_issued,
      category: certificate.category,
      certificate_url: certificate.certificate_url || ''
    });
    setEditingId(certificate.id);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this certificate?')) return;

    try {
      const { error } = await supabase
        .from('certificates')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({
        title: "Success",
        description: "Certificate deleted successfully",
      });
      fetchCertificates();
    } catch (error) {
      console.error('Error deleting certificate:', error);
      toast({
        title: "Error",
        description: "Failed to delete certificate",
        variant: "destructive",
      });
    }
  };

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

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-slate-200 bg-clip-text text-transparent mb-4">
            Certificate Management
          </h1>
          <p className="text-slate-400">Add, edit, and manage your certificates</p>
        </div>

        {/* Add/Edit Form */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              {editingId ? 'Edit Certificate' : 'Add New Certificate'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Certificate title"
                  required
                  className="bg-slate-700 border-slate-600"
                />
              </div>
              <div>
                <Label htmlFor="issuer">Issuer</Label>
                <Input
                  id="issuer"
                  value={formData.issuer}
                  onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
                  placeholder="Issuing organization"
                  required
                  className="bg-slate-700 border-slate-600"
                />
              </div>
              <div>
                <Label htmlFor="date_issued">Date Issued</Label>
                <Input
                  id="date_issued"
                  type="date"
                  value={formData.date_issued}
                  onChange={(e) => setFormData({ ...formData, date_issued: e.target.value })}
                  required
                  className="bg-slate-700 border-slate-600"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="e.g., AI/ML, Security, Database"
                  required
                  className="bg-slate-700 border-slate-600"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="certificate_url">Certificate URL (optional)</Label>
                <Input
                  id="certificate_url"
                  type="url"
                  value={formData.certificate_url}
                  onChange={(e) => setFormData({ ...formData, certificate_url: e.target.value })}
                  placeholder="https://..."
                  className="bg-slate-700 border-slate-600"
                />
              </div>
              <div className="md:col-span-2 flex gap-2">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-violet-600 hover:bg-violet-700"
                >
                  {editingId ? 'Update Certificate' : 'Add Certificate'}
                </Button>
                {editingId && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setEditingId(null);
                      setIsEditing(false);
                      setFormData({
                        title: '',
                        issuer: '',
                        date_issued: '',
                        category: '',
                        certificate_url: ''
                      });
                    }}
                    className="border-slate-600 text-slate-300"
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Certificates List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="md:col-span-2 lg:col-span-3 text-center py-8">
              <p className="text-slate-400">Loading certificates...</p>
            </div>
          ) : certificates.length === 0 ? (
            <div className="md:col-span-2 lg:col-span-3 text-center py-8">
              <p className="text-slate-400">No certificates found. Add your first certificate above!</p>
            </div>
          ) : (
            certificates.map((cert) => (
              <Card key={cert.id} className="bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <Badge className={getCategoryColor(cert.category)}>
                      {cert.category}
                    </Badge>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(cert)}
                        className="text-slate-400 hover:text-violet-400"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(cert.id)}
                        className="text-slate-400 hover:text-red-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
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
                    <span className="text-sm">
                      {new Date(cert.date_issued).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  {cert.certificate_url && (
                    <div className="pt-2 border-t border-slate-700">
                      <a
                        href={cert.certificate_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-500 hover:text-violet-400 transition-colors"
                      >
                        View Certificate →
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCertificates;
