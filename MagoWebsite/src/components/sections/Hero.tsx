// src/components/sections/Hero.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hero1 from '../../assets/Hero/containers.jpg';
import hero2 from '../../assets/Hero/Hero Image 2.jpg';
import hero3 from '../../assets/Hero/Hero Image 1.jpg';
import { Button } from "@/components/ui/button";
import { MolecularHeroCanvas } from '../3d/MolecularHeroCanvas';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [hero1, hero2, hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#090D14] pt-24 pb-16">
      {/* Background Logistics Image with Clean Vignette */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-25' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt="Industrial Chemical Shipping"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090D14]/80 via-[#090D14]/90 to-[#090D14]" />
      </div>

      {/* Subtle Ambient Molecular Canvas */}
      <MolecularHeroCanvas />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Minimalist Origin Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
          <span>Established 1992 • Global Chemical Distribution</span>
        </div>

        {/* Clean, High-Impact Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
          Global Chemical Sourcing &{' '}
          <span className="text-[var(--color-primary)]">Industrial Supply</span>
        </h1>

        {/* Crisp Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          A family-owned enterprise importing essential raw materials from 20+ countries, connecting 200+ global chemical manufacturers with over 500 industrial clients worldwide.
        </p>

        {/* Minimalist Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <Button
            onClick={() => navigate('/products')}
            className="w-full sm:w-auto px-7 py-2.5 rounded-md bg-[var(--color-primary)] hover:bg-[#22a802] text-slate-950 font-semibold text-sm transition-colors cursor-pointer"
          >
            <span>Explore Chemical Catalog</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>

          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-2.5 rounded-md bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] text-white font-medium text-sm transition-colors text-center"
          >
            Request Quotation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;