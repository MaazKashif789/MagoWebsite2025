// src/components/sections/Stats.tsx
import React from 'react';
import CountUp from 'react-countup';

const Stats: React.FC = () => {
  const statsData = [
    {
      number: 30,
      suffix: '+',
      title: 'Years Industrial Heritage',
      description: 'Family-owned & operated since 1993, pioneering chemical imports & indenting'
    },
    {
      number: 4,
      suffix: ' Hubs',
      title: 'Offices Across Pakistan',
      description: 'Full-time teams in 4 key domestic industrial centers ensuring localized service'
    },
    {
      number: 13,
      suffix: ' Divisions',
      title: 'Chemical Categories',
      description: 'Covering polymers, engineering plastics, rubbers, PU, plasticizers, solvents & oxides'
    },
    {
      number: 140,
      suffix: '+',
      title: 'Certified Products',
      description: 'Direct sourcing originating from the Pacific Rim, Europe, and the Americas'
    }
  ];

  return (
    <section id="stats" className="py-16 bg-[#0B0F18] border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg minimal-card text-left"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2 flex items-baseline">
                <CountUp end={stat.number} duration={2} enableScrollSpy scrollSpyOnce />
                <span className="text-[var(--color-primary)] ml-0.5 text-2xl sm:text-3xl">{stat.suffix}</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{stat.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
