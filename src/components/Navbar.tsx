import { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onEnquireClick?: () => void;
}

export function Navbar({ onEnquireClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Garden Rooms', href: '#garden-rooms' },
    { name: 'Why S&G', href: '#why-sg' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#151515] border-b border-[#2A2A2A] shadow-lg shadow-black/20'
          : 'bg-[#151515]/90 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single element wordmark lockup */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center gap-2 group text-left cursor-pointer"
            aria-label="S&G Garden Rooms Home"
          >
            <span className="text-2xl font-extrabold tracking-tight text-white font-heading">
              S&G
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B7D51F] border-l border-white/20 pl-2.5 py-0.5">
              GARDEN ROOMS
            </span>
          </a>

          {/* Zone 2: Navigation Links (Clean text links with hover effect) */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-medium text-white/80 hover:text-[#B7D51F] transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="hidden md:inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-[#B7D51F] transition-colors py-2 px-3 border border-white/10 hover:border-[#B7D51F]/40 rounded-sm"
              title="Call S&G Garden Rooms"
            >
              <Phone className="w-3.5 h-3.5 text-[#B7D51F]" />
              <span className="tabular-nums tracking-wide">{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onEnquireClick) onEnquireClick();
                handleLinkClick('#contact');
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#151515] bg-[#B7D51F] hover:bg-[#c6e625] transition-colors rounded-sm shadow-sm whitespace-nowrap"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="p-2 text-[#B7D51F] hover:text-white transition-colors"
              aria-label="Call phone"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#151515] border-b border-[#2A2A2A] px-4 pt-3 pb-6">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-base font-medium text-white/90 hover:text-[#B7D51F] py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white border border-white/20 rounded-sm"
              >
                <Phone className="w-4 h-4 text-[#B7D51F]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (onEnquireClick) onEnquireClick();
                  handleLinkClick('#contact');
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold uppercase tracking-wider text-[#151515] bg-[#B7D51F] hover:bg-[#c6e625] rounded-sm text-center"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
