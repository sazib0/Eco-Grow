import type { Location } from '../types/location';

export const locations: Location[] = [
  // Existing locations
  {
    id: 1,
    type: 'tree',
    location: 'Central Park',
    count: 25,
    contributor: 'Emma Wilson',
    date: '2024-02-15',
    coordinates: { x: 30, y: 40 }
  },
  {
    id: 2,
    type: 'durst',
    location: 'Community Garden',
    count: 100,
    contributor: 'John Martinez',
    date: '2024-02-20',
    coordinates: { x: 60, y: 30 }
  },
  {
    id: 3,
    type: 'tree',
    location: 'Riverside Park',
    count: 15,
    contributor: 'Sarah Chen',
    date: '2024-02-25',
    coordinates: { x: 45, y: 60 }
  },
  // New tree locations
  {
    id: 4,
    type: 'tree',
    location: 'Highland Park',
    count: 32,
    contributor: 'Michael Chang',
    date: '2024-02-28',
    coordinates: { x: 20, y: 25 }
  },
  {
    id: 5,
    type: 'tree',
    location: 'Sunset Gardens',
    count: 18,
    contributor: 'Lisa Rodriguez',
    date: '2024-03-01',
    coordinates: { x: 75, y: 45 }
  },
  {
    id: 6,
    type: 'tree',
    location: 'Meadowbrook Reserve',
    count: 45,
    contributor: 'James Wilson',
    date: '2024-03-02',
    coordinates: { x: 15, y: 70 }
  },
  {
    id: 7,
    type: 'tree',
    location: 'Pine Valley',
    count: 28,
    contributor: 'Anna Kim',
    date: '2024-03-03',
    coordinates: { x: 85, y: 20 }
  },
  {
    id: 8,
    type: 'tree',
    location: 'Oak Ridge Trail',
    count: 22,
    contributor: 'David Thompson',
    date: '2024-03-04',
    coordinates: { x: 40, y: 15 }
  },
  {
    id: 9,
    type: 'tree',
    location: 'Cedar Heights',
    count: 35,
    contributor: 'Sophie Chen',
    date: '2024-03-05',
    coordinates: { x: 65, y: 75 }
  },
  // New durst locations
  {
    id: 10,
    type: 'durst',
    location: 'Urban Farm Co-op',
    count: 75,
    contributor: 'Marcus Johnson',
    date: '2024-03-01',
    coordinates: { x: 25, y: 55 }
  },
  {
    id: 11,
    type: 'durst',
    location: 'Green Valley Gardens',
    count: 120,
    contributor: 'Rachel Lee',
    date: '2024-03-02',
    coordinates: { x: 55, y: 80 }
  },
  {
    id: 12,
    type: 'durst',
    location: 'Sustainable Solutions',
    count: 90,
    contributor: 'Thomas Brown',
    date: '2024-03-03',
    coordinates: { x: 80, y: 60 }
  },
  {
    id: 13,
    type: 'durst',
    location: 'EcoHub Center',
    count: 150,
    contributor: 'Maria Garcia',
    date: '2024-03-04',
    coordinates: { x: 35, y: 85 }
  }
];