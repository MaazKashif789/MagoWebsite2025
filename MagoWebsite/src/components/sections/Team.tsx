// src/components/sections/Team.tsx
import React from 'react';
import teamImage from '../../assets/team.jpeg';
import { Mail, Phone, Users, Shield, Briefcase } from 'lucide-react';

const teamMembers = [
  {
    name: 'Kashif Maqbool',
    role: 'Chief Executive Officer',
    badge: 'Executive Leadership',
    email: 'magoon33@hotmail.com',
    phone: '+92 300 8402932',
  },
  {
    name: 'Furqan Kashif',
    role: 'Director of Global Sales',
    badge: 'Commercial Strategy',
    email: 'furqank95@gmail.com',
    phone: '+92 323 8498256',
  },
  {
    name: 'Mustafa Kashif',
    role: 'Director of Global Sourcing',
    badge: 'Supply Chain & Sourcing',
    email: 'mustafaalsdf@gmail.com',
    phone: '+92 307 4024953',
  },
  {
    name: 'Maaz Kashif',
    role: 'Director of Finance & Operations',
    badge: 'Finance & Trade Operations',
    email: 'mustafakshf12345@gmail.com',
    phone: '+92 336 4336527',
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="relative py-24 bg-slate-950/90 border-t border-slate-900 overflow-hidden" aria-label="Our Leadership">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-xs font-semibold text-[var(--color-primary-light)] mb-3 uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            Family Enterprise Heritage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Executive Leadership & <span className="text-gradient-emerald">Personal Commitment</span>
          </h2>
          <p className="text-slate-400 text-base mt-2 font-light">
            Behind every container, shipment, and contract is our family’s direct pledge of quality, integrity, and personal accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Team Photo with High-Tech Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 border border-white/10 group">
              <div className="relative h-[460px] rounded-xl overflow-hidden">
                <img
                  src={teamImage}
                  alt="Mago Enterprises Leadership Team"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              </div>

              {/* Inset Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-white/10 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[var(--color-primary)]/20 text-[var(--color-primary-light)]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Executive Accessibility</h4>
                    <p className="text-xs text-slate-400">Direct contact with principals for seamless contracts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Team Members Executive Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[var(--color-primary)]/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                    {member.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3 font-display group-hover:text-[var(--color-primary-light)] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-300 mb-4">{member.role}</p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-800/80 text-xs">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span>{member.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;