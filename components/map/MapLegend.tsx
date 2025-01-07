import React from 'react';
import { TreeIcon, DurstIcon } from './MapIcons';

export default function MapLegend() {
  return (
    <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-md">
      <div className="text-sm font-semibold mb-2">Legend</div>
      <div className="space-y-2">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <TreeIcon className="h-4 w-4 text-white" />
          </div>
          <span className="ml-2 text-sm">Trees Planted</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
            <DurstIcon className="h-4 w-4 text-white" />
          </div>
          <span className="ml-2 text-sm">Durst Contributed</span>
        </div>
      </div>
    </div>
  );
}