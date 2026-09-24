/**
 * S&G Garden Rooms - Business Content & Configuration
 */

export const BUSINESS_INFO = {
  name: 'S&G Garden Rooms',
  tagline: 'More Space. Right In Your Garden.',
  phoneInternational: '+44 7535 156492',
  phoneDisplay: '07535 156492',
  phoneTel: '+447535156492',
  email: 'sggardenrooms@gmail.com',
  facebook: 'S&G Garden Rooms',
  facebookUrl: 'https://www.facebook.com/search/top?q=S%26G%20Garden%20Rooms',
  address: {
    street: 'Coast Road',
    city: 'Peterlee',
    country: 'United Kingdom',
    full: 'Coast Road, Peterlee, United Kingdom',
  },
  location: 'Peterlee, United Kingdom',
  rating: '100% recommend',
};

export interface ProductItem {
  id: string;
  number: string;
  title: string;
  description: string;
  imageKey: 'manCave' | 'sunRoom' | 'logCabin' | 'workshop' | 'gardenBar' | 'custom';
  tags: string[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'man-caves',
    number: '01',
    title: 'MAN-CAVES',
    description: 'Create a dedicated space for relaxing, entertaining and enjoying your own time.',
    imageKey: 'manCave',
    tags: ['Relaxation', 'Entertainment', 'Optics Units', 'Personal Den'],
  },
  {
    id: 'sun-rooms',
    number: '02',
    title: 'SUN-ROOMS',
    description: 'Bright, comfortable garden spaces designed to bring more usable space into your home.',
    imageKey: 'sunRoom',
    tags: ['Natural Light', 'Relaxing Lounge', 'Garden Views'],
  },
  {
    id: 'log-cabins',
    number: '03',
    title: 'LOG CABINS',
    description: 'Versatile garden buildings suitable for work, leisure or additional space.',
    imageKey: 'logCabin',
    tags: ['Versatile Living', 'Timber Character', 'Multi-Purpose'],
  },
  {
    id: 'sheds-workshops',
    number: '04',
    title: 'SHEDS & WORKSHOPS',
    description: 'Practical dedicated spaces for hobbies, tools, projects and storage.',
    imageKey: 'workshop',
    tags: ['Hobby Studio', 'Tool Storage', 'Heavy-Duty Workspaces'],
  },
  {
    id: 'garden-bars',
    number: '05',
    title: 'GARDEN BARS',
    description: 'Create your own entertaining space in the garden.',
    imageKey: 'gardenBar',
    tags: ['Bespoke Counters', 'Optics Units', 'Social Entertaining'],
  },
  {
    id: 'custom-buildings',
    number: '06',
    title: 'CUSTOM GARDEN BUILDINGS',
    description: 'Flexible buildings tailored around your requirements, including home offices, guest accommodation and extra living space.',
    imageKey: 'custom',
    tags: ['Home Offices', 'Guest Rooms', 'Holiday Accommodation', 'Tailored Space'],
  },
];

export const ENQUIRY_OPTIONS = [
  'Man-cave',
  'Sun-room',
  'Log cabin',
  'Shed / Workshop',
  'Garden bar',
  'Optics unit',
  'Home office',
  'Guest accommodation',
  'Extra living space',
  'Holiday accommodation',
  'Custom garden building',
  'Not sure yet',
] as const;

export const WHY_FEATURES = [
  {
    number: '01',
    title: 'Flexible Internal Layouts',
    description: 'Layouts tailored to your requirements.',
    detail: 'Whether configured with partition walls, an optics bar counter, or an open-plan executive desk space, each building adapts to how you intend to use it.',
  },
  {
    number: '02',
    title: 'Modern, Low-Maintenance Construction',
    description: 'Practical spaces designed for modern use.',
    detail: 'Contemporary styling and durable exterior finishes ensure your garden building remains an asset to your property year after year with minimal upkeep.',
  },
  {
    number: '03',
    title: 'Delivered Compact. Expanded On-Site.',
    description: 'A clever delivery approach for garden buildings.',
    detail: 'Engineered for smooth delivery to your property, then expanded and assembled securely on-site with minimal disruption to your home and lawn.',
  },
];
