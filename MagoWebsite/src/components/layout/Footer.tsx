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
              alt="Mago Enterprises"
              className="h-8 w-auto object-contain"
            />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-light">
              Mago Enterprises is an international importer, supplier, and distributor of high-performance chemicals. Sourcing directly from 200+ manufacturers across 20+ countries since 1992.
            </p>
          </div>

          {/* Core Categories */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Primary Chemical Categories
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400 font-light">
              <li>Acrylates & Monomers (BAM, 2-EHA, MMA)</li>
              <li>Industrial Solvents & Glycols (MEG, DEG, IPA)</li>
              <li>Organic Acids & Anhydrides (Glacial Acetic Acid)</li>
              <li>Surfactants & Oleochemicals (SLES, Glycerine)</li>
              <li>Polymers, Resins & Performance Pigments (TiO₂)</li>
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
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/products')}
                  className="hover:text-white transition-colors"
                >
                  Chemical Catalog
                </button>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition-colors">
                  About Our Heritage
                </a>
              </li>
              <li>
                <a href="/#network" className="hover:text-white transition-colors">
                  Global Trade Network
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white transition-colors">
                  Contact Sales Desk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>&copy; {new Date().getFullYear()} Mago Enterprises. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-slate-400 font-light">
            <span>20+ Countries</span>
            <span>•</span>
            <span>200+ Suppliers</span>
            <span>•</span>
            <span>500+ Clients</span>
            <span>•</span>
            <span>Family-Owned Since 1992</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
