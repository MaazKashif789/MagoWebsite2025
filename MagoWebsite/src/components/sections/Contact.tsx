// src/components/sections/Contact.tsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Check } from "lucide-react";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-20 bg-[#090D14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)]">
                Commercial Desk
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-1">
                Request a Chemical Quote
              </h2>
              <p className="text-slate-400 text-sm mt-2 font-light leading-relaxed">
                Contact our sourcing specialists directly for bulk ISO tank quotes, containerized shipments, and technical data sheets (TDS/MSDS).
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-lg minimal-card">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">Direct Phone / WhatsApp</div>
                <a href="tel:+923008402932" className="text-sm font-semibold text-white hover:text-[var(--color-primary)] transition-colors">
                  +92 300 8402932
                </a>
              </div>

              <div className="p-4 rounded-lg minimal-card">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">Email Inquiries</div>
                <a href="mailto:magoon33@hotmail.com" className="text-sm font-semibold text-white hover:text-[var(--color-primary)] transition-colors">
                  magoon33@hotmail.com
                </a>
              </div>

              <div className="p-4 rounded-lg minimal-card">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">Logistics & Import Terminals</div>
                <div className="text-sm font-semibold text-white">Lahore & Karachi Port Logistics Hubs, Pakistan</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-lg minimal-card">
              <h3 className="text-lg font-bold text-white mb-1">Commercial Sourcing Inquiry</h3>
              <p className="text-xs text-slate-400 mb-6 font-light">
                Fill in your chemical requirements below. Our commercial team will provide competitive CIF/FOB pricing.
              </p>

              {submitted ? (
                <div className="p-6 rounded-lg bg-[#0B150A] border border-[var(--color-primary)]/40 text-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)] flex items-center justify-center mx-auto mb-3">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">Inquiry Submitted</h4>
                  <p className="text-xs text-slate-300">
                    Thank you. A member of our commercial desk will contact you with pricing and availability.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        required
                        className="minimal-input h-10 px-3 rounded-md text-sm w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Company / Plant *</label>
                      <Input
                        type="text"
                        placeholder="Manufacturing Plant Name"
                        required
                        className="minimal-input h-10 px-3 rounded-md text-sm w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Business Email *</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="minimal-input h-10 px-3 rounded-md text-sm w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp *</label>
                      <Input
                        type="tel"
                        placeholder="+92 300 1234567"
                        required
                        className="minimal-input h-10 px-3 rounded-md text-sm w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Chemical Name, Grade or CAS Number</label>
                    <Input
                      type="text"
                      placeholder="e.g. Butyl Acrylate / Acetic Acid Glacial"
                      className="minimal-input h-10 px-3 rounded-md text-sm w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Volume & Requirements</label>
                    <Textarea
                      placeholder="Specify required volume (e.g. 1x20' FCL, ISO Tank), destination port, and grade..."
                      rows={4}
                      required
                      className="minimal-input p-3 rounded-md text-sm w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-2.5 rounded-md bg-[var(--color-primary)] hover:bg-[#22a802] text-slate-950 font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    Submit Quotation Request
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