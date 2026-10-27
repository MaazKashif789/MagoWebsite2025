// src/components/sections/About.tsx
import React from 'react';
import aboutImage from '../../assets/Aboutoffice.jpg';
import { ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  const coreStrengths = [
    'Direct sourcing from 200+ primary petrochemical & chemical synthesis plants',
    'Specialized focus on the Pacific Rim: China, Taiwan, South Korea, Japan, and Indonesia',
    'Certified batch consistency with full CoA, TDS, and port quality control',
    'End-to-end maritime logistics, custom clearance, and nationwide delivery'
  ];

  return (
    <section id="about" className="py-20 bg-[#090D14] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clean Office Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-white/[0.08] bg-[#0F141E]">
              <div className="h-[380px] sm:h-[420px] w-full">
                <img
                  src={aboutImage}
                  alt="Mago Enterprises Headquarters"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)]">
                About Mago Enterprises
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-2 leading-tight">
                Global Scale with the Direct Trust of a Family Enterprise
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Founded in 1992, <strong className="text-white font-medium">Mago Enterprises</strong> is a family-owned and operated global importer, supplier, and distributor of high-performance industrial chemicals, minerals, and raw materials.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Our business model is anchored on direct, long-standing supplier relationships across the Pacific Rim—with emphasis on China, Taiwan, South Korea, Japan, and Indonesia—alongside trusted producers in Europe and the Americas. By uniting 200+ manufacturing plants with over 500 industrial customers, we ensure competitive pricing, verified purity, and reliable supply chains.
            </p>

            {/* Clean List */}
            <div className="space-y-2.5 pt-2">
              {coreStrengths.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Bottom Link */}
            <div className="pt-2">
              <button
                onClick={() => navigate('/products')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline cursor-pointer"
              >
                <span>View our chemical product catalog</span>
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
