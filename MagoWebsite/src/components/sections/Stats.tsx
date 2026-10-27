// src/components/sections/Stats.tsx
import React from 'react';
import CountUp from 'react-countup';

const Stats: React.FC = () => {
  const statsData = [
    {
      number: 20,
      suffix: '+',
      title: 'Countries Sourced',
      description: 'Strategic chemical origins across the Pacific Rim, Europe, and the Americas'
    },
    {
      number: 200,
      suffix: '+',
      title: 'Global Manufacturers',
      description: 'Direct partnerships with primary synthesis plants and petrochemical refineries'
    },
    {
      number: 500,
      suffix: '+',
      title: 'Enterprise Clients',
      description: 'Supplying manufacturers across textiles, coatings, plastics, and agriculture'
    },
    {
      number: 30,
      suffix: '+',
      title: 'Years Heritage',
      description: 'Family-owned and operated since 1992, founded on integrity and reliable supply'
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
                <span className="text-[var(--color-primary)] ml-0.5">{stat.suffix}</span>
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