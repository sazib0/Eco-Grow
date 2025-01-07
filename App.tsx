import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import TopContributors from './components/TopContributors';
import Hero from './components/Hero';
import Features from './components/Features';
import PlantTrees from './pages/PlantTrees';
import DurstMarketplace from './pages/DurstMarketplace';
import Community from './pages/Community';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'plant-trees':
        return <PlantTrees />;
      case 'marketplace':
        return <DurstMarketplace />;
      case 'community':
        return <Community />;
      default:
        return (
          <>
                        <PlantingMap />
            <TopContributors />
            <Hero />
            <Features />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <footer className="bg-green-900 text-green-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 EcoGrow. Growing a sustainable future together.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;