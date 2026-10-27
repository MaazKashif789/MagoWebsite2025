import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Compass } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Mago Enterprises</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 px-4 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[var(--color-primary)]/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="text-center relative z-10 glass-panel p-10 sm:p-14 rounded-2xl border border-white/10 max-w-lg shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/15 text-[var(--color-primary)] flex items-center justify-center mx-auto mb-6">
            <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '20s' }} />
          </div>
          <h1 className="text-6xl font-extrabold text-[var(--color-primary)] mb-2 font-display">404</h1>
          <h2 className="text-2xl font-bold text-white mb-3">Page Not Found</h2>
          <p className="text-sm text-slate-400 mb-8 leading-relaxed">
            The chemical resource or page you are looking for might have been relocated or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-slate-950 font-bold px-7 py-3 rounded-full hover:bg-[var(--color-primary-light)] transition-all shadow-[0_0_20px_rgba(41,199,2,0.3)] text-sm tracking-wide uppercase hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Mago Enterprises</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;