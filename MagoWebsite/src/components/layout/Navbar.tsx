// src/components/layout/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/Logo/mago_white.png';
import { Menu, X, ArrowUpRight, Shield } from 'lucide-react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Global Network', href: '#network' },
    { name: 'Products', href: '/products' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === '/products') {
      navigate('/products');
      setIsOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: href } });
      setIsOpen(false);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-slate-950/60 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Brand Logo */}
          <div className="flex items-center">
            <a
              href={location.pathname === '/' ? '#hero' : '/'}
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center group transition-transform duration-200 hover:scale-102"
            >
              <img
                src={logo}
                alt="Mago Enterprises Logo"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-md brightness-105"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-underline-animate text-slate-300 hover:text-white text-sm font-medium transition-colors tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Action: Request Quote Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-slate-950 font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(41,199,2,0.4)] transform hover:-translate-y-0.5"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-[var(--color-primary)]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-2.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--color-primary)] text-slate-950 font-bold text-sm tracking-wide uppercase shadow-[0_0_15px_rgba(41,199,2,0.3)]"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
