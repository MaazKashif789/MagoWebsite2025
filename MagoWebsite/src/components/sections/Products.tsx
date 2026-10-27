// src/components/sections/Products.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

// High-res imagery for chemical portfolios
import drumsImg from '../../assets/drums.jpg';
import solventsImg from '../../assets/solvents.jpg';
import containersImg from '../../assets/containers.jpg';
import polymersImg from '../../assets/polymers.jpg';
import pigmentsImg from '../../assets/pigments.jpg';

interface ChemicalCategory {
  title: string;
  badge: string;
  grade: string;
  products: string[];
  applications: string;
  origin: string;
  image: string;
}

const chemicalCategories: ChemicalCategory[] = [
  {
    title: 'Acrylates & Monomers',
    badge: 'Monomers',
    grade: '99.5% Min Tech Grade',
    products: ['Butyl Acrylate (BA)', 'Methyl Methacrylate (MMA)', '2-Ethylhexyl Acrylate (2-EHA)', 'Vinyl Acetate (VAM)'],
    applications: 'Emulsion polymers, architectural paints, acrylic emulsions, and textile adhesives.',
    origin: 'China & Taiwan Direct Plants',
    image: drumsImg
  },
  {
    title: 'Industrial Solvents & Glycols',
    badge: 'Solvents',
    grade: 'High-Purity Industrial',
    products: ['Monoethylene Glycol (MEG)', 'Diethylene Glycol (DEG)', 'Isopropyl Alcohol (IPA)', 'Acetone & MEK'],
    applications: 'Industrial coatings, printing inks, polyester fiber (PET), and chemical synthesis.',
    origin: 'South Korea & Saudi Arabia',
    image: solventsImg
  },
  {
    title: 'Organic Acids & Anhydrides',
    badge: 'Organic Acids',
    grade: '99.85% Glacial Grade',
    products: ['Acetic Acid Glacial (GAA)', 'Formic Acid 85%', 'Maleic Anhydride (MA)', 'Phthalic Anhydride'],
    applications: 'Textile dyeing, vinyl acetate synthesis, leather tanning, and chemical intermediates.',
    origin: 'Direct Global Petrochemical Producers',
    image: containersImg
  },
  {
    title: 'Polymers, Resins & Compounds',
    badge: 'Polymers',
    grade: 'K-67 / K-57 Virgin',
    products: ['PVC Suspension Resin', 'PET Bottle Resin', 'EVA Copolymers', 'Polypropylene (PP)'],
    applications: 'Rigid uPVC pipes, packaging films, automotive profiles, and plastic compounding.',
    origin: 'Japan, Taiwan & South Korea',
    image: polymersImg
  },
  {
    title: 'Surfactants & Oleochemicals',
    badge: 'Oleochemicals',
    grade: 'USP & Cosmetic Grade',
    products: ['SLES 70% Active', 'LABSA 96%', 'Refined Glycerine 99.7% USP', 'Fatty Alcohol'],
    applications: 'Liquid detergents, personal care formulations, soaps, and industrial cleaners.',
    origin: 'Indonesia & Malaysia Refineries',
    image: solventsImg
  },
  {
    title: 'Pigments & Performance Minerals',
    badge: 'Minerals',
    grade: '≥ 94% Rutile Content',
    products: ['Titanium Dioxide TiO₂ (Rutile)', 'TiO₂ (Anatase)', 'Carbon Black', 'Barium Sulfate'],
    applications: 'Plastic masterbatches, architectural coatings, industrial inks, and paper opacity.',
    origin: 'Tier-1 Certified Global Producers',
    image: pigmentsImg
  }
];

const Products: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-20 bg-[#090D14] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-white/[0.06]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)] font-mono">
                Product Portfolios
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Industrial Chemical Supplies
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1.5 font-light leading-relaxed">
              Direct import supply lines for primary monomers, solvents, acids, and polymer resins backed by complete Certificates of Analysis (CoA) and dedicated batch testing.
            </p>
          </div>

          <Button
            onClick={() => navigate('/products')}
            className="self-start md:self-end px-5 py-2.5 rounded-lg bg-[var(--color-primary)] hover:bg-[#22a802] text-slate-950 font-semibold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-lg hover:shadow-[var(--color-primary)]/20"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>

        {/* 6 Modern Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chemicalCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-[#0B0F17] border border-white/[0.08] hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:shadow-[var(--color-primary)]/5"
            >
              <div>
                {/* Visual Media Header with Real Photography */}
                <div className="relative h-44 w-full overflow-hidden bg-[#070A0F]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  />
                  {/* Gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium tracking-wide bg-slate-950/80 backdrop-blur-md text-slate-200 border border-white/[0.12]">
                      {cat.grade}
                    </span>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono bg-emerald-950/70 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                      <ShieldCheck className="w-3 h-3 text-[var(--color-primary)]" />
                      <span>CoA Verified</span>
                    </span>
                  </div>

                  {/* Bottom Category Badge */}
                  <div className="absolute bottom-2 left-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-primary)] bg-[#0B0F17]/90 px-2 py-0.5 rounded border border-white/[0.08]">
                      {cat.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 pt-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[var(--color-primary)] transition-colors mb-3">
                    {cat.title}
                  </h3>

                  {/* Inventory Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {cat.products.map((p, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* Application Description */}
                  <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
                    {cat.applications}
                  </p>

                  {/* Sourcing Origin */}
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-3 border-t border-white/[0.06]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" />
                    <span className="truncate">Origin: <strong className="text-slate-300 font-normal">{cat.origin}</strong></span>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-5 pt-0">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.04] hover:bg-[var(--color-primary)] text-slate-300 hover:text-slate-950 font-semibold text-xs tracking-wider uppercase transition-all duration-200 border border-white/[0.08] hover:border-[var(--color-primary)]"
                >
                  <span>Request Specifications & Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;