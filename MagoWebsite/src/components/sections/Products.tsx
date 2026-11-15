// src/components/sections/Products.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Layers, Globe } from 'lucide-react';

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
    title: 'General & Engineering Plastics',
    badge: 'Polymers',
    grade: 'Virgin & High Flow',
    products: ['PVC (SG5, K67, K70)', 'Polypropylene (PP)', 'EVA (VA 5%–40%)', 'ABS & Polycarbonate'],
    applications: 'Rigid uPVC pipes, cables, footwear, automotive parts, packaging films, and medical devices.',
    origin: 'China, Taiwan, Japan & South Korea',
    image: polymersImg
  },
  {
    title: 'Rubbers & High-Performance Elastomers',
    badge: 'Rubbers',
    grade: 'RSS3, TSR20, LATEX',
    products: ['Natural Rubber (NR)', 'SBR & SSBR', 'NBR, EPDM & Viton', 'Rice Rubber Rolls'],
    applications: 'Tires, conveyor belts, footwear, fuel hoses, agro-milling dehusking, and automotive weather seals.',
    origin: 'Thailand, Vietnam, Malaysia & Sri Lanka',
    image: drumsImg
  },
  {
    title: 'Polyurethane (PU) & PU Raw Materials',
    badge: 'PU Systems',
    grade: 'Pure MDI & Polyols',
    products: ['MDI & Polymeric MDI', 'TDI 80/20', 'Polyether & Polyester Polyols', 'Shoe & Leather PU Systems'],
    applications: 'Footwear soles & insoles, synthetic leather coatings, rigid insulation foams, and industrial finishes.',
    origin: 'Tier-1 International Petrochemical Plants',
    image: drumsImg
  },
  {
    title: 'Industrial Plasticizers',
    badge: 'Plasticizers',
    grade: 'Standard & Low-Temp',
    products: ['DOP & DINP', 'Non-Phthalate DOTP', 'DOA (Low Temp)', 'ATBC, DINCH & CP 52%'],
    applications: 'Flexible PVC, cables, automotive interiors, artificial leather, medical tubing, and flame-retardant vinyl.',
    origin: 'Direct Global Manufacturers',
    image: solventsImg
  },
  {
    title: 'Blowing Agents, Crosslinkers & Stabilizers',
    badge: 'Additives',
    grade: 'High Purity & Custom Blends',
    products: ['Modified Azodicarbonamide', 'DCP 40%/98%', 'Zinc & Calcium Stearate', 'One-Pack Ca/Zn Stabilizers'],
    applications: 'EVA foam expansion, rubber vulcanization, PVC thermal stability, pipe extrusion, and cable compounds.',
    origin: 'Specialty Synthesis Partners (Asia & Europe)',
    image: containersImg
  },
  {
    title: 'Solvents, Specialty Chemicals & Oxides',
    badge: 'Solvents & Oxides',
    grade: 'Technical & USP Grade',
    products: ['Glacial Acetic Acid', 'MEK, Acetone & IPA', 'Titanium Dioxide (TiO₂)', 'Zinc & Magnesium Oxide'],
    applications: 'Paints & architectural coatings, textile dyeing, printing inks, rubber vulcanization, and plastics pigmenting.',
    origin: 'Mid-America, Europe, South Korea & China',
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
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)] font-mono">
                Product Portfolios
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Industrial Chemical Supplies
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1.5 font-light leading-relaxed">
              Direct import supply lines for primary polymers, rubbers, PU systems, plasticizers, and solvents backed by Certificate of Analysis (CoA) verification.
            </p>
          </div>

          <Button
            onClick={() => navigate('/products')}
            className="self-start md:self-end px-4 py-2 rounded-lg bg-[var(--color-primary)] hover:bg-[#22a802] text-slate-950 font-semibold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md hover:shadow-[var(--color-primary)]/20"
          >
            <Layers className="w-3.5 h-3.5 mr-1.5" />
            <span>Browse Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </div>

        {/* 6 Minimalist Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chemicalCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-[#0B0F17] border border-white/[0.07] hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-[var(--color-primary)]/5"
            >
              <div>
                {/* Visual Image Header - Clean & Minimalist */}
                <div className="relative h-40 w-full overflow-hidden bg-[#070A0F]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/30 to-transparent" />
                  
                  {/* Subtle, Minimalist Division Tag */}
                  <span className="absolute top-3 left-3 text-[10px] font-mono tracking-wider uppercase bg-[#090D14]/85 backdrop-blur-md px-2.5 py-1 rounded text-slate-300 border border-white/10">
                    {cat.badge}
                  </span>

                  {/* Clean Subtle CoA Tag */}
                  <span className="absolute top-3 right-3 text-[10px] font-mono bg-emerald-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[var(--color-primary)]" />
                    <span>CoA</span>
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-[var(--color-primary)] transition-colors mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-light mb-4 line-clamp-2">
                    {cat.applications}
                  </p>

                  {/* Primary Products as Minimalist Hairline Tags */}
                  <div className="pt-3 border-t border-white/[0.05]">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mb-2">
                      Key Sourced Materials:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.products.map((p, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.02] text-slate-300 border border-white/[0.06]"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimalist Card Footer */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-slate-400 mb-3">
                  <span className="truncate max-w-[65%]">
                    Origin: <strong className="text-slate-300 font-normal">{cat.origin}</strong>
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">{cat.grade}</span>
                </div>

                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/[0.03] hover:bg-[var(--color-primary)] text-slate-300 hover:text-slate-950 font-medium text-xs tracking-wider uppercase transition-all duration-200 border border-white/[0.06] hover:border-[var(--color-primary)]"
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
