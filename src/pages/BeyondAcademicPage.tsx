
import { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Music, Palette, Activity } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import type { BeyondAcademicContent } from '@/types/content';

const sectionIcons = {
  'Sports & Games': Trophy,
  'Dance & Music': Music,
  'Art & Craft': Palette,
  'Yoga & Meditation': Activity,
};

export default function BeyondAcademicPage() {
  const [contents, setContents] = useState<BeyondAcademicContent[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from('beyond_academic_content')
        .select('*');
      
      if (error) {
        console.error('Error fetching beyond academic content:', error);
        return;
      }

      if (data) {
        setContents(data);
      } else {
        setContents([]);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-center mb-12 animate-text-shimmer bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent">
          Beyond Academic
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contents.map((content) => {
            const IconComponent = sectionIcons[content.section_name as keyof typeof sectionIcons];
            return (
              <Card key={content.id} className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6">
                  {content.image_url ? (
                    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-xl">
                      <img 
                        src={content.image_url} 
                        alt={content.section_name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-center mb-4">
                    {content.section_name}
                  </h3>
                  <p className="text-gray-600 text-center whitespace-pre-wrap">
                    {content.content || "Content coming soon..."}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
