// src/components/sections/About.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import aboutImage from '../../assets/Aboutoffice.jpg';
import { ShieldCheck, TrendingUp, Users, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  const coreStrengths = [
    {
      title: 'Family-Owned Integrity',
      desc: 'Over 3 decades of personal trust, unwavering commitments, and multi-generational relationships.'
    },
    {
      title: 'Direct Manufacturer Sourcing',
      desc: 'Sourcing directly from 200+ primary petrochemical & chemical synthesis plants across 20+ nations.'
    },
    {
      title: 'Rigorous Quality Standards',
      desc: 'Complete Certificates of Analysis (COA), Technical Data Sheets (TDS), and pre-shipment inspections.'
    },
    {
      title: 'End-to-End Maritime Logistics',
      desc: 'Seamless container shipping, port clearance, bonded warehousing, and nationwide doorstep delivery.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Layered Office/Warehouse Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 border border-white/10 group">
              <div className="relative h-[440px] rounded-xl overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Mago Enterprises Headquarters & Operations"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge Over Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-white/10 backdrop-blur-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/20 text-[var(--color-primary-light)]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Founded in 1992</h4>
                    <p className="text-xs text-slate-400">30+ Years of Excellence in Chemical Distribution</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent floating decorative border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[var(--color-primary)]/50 rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-sky-400/50 rounded-br-2xl pointer-events-none" />
          </div>

          {/* Right Column: Narrative & Key Strengths */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-xs font-semibold text-[var(--color-primary-light)] mb-3 uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                Our Heritage & Global Reach
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
                Global Scale with the{' '}
                <span className="text-gradient-emerald">Personal Dedication</span> of a Family Enterprise
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              <strong className="text-white font-semibold">Mago Enterprises</strong> — a family-owned and operated company — is an established international supplier, importer, and distributor of high-performance industrial chemicals, minerals, and raw materials.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Since our inception in 1992, our core philosophy has been built on direct, long-standing supplier relationships across the <strong className="text-slate-200">Pacific Rim</strong> (China, Taiwan, South Korea, Japan, Indonesia) as well as Europe and the Americas. By uniting 200+ world-class manufacturers with over 500 industrial customers, we ensure transparent pricing, consistent chemical purity, and uninterrupted inventory flow.
            </p>

            {/* Core Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {coreStrengths.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 pl-6 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                onClick={() => navigate('/products')}
                className="px-6 py-2.5 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(41,199,2,0.25)] transition-all hover:scale-105"
              >
                <span>View Products Catalog</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <a
                href="#contact"
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Speak with our chemical specialists →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
