// src/components/sections/Hero.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hero1 from '../../assets/Hero/containers.jpg';
import hero2 from '../../assets/Hero/Hero Image 2.jpg';
import hero3 from '../../assets/Hero/Hero Image 1.jpg';
import { Button } from "@/components/ui/button";
import { MolecularHeroCanvas } from '../3d/MolecularHeroCanvas';
import { ArrowRight, ShieldCheck, Globe, Award, Sparkles, Building2 } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [hero1, hero2, hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20 pb-16">
      {/* Background Carousel with Smooth Ken-Burns Effect */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-35 scale-105' : 'opacity-0 scale-100'
            } transition-all duration-1000 ease-out`}
          >
            <img
              src={image}
              alt={`Industrial Chemical Logistics ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark Vignette Overlay for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/60 to-slate-950" />
      </div>

      {/* 3D Interactive Chemical Molecular Canvas */}
      <MolecularHeroCanvas />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-slate-200 text-xs md:text-sm font-medium mb-6 shadow-[0_0_25px_rgba(41,199,2,0.15)] backdrop-blur-md animate-float">
          <span className="flex h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
          <span className="text-[var(--color-primary-light)] font-semibold">Mago Enterprises</span>
          <span className="text-slate-500">•</span>
          <span>Global Chemical Sourcing & Supply Chain Leaders</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white max-w-5xl leading-[1.1] mb-6">
          Empowering Industries Through{' '}
          <span className="text-gradient-emerald">Precision Chemical Sourcing</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          A trusted family enterprise importing high-grade chemicals and industrial raw materials from{' '}
          <strong className="text-white font-semibold">20+ countries</strong> with a network of{' '}
          <strong className="text-white font-semibold">200+ global manufacturers</strong> serving over{' '}
          <strong className="text-white font-semibold">500+ industrial clients</strong> worldwide since 1992.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <Button
            onClick={() => navigate('/products')}
            className="w-full sm:w-auto px-8 py-6 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-slate-950 font-bold text-base shadow-[0_0_30px_rgba(41,199,2,0.35)] transition-all duration-300 hover:scale-105 group"
          >
            <span>Explore Chemical Catalog</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-card hover:border-[var(--color-primary)]/50 text-white font-semibold text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-5 h-5 text-[var(--color-primary)]" />
            <span>Request Inquiries & Quotes</span>
          </a>
        </div>

        {/* Floating 3D Stat Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl pt-4">
          <div className="glass-card p-4 rounded-xl text-left border border-white/10 hover:border-[var(--color-primary)]/40 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)] font-display">20+</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">Sourcing Nations</div>
            <div className="text-[11px] text-slate-400 mt-1">Pacific Rim, Europe & Americas</div>
          </div>

          <div className="glass-card p-4 rounded-xl text-left border border-white/10 hover:border-sky-400/40 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-display">200+</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">Global Suppliers</div>
            <div className="text-[11px] text-slate-400 mt-1">Certified chemical producers</div>
          </div>

          <div className="glass-card p-4 rounded-xl text-left border border-white/10 hover:border-emerald-400/40 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">500+</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">Industrial Clients</div>
            <div className="text-[11px] text-slate-400 mt-1">Textiles, coatings, plastics, pharma</div>
          </div>

          <div className="glass-card p-4 rounded-xl text-left border border-white/10 hover:border-amber-400/40 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">1992</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">Founded</div>
            <div className="text-[11px] text-slate-400 mt-1">30+ Years of family-owned trust</div>
          </div>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="flex items-center space-x-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'w-8 bg-[var(--color-primary)]'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Jump to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;