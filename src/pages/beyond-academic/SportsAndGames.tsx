
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import type { BeyondAcademicContent } from "@/types/content";

export default function SportsAndGames() {
  const navigate = useNavigate();
  const [content, setContent] = useState<BeyondAcademicContent | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from('beyond_academic_content')
        .select('*')
        .eq('section_name', 'Sports & Games')
        .single();
      
      if (error) {
        console.error('Error fetching content:', error);
        return;
      }

      setContent(data);
    };

    fetchContent();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate('/beyond-academic')}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold text-sdblue">Sports & Games</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {content?.content || "Loading..."}
            </p>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-sdblue">Key Features:</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Professional coaching for various sports</li>
                <li>Well-equipped sports facilities</li>
                <li>Regular inter-house competitions</li>
                <li>Annual sports meets and tournaments</li>
                <li>Focus on physical fitness and team building</li>
              </ul>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/319008bf-cf23-450b-9ba4-2460eaaf8736.png"
              alt="Sports Activities"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
