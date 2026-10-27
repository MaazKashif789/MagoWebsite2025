// src/components/sections/Stats.tsx
import React from 'react';
import CountUp from 'react-countup';
import { Globe2, Factory, Users2, CalendarDays, ShieldCheck } from 'lucide-react';

const Stats: React.FC = () => {
  const statsData = [
    {
      icon: Globe2,
      number: 20,
      suffix: '+',
      title: 'Countries Imported From',
      description: 'Strategic sourcing across China, Taiwan, Korea, Japan, Indonesia, Europe & USA',
      color: 'text-[var(--color-primary)]',
      bgGlow: 'bg-[var(--color-primary)]/10',
      borderGlow: 'group-hover:border-[var(--color-primary)]/50'
    },
    {
      icon: Factory,
      number: 200,
      suffix: '+',
      title: 'Global Chemical Suppliers',
      description: 'Direct relationships with premier chemical and polymer synthesis plants',
      color: 'text-sky-400',
      bgGlow: 'bg-sky-500/10',
      borderGlow: 'group-hover:border-sky-400/50'
    },
    {
      icon: Users2,
      number: 500,
      suffix: '+',
      title: 'Worldwide Customers',
      description: 'Serving industrial manufacturers in textiles, paints, plastics & water treatment',
      color: 'text-emerald-400',
      bgGlow: 'bg-emerald-500/10',
      borderGlow: 'group-hover:border-emerald-400/50'
    },
    {
      icon: CalendarDays,
      number: 30,
      suffix: '+',
      title: 'Years of Industry Leadership',
      description: 'Founded in 1992 as a family enterprise committed to integrity and speed',
      color: 'text-amber-400',
      bgGlow: 'bg-amber-500/10',
      borderGlow: 'group-hover:border-amber-400/50'
    }
  ];

  return (
    <section id="stats" className="relative py-20 bg-slate-950/90 border-t border-slate-900 overflow-hidden">
      {/* Background Subtle Gradient Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-xs font-semibold text-[var(--color-primary-light)] mb-3 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Enterprise Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Our Scale, Reach & <span className="text-gradient-emerald">Global Impact</span>
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Delivering critical industrial raw materials on time, every time, with certified quality assurance.
          </p>
        </div>

        {/* 4 Core Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`glass-card p-6 rounded-2xl border border-white/10 ${stat.borderGlow} transition-all duration-300 group hover:-translate-y-1.5`}
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bgGlow} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-1 flex items-baseline">
                  <CountUp end={stat.number} duration={2.5} enableScrollSpy scrollSpyOnce />
                  <span className={stat.color}>{stat.suffix}</span>
                </div>

                <h3 className="text-base font-bold text-slate-100 mb-1.5">{stat.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;