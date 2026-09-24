import { ArrowRight, Check } from 'lucide-react';
import { WHY_FEATURES } from '../data/content';
import { siteImages } from '../data/images';

export function WhySG() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-sg" className="py-24 sm:py-32 bg-white text-[#151515] border-t border-[#151515]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Large Photograph of Modern Garden Room Interior */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative border border-[#151515]/10 bg-[#151515]">
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src={siteImages.whyInterior.src}
                  alt={siteImages.whyInterior.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Architectural Badge with Strong Visual Statement */}
              <div className="p-6 bg-[#151515] text-white border-t border-[#B7D51F]/30">
                <p className="text-xs uppercase tracking-widest text-[#B7D51F] font-bold mb-1">
                  THE GARDEN ROOM ADVANTAGE
                </p>
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-white font-heading">
                  “Create more usable space without moving house.”
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Editorial Content & 3 Key Features */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#B7D51F]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#151515]/70">
                WHY S&G GARDEN ROOMS
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#151515] mb-6 font-heading leading-tight [text-wrap:balance]">
              Designed Around The Way You’ll Use It.
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#151515]/80 leading-relaxed mb-10">
              From a dedicated home office to a garden bar, workshop, guest space or extra living area, S&G Garden Rooms offers flexible buildings that can be tailored around your requirements.
            </p>

            {/* 3 Key Features */}
            <div className="space-y-6 mb-10">
              {WHY_FEATURES.map((feature) => (
                <div
                  key={feature.number}
                  className="flex items-start gap-4 p-5 bg-[#F7F7F2] border-l-2 border-[#B7D51F]"
                >
                  <span className="text-lg font-extrabold text-[#B7D51F] font-heading tabular-nums shrink-0 pt-0.5">
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#151515] font-heading mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#151515]/90 mb-1">
                      “{feature.description}”
                    </p>
                    <p className="text-xs sm:text-sm text-[#151515]/70 leading-relaxed">
                      {feature.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick CTA */}
            <div>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#151515] bg-[#B7D51F] hover:bg-[#c6e625] transition-colors rounded-sm shadow-sm"
              >
                <span>Plan Your Space With S&G</span>
                <ArrowRight className="w-4 h-4 text-[#151515]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
