import React from 'react';
import { Trophy, TreeDeciduous, Leaf, Award } from 'lucide-react';
import type { Contributor } from '../../types/contributor';

const BadgeIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'tree':
      return <TreeDeciduous className="h-4 w-4 text-green-600" />;
    case 'award':
      return <Award className="h-4 w-4 text-blue-600" />;
    case 'leaf':
      return <Leaf className="h-4 w-4 text-yellow-600" />;
    default:
      return <Trophy className="h-4 w-4 text-purple-600" />;
  }
};

export default function ContributorCard({ contributor }: { contributor: Contributor }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-200">
      <div className="relative">
        <img
          src={contributor.avatar}
          alt={contributor.name}
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <div className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
          #{contributor.rank}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">{contributor.name}</h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Trees Planted</span>
          <span className="font-semibold">{contributor.treesPlanted}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Durst Sold (kg)</span>
          <span className="font-semibold">{contributor.durstSold}</span>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {contributor.badges.map((badge) => (
          <div
            key={badge.name}
            className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
          >
            <BadgeIcon type={badge.icon} />
            <span className="ml-1">{badge.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}