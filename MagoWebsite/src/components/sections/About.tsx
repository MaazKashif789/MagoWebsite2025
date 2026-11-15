// src/components/sections/About.tsx
import React from 'react';
import aboutImage from '../../assets/Aboutoffice.jpg';
import { ArrowRight, Check, ShieldCheck, Globe, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  const coreStrengths = [
    'Pioneered in rubber and rubber chemicals trade, expanding into nationwide imports in 1993 and indenting in 1995',
    'Full spectrum operations: Pakistan’s leading Indenter, Importer, Trader, Stockist, and Distributor',
    'Specialized Pacific Rim direct supply corridors: China, Taiwan, Thailand, Singapore, Korea, Japan, Sri Lanka, Vietnam, Malaysia, and Indonesia',
    'Worldwide reach spanning the industrial ports of Japan, mid-America, Brazil, and REACH-regulated Europe',
    'Full-time teams in 4 strategic locations across Pakistan providing seamless logistics and customer service',
    'In-depth global market intelligence: raw material positions, production cycles, and international regulatory compliance'
  ];

  return (
    <section id="about" className="py-20 bg-[#090D14] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Office Image & Badge */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0F141E] shadow-2xl">
              <div className="h-[420px] sm:h-[460px] w-full">
                <img
                  src={aboutImage}
                  alt="Mago Enterprises Headquarters"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0F141E]/90 backdrop-blur-md border border-white/10">
                <div className="text-xs font-semibold text-white uppercase tracking-wider mb-0.5">
                  Mago Enterprises (PVT) LTD
                </div>
                <div className="text-[11px] text-[var(--color-primary)] font-mono">
                  Sourcing the Corner of the Globe Since 1993
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)]">
                About Mago Enterprises (PVT) LTD
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-2 leading-tight">
                Pakistan's Leading Indenter, Importer, Trader & Distributor
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              <strong className="text-white font-medium">Mago Enterprises (PVT) LTD</strong> is a family owned and operated company based in Pakistan. Originally founded in the rubber and rubber chemical trade, Chairman Mr. Kashif joined the company in 1993, pioneering large-scale import operations that quickly established Mago as a renowned importer nationwide. In 1995, Mago inaugurated its indenting and commission-based division, growing into one of Pakistan's most trusted indenters, traders, stockists, and distributors.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Since 1993, our philosophy has been founded on sourcing competitive chemical supply originating from the <strong className="text-slate-200 font-medium">Pacific Rim</strong>—with deep emphasis on China, Taiwan, Thailand, Singapore, South Korea, Japan, Sri Lanka, Vietnam, Malaysia, and Indonesia. Our duty is to bring the benefits of globalization to domestic industries: from mid-America to Japan, Brazil to REACH-regulated Europe, we take a local approach while delivering global access.
            </p>

            {/* Core Strengths List */}
            <div className="space-y-2.5 pt-2">
              {coreStrengths.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/products')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline cursor-pointer"
              >
                <span>Browse our 13 chemical divisions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
