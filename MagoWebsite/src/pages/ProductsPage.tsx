import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Search, Filter, FlaskConical, ArrowRight, CheckCircle2, ShieldCheck, Layers, FileSpreadsheet } from 'lucide-react';
import { chemicalProducts, PRODUCT_CATEGORIES, type ChemicalProduct } from '../data/products';

const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const filteredProducts = chemicalProducts.filter((product: ChemicalProduct) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.hsCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.useCase.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.grades.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All Categories' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Calculate count per category
  const getCategoryCount = (category: string) => {
    if (category === 'All Categories') return chemicalProducts.length;
    return chemicalProducts.filter(p => p.category === category).length;
  };

  return (
    <div className="min-h-screen bg-[#090D14] text-slate-100 pt-20 pb-20">
      {/* Header Banner */}
      <div className="py-14 bg-[#0B0F18] border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
            <span>Mago Enterprises (PVT) LTD • Sourcing the Corner of the Globe</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-1 mb-3">
            Comprehensive Chemical Catalog
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed">
            Direct indenting, importing, and distribution of raw materials across 13 industrial chemical categories. Search by chemical name, HS code, commercial grade, or application.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-5 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" />
              Rigorous Quality Control & CoA for All Batches
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[var(--color-primary)]" />
              13 Chemical Divisions & 140+ Sourced Products
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <FileSpreadsheet className="w-4 h-4 text-[var(--color-primary)]" />
              Direct Pacific Rim & Global Synthesis Origins
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8">
        {/* Search & Category Filter Toolbar */}
        <div className="p-4 sm:p-5 rounded-xl minimal-card mb-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search by chemical name, HS code, grade (e.g. K67, SG5, MDI), or application..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="minimal-input pl-10 h-11 w-full rounded-xl text-sm"
              />
            </div>

            {/* Category Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="w-4 h-4 text-[var(--color-primary)] shrink-0 hidden sm:block" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="minimal-input h-11 px-3 rounded-xl text-sm w-full md:w-64 appearance-none cursor-pointer bg-[#0B0F17] text-white"
              >
                {PRODUCT_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#0B0F17] text-white">
                    {cat} ({getCategoryCount(cat)})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Pill Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-3 border-t border-white/[0.06] pb-1">
            {PRODUCT_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[var(--color-primary)] text-slate-950 font-semibold shadow-[0_0_15px_rgba(41,199,2,0.25)]'
                      : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-black/40 text-slate-400'
                  }`}>
                    {getCategoryCount(cat)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 text-xs text-slate-400 gap-2">
          <span>
            Showing <strong className="text-white font-semibold">{filteredProducts.length}</strong> products
            {selectedCategory !== 'All Categories' && <span> in <span className="text-[var(--color-primary)] font-medium">{selectedCategory}</span></span>}
            {searchQuery && <span> matching "{searchQuery}"</span>}
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" />
            Full Certificate of Analysis (CoA) & MSDS Available Upon Request
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-xl overflow-hidden bg-[#0B0F17] border border-white/[0.08] hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:shadow-[var(--color-primary)]/5"
            >
              <div>
                {/* Image Header with Category Badge */}
                <div className="relative h-40 w-full overflow-hidden bg-[#070A0F]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-slate-950/85 backdrop-blur-md text-slate-200 border border-white/10">
                    {product.category}
                  </span>

                  {/* HS Code Pill */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-mono bg-[var(--color-primary)]/20 backdrop-blur-md text-[var(--color-primary)] border border-[var(--color-primary)]/30 font-semibold">
                    HS: {product.hsCode}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-[var(--color-primary)] transition-colors mb-2.5 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Grades Pills */}
                  <div className="mb-3">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1">
                      Available Grades:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.grades.map((grade, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-slate-300 font-mono"
                        >
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases / Applications */}
                  <div className="pt-2 border-t border-white/[0.06]">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1">
                      Primary Use Cases & Applications:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {product.useCase}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <a
                  href="/#contact"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.04] hover:bg-[var(--color-primary)] text-slate-200 hover:text-slate-950 font-semibold text-xs tracking-wider uppercase transition-all duration-200 border border-white/[0.08] hover:border-[var(--color-primary)] shadow-sm"
                >
                  <span>Request Quote & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredProducts.length === 0 && (
          <div className="p-12 text-center rounded-2xl minimal-card border border-white/10 mt-6">
            <FlaskConical className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No products matched your search</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto mb-6">
              Our sourcing desk continuously procures chemical products across global manufacturers. Contact us directly with your specific chemical, CAS, or HS code requirement.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[var(--color-primary)] text-slate-950 font-semibold text-xs tracking-wider uppercase"
            >
              <span>Submit Custom Chemical Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
