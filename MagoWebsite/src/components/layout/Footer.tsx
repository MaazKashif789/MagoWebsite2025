// src/components/layout/Footer.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoWhite from '../../assets/Logo/mago_white.png';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#070A0F] text-slate-400 py-12 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/[0.06]">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <img
              src={logoWhite}
              alt="Mago Enterprises (PVT) LTD"
              className="h-8 w-auto object-contain"
            />
            <p className="text-xs text-[var(--color-primary)] font-mono">
              "Sourcing the corner of the globe"
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-light">
              Mago Enterprises (PVT) LTD is Pakistan's premier Indenter, Importer, Trader, Stockist, and Distributor of industrial raw materials. Founded on direct Pacific Rim sourcing partnerships since 1993 with operating teams in 4 domestic locations.
            </p>
          </div>

          {/* Core Categories */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Primary Chemical Divisions
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400 font-light">
              <li>General Plastics & Engineering Polymers (PVC, PP, EVA, ABS)</li>
              <li>Rubbers, Elastomers & Agro Dehusking Rice Rolls</li>
              <li>PU Systems, MDI, TDI & Polyols for Footwear & Leather</li>
              <li>Industrial Plasticizers (DOP, DINP, Non-Phthalate DOTP)</li>
              <li>Blowing Agents, Crosslinkers & Ca/Zn Stabilizers</li>
              <li>Solvents, Pigments (TiO₂), Anhydrides & Oxides</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => {
                    navigate('/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Full Chemical Catalog (140+ Products)
                </button>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition-colors">
                  About Our Heritage (Est. 1993)
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">
                  Distribution Strengths & Indenting
                </a>
              </li>
              <li>
                <a href="/#network" className="hover:text-white transition-colors">
                  Global Trade Corridors
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white transition-colors">
                  Contact Commercial Desk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>&copy; {new Date().getFullYear()} Mago Enterprises (PVT) LTD. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-light">
            <span>Sourcing the corner of the globe</span>
            <span>•</span>
            <span>4 Hubs Across Pakistan</span>
            <span>•</span>
            <span>Pacific Rim to Worldwide</span>
            <span>•</span>
            <span>Since 1993</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
