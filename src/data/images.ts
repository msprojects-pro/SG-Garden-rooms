/**
 * S&G Garden Rooms - Centralized Image Registry
 *
 * NOTE FOR BUSINESS OWNER / DEVELOPER:
 * Replace the image paths below with actual high-resolution S&G Garden Rooms project photographs
 * when ready. All images across the website reference this centralized data file.
 */

import heroGardenRoom from '@/src/assets/images/hero_garden_room_1790240658949.jpg';
import officeInterior from '@/src/assets/images/office_interior_1790240673504.jpg';
import gardenBar from '@/src/assets/images/garden_bar_1790240684522.jpg';
import logCabin from '@/src/assets/images/log_cabin_1790240697118.jpg';
import gardenWorkshop from '@/src/assets/images/garden_workshop_1790240709134.jpg';
import loungeInterior from '@/src/assets/images/lounge_interior_1790240747595.jpg';

export interface SiteImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

export const siteImages = {
  hero: {
    src: heroGardenRoom,
    alt: 'Contemporary timber-clad garden room building in a landscaped British garden with anthracite sliding doors and warm interior lighting',
  },
  whyInterior: {
    src: officeInterior,
    alt: 'Spacious interior view of a modern garden room home office with desk, large glass doors, and natural garden light',
  },
  gallery: [
    {
      id: 'gallery-office',
      src: officeInterior,
      alt: 'Dedicated garden office building with clean Scandinavian interior, work desk, and floor-to-ceiling glass doors',
      caption: 'Quiet, light-filled workspace just steps from your back door.',
      category: 'HOME OFFICE',
    },
    {
      id: 'gallery-bar',
      src: gardenBar,
      alt: 'Bespoke garden bar and lounge room with optics unit, timber bar top, and atmospheric pendant lighting',
      caption: 'The ultimate garden entertaining space for family and friends.',
      category: 'GARDEN BAR',
    },
    {
      id: 'gallery-exterior',
      src: heroGardenRoom,
      alt: 'Contemporary timber garden room building exterior with sleek anthracite trim and landscaped garden patio',
      caption: 'Architectural exterior styling designed for modern UK homes.',
      category: 'GARDEN ROOM',
    },
    {
      id: 'gallery-cabin',
      src: logCabin,
      alt: 'Versatile timber log cabin garden building with double glazing and integrated composite decking',
      caption: 'Solid, versatile timber structures tailored for multi-purpose use.',
      category: 'LEISURE SPACE',
    },
    {
      id: 'gallery-workshop',
      src: gardenWorkshop,
      alt: 'Contemporary garden workshop and hobby room with heavy-duty workbench and bright transom windows',
      caption: 'Practical, well-lit spaces for tools, creative hobbies, and craft projects.',
      category: 'WORKSHOP',
    },
    {
      id: 'gallery-lounge',
      src: loungeInterior,
      alt: 'Comfortable garden room interior fitted as an extra living space, reading lounge, or guest accommodation',
      caption: 'Generous additional living and guest space without moving house.',
      category: 'GUEST SPACE',
    },
  ] as SiteImage[],
  products: {
    manCave: gardenBar,
    sunRoom: loungeInterior,
    logCabin: logCabin,
    workshop: gardenWorkshop,
    gardenBar: gardenBar,
    custom: heroGardenRoom,
  }
};
