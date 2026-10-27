// src/components/sections/Products.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ChemicalCategory {
  title: string;
  formula: string;
  purity: string;
  applications: string;
  origin: string;
}

const chemicalCategories: ChemicalCategory[] = [
  {
    title: 'Acrylates & Monomers',
    formula: 'Butyl Acrylate / 2-EHA / MMA',
    purity: '99.5% Min Tech Grade',
    applications: 'Emulsion polymers, paints, architectural coatings, and textile binders',
    origin: 'China & Taiwan Direct Plants'
  },
  {
    title: 'Industrial Solvents & Glycols',
    formula: 'MEG / DEG / IPA / MEK / Acetone',
    purity: 'High-Purity Industrial Standard',
    applications: 'Coatings, printing inks, polyester fiber (PET), and agrochemicals',
    origin: 'South Korea & Saudi Arabia'
  },
  {
    title: 'Organic Acids & Anhydrides',
    formula: 'Acetic Acid Glacial / Formic Acid',
    purity: '99.85% Glacial Grade',
    applications: 'Textile dyeing, vinyl acetate monomer (VAM), and chemical intermediates',
    origin: 'Pacific Rim Direct Producers'
  },
  {
    title: 'Polymers, Resins & Compounds',
    formula: 'PVC Suspension Resin / PET Resin',
    purity: 'K-67 / K-57 Virgin Grades',
    applications: 'Rigid pipes, profiles, automotive parts, and packaging films',
    origin: 'Japan, Taiwan & South Korea'
  },
  {
    title: 'Surfactants & Oleochemicals',
    formula: 'SLES 70% / LABSA 96% / Glycerine',
    purity: 'USP & Industrial Grades',
    applications: 'Liquid detergents, personal care cosmetics, and industrial cleaners',
    origin: 'Indonesia & Malaysia Refineries'
  },
  {
    title: 'Pigments & Performance Minerals',
    formula: 'Titanium Dioxide TiO₂ (Rutile / Anatase)',
    purity: '94% Min Rutile Content',
    applications: 'Masterbatches, decorative coatings, plastics, and paper',
    origin: 'Tier-1 Certified Manufacturers'
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
            <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)]">
              Product Portfolios
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-1">
              Industrial Chemical Supplies
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1 font-light">
              Reliable supply lines for primary monomers, solvents, acids, and polymer resins backed by complete Certificates of Analysis (CoA).
            </p>
          </div>

          <Button
            onClick={() => navigate('/products')}
            className="self-start md:self-end px-5 py-2 rounded-md bg-[var(--color-primary)] hover:bg-[#22a802] text-slate-950 font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
          >
            <span>All Products</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </div>

        {/* 6 Minimalist Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chemicalCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg minimal-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[var(--color-primary)] font-mono text-[11px]">
                    {cat.purity}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    CoA Verified
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5">
                  {cat.title}
                </h3>

                <div className="text-xs font-mono text-slate-300 mb-3 bg-[#090D14] p-2 rounded border border-white/[0.06]">
                  {cat.formula}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4 font-light">
                  {cat.applications}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span>{cat.origin}</span>
                <a
                  href="#contact"
                  className="font-medium text-[var(--color-primary)] hover:underline"
                >
                  Quote →
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