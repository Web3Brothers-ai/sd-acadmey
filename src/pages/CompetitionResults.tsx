
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

const CompetitionResults = () => {
  const { data: results, isLoading } = useQuery({
    queryKey: ['competition-results'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('competition_results')
        .select('*')
        .order('year', { ascending: false });

      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-sdblue mb-8">Competition Results</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Skeleton className="w-full h-64" />
                <div className="p-6">
                  <Skeleton className="h-8 w-3/4 mb-4" />
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((j) => (
                      <Skeleton key={j} className="h-6 w-2/3" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-sdblue mb-8">Competition Results</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {results?.map((result) => (
            <div key={result.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={result.image_url || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"}
                alt={result.competition_name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {result.competition_name} {result.year}
                </h2>
                <div className="space-y-3">
                  {result.first_place && (
                    <p className="text-gray-600">
                      • First Place: {result.first_place}
                    </p>
                  )}
                  {result.participating_teams && (
                    <p className="text-gray-600">
                      • Participating Teams: {result.participating_teams}
                    </p>
                  )}
                  {result.special_awards && result.special_awards.length > 0 && (
                    <p className="text-gray-600">
                      • Special Awards: {result.special_awards.join(', ')}
                    </p>
                  )}
                  {result.achievement_details && (
                    <p className="text-gray-600">
                      • {result.achievement_details}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompetitionResults;

