import React from 'react';
import { Leaf, Package, Star } from 'lucide-react';

const listings = [
  {
    title: "Premium Garden Compost",
    price: "$15",
    quantity: "25kg",
    rating: 4.8,
    seller: "Green Thumb Gardens",
    image: "https://images.unsplash.com/photo-1581859814481-bfd944e3122f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Organic Leaf Mulch",
    price: "$12",
    quantity: "20kg",
    rating: 4.5,
    seller: "EcoFarms",
    image: "https://images.unsplash.com/photo-1631194758628-71ec7c35137e?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function DurstMarketplace() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Durst Marketplace</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{listing.title}</h3>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">{listing.price}</span>
                  <span className="text-gray-500">{listing.quantity}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Star className="h-5 w-5 mr-1 text-yellow-400" />
                  <span>{listing.rating}</span>
                </div>
                <div className="text-gray-600">{listing.seller}</div>
              </div>
              <button className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}