// lib/mocks/clutchActuationSubSubsections.ts
import { SubSubCategory, Part } from '@/lib/types/parts';

const generateMockParts = (subsubcategoryId: string, baseParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[]): Part[] => {
  return baseParts.map((part, index) => ({
    ...part,
    id: `${subsubcategoryId}-${index + 1}`,
    category: 'clutch',
    subcategory: 'clutch-actuation',
    subsubcategory: subsubcategoryId,
  }));
};

// Bomba de Embrague
const clutchPumpParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[] = [
  {
    name: 'Bomba de Embrague Maestro Luk 620 0430 00',
    brand: 'Luk',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Bomba maestra de embrague hidráulico con sistema de accionamiento suave y preciso para vehículos de transmisión manual.',
    compatibility: ['Fiat Grande Punto', 'Fiat Punto Evo'],
    inStock: true,
    rating: 4.4,
  },
  {
    name: 'Bomba de Embrague Maestro Sachs 3000 952 001',
    brand: 'Sachs',
    price: 52.50,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Bomba maestra de embrague con cilindro hidráulico de alta presión y durabilidad superior.',
    compatibility: ['Fiat 500', 'Fiat Panda'],
    inStock: true,
    rating: 4.6,
  },
  {
    name: 'Bomba de Embrague Maestro Valeo 415044',
    brand: 'Valeo',
    price: 38.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Bomba maestra de embrague original con sistema hidráulico optimizado para mayor comodidad de conducción.',
    compatibility: ['Fiat Grande Punto', 'Fiat Punto Evo', 'Fiat 500'],
    inStock: true,
    rating: 4.5,
  },
  {
    name: 'Bomba de Embrague Maestro TRW TKC 1234',
    brand: 'TRW',
    price: 42.75,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Bomba maestra de embrague con tecnología de sellado mejorada y resistencia a la corrosión.',
    compatibility: ['Fiat Grande Punto', 'Fiat Punto Evo'],
    inStock: true,
    rating: 4.3,
  },
  {
    name: 'Bomba de Embrague Maestro Competition Clutch CC-5678',
    brand: 'Competition Clutch',
    price: 75.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Bomba maestra de embrague reforzada para alto rendimiento con sistema de accionamiento mejorado.',
    compatibility: ['Fiat Grande Punto'],
    inStock: false,
    rating: 4.7,
  },
];

// Bombín de Embrague
const clutchCylinderParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[] = [
  {
    name: 'Bombín de Embrague Esclavo Luk 620 0430 00',
    brand: 'Luk',
    price: 38.50,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Bombín esclavo de embrague hidráulico con cilindro de alta precisión y sellado mejorado.',
    compatibility: ['Fiat Grande Punto', 'Fiat Punto Evo'],
    inStock: true,
    rating: 4.4,
  },
  {
    name: 'Bombín de Embrague Esclavo Sachs 3000 952 001',
    brand: 'Sachs',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Bombín esclavo de embrague con sistema hidráulico de alta presión y durabilidad extendida.',
    compatibility: ['Fiat 500', 'Fiat Panda'],
    inStock: true,
    rating: 4.5,
  },
  {
    name: 'Bombín de Embrague Esclavo Valeo 415044',
    brand: 'Valeo',
    price: 32.75,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Bombín esclavo de embrague original con tecnología de sellado avanzada y funcionamiento suave.',
    compatibility: ['Fiat Grande Punto', 'Fiat Punto Evo', 'Fiat 500'],
    inStock: true,
    rating: 4.3,
  },
  {
    name: 'Bombín de Embrague Esclavo TRW TKC 5678',
    brand: 'TRW',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Bombín esclavo de embrague con resistencia mejorada a la corrosión y sellado de alta calidad.',
    compatibility: ['Fiat Grande Punto', 'Fiat Punto Evo'],
    inStock: true,
    rating: 4.2,
  },
  {
    name: 'Bombín de Embrague Esclavo Competition Clutch CC-9999',
    brand: 'Competition Clutch',
    price: 55.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Bombín esclavo de embrague reforzado para alto rendimiento con sistema hidráulico mejorado.',
    compatibility: ['Fiat Grande Punto'],
    inStock: false,
    rating: 4.6,
  },
];

export const clutchActuationSubSubsections: SubSubCategory[] = [
  {
    id: 'clutch-pump',
    name: 'Bomba de Embrague',
    icon: 'Settings',
    description: 'Bombas maestras de embrague hidráulico y sistemas de accionamiento',
    parts: generateMockParts('clutch-pump', clutchPumpParts),
  },
  {
    id: 'clutch-cylinder',
    name: 'Bombín de Embrague',
    icon: 'Cog',
    description: 'Bombines esclavos de embrague hidráulico y cilindros de accionamiento',
    parts: generateMockParts('clutch-cylinder', clutchCylinderParts),
  },
];
