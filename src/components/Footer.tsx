import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Garden Rooms', href: '#garden-rooms' },
    { name: 'Why S&G', href: '#why-sg' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact & Enquiry', href: '#contact' },
  ];

  return (
    <footer className="bg-[#111111] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-white font-heading">
                S&G
              </span>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B7D51F] border-l border-white/20 pl-2.5 py-0.5">
                GARDEN ROOMS
              </span>
            </div>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Flexible garden rooms and custom outdoor buildings designed around the way you want to live, work and relax.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-[#B7D51F] font-semibold bg-white/5 px-3 py-1.5 border border-white/10">
              <MapPin className="w-3.5 h-3.5" />
              <span>Based in Peterlee, UK · 100% Recommend</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B7D51F]">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#B7D51F] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Summary */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B7D51F]">
              Direct Contact
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="inline-flex items-center gap-2 text-white/90 hover:text-[#B7D51F] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B7D51F]" />
                  <span className="tabular-nums">{BUSINESS_INFO.phoneInternational} ({BUSINESS_INFO.phoneDisplay})</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="inline-flex items-center gap-2 text-white/90 hover:text-[#B7D51F] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#B7D51F]" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li className="text-white/70 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B7D51F] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} S&G Garden Rooms. Peterlee, United Kingdom. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-white/40">Client Website Demonstration</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#B7D51F] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
