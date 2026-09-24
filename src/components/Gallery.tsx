import { useState } from 'react';
import { ArrowUpRight, ArrowRight, X, Maximize2, Sparkles } from 'lucide-react';
import { siteImages, SiteImage } from '../data/images';

export function Gallery() {
  const [activeImage, setActiveImage] = useState<SiteImage | null>(null);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const images = siteImages.gallery;

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#F7F7F2] text-[#151515] border-t border-[#151515]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#151515]/15 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#B7D51F]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#151515]/70">
                GET INSPIRED
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#151515] font-heading">
              Spaces Made For Living.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#151515]/75 leading-relaxed">
            Explore concepts and setups created to turn underutilised garden ground into functional, year-round living, work, and entertaining hubs.
          </p>
        </div>

        {/* Modern Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mb-16">
          {/* Item 1: Large Featured Lead (Office) - Span 7 */}
          <div
            onClick={() => setActiveImage(images[0])}
            className="group cursor-pointer md:col-span-7 relative overflow-hidden bg-[#151515] border border-[#151515]/10 hover:border-[#B7D51F] transition-all duration-300"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={images[0].src}
                alt={images[0].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-[#151515]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute top-4 left-4 bg-[#151515] text-[#B7D51F] text-xs font-bold tracking-widest uppercase px-3 py-1.5 border-l-2 border-[#B7D51F]">
              {images[0].category}
            </div>
            <div className="p-6 bg-white flex items-center justify-between border-t border-[#151515]/10">
              <div>
                <p className="text-base font-bold text-[#151515] font-heading">{images[0].caption}</p>
                <p className="text-xs text-[#151515]/60 mt-0.5">Click to view full image</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#F7F7F2] group-hover:bg-[#B7D51F] flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-4 h-4 text-[#151515]" />
              </div>
            </div>
          </div>

          {/* Item 2: Garden Bar - Span 5 */}
          <div
            onClick={() => setActiveImage(images[1])}
            className="group cursor-pointer md:col-span-5 relative overflow-hidden bg-[#151515] border border-[#151515]/10 hover:border-[#B7D51F] transition-all duration-300 flex flex-col"
          >
            <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden flex-1">
              <img
                src={images[1].src}
                alt={images[1].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-[#151515]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute top-4 left-4 bg-[#151515] text-[#B7D51F] text-xs font-bold tracking-widest uppercase px-3 py-1.5 border-l-2 border-[#B7D51F]">
              {images[1].category}
            </div>
            <div className="p-6 bg-white flex items-center justify-between border-t border-[#151515]/10">
              <div>
                <p className="text-base font-bold text-[#151515] font-heading">{images[1].caption}</p>
                <p className="text-xs text-[#151515]/60 mt-0.5">Click to view full image</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#F7F7F2] group-hover:bg-[#B7D51F] flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-4 h-4 text-[#151515]" />
              </div>
            </div>
          </div>

          {/* Item 3: Exterior Garden Room - Span 4 */}
          <div
            onClick={() => setActiveImage(images[2])}
            className="group cursor-pointer md:col-span-4 relative overflow-hidden bg-[#151515] border border-[#151515]/10 hover:border-[#B7D51F] transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={images[2].src}
                alt={images[2].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-[#151515]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute top-4 left-4 bg-[#151515] text-[#B7D51F] text-xs font-bold tracking-widest uppercase px-3 py-1.5 border-l-2 border-[#B7D51F]">
              {images[2].category}
            </div>
            <div className="p-5 bg-white flex items-center justify-between border-t border-[#151515]/10">
              <div>
                <p className="text-sm font-bold text-[#151515] font-heading">{images[2].caption}</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#F7F7F2] group-hover:bg-[#B7D51F] flex items-center justify-center transition-colors shrink-0 ml-2">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#151515]" />
              </div>
            </div>
          </div>

          {/* Item 4: Log Cabin - Span 4 */}
          <div
            onClick={() => setActiveImage(images[3])}
            className="group cursor-pointer md:col-span-4 relative overflow-hidden bg-[#151515] border border-[#151515]/10 hover:border-[#B7D51F] transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={images[3].src}
                alt={images[3].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-[#151515]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute top-4 left-4 bg-[#151515] text-[#B7D51F] text-xs font-bold tracking-widest uppercase px-3 py-1.5 border-l-2 border-[#B7D51F]">
              {images[3].category}
            </div>
            <div className="p-5 bg-white flex items-center justify-between border-t border-[#151515]/10">
              <div>
                <p className="text-sm font-bold text-[#151515] font-heading">{images[3].caption}</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#F7F7F2] group-hover:bg-[#B7D51F] flex items-center justify-center transition-colors shrink-0 ml-2">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#151515]" />
              </div>
            </div>
          </div>

          {/* Item 5: Workshop - Span 4 */}
          <div
            onClick={() => setActiveImage(images[4])}
            className="group cursor-pointer md:col-span-4 relative overflow-hidden bg-[#151515] border border-[#151515]/10 hover:border-[#B7D51F] transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={images[4].src}
                alt={images[4].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-[#151515]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute top-4 left-4 bg-[#151515] text-[#B7D51F] text-xs font-bold tracking-widest uppercase px-3 py-1.5 border-l-2 border-[#B7D51F]">
              {images[4].category}
            </div>
            <div className="p-5 bg-white flex items-center justify-between border-t border-[#151515]/10">
              <div>
                <p className="text-sm font-bold text-[#151515] font-heading">{images[4].caption}</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#F7F7F2] group-hover:bg-[#B7D51F] flex items-center justify-center transition-colors shrink-0 ml-2">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#151515]" />
              </div>
            </div>
          </div>

          {/* Item 6: Guest Space / Comfortable Interior - Span 12 Full Width Editorial Feature */}
          <div
            onClick={() => setActiveImage(images[5])}
            className="group cursor-pointer md:col-span-12 relative overflow-hidden bg-[#151515] border border-[#151515]/10 hover:border-[#B7D51F] transition-all duration-300"
          >
            <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
              <img
                src={images[5].src}
                alt={images[5].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-[#151515]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute top-4 left-4 bg-[#151515] text-[#B7D51F] text-xs font-bold tracking-widest uppercase px-3 py-1.5 border-l-2 border-[#B7D51F]">
              {images[5].category}
            </div>
            <div className="p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#151515]/10">
              <div>
                <p className="text-base sm:text-lg font-bold text-[#151515] font-heading">{images[5].caption}</p>
                <p className="text-xs text-[#151515]/60 mt-0.5">Flexible garden room designed for extra living, relaxation, or guests.</p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#151515]">
                <span>View Detail</span>
                <div className="w-8 h-8 rounded-full bg-[#F7F7F2] group-hover:bg-[#B7D51F] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[#151515]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Below the Gallery CTA Callout as specified */}
        <div className="p-8 sm:p-10 bg-white border border-[#151515]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-[#151515] font-heading mb-1">
              Have an idea for your garden?
            </h3>
            <p className="text-sm text-[#151515]/70">
              Tell us your dimensions, desired purpose, and preferred layout.
            </p>
          </div>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#151515] bg-[#B7D51F] hover:bg-[#c6e625] transition-colors rounded-sm shadow-sm whitespace-nowrap self-start sm:self-center"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 text-[#151515]" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#151515]/95 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#151515] border border-white/10 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] max-h-[75vh] w-full overflow-hidden bg-black">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-[#151515] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B7D51F]">
                  {activeImage.category}
                </span>
                <p className="text-base font-semibold text-white mt-1">
                  {activeImage.caption}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    setActiveImage(null);
                    scrollToContact(e);
                  }}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#151515] bg-[#B7D51F] hover:bg-[#c6e625] transition-colors rounded-sm"
                >
                  Enquire About This Style
                </a>
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="p-2 text-white/70 hover:text-white border border-white/20 hover:border-white rounded-sm"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
