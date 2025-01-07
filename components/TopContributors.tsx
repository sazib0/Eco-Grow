import React from 'react';
import ContributorCard from './contributors/ContributorCard';
import { contributors } from '../data/contributors';

export default function TopContributors() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Top Contributors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contributors.map((contributor) => (
            <ContributorCard key={contributor.name} contributor={contributor} />
          ))}
        </div>
      </div>
    </section>
  );
}