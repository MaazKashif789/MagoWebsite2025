// src/components/3d/GlobalTradeVisualizer.tsx
import React, { useState } from 'react';
import { Globe, Ship, Check } from 'lucide-react';

interface TradeHub {
  name: string;
  region: string;
  focus: string;
  coords: { x: number; y: number };
}

const tradeHubs: TradeHub[] = [
  { name: 'China & Taiwan', region: 'East Asia', focus: 'Industrial monomers, acrylates, and synthetic organics', coords: { x: 74, y: 44 } },
  { name: 'South Korea & Japan', region: 'East Asia', focus: 'High-purity specialty chemicals, glycols, and polymers', coords: { x: 82, y: 38 } },
  { name: 'Indonesia & Malaysia', region: 'Southeast Asia', focus: 'Natural oleochemicals, surfactants, and glycerine', coords: { x: 77, y: 62 } },
  { name: 'Western Europe', region: 'Europe', focus: 'Precision analytical chemicals and specialty additives', coords: { x: 48, y: 30 } },
  { name: 'Middle East', region: 'Middle East', focus: 'Base petrochemicals, solvents, and bulk polymers', coords: { x: 58, y: 46 } },
  { name: 'United States', region: 'North America', focus: 'Specialty catalysts, resins, and advanced coatings', coords: { x: 22, y: 36 } },
  { name: 'Pakistan (Lahore & Karachi)', region: 'Distribution HQ', focus: 'Central import terminals and nationwide distribution', coords: { x: 64, y: 45 } }
];

export const GlobalTradeVisualizer: React.FC = () => {
  const [activeHub, setActiveHub] = useState<TradeHub>(tradeHubs[0]);

  return (
    <div className="rounded-xl minimal-card p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-6 border-b border-white/[0.06]">
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)]">
            Global Trade Network
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            Sourcing Across 20+ Countries & 200+ Suppliers
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl font-light">
            Connecting direct chemical manufacturers with over 500 industrial plants through certified maritime shipping corridors.
          </p>
        </div>

        {/* Minimalist Metrics */}
        <div className="flex items-center gap-6 text-left">
          <div>
            <div className="text-xl font-bold text-white">20+</div>
            <div className="text-[11px] text-slate-400">Origins</div>
          </div>
          <div className="w-px h-8 bg-white/[0.08]" />
          <div>
            <div className="text-xl font-bold text-white">200+</div>
            <div className="text-[11px] text-slate-400">Suppliers</div>
          </div>
          <div className="w-px h-8 bg-white/[0.08]" />
          <div>
            <div className="text-xl font-bold text-white">500+</div>
            <div className="text-[11px] text-slate-400">Clients</div>
          </div>
        </div>
      </div>

      {/* Map Graphic Area */}
      <div className="relative w-full h-72 sm:h-80 rounded-lg bg-[#070A0F] border border-white/[0.06] overflow-hidden flex items-center justify-center">
        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none">
          <defs>
            <pattern id="world-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#world-grid)" />
        </svg>

        {/* Trade Arcs */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {tradeHubs.map((hub, idx) => {
            if (hub.name.includes('Pakistan')) return null;
            const hq = tradeHubs.find(h => h.name.includes('Pakistan'))!.coords;
            const isSelected = activeHub.name === hub.name;
            return (
              <path
                key={idx}
                d={`M ${hub.coords.x}% ${hub.coords.y}% Q ${(hub.coords.x + hq.x) / 2}% ${(hub.coords.y + hq.y) / 2 - 12}% ${hq.x}% ${hq.y}%`}
                fill="none"
                stroke={isSelected ? '#29C702' : 'rgba(255, 255, 255, 0.12)'}
                strokeWidth={isSelected ? '1.5' : '1'}
                strokeDasharray={isSelected ? 'none' : '3, 3'}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>

        {/* Hub Pins */}
        {tradeHubs.map((hub, idx) => {
          const isSelected = activeHub.name === hub.name;
          const isHQ = hub.name.includes('Pakistan');
          return (
            <button
              key={idx}
              onClick={() => setActiveHub(hub)}
              style={{ left: `${hub.coords.x}%`, top: `${hub.coords.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
              aria-label={hub.name}
            >
              <div className="relative flex items-center justify-center">
                <div
                  className={`w-3 h-3 rounded-full border transition-all ${
                    isHQ
                      ? 'bg-[var(--color-primary)] border-white scale-125'
                      : isSelected
                      ? 'bg-[var(--color-primary)] border-white scale-125'
                      : 'bg-slate-700 border-slate-500 group-hover:bg-slate-300'
                  }`}
                />
              </div>
              <div
                className={`absolute top-full mt-1 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded text-[10px] whitespace-nowrap transition-colors ${
                  isSelected
                    ? 'bg-white text-slate-950 font-bold'
                    : 'bg-[#0F141E] text-slate-400 border border-white/[0.08]'
                }`}
              >
                {hub.name.split(' ')[0]}
              </div>
            </button>
          );
        })}

        {/* Minimalist Watermark */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] text-slate-400">
          <Ship className="w-3.5 h-3.5 text-[var(--color-primary)]" />
          <span>Container & ISO Tank Sea Corridors</span>
        </div>
      </div>

      {/* Selected Sourcing Region Detail Bar */}
      <div className="mt-5 p-4 rounded-lg bg-[#0B0F17] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-white">{activeHub.name}</h4>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">({activeHub.region})</span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">{activeHub.focus}</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[var(--color-primary)] font-medium">
          <Check className="w-3.5 h-3.5" />
          <span>Verified Port Delivery</span>
        </div>
      </div>
    </div>
  );
};
