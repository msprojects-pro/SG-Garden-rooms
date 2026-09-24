import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GardenRooms } from './components/GardenRooms';
import { WhySG } from './components/WhySG';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleSelectProduct = (category: string) => {
    setSelectedCategory(category);
  };

  const handleClearCategory = () => {
    setSelectedCategory('');
  };

  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#151515] flex flex-col font-sans selection:bg-[#B7D51F] selection:text-[#151515]">
      {/* Sticky Top Navigation */}
      <Navbar onEnquireClick={() => setSelectedCategory('')} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Garden Rooms / What We Offer */}
        <GardenRooms onSelectProduct={handleSelectProduct} />

        {/* 3. Why S&G */}
        <WhySG />

        {/* 4. Inspiration / Gallery */}
        <Gallery />

        {/* 5. Contact / Enquiry */}
        <Contact
          selectedCategory={selectedCategory}
          onClearCategory={handleClearCategory}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
