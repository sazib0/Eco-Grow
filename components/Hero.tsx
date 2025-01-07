import React from 'react';
import { TreePine, Sprout } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Grow a Greener Future</span>
            <span className="block text-green-600">Together</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join our community of environmental enthusiasts in planting trees and sharing sustainable resources.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              <TreePine className="h-5 w-5 mr-2" />
              Start Planting
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200">
              <Sprout className="h-5 w-5 mr-2" />
              Browse Durst
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}