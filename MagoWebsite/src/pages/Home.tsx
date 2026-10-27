import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import About from '../components/sections/About';
import { GlobalTradeVisualizer } from '../components/3d/GlobalTradeVisualizer';
import Products from '../components/sections/Products';
import Team from '@/components/sections/Team';
import Contact from '../components/sections/Contact';

const NAVBAR_HEIGHT = 76;

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const href = location.state.scrollTo;
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_HEIGHT;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main>
        {/* 3D Molecular Hero Section */}
        <Hero />

        {/* Real Enterprise Scale Metrics */}
        <Stats />

        {/* About Heritage & Direct Sourcing */}
        <About />

        {/* Global Trade & Sourcing Network 3D Map */}
        <section id="network" className="py-20 bg-slate-950 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlobalTradeVisualizer />
          </div>
        </section>

        {/* Certified Chemical Categories */}
        <Products />

        {/* Executive Family Leadership */}
        <Team />

        {/* Inquiries & Commercial Desk */}
        <Contact />
      </main>
    </div>
  );
};

export default Home;