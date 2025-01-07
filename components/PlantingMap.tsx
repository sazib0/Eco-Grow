import React from 'react';
import MapMarker from './map/MapMarker';
import MapLegend from './map/MapLegend';
import { locations } from '../data/locations';

export default function PlantingMap() {
  return (
    <section className="bg-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-[600px] bg-green-50 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-20" />
          
          {locations.map((loc) => (
            <MapMarker
              key={loc.id}
              type={loc.type}
              location={loc.location}
              count={loc.count}
              contributor={loc.contributor}
              date={loc.date}
              x={loc.coordinates.x}
              y={loc.coordinates.y}
            />
          ))}
          
          <MapLegend />
        </div>
      </div>
    </section>
  );
}