import { Phone, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { siteImages } from '../data/images';

export function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 overflow-hidden bg-[#151515]">
      {/* Background Image with Clean Solid Charcoal Overlay (No Gradients) */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteImages.hero.src}
          alt={siteImages.hero.alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-90 transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured Solid Dark Charcoal Overlay as required - no gradients */}
        <div className="absolute inset-0 bg-[#151515]/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-white w-full">
        <div className="max-w-3xl">
          {/* Location & Trust Marker */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-[#151515] border border-white/15 text-xs uppercase tracking-wider text-white/90">
            <MapPin className="w-3.5 h-3.5 text-[#B7D51F]" />
            <span className="font-medium">Based in Peterlee, UK</span>
            <span className="text-white/40">·</span>
            <span className="text-[#B7D51F] font-semibold">100% Recommend</span>
          </div>

          {/* Hero Label */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B7D51F] mb-3">
            GARDEN ROOMS • CUSTOM BUILDINGS • EXTRA SPACE
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08] font-heading [text-wrap:balance]">
            More Space. Right In Your Garden.
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-white/90 font-normal leading-relaxed mb-8 max-w-2xl">
            Flexible garden rooms and custom outdoor buildings designed around the way you want to live, work and relax.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#151515] bg-[#B7D51F] hover:bg-[#c6e625] transition-colors rounded-sm shadow-md text-center"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 text-[#151515]" />
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide text-white bg-transparent hover:bg-white/10 border border-white/30 hover:border-white transition-colors rounded-sm text-center"
            >
              <Phone className="w-4 h-4 text-[#B7D51F]" />
              <span>Call S&G ({BUSINESS_INFO.phoneDisplay})</span>
            </a>
          </div>

          {/* Feature Line as instructed */}
          <div className="pt-6 border-t border-white/15 flex items-center gap-2 text-xs sm:text-sm text-white/80 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#B7D51F] shrink-0" />
            <span>Custom layouts • Modern construction • Delivered & expanded on-site</span>
          </div>
        </div>
      </div>
    </section>
  );
}
