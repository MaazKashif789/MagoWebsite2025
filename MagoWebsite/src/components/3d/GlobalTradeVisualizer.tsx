import React, { useState } from 'react';
import { Globe, ArrowUpRight, ShieldCheck, Factory, Ship, Sparkles } from 'lucide-react';

interface TradeHub {
  name: string;
  region: string;
  role: 'Primary Source' | 'Strategic Partner' | 'Global Distribution';
  focus: string;
  coords: { x: number; y: number }; // percentage position
}

const tradeHubs: TradeHub[] = [
  { name: 'China & Taiwan', region: 'East Asia', role: 'Primary Source', focus: 'Industrial raw materials & synthetic organics', coords: { x: 74, y: 44 } },
  { name: 'South Korea & Japan', region: 'East Asia', role: 'Primary Source', focus: 'High-purity specialty chemicals & polymers', coords: { x: 82, y: 38 } },
  { name: 'Indonesia & Malaysia', region: 'Southeast Asia', role: 'Strategic Partner', focus: 'Oleochemicals & natural derivatives', coords: { x: 77, y: 62 } },
  { name: 'Germany & Western Europe', region: 'Europe', role: 'Strategic Partner', focus: 'Precision analytical & laboratory grade reagents', coords: { x: 48, y: 30 } },
  { name: 'Middle East (UAE & Saudi)', region: 'Middle East', role: 'Strategic Partner', focus: 'Petrochemical building blocks & solvents', coords: { x: 58, y: 46 } },
  { name: 'United States', region: 'North America', role: 'Strategic Partner', focus: 'Specialty catalysts & coatings raw materials', coords: { x: 22, y: 36 } },
  { name: 'Pakistan (Karachi & Lahore)', region: 'South Asia HQ', role: 'Global Distribution', focus: 'Central import terminal & nationwide logistics hub', coords: { x: 64, y: 45 } }
];

export const GlobalTradeVisualizer: React.FC = () => {
  const [activeHub, setActiveHub] = useState<TradeHub>(tradeHubs[0]);

  return (
    <div className="relative rounded-2xl glass-card overflow-hidden p-6 md:p-10 border border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-xs font-semibold text-[var(--color-primary-light)] mb-3 uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '14s' }} />
            Worldwide Sourcing & Distribution
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
            Connecting <span className="text-gradient-emerald">20+ Countries</span> & 200+ Suppliers
          </h3>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Established in 1992, Mago Enterprises bridges leading global chemical producers with over 500 industrial manufacturers worldwide.
          </p>
        </div>

        {/* Global Live Counters */}
        <div className="flex items-center gap-4 bg-slate-900/60 p-3 rounded-xl border border-white/5">
          <div className="text-center px-3 border-r border-slate-700/60">
            <div className="text-xl font-bold text-[var(--color-primary)]">20+</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wide">Countries</div>
          </div>
          <div className="text-center px-3 border-r border-slate-700/60">
            <div className="text-xl font-bold text-sky-400">200+</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wide">Suppliers</div>
          </div>
          <div className="text-center px-3">
            <div className="text-xl font-bold text-emerald-400">500+</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wide">Customers</div>
          </div>
        </div>
      </div>

      {/* Interactive Map Visualizer Canvas Area */}
      <div className="relative w-full h-80 md:h-96 rounded-xl bg-slate-950/80 border border-slate-800/80 overflow-hidden flex items-center justify-center">
        {/* World Map Grid Outline SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Connecting SVG Animated Trade Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {tradeHubs.map((hub, idx) => {
            if (hub.name === 'Pakistan (Karachi & Lahore)') return null;
            const hq = tradeHubs.find(h => h.name.includes('Pakistan'))!.coords;
            return (
              <g key={idx}>
                {/* Arc line */}
                <path
                  d={`M ${hub.coords.x}% ${hub.coords.y}% Q ${(hub.coords.x + hq.x) / 2}% ${(hub.coords.y + hq.y) / 2 - 14}% ${hq.x}% ${hq.y}%`}
                  fill="none"
                  stroke={activeHub.name === hub.name ? '#29C702' : 'rgba(41, 199, 2, 0.22)'}
                  strokeWidth={activeHub.name === hub.name ? '2' : '1.2'}
                  strokeDasharray={activeHub.name === hub.name ? 'none' : '4, 4'}
                  className="transition-all duration-300"
                />
              </g>
            );
          })}
        </svg>

        {/* Hub Interactive Markers */}
        {tradeHubs.map((hub, idx) => {
          const isSelected = activeHub.name === hub.name;
          const isHQ = hub.name.includes('Pakistan');
          return (
            <button
              key={idx}
              onClick={() => setActiveHub(hub)}
              style={{ left: `${hub.coords.x}%`, top: `${hub.coords.y}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none transition-transform duration-300 ${
                isSelected ? 'scale-125 z-20' : 'hover:scale-110 z-10'
              }`}
              aria-label={hub.name}
            >
              <div className="relative flex items-center justify-center">
                {/* Pulsing ring */}
                <div
                  className={`absolute w-8 h-8 rounded-full transition-all ${
                    isHQ
                      ? 'bg-emerald-500/30 animate-ping'
                      : isSelected
                      ? 'bg-[var(--color-primary)]/40 animate-ping'
                      : 'bg-transparent'
                  }`}
                />
                {/* Node pin */}
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                    isHQ
                      ? 'bg-emerald-400 border-white shadow-[0_0_15px_#29C702]'
                      : isSelected
                      ? 'bg-[var(--color-primary)] border-white shadow-[0_0_12px_#29C702]'
                      : 'bg-slate-700 border-slate-400 group-hover:bg-[var(--color-primary)]'
                  }`}
                />
              </div>

              {/* Tag Label */}
              <div
                className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-white text-slate-950 font-bold shadow-lg'
                    : 'bg-slate-900/90 text-slate-300 border border-slate-700/80 group-hover:text-white'
                }`}
              >
                {hub.name.split(' ')[0]}
              </div>
            </button>
          );
        })}

        {/* Central Watermark Indicator */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-md">
          <Ship className="w-3.5 h-3.5 text-[var(--color-primary)]" />
          <span>Active Sea & Air Freight Logistics Corridors</span>
        </div>
      </div>

      {/* Selected Hub Deep-Dive Card */}
      <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
            <Factory className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-base font-bold text-white">{activeHub.name}</h4>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium">
                {activeHub.role}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{activeHub.focus}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-[var(--color-primary)] font-medium">
          <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" />
          <span>ISO & QC Verified Sourcing</span>
        </div>
      </div>
    </div>
  );
};
