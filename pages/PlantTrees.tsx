import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const events = [
  {
    title: "City Park Reforestation",
    date: "March 15, 2024",
    location: "Central Park",
    participants: 24,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Community Garden Project",
    date: "March 20, 2024",
    location: "Riverside Gardens",
    participants: 15,
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function PlantTrees() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Tree Planting Events</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{event.participants} participants</span>
                </div>
              </div>
              <button className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
                Join Event
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}