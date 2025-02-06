
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-sdblue">Admin Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">Logout</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Button 
            className="h-32 text-lg"
            onClick={() => navigate('/admin/gallery')}
          >
            Manage Gallery
          </Button>
          <Button 
            className="h-32 text-lg"
            onClick={() => navigate('/admin/notices')}
          >
            Manage Notices
          </Button>
          <Button 
            className="h-32 text-lg"
            onClick={() => navigate('/admin/events')}
          >
            Manage Events
          </Button>
        </div>
      </div>
    </div>
  );
}
