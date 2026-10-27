// src/components/sections/Contact.tsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Globe, Send, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-primary)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Direct Inquiries & Chemical Sourcing Desk */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-xs font-semibold text-[var(--color-primary-light)] mb-3 uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                Global Inquiries & Commercial Desk
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
                Request a Quote or <span className="text-gradient-emerald">Technical Consultation</span>
              </h2>
              <p className="text-slate-400 text-base mt-3 font-light leading-relaxed">
                Whether you need container loads (FCL), custom tanker delivery, or technical specifications (TDS/MSDS), our commercial desk responds within 24 hours.
              </p>
            </div>

            {/* Direct Contact Detail Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl glass-card border border-white/10">
                <div className="p-3 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">Direct Line / WhatsApp</div>
                  <a href="tel:+923008402932" className="text-base font-bold text-white hover:text-[var(--color-primary)] transition-colors">
                    +92 300 8402932
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Mon - Sat: 9:00 AM - 6:00 PM PKT</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl glass-card border border-white/10">
                <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">Commercial & Procurement Email</div>
                  <a href="mailto:magoon33@hotmail.com" className="text-base font-bold text-white hover:text-sky-400 transition-colors">
                    magoon33@hotmail.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Formal RFP & Quote Inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl glass-card border border-white/10">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">Headquarters & Import Terminals</div>
                  <div className="text-sm font-bold text-white">Pakistan Operations</div>
                  <p className="text-xs text-slate-400 mt-0.5">Lahore & Karachi Port Distribution Hubs</p>
                </div>
              </div>
            </div>

            {/* Quality Commitment Badge */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" />
              <span>100% Guaranteed On-Spec Purity with Verified CoA Documentation</span>
            </div>
          </div>

          {/* Right Column: High-Tech Quote Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl relative">
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Chemical Procurement Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the details below. Our technical sales team will promptly provide pricing, lead times, and specifications.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-1">Inquiry Received Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out to Mago Enterprises. A member of our sourcing and sales team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Full Name *</label>
                      <Input
                        type="text"
                        placeholder="e.g. John Doe"
                        required
                        className="glass-input h-11 px-3.5 rounded-lg text-sm w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Company / Manufacturing Plant *</label>
                      <Input
                        type="text"
                        placeholder="e.g. Apex Industrial Corp"
                        required
                        className="glass-input h-11 px-3.5 rounded-lg text-sm w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Business Email *</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="glass-input h-11 px-3.5 rounded-lg text-sm w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Contact Phone / WhatsApp *</label>
                      <Input
                        type="tel"
                        placeholder="+92 300 1234567"
                        required
                        className="glass-input h-11 px-3.5 rounded-lg text-sm w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Chemical Name, Grade or CAS Number</label>
                    <Input
                      type="text"
                      placeholder="e.g. Butyl Acrylate / Acetic Acid Glacial / Titanium Dioxide"
                      className="glass-input h-11 px-3.5 rounded-lg text-sm w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Estimated Quantity & Delivery Timeline</label>
                    <Textarea
                      placeholder="Provide volume (e.g. 1x20' FCL, drums, ISO tank), target port, and technical requirements..."
                      rows={4}
                      required
                      className="glass-input px-3.5 py-2.5 rounded-lg text-sm w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-6 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-slate-950 font-bold text-base shadow-[0_0_25px_rgba(41,199,2,0.3)] transition-all hover:scale-101 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Chemical Inquiry</span>
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;