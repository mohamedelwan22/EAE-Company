// Auto-import all project images from asset sub-folders using Vite's import.meta.glob
const sprayBoothImages = import.meta.glob<string>(
  '../assets/projects/spray-booth/*',
  { eager: true, import: 'default' }
);
const carLiftLargeImages = import.meta.glob<string>(
  '../assets/projects/car-lift-large/*',
  { eager: true, import: 'default' }
);
const carLiftSmallImages = import.meta.glob<string>(
  '../assets/projects/car-lift-small/*',
  { eager: true, import: 'default' }
);
const compressorImages = import.meta.glob<string>(
  '../assets/projects/compressor/*',
  { eager: true, import: 'default' }
);
const scissorLiftImages = import.meta.glob<string>(
  '../assets/projects/scissor-lift/*',
  { eager: true, import: 'default' }
);

// Helper to convert glob record to simple URL array
const toArray = (glob: Record<string, string>): string[] => Object.values(glob);

export interface Project {
  id: string;
  titleAr: string;
  titleEn: string;
  locationAr: string;
  locationEn: string;
  year: string;
  category: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 'spray-booth-projects',
    titleAr: 'مشاريع أفران الدهان',
    titleEn: 'Spray Booth Projects',
    locationAr: 'مناطق متعددة',
    locationEn: 'Multiple Regions',
    year: '2023',
    category: 'spray-booth',
    images: toArray(sprayBoothImages),
  },
  {
    id: 'car-lift-large-projects',
    titleAr: 'مشاريع رافعات السيارات الكبيرة',
    titleEn: 'Large Car Lift Projects',
    locationAr: 'مناطق متعددة',
    locationEn: 'Multiple Regions',
    year: '2023',
    category: 'car-lift',
    images: toArray(carLiftLargeImages),
  },
  {
    id: 'car-lift-small-projects',
    titleAr: 'مشاريع رافعات السيارات',
    titleEn: 'Car Lift Projects',
    locationAr: 'مناطق متعددة',
    locationEn: 'Multiple Regions',
    year: '2022',
    category: 'car-lift',
    images: toArray(carLiftSmallImages),
  },
  {
    id: 'compressor-projects',
    titleAr: 'مشاريع ضواغط الهواء',
    titleEn: 'Compressor Projects',
    locationAr: 'مناطق متعددة',
    locationEn: 'Multiple Regions',
    year: '2022',
    category: 'compressor',
    images: toArray(compressorImages),
  },
  {
    id: 'scissor-lift-projects',
    titleAr: 'مشاريع الرافعات المقصية',
    titleEn: 'Scissor Lift Projects',
    locationAr: 'مناطق متعددة',
    locationEn: 'Multiple Regions',
    year: '2023',
    category: 'car-lift',
    images: toArray(scissorLiftImages),
  },
];

export const projectCategories = [
  { id: 'all', ar: 'الكل', en: 'All' },
  { id: 'spray-booth', ar: 'أفران الدهان', en: 'Spray Booths' },
  { id: 'car-lift', ar: 'رافعات السيارات', en: 'Car Lifts' },
  { id: 'compressor', ar: 'ضاغطات الهواء', en: 'Compressors' },
];
