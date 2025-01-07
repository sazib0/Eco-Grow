import React from 'react';
import { LocationType } from '../../types/location';
import { getIconByType } from './MapIcons';

interface MapMarkerProps {
  type: LocationType;
  location: string;
  count: number;
  contributor: string;
  date: string;
  x: number;
  y: number;
}

export default function MapMarker({ type, location, count, contributor, date, x, y }: MapMarkerProps) {
  return (
    <div
      className="absolute group"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="relative">
        <div className={`p-2 rounded-full ${type === 'tree' ? 'bg-green-500' : 'bg-yellow-500'} cursor-pointer transform hover:scale-110 transition-transform duration-200`}>
          {getIconByType(type, "h-6 w-6 text-white")}
        </div>
        
        <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="bg-white p-3 rounded-lg shadow-lg text-sm w-48">
            <div className="font-semibold mb-1">{location}</div>
            <div className="text-gray-600">
              {type === 'tree' ? (
                <span>{count} trees planted</span>
              ) : (
                <span>{count}kg durst contributed</span>
              )}
            </div>
            <div className="text-gray-500 text-xs mt-1">
              by {contributor}
              <br />
              on {new Date(date).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}