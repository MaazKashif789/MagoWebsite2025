// src/components/sections/Services.tsx
import React from 'react';
import csIcon from '../../assets/services/cs.png';
import srqcIcon from '../../assets/services/srqc.png';
import srcIcon from '../../assets/services/src.png';
import spmIcon from '../../assets/services/spm.png';
import { ArrowRight, Handshake, Globe2, ShieldCheck, TrendingUp, Building, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const distributionStrengths = [
    {
      step: '01',
      title: 'Customer Service',
      icon: csIcon,
      highlight: 'Proactive shipment & order tracking',
      points: [
        'Dedicated regional teams focused on servicing customer orders',
        'Unique solutions based on customer’s specific logistical requirements',
        'Proactive communication of product availability and shipment progress'
      ]
    },
    {
      step: '02',
      title: 'Safety, Regulatory & Quality Control',
      icon: srqcIcon,
      highlight: 'Strict CoA & sample verification',
      points: [
        'Dedicated managers ensuring products meet all technical and industry standards',
        'Rigorous quality control system for all product samples and incoming batches',
        'Full compliance with international safety and environmental regulations'
      ]
    },
    {
      step: '03',
      title: 'Global Sourcing',
      icon: srcIcon,
      highlight: '4 strategic locations in Pakistan',
      points: [
        'Full-time teams in four strategic locations across Pakistan',
        'Daily operational interaction with primary manufacturing partners',
        'Synergy across sales offices and international sourcing hubs',
        'On-site auditing of new manufacturing partners for quality and reliability'
      ]
    },
    {
      step: '04',
      title: 'Sales & Product Management',
      icon: spmIcon,
      highlight: 'End-to-end distribution & warehousing',
      points: [
        'Dedicated team of seasoned professionals administering the entire distribution cycle',
        'Custom-tailored raw material formulations designed to meet customer needs',
        'Efficient domestic warehousing of chemicals aligned with customers’ demand cycle'
      ]
    }
  ];

  const whatWeDoServices = [
    {
      title: 'Indentor & Transparent Commercial Bridge',
      description:
        'The core of what we do at Mago is to serve as an indispensable bridge between esteemed industrial customers in Pakistan and trusted global chemical manufacturers. We take pride in delivering optimal commercial terms, acting as a reliable, transparent, and trusted intermediary.',
      icon: Handshake
    },
    {
      title: 'Market Representation & Agency Services',
      description:
        'We offer premier marketing and local distribution representation for international chemical synthesis plants looking to establish and scale their presence in the rapidly expanding Pakistani industrial market.',
      icon: Globe2
    },
    {
      title: 'Deep Global Market Intelligence',
      description:
        'Beyond the items of commerce themselves, we provide actionable intelligence into the global chemical landscape: geopolitical supply factors, tariff shifts, raw material feedstock cycles, and producer viability.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#070A0F] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-white/[0.06]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)] font-mono">
                Core Capabilities & Indenting Services
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Distribution Strengths & Market Representation
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1.5 font-light leading-relaxed">
              Serving as a reliable bridge between world-class chemical manufacturers and Pakistan’s foremost manufacturers in footwear, rubber, leather, plastics, and coatings.
            </p>
          </div>
          
          <a
            href="#contact"
            className="self-start md:self-end px-5 py-2.5 rounded-lg bg-white/[0.04] hover:bg-[var(--color-primary)] text-slate-300 hover:text-slate-950 font-semibold text-xs tracking-wider uppercase transition-all duration-200 border border-white/[0.08]"
          >
            Partner With Mago
          </a>
        </div>

        {/* 4 Pillars of Distribution Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {distributionStrengths.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#0B0F17] border border-white/[0.08] hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Header with step number and icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[var(--color-primary)] font-bold tracking-wider">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/[0.08] p-2 flex items-center justify-center group-hover:border-[var(--color-primary)]/30 transition-colors">
                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] font-mono text-[var(--color-primary)]/80 mb-4">
                  {item.highlight}
                </p>

                {/* Bullet points */}
                <ul className="space-y-2.5 text-xs text-slate-300 font-light">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* What We Do / Indenting Bridge Banner */}
        <div className="p-8 sm:p-10 rounded-2xl minimal-card border border-white/10 relative overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)]">
                What We Do
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                A Transparent Bridge Between Global Producers & Local Industry
              </h3>
              <p className="text-sm text-slate-300 mt-2 font-light leading-relaxed">
                Whether our clients require raw materials for the footwear, rubber, leather, plastics, or paint industries, we possess the knowledge, direct plant relationships, and supply chain resources to meet their needs and exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whatWeDoServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#090D14]/80 border border-white/[0.06] hover:border-white/[0.15] transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{service.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
