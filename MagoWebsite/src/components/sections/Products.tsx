// src/components/sections/Products.tsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { FlaskConical, ArrowRight, ShieldCheck, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import containersImage from '../../assets/containers.jpg';
import chemicalImage from '../../assets/misc.jpg';

interface ChemicalCategory {
  title: string;
  formula: string;
  purity: string;
  applications: string;
  origin: string;
  badgeColor: string;
}

const chemicalCategories: ChemicalCategory[] = [
  {
    title: 'Acrylates & Monomers',
    formula: 'Butyl Acrylate / 2-EHA / MMA',
    purity: '99.5% Min Tech Grade',
    applications: 'Water-based paints, textile binders, pressure adhesives',
    origin: 'China & Taiwan Direct Plants',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
  },
  {
    title: 'Industrial Solvents & Glycols',
    formula: 'MEG / DEG / IPA / MEK / Acetone',
    purity: 'High-Purity Electronic & Industrial',
    applications: 'Coatings, printing inks, chemical synthesis, agrochemicals',
    origin: 'South Korea & Saudi Arabia',
    badgeColor: 'border-sky-500/40 text-sky-400 bg-sky-500/10'
  },
  {
    title: 'Organic Acids & Anhydrides',
    formula: 'Acetic Acid / Formic Acid / Maleic',
    purity: '99.85% Glacial Standard',
    applications: 'Dyeing, leather tanning, pharmaceutical intermediates',
    origin: 'Pacific Rim & China Ports',
    badgeColor: 'border-lime-500/40 text-lime-400 bg-lime-500/10'
  },
  {
    title: 'Polymers, Resins & Additives',
    formula: 'PVC Resin / PET / Epoxy Polymers',
    purity: 'Virgin Injection & Extrusion',
    applications: 'Rigid pipes, packaging, automotive compounds, cables',
    origin: 'Japan, Korea & Taiwan',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10'
  },
  {
    title: 'Surfactants & Oleochemicals',
    formula: 'SLES 70% / LABSA 96% / Glycerine',
    purity: 'USP & Technical Grades',
    applications: 'Personal care, detergents, oilfield drilling, cosmetics',
    origin: 'Indonesia & Malaysia Direct Refineries',
    badgeColor: 'border-teal-500/40 text-teal-400 bg-teal-500/10'
  },
  {
    title: 'Pigments & Performance Minerals',
    formula: 'Titanium Dioxide TiO₂ (Rutile / Anatase)',
    purity: '94% Min Rutile Purity',
    applications: 'Masterbatches, premium architectural paints, plastics',
    origin: 'Global ISO Tier-1 Producers',
    badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-500/10'
  }
];

const Products: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="relative py-24 bg-slate-950/95 border-t border-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-xs font-semibold text-[var(--color-primary-light)] mb-3 uppercase tracking-wider">
              <FlaskConical className="w-3.5 h-3.5" />
              Verified Chemical Portfolios
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
              Essential Chemical Supplies for{' '}
              <span className="text-gradient-emerald">Modern Manufacturing</span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-2 font-light">
              Mago Enterprises provides certified industrial and specialty chemicals backed by continuous container supply lines and complete technical documentation.
            </p>
          </div>

          <Button
            onClick={() => navigate('/products')}
            className="self-start md:self-end px-6 py-2.5 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(41,199,2,0.25)] transition-all hover:scale-105"
          >
            <span>Explore All Chemicals</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>

        {/* 6 Chemical Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chemicalCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[var(--color-primary)]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${cat.badgeColor}`}>
                    {cat.purity}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                    <FileText className="w-3 h-3 text-[var(--color-primary)]" />
                    COA / TDS
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-primary-light)] transition-colors mb-2 font-display">
                  {cat.title}
                </h3>

                <div className="text-xs font-mono text-emerald-400/90 mb-3 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-white/5">
                  {cat.formula}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  <strong className="text-slate-400 font-normal">Applications: </strong>
                  {cat.applications}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  {cat.origin}
                </span>
                <a
                  href="#contact"
                  className="font-bold text-[var(--color-primary-light)] group-hover:translate-x-1 transition-transform flex items-center gap-1"
                >
                  <span>Quote</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Chemical Logistics Assurance */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[var(--color-primary)]/20 text-[var(--color-primary-light)] shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">Need Customized Chemical Formulations or Bulk ISO Tanks?</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Our technical procurement desk can source specific grades, custom packaging, and bulk flexibag/ISO containers directly from verified manufacturers.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase border border-slate-700 hover:border-[var(--color-primary)] transition-all"
          >
            Submit Custom Specification
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;