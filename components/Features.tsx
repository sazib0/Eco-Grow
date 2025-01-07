import React from 'react';
import { Users, Leaf, Recycle } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Community Driven",
      description: "Connect with like-minded individuals passionate about environmental conservation."
    },
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: "Tree Planting Events",
      description: "Organize and participate in local tree planting initiatives."
    },
    {
      icon: <Recycle className="h-6 w-6 text-green-600" />,
      title: "Durst Exchange",
      description: "Buy, sell, or donate high-quality compost to support sustainable gardening."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="relative p-6 bg-green-50 rounded-lg">
              <div className="absolute top-6 left-6">{feature.icon}</div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 pt-4">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}