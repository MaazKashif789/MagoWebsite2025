// src/components/layout/Footer.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoWhite from '../../assets/Logo/mago_white.png';
import { Mail, Phone, MapPin, Globe, Shield, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          
          {/* Company Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center">
              <img
                src={logoWhite}
                alt="Mago Enterprises"
                className="h-10 sm:h-12 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-light">
              Mago Enterprises is a premier global chemical supplier and distributor. Connecting 200+ world-class manufacturers across 20+ countries with 500+ industrial enterprises worldwide since 1992.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-[var(--color-primary-light)] font-medium">
              <Shield className="w-4 h-4 text-[var(--color-primary)]" />
              <span>Certified Technical Sourcing & Strict Quality Control</span>
            </div>
          </div>

          {/* Sourcing Hubs & Portfolios */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              Primary Chemical Lines
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="hover:text-white transition-colors">Acrylates, Monomers & Polymers</li>
              <li className="hover:text-white transition-colors">Industrial Solvents, Glycols & Alcohols</li>
              <li className="hover:text-white transition-colors">Glacial Organic Acids & Anhydrides</li>
              <li className="hover:text-white transition-colors">Surfactants & Natural Oleochemicals</li>
              <li className="hover:text-white transition-colors">Titanium Dioxide & Performance Pigments</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => {
                    navigate('/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/products')}
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  Chemical Catalog
                </button>
              </li>
              <li>
                <a href="/#about" className="hover:text-[var(--color-primary)] transition-colors">
                  About Our Heritage
                </a>
              </li>
              <li>
                <a href="/#network" className="hover:text-[var(--color-primary)] transition-colors">
                  Global Trade Network
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-[var(--color-primary)] transition-colors">
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              Commercial Desk
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <a href="mailto:magoon33@hotmail.com" className="hover:text-white transition-colors truncate">
                  magoon33@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <a href="tel:+923008402932" className="hover:text-white transition-colors">
                  +92 300 8402932
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>Lahore & Karachi Port Logistics Hubs, Pakistan</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Mago Enterprises. All rights reserved.</p>
          <div className="flex items-center gap-6 text-slate-400 text-xs">
            <span>Family-Owned Since 1992</span>
            <span>•</span>
            <span>20+ Countries</span>
            <span>•</span>
            <span>200+ Suppliers</span>
            <span>•</span>
            <span>500+ Clients</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
