import { ArrowUpRight, Check, Maximize2 } from 'lucide-react';
import { PRODUCTS, ProductItem } from '../data/content';
import { siteImages } from '../data/images';

interface GardenRoomsProps {
  onSelectProduct?: (productTitle: string) => void;
}

export function GardenRooms({ onSelectProduct }: GardenRoomsProps) {
  const getProductImage = (key: ProductItem['imageKey']) => {
    switch (key) {
      case 'manCave':
        return siteImages.products.manCave;
      case 'sunRoom':
        return siteImages.products.sunRoom;
      case 'logCabin':
        return siteImages.products.logCabin;
      case 'workshop':
        return siteImages.products.workshop;
      case 'gardenBar':
        return siteImages.products.gardenBar;
      case 'custom':
        return siteImages.products.custom;
      default:
        return siteImages.hero.src;
    }
  };

  const handleProductEnquire = (title: string) => {
    if (onSelectProduct) {
      // Map to exact dropdown string
      let category = 'Custom garden building';
      if (title.includes('MAN-CAVE')) category = 'Man-cave';
      else if (title.includes('SUN-ROOM')) category = 'Sun-room';
      else if (title.includes('LOG CABIN')) category = 'Log cabin';
      else if (title.includes('SHED') || title.includes('WORKSHOP')) category = 'Shed / Workshop';
      else if (title.includes('BAR')) category = 'Garden bar';
      else if (title.includes('CUSTOM')) category = 'Custom garden building';

      onSelectProduct(category);
    }

    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="garden-rooms" className="py-24 sm:py-32 bg-[#F7F7F2] text-[#151515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#151515]/15 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#B7D51F]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#151515]/70">
                WHAT WE OFFER
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#151515] font-heading">
              Your Space. Your Purpose.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#151515]/75 leading-relaxed">
            Every building is designed around your specific outdoor space and lifestyle needs—from work focus to social entertaining.
          </p>
        </div>

        {/* Sophisticated Architectural Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PRODUCTS.map((product) => {
            const imgSrc = getProductImage(product.imageKey);

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white border border-[#151515]/10 hover:border-[#151515] transition-all duration-300"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#151515] border-b border-[#151515]/10">
                  <img
                    src={imgSrc}
                    alt={`${product.title} - S&G Garden Rooms`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Architectural Number Overlay */}
                  <div className="absolute top-4 left-4 bg-[#151515] text-[#B7D51F] px-3 py-1 text-xs font-bold tracking-wider border border-[#B7D51F]/30 font-heading">
                    {product.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[#151515] mb-2.5 font-heading">
                      {product.title}
                    </h3>
                    <p className="text-sm text-[#151515]/75 leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#151515]/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5 text-xs text-[#151515]/60 font-medium">
                      {product.tags.slice(0, 2).map((tag, idx) => (
                        <span key={tag}>
                          {tag}
                          {idx === 0 && <span className="ml-1 text-[#151515]/30">·</span>}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleProductEnquire(product.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#151515] hover:text-black group/btn py-1"
                    >
                      <span className="border-b-2 border-[#B7D51F] group-hover/btn:border-[#151515] transition-colors pb-0.5">
                        Enquire
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#151515] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expandable Garden Buildings Callout Banner */}
        <div className="bg-[#151515] text-white p-8 sm:p-10 border-l-4 border-[#B7D51F] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B7D51F] mb-2">
                <Maximize2 className="w-3.5 h-3.5 text-[#B7D51F]" />
                <span>Expandable Garden Buildings</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 font-heading">
                Delivered compact and expanded on-site.
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Our clever design allows modular building sections to be transported smoothly through standard residential access and expanded to full scale right on your property.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleProductEnquire('CUSTOM GARDEN BUILDINGS')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#151515] bg-[#B7D51F] hover:bg-[#c6e625] transition-colors rounded-sm whitespace-nowrap self-start md:self-center"
            >
              <span>Ask About Expandable Options</span>
              <ArrowUpRight className="w-4 h-4 text-[#151515]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
