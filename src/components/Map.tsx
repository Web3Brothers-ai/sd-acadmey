
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map with the school's coordinates (Patna, Bihar)
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [85.1376, 25.6207], // Patna coordinates
      zoom: 15,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add marker at school location
    new mapboxgl.Marker({ color: '#0096C7' })
      .setLngLat([85.1376, 25.6207])
      .setPopup(new mapboxgl.Popup().setHTML('<h3 class="font-semibold">Baldwin Academy</h3>'))
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="relative w-full h-full">
      {!mapboxToken && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 p-4">
          <p className="text-gray-600 mb-2">Please enter your Mapbox public token:</p>
          <input
            type="text"
            className="w-full max-w-md px-4 py-2 border rounded"
            onChange={(e) => setMapboxToken(e.target.value)}
            placeholder="Enter Mapbox token..."
          />
        </div>
      )}
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;
