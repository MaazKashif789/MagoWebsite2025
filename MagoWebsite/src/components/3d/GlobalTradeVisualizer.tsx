// src/components/3d/GlobalTradeVisualizer.tsx
import React, { useState } from 'react';
import { Ship, Anchor, Sparkles } from 'lucide-react';
import worldMapImg from '../../assets/world_trade_map.jpg';

interface TradeHub {
  id: string;
  name: string;
  region: string;
  specialty: string;
  coords: { x: number; y: number };
  isHQ?: boolean;
}

const tradeHubs: TradeHub[] = [
  {
    id: 'pk',
    name: 'Pakistan (Lahore & Karachi)',
    region: 'Central Import & Distribution HQ',
    specialty: 'Bulk storage terminals, bonded port warehouses & nationwide fleet delivery',
    coords: { x: 65, y: 49 },
    isHQ: true
  },
  {
    id: 'cn',
    name: 'China & Taiwan',
    region: 'East Asia',
    specialty: 'Industrial monomers, acrylates, vinyl esters & synthetic organics',
    coords: { x: 77, y: 44 }
  },
  {
    id: 'kr',
    name: 'South Korea & Japan',
    region: 'East Asia',
    specialty: 'High-purity solvents, virgin polymer resins & optical-grade additives',
    coords: { x: 84, y: 39 }
  },
  {
    id: 'sea',
    name: 'Indonesia & Malaysia',
    region: 'Southeast Asia',
    specialty: 'Refined oleochemicals, pure glycerine 99.7% & fatty acid derivatives',
    coords: { x: 77, y: 64 }
  },
  {
    id: 'me',
    name: 'Middle East (Saudi Arabia & UAE)',
    region: 'Middle East',
    specialty: 'Primary petrochemical feedstocks, glycols (MEG/DEG) & polyolefins',
    coords: { x: 58, y: 46 }
  },
  {
    id: 'eu',
    name: 'Western Europe',
    region: 'Europe',
    specialty: 'Precision specialty chemicals, catalysts & technical performance additives',
    coords: { x: 48, y: 32 }
  },
  {
    id: 'us',
    name: 'United States',
    region: 'North America',
    specialty: 'Specialty coatings, polymer modifiers & performance intermediates',
    coords: { x: 21, y: 40 }
  }
];

export const GlobalTradeVisualizer: React.FC = () => {
  const [hoveredHub, setHoveredHub] = useState<TradeHub | null>(null);

  return (
    <div className="rounded-2xl minimal-card p-6 sm:p-8 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)] font-mono">
              Global Sourcing Infrastructure
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Direct Import Corridors From 20+ Countries
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl font-light">
            Supplying direct chemical manufacturers to over 500 industrial plants across Pakistan via certified maritime shipping lines.
          </p>
        </div>

        {/* Minimalist Metrics */}
        <div className="flex items-center gap-6 text-left self-start md:self-end">
          <div>
            <div className="text-2xl font-bold text-white tracking-tight">20+</div>
            <div className="text-[11px] text-slate-400 font-mono">Source Nations</div>
          </div>
          <div className="w-px h-8 bg-white/[0.08]" />
          <div>
            <div className="text-2xl font-bold text-white tracking-tight">200+</div>
            <div className="text-[11px] text-slate-400 font-mono">Vetted Producers</div>
          </div>
          <div className="w-px h-8 bg-white/[0.08]" />
          <div>
            <div className="text-2xl font-bold text-white tracking-tight">500+</div>
            <div className="text-[11px] text-slate-400 font-mono">Industrial Plants</div>
          </div>
        </div>
      </div>

      {/* Cinematic Map Area */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] min-h-[340px] sm:min-h-[420px] rounded-xl overflow-hidden border border-white/[0.08] bg-[#070A0F]">
        {/* Background Map Graphic */}
        <img
          src={worldMapImg}
          alt="Mago Enterprises Global Trade Network Map"
          className="w-full h-full object-cover object-center select-none pointer-events-none"
        />

        {/* Dark Vignette Overlay for Seamless Dark Integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-transparent to-[#070A0F]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A0F]/40 via-transparent to-[#070A0F]/40 pointer-events-none" />

        {/* Interactive Hub Pins */}
        {tradeHubs.map((hub) => {
          const isHQ = hub.isHQ;
          const isHovered = hoveredHub?.id === hub.id;

          return (
            <div
              key={hub.id}
              style={{ left: `${hub.coords.x}%`, top: `${hub.coords.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
              onMouseEnter={() => setHoveredHub(hub)}
              onMouseLeave={() => setHoveredHub(null)}
              onClick={() => setHoveredHub(hoveredHub?.id === hub.id ? null : hub)}
            >
              {/* Pulse rings for HQ */}
              {isHQ && (
                <>
                  <span className="absolute -inset-2.5 rounded-full bg-[var(--color-primary)]/20 animate-ping" />
                  <span className="absolute -inset-1 rounded-full bg-[var(--color-primary)]/40 animate-pulse" />
                </>
              )}

              {/* Pin Center */}
              <div
                className={`relative flex items-center justify-center rounded-full transition-all duration-300 shadow-lg ${
                  isHQ
                    ? 'w-4 h-4 bg-[var(--color-primary)] ring-4 ring-[var(--color-primary)]/30 border-2 border-white'
                    : isHovered
                    ? 'w-3.5 h-3.5 bg-[var(--color-primary)] ring-4 ring-[var(--color-primary)]/20 border border-white scale-125'
                    : 'w-2.5 h-2.5 bg-emerald-400/90 border border-black/80 hover:scale-125'
                }`}
              />

              {/* Permanent Small Name Label */}
              <div
                className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md text-[10px] font-medium tracking-tight whitespace-nowrap transition-all pointer-events-none shadow-md ${
                  isHQ
                    ? 'bg-[var(--color-primary)] text-slate-950 font-bold border border-white/20 ring-1 ring-[var(--color-primary)]/40'
                    : isHovered
                    ? 'bg-white text-slate-950 font-semibold scale-105'
                    : 'bg-[#090D14]/90 text-slate-300 border border-white/[0.12] backdrop-blur-sm'
                }`}
              >
                {hub.name.split(' (')[0]}
              </div>

              {/* Floating Rich Tooltip on Hover */}
              {isHovered && (
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 p-3 rounded-lg bg-[#0E131F]/95 border border-[var(--color-primary)]/40 backdrop-blur-md shadow-2xl z-30 pointer-events-none transition-all">
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-bold text-white">{hub.name}</span>
                    <span className="text-[10px] text-[var(--color-primary)] font-mono">{hub.region}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug font-light">
                    {hub.specialty}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {/* Floating Minimal Legend / Status Pill */}
        <div className="absolute bottom-3 left-3 flex items-center gap-3 bg-[#0B0F17]/90 backdrop-blur-md border border-white/[0.08] px-3.5 py-1.5 rounded-lg text-[11px] text-slate-300 shadow-lg">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
            <span className="font-medium text-white">Karachi & Port Qasim Entry Terminals</span>
          </div>
          <div className="w-px h-3 bg-white/[0.12]" />
          <div className="flex items-center gap-1.5 text-slate-400 hidden sm:flex">
            <Ship className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span>ISO Tank Containers & Bulk Liquid Carriers</span>
          </div>
        </div>
      </div>
    </div>
  );
};
