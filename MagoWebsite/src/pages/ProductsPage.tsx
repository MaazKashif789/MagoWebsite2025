import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Search, Filter, FlaskConical, FileText, ArrowRight, CheckCircle2, ShieldCheck, Download } from 'lucide-react';
import truckbg from '../assets/truckbg.jpg';
import containersImage from '../assets/containers.jpg';
import drumsImage from '../assets/drums.jpg';
import solventsImage from '../assets/solvents.jpg';
import polymersImage from '../assets/polymers.jpg';
import pigmentsImage from '../assets/pigments.jpg';

interface Product {
  id: string;
  name: string;
  hsCode: string;
  casNumber?: string;
  description: string;
  grades: string[];
  category: string;
  origin: string;
  image: string;
}

const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const categories = [
    'All Categories',
    'Acrylates',
    'Acids',
    'Solvents',
    'Glycols',
    'Alcohols',
    'Polymers',
    'Surfactants',
    'Pigments',
    'Logistics'
  ];

  const products: Product[] = [
    {
      id: '1',
      name: 'Butyl Acrylate Monomer (BAM)',
      hsCode: '2916.12.00',
      casNumber: '141-32-2',
      description: 'Clear liquid monomer widely used in acrylic emulsions, paints, architectural coatings, textile adhesives, and synthetic resins.',
      grades: ['99.5% Tech Grade', 'High-Purity Emulsion Grade'],
      category: 'Acrylates',
      origin: 'Taiwan & China Tier-1 Plants',
      image: drumsImage
    },
    {
      id: '2',
      name: 'Acetic Acid Glacial (GAA)',
      hsCode: '2915.21.00',
      casNumber: '64-19-7',
      description: 'Pungent, high-purity clear liquid used in vinyl acetate monomer (VAM), PTA synthesis, textile dyeing, and chemical intermediates.',
      grades: ['99.85% Glacial', 'Technical Grade', 'Food Grade'],
      category: 'Acids',
      origin: 'Pacific Rim Direct Ports',
      image: containersImage
    },
    {
      id: '3',
      name: 'Monoethylene Glycol (MEG)',
      hsCode: '2905.31.00',
      casNumber: '107-21-1',
      description: 'Colorless, odorless viscous liquid critical for polyester fiber/resin production (PET), industrial coolants, and antifreeze formulations.',
      grades: ['Fiber Grade 99.9%', 'Industrial Grade'],
      category: 'Glycols',
      origin: 'Saudi Arabia & South Korea',
      image: solventsImage
    },
    {
      id: '4',
      name: 'Isopropyl Alcohol (IPA 99.9%)',
      hsCode: '2905.12.00',
      casNumber: '67-63-0',
      description: 'High-evaporation industrial solvent and disinfectant for pharmaceuticals, electronic cleaning, surface coatings, and printing inks.',
      grades: ['Electronic Grade', 'USP Pharmaceutical Grade', 'Technical'],
      category: 'Alcohols',
      origin: 'South Korea & Japan',
      image: solventsImage
    },
    {
      id: '5',
      name: 'Titanium Dioxide (TiO₂ Rutile / Anatase)',
      hsCode: '3206.11.00',
      casNumber: '13463-67-7',
      description: 'Premier white pigment powder providing outstanding opacity, brightness, and weather resistance for coatings, masterbatch plastics, and inks.',
      grades: ['Rutile Chloride Grade', 'Rutile Sulfate Grade', 'Anatase'],
      category: 'Pigments',
      origin: 'Direct Global Manufacturers',
      image: pigmentsImage
    },
    {
      id: '6',
      name: 'Sodium Lauryl Ether Sulfate (SLES 70%)',
      hsCode: '3402.11.00',
      casNumber: '68585-34-2',
      description: 'High-foaming anionic surfactant indispensable for liquid detergents, dishwashing liquids, shampoos, and personal care cosmetics.',
      grades: ['70% Active Paste', 'Cosmetic Grade'],
      category: 'Surfactants',
      origin: 'Indonesia & Malaysia Refineries',
      image: solventsImage
    },
    {
      id: '7',
      name: 'Methyl Ethyl Ketone (MEK)',
      hsCode: '2914.12.00',
      casNumber: '78-93-3',
      description: 'Rapidly evaporating organic solvent with exceptional solvency for nitrocellulose, acrylic coatings, vinyl resins, and industrial adhesives.',
      grades: ['99.5% Pure Industrial Grade'],
      category: 'Solvents',
      origin: 'Taiwan & South Korea',
      image: drumsImage
    },
    {
      id: '8',
      name: 'PVC Suspension Resin (K-67 / K-57)',
      hsCode: '3904.10.00',
      casNumber: '9002-86-2',
      description: 'White thermoplastic polymer powder tailored for rigid PVC pipe extrusion, window profiles, artificial leather, and cable compounding.',
      grades: ['Suspension Grade K-67', 'K-57 Low Molecular'],
      category: 'Polymers',
      origin: 'Taiwan & Japan Producers',
      image: polymersImage
    },
    {
      id: '9',
      name: '2-Ethyl Hexyl Acrylate (2-EHA)',
      hsCode: '2916.12.00',
      casNumber: '103-11-7',
      description: 'Low-temperature flexibility monomer used in pressure-sensitive adhesives, automotive coatings, textile finishes, and plastics modification.',
      grades: ['99.0% Min Purity Tech Grade'],
      category: 'Acrylates',
      origin: 'China & Taiwan Sourcing',
      image: drumsImage
    },
    {
      id: '10',
      name: 'Bulk ISO Tank & Container Chemical Logistics',
      hsCode: 'LOGISTICS-01',
      description: 'Turnkey chemical freight logistics including custom ISO tank containers, heated transport, hazardous material handling, and port customs clearance.',
      grades: ['ISO Tank Cleaned', 'FCL Drummed', 'Flexitank'],
      category: 'Logistics',
      origin: 'Worldwide Door-to-Door Logistics',
      image: truckbg
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.hsCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.casNumber && product.casNumber.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !selectedCategory || selectedCategory === 'All Categories' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#090D14] text-slate-100 pt-20 pb-20">
      {/* Header Banner */}
      <div className="py-14 bg-[#0B0F18] border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)]">
            Product Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-1 mb-3">
            Industrial & Specialty Chemicals
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Search our chemical portfolio with HS codes, purity grades, and direct manufacturer origins.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8">
        {/* Search & Category Filter Toolbar */}
        <div className="p-4 sm:p-5 rounded-lg minimal-card mb-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search by chemical name, CAS number, HS code, or application..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass-input pl-10 h-11 w-full rounded-xl text-sm"
              />
            </div>

            {/* Category Dropdown for Mobile / Direct Select */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="w-4 h-4 text-[var(--color-primary)] shrink-0 hidden sm:block" />
              <select
                value={selectedCategory || 'All Categories'}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="glass-input h-11 px-3 rounded-xl text-sm w-full md:w-48 appearance-none cursor-pointer bg-slate-900 border border-slate-700 text-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-slate-900 text-white">
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Pill Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-2 border-t border-slate-800/60 no-scrollbar">
            {categories.map((cat) => {
              const isSelected = (!selectedCategory && cat === 'All Categories') || selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat === 'All Categories' ? null : cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--color-primary)] text-slate-950 shadow-[0_0_15px_rgba(41,199,2,0.3)]'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-400">
          <span>
            Showing <strong className="text-white font-semibold">{filteredProducts.length}</strong> verified chemical products
          </span>
          <span className="flex items-center gap-1.5 text-[var(--color-primary-light)]">
            <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" />
            CoA & MSDS available for all listed batches
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Category Overlay */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 backdrop-blur-md text-slate-200 border border-white/10">
                    {product.category}
                  </span>
                  {product.casNumber && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono bg-[var(--color-primary)]/20 backdrop-blur-md text-[var(--color-primary-light)] border border-[var(--color-primary)]/30">
                      CAS: {product.casNumber}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="text-[11px] font-mono text-slate-400 mb-1">
                    HS Code: <span className="text-slate-200 font-semibold">{product.hsCode}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display group-hover:text-[var(--color-primary-light)] transition-colors mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Grades Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {product.grades.map((grade, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>

                  {/* Origin */}
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-2 border-t border-slate-800/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" />
                    <span>Origin: <strong className="text-slate-300 font-normal">{product.origin}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <a
                  href="/#contact"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-[var(--color-primary)] text-slate-200 hover:text-slate-950 font-bold text-xs tracking-wider uppercase transition-all duration-200 border border-slate-800 hover:border-[var(--color-primary)] shadow-sm"
                >
                  <span>Request Quote & CoA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredProducts.length === 0 && (
          <div className="glass-panel p-12 text-center rounded-2xl border border-white/10 mt-6">
            <FlaskConical className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No chemicals matched your query</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto mb-6">
              Our catalog is continually expanding. Contact our technical sourcing desk directly to request pricing for any chemical or CAS number.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--color-primary)] text-slate-950 font-bold text-xs tracking-wider uppercase"
            >
              <span>Submit Custom Chemical RFP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;