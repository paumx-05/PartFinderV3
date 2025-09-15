// lib/mocks/wipersSubSubsections.ts
import { SubSubCategory, Part } from '@/lib/types/parts';

const generateMockParts = (subsubcategoryId: string, baseParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[]): Part[] => {
  return baseParts.map((part, index) => ({
    ...part,
    id: `${subsubcategoryId}-${index + 1}`,
    category: 'maintenance',
    subcategory: 'wipers',
    subsubcategory: subsubcategoryId,
  }));
};

// Agua Limpiaparabrisas
const washerFluidParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[] = [
  {
    name: 'Líquido Limpiaparabrisas Concentrado',
    brand: 'Sonax',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Líquido concentrado para limpiar parabrisas, diluir 1:100',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.5,
  },
  {
    name: 'Agua Limpiaparabrisas Lista para Usar',
    brand: 'Turtle Wax',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Agua limpiaparabrisas lista para usar, 5 litros',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.3,
  },
  {
    name: 'Líquido Anticongelante',
    brand: 'Prestone',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Líquido anticongelante para parabrisas, resiste hasta -25°C',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.7,
  },
  {
    name: 'Agua Limpiaparabrisas Premium',
    brand: 'Rain-X',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Agua premium con propiedades hidrofóbicas, 3.8 litros',
    compatibility: ['Fiat Grande Punto'],
    inStock: false,
    rating: 4.6,
  },
  {
    name: 'Líquido Limpiaparabrisas Orgánico',
    brand: 'EcoClean',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Líquido orgánico biodegradable, respetuoso con el medio ambiente',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.4,
  },
  {
    name: 'Agua Limpiaparabrisas Invierno',
    brand: 'Sonax',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Especial para invierno, resiste hasta -15°C, 2 litros',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.5,
  },
];

// Escobillas
const wiperBladeParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[] = [
  {
    name: 'Escobilla Limpiaparabrisas Delantera',
    brand: 'Bosch',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Escobilla delantera izquierda, 600mm, tecnología Aerotwin',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.8,
  },
  {
    name: 'Escobilla Limpiaparabrisas Delantera Derecha',
    brand: 'Bosch',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Escobilla delantera derecha, 550mm, tecnología Aerotwin',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.7,
  },
  {
    name: 'Escobilla Limpiaparabrisas Trasera',
    brand: 'Valeo',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Escobilla trasera, 350mm, diseño específico para Fiat Grande Punto',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.5,
  },
  {
    name: 'Kit Escobillas Completo',
    brand: 'Bosch',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Kit completo: 2 escobillas delanteras + 1 trasera',
    compatibility: ['Fiat Grande Punto'],
    inStock: false,
    rating: 4.6,
  },
  {
    name: 'Escobilla Limpiaparabrisas Premium',
    brand: 'Michelin',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Escobilla premium con tecnología Stealth, 600mm',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.9,
  },
  {
    name: 'Escobilla Limpiaparabrisas Económica',
    brand: 'Generic',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Escobilla económica, 600mm, goma natural',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.1,
  },
];

export const wipersSubSubsections: SubSubCategory[] = [
  {
    id: 'washer-fluids',
    name: 'Agua Limpiaparabrisas',
    icon: 'Droplets',
    description: 'Líquidos limpiaparabrisas, concentrados, anticongelantes y orgánicos',
    parts: generateMockParts('washer-fluids', washerFluidParts),
  },
  {
    id: 'wiper-blades',
    name: 'Escobillas',
    icon: 'Wind',
    description: 'Escobillas delanteras, traseras, kits completos y recambios',
    parts: generateMockParts('wiper-blades', wiperBladeParts),
  },
];
