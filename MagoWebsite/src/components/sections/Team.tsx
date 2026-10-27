// src/components/sections/Team.tsx
import React from 'react';
import teamImage from '../../assets/team.jpeg';
import { Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    name: 'Kashif Maqbool',
    role: 'Chief Executive Officer',
    email: 'magoon33@hotmail.com',
    phone: '+92 300 8402932',
  },
  {
    name: 'Furqan Kashif',
    role: 'Sales Manager',
    email: 'furqank95@gmail.com',
    phone: '+92 323 8498256',
  },
  {
    name: 'Mustafa Kashif',
    role: 'Sourcing Manager',
    email: 'mustafaalsdf@gmail.com',
    phone: '+92 307 4024953',
  },
  {
    name: 'Maaz Kashif',
    role: 'Accounts & Operations Manager',
    email: 'mustafakshf12345@gmail.com',
    phone: '+92 336 4336527',
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-[#090D14] border-b border-white/[0.06]" aria-label="Our Leadership">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-white/[0.06]">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)]">
              Executive Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-1">
              Family-Owned & Operated
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl font-light">
              Direct access to company principals for long-term contract pricing, supply agreements, and technical execution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Clean Team Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden border border-white/[0.08] bg-[#0F141E]">
              <div className="h-[380px] sm:h-[420px] w-full">
                <img
                  src={teamImage}
                  alt="Mago Enterprises Leadership Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Clean Leadership Directory Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="p-5 rounded-lg minimal-card flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-white mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-[var(--color-primary)] mb-4">{member.role}</p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-white/[0.06] text-xs">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors truncate"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0 text-slate-500" />
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