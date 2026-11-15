// src/components/sections/Services.tsx
import React from 'react';
import {
  Headset,
  ShieldCheck,
  Globe,
  PackageCheck,
  Check,
  Handshake,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const Services: React.FC = () => {
  const distributionStrengths = [
    {
      step: '01',
      title: 'Customer Service',
      description: 'Dedicated regional teams providing proactive shipment tracking and customized logistics.',
      icon: Headset,
      points: [
        'Dedicated regional teams focused on customer orders',
        'Custom logistical solutions tailored to plant requirements',
        'Proactive real-time communication on shipment progress'
      ]
    },
    {
      step: '02',
      title: 'Safety & Quality Control',
      description: 'Rigorous sample verification and adherence to international regulatory standards.',
      icon: ShieldCheck,
      points: [
        'Dedicated managers ensuring strict industry standards',
        'Sample testing and verified Certificate of Analysis (CoA)',
        'Full compliance with global safety & REACH regulations'
      ]
    },
    {
      step: '03',
      title: 'Global Sourcing',
      description: 'Direct partnerships with primary synthesis plants across the Pacific Rim and worldwide.',
      icon: Globe,
      points: [
        'Full-time operating teams in 4 locations across Pakistan',
        'Daily operational interaction with manufacturing partners',
        'Strict auditing of new suppliers for quality & reliability'
      ]
    },
    {
      step: '04',
      title: 'Product Management',
      description: 'End-to-end distribution oversight, tailored grades, and demand-cycle warehousing.',
      icon: PackageCheck,
      points: [
        'Seasoned specialists administering full distribution cycle',
        'Custom-tailored raw material solutions for manufacturers',
        'Efficient domestic warehousing aligned with demand cycles'
      ]
    }
  ];

  const whatWeDoServices = [
    {
      title: 'Indentor & Commercial Intermediary',
      description:
        'Serving as an indispensable bridge between domestic manufacturers and global chemical producers. Delivering optimal CIF/FOB terms with complete commercial transparency.',
      icon: Handshake
    },
    {
      title: 'Market Representation & Agency',
      description:
        'Exclusive marketing and technical representation for premier international chemical synthesis plants looking to establish or scale operations in the Pakistani market.',
      icon: Globe
    },
    {
      title: 'Global Market Intelligence',
      description:
        'Actionable insight into feedstock positions, geopolitical tariffs, production cycles, and producer viability to de-risk our clients’ procurement decisions.',
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
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)] font-mono">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Distribution Strengths & Indenting Services
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1.5 font-light leading-relaxed">
              Bridging premier global chemical producers with Pakistan’s manufacturing leaders in footwear, rubber, leather, plastics, and coatings.
            </p>
          </div>
          
          <a
            href="#contact"
            className="self-start md:self-end px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-[var(--color-primary)] text-slate-300 hover:text-slate-950 font-semibold text-xs tracking-wider uppercase transition-all duration-200 border border-white/[0.08]"
          >
            Partner With Mago
          </a>
        </div>

        {/* 4 Minimalist Distribution Strengths Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {distributionStrengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#0B0F17] border border-white/[0.07] hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-[var(--color-primary)]/5"
              >
                <div>
                  {/* Top Row: Clean SVG Icon & Step Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center border border-[var(--color-primary)]/20 group-hover:bg-[var(--color-primary)] group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 font-semibold tracking-wider">
                      {item.step} / 04
                    </span>
                  </div>

                  {/* Title & Concise Summary */}
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Minimalist Feature List */}
                  <div className="space-y-2 pt-3 border-t border-white/[0.05]">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                        <Check className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist What We Do / Indenting Banner */}
        <div className="p-7 sm:p-8 rounded-xl bg-[#090D14] border border-white/[0.07] relative overflow-hidden">
          <div className="max-w-2xl mb-6">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-primary)] font-semibold">
              Market Role
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
              A Transparent Bridge Between Global Producers & Domestic Industry
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-light leading-relaxed">
              We empower local manufacturers with verified global chemical access, while offering international principals dedicated sales representation in Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {whatWeDoServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-lg bg-[#0D121D] border border-white/[0.05] hover:border-white/[0.12] transition-colors"
                >
                  <div className="w-8 h-8 rounded-md bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">{service.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
