// lib/mocks/maintenanceSubsections.ts
import { SubCategory, Part } from '@/lib/types/parts';
import { oilsSubSubsections } from './oilsSubSubsections';
import { filtersSubSubsections } from './filtersSubSubsections';
import { brakesSubSubsections } from './brakesSubSubsections';
import { ignitionSubSubsections } from './ignitionSubSubsections';
import { suspensionSubSubsections } from './suspensionSubSubsections';

const generateMockParts = (subcategoryId: string, baseParts: Omit<Part, 'id' | 'category' | 'subcategory'>[]): Part[] => {
  return baseParts.map((part, index) => ({
    ...part,
    id: `${subcategoryId}-${index + 1}`,
    category: 'maintenance',
    subcategory: subcategoryId,
  }));
};

// Aceites
// Combine all oil products from subsubcategories
const oilsParts: Omit<Part, 'id' | 'category' | 'subcategory'>[] = oilsSubSubsections.flatMap(subsub => 
  subsub.parts.map(part => ({
    ...part,
    subsubcategory: subsub.id
  }))
);

// Filtros
// Combine all filter products from subsubcategories
const filtersParts: Omit<Part, 'id' | 'category' | 'subcategory'>[] = filtersSubSubsections.flatMap(subsub =>
  subsub.parts.map(part => ({
    ...part,
    subsubcategory: subsub.id
  }))
);

// Sistema de Frenos
// Combine all brake products from subsubcategories
const brakesParts: Omit<Part, 'id' | 'category' | 'subcategory'>[] = brakesSubSubsections.flatMap(subsub =>
  subsub.parts.map(part => ({
    ...part,
    subsubcategory: subsub.id
  }))
);

// Sistema de Encendido
// Combine all ignition products from subsubcategories
const ignitionParts: Omit<Part, 'id' | 'category' | 'subcategory'>[] = ignitionSubSubsections.flatMap(subsub =>
  subsub.parts.map(part => ({
    ...part,
    subsubcategory: subsub.id
  }))
);

// Dirección (Rótulas de Suspensión)
// Combine all suspension products from subsubcategories
const suspensionParts: Omit<Part, 'id' | 'category' | 'subcategory'>[] = suspensionSubSubsections.flatMap(subsub =>
  subsub.parts.map(part => ({
    ...part,
    subsubcategory: subsub.id
  }))
);

// Correa Poli V
const beltParts: Omit<Part, 'id' | 'category' | 'subcategory'>[] = [
  {
    name: 'Correa de Accesorios 6PK1193',
    brand: 'Gates',
    price: 18.75,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Correa de accesorios, 6PK1193',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.3,
  },
  {
    name: 'Correa de Distribución 4PK1095',
    brand: 'Continental',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Correa de distribución, 4PK1095',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.7,
  },
  {
    name: 'Tensores de Correa',
    brand: 'INA',
    price: 45.50,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Tensores de correa de distribución',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.4,
  },
];

// Rótulas de Dirección
const steeringParts: Omit<Part, 'id' | 'category' | 'subcategory'>[] = [
  {
    name: 'Rótula de Dirección Inferior',
    brand: 'Lemförder',
    price: 28.50,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Rótula de dirección inferior, con tornillo',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.2,
  },
  {
    name: 'Terminal de Dirección Exterior',
    brand: 'TRW',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Terminal de dirección exterior, roscado',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.4,
  },
  {
    name: 'Bieleta de Dirección',
    brand: 'Febi',
    price: 18.75,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Bieleta de dirección, con rótulas',
    compatibility: ['Fiat Grande Punto'],
    inStock: false,
    rating: 4.1,
  },
];



// Limpia Parabrisas
const wiperParts: Omit<Part, 'id' | 'category' | 'subcategory'>[] = [
  {
    name: 'Escobillas Delanteras',
    brand: 'Bosch',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Juego de escobillas delanteras, 60cm',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.4,
  },
  {
    name: 'Líquido Limpiaparabrisas',
    brand: 'Sonax',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Líquido limpiaparabrisas, 5L, -20°C',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.2,
  },
  {
    name: 'Bomba Limpiaparabrisas',
    brand: 'Valeo',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Bomba de agua limpiaparabrisas',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.0,
  },
];

export const maintenanceSubsections: SubCategory[] = [
  {
    id: 'oils',
    name: 'Aceites',
    icon: 'Droplets',
    description: 'Aceite de motor, transmisión, diferencial, hidráulico',
    parts: generateMockParts('oils', oilsParts),
  },
  {
    id: 'filters',
    name: 'Filtros',
    icon: 'Filter',
    description: 'Filtro de aceite, aire, combustible, habitáculo',
    parts: generateMockParts('filters', filtersParts),
  },
  {
    id: 'brakes',
    name: 'Sistema de Frenos',
    icon: 'CircleStop',
    description: 'Pastillas, discos, líquido de frenos, latiguillos',
    parts: generateMockParts('brakes', brakesParts),
  },
  {
    id: 'ignition',
    name: 'Sistema de Encendido',
    icon: 'Zap',
    description: 'Bujías y Batería',
    parts: generateMockParts('ignition', ignitionParts),
  },
  {
    id: 'belts',
    name: 'Correa Poli V',
    icon: 'Zap',
    description: 'Correa de accesorios, distribución, tensores',
    parts: generateMockParts('belts', beltParts),
  },
  {
    id: 'steering',
    name: 'Suspensión y Accesorios',
    icon: 'Navigation',
    description: 'Rótulas, terminales, bieletas de dirección',
    parts: generateMockParts('steering', steeringParts),
  },
  {
    id: 'suspension',
    name: 'Dirección y Accesorios',
    icon: 'Car',
    description: 'Rótulas, bieletas, amortiguadores',
    parts: generateMockParts('suspension', suspensionParts),
  },
  {
    id: 'wipers',
    name: 'Limpia Parabrisas',
    icon: 'Wind',
    description: 'Escobillas, líquido, bombas, manguitos',
    parts: generateMockParts('wipers', wiperParts),
  },
];
