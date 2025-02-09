
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  School, Clock, Bus, ScrollText, 
  Newspaper, FileSpreadsheet, UserPlus,
  ArrowRight
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import type { EssentialInfoContent } from '@/types/content';

const sectionIcons = {
  'School Uniform': School,
  'School Timing': Clock,
  'Transport': Bus,
  'Code of Conduct': ScrollText,
  'SDA in Newspaper': Newspaper,
  'Online Registration': FileSpreadsheet,
  'Job Entrance': UserPlus,
};

export default function EssentialInfoPage() {
  const [contents, setContents] = useState<EssentialInfoContent[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from('essential_info_content')
        .select('*');
      
      if (error) {
        console.error('Error fetching essential info content:', error);
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
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center mb-12 animate-text-shimmer bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent">
          Essential Information
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contents.map((content) => {
            const IconComponent = sectionIcons[content.section_name as keyof typeof sectionIcons];
            return (
              <Link 
                key={content.id} 
                to={`/essential-info/${content.slug}`}
              >
                <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
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
                    <p className="text-gray-600 text-center line-clamp-3 mb-4">
                      {content.content || "Content coming soon..."}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="w-full mt-auto flex items-center justify-center gap-2"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
