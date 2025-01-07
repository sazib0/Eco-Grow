import React from 'react';
import { Leaf, TreePine, Menu } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const navItems = [
    { name: 'Plant Trees', path: 'plant-trees', icon: <Leaf className="h-4 w-4 mr-1" /> },
    { name: 'Durst Marketplace', path: 'marketplace', icon: null },
    { name: 'Community', path: 'community', icon: null },
  ];

  return (
    <header className="bg-green-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <TreePine className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-green-800">EcoGrow</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`text-green-700 hover:text-green-900 flex items-center ${
                  currentPage === item.path ? 'font-semibold' : ''
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>
    </header>
  );
}