import React from 'react';
import Hero from './components/Hero';
import ExperienceList from './components/ExperienceList';
import CertificationList from './components/CertificationList';
import { portfolioData } from './data/portofolio';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Hero data={portfolioData} />
        <ExperienceList experiences={portfolioData.experiences} />
        <CertificationList certifications={portfolioData.certifications} />
        
        <footer className="mt-12 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {portfolioData.name}. Dibuat menggunakan React & Tailwind CSS.
        </footer>
      </div>
    </div>
  );
};

export default App;