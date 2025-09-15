// lib/mocks/beltSubSubsections.ts
import { SubSubCategory, Part } from '@/lib/types/parts';

const generateMockParts = (subsubcategoryId: string, baseParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[]): Part[] => {
  return baseParts.map((part, index) => ({
    ...part,
    id: `${subsubcategoryId}-${index + 1}`,
    category: 'maintenance',
    subcategory: 'belts',
    subsubcategory: subsubcategoryId,
  }));
};

// Correas
const beltParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[] = [
  {
    name: 'Correa de Distribución',
    brand: 'Gates',
    price: 89.50,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Correa de distribución con kit completo, incluye tensores',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.7,
  },
  {
    name: 'Correa de Accesorios',
    brand: 'Continental',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Correa de accesorios, transmisión de potencia a alternador y aire acondicionado',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.5,
  },
  {
    name: 'Correa de Aire Acondicionado',
    brand: 'Bosch',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Correa específica para compresor de aire acondicionado',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.3,
  },
  {
    name: 'Correa de Alternador',
    brand: 'Dayco',
    price: 28.50,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Correa de alternador, transmisión de potencia al generador',
    compatibility: ['Fiat Grande Punto'],
    inStock: false,
    rating: 4.2,
  },
  {
    name: 'Correa de Bomba de Agua',
    brand: 'Gates',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Correa de bomba de agua, circulación del refrigerante',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.4,
  },
  {
    name: 'Correa de Dirección Asistida',
    brand: 'Continental',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Correa de bomba de dirección asistida',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.6,
  },
];

// Tensores
const tensionerParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[] = [
  {
    name: 'Tensor de Correa de Distribución',
    brand: 'Gates',
    price: 125.50,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Tensor automático de correa de distribución con rodamiento',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.8,
  },
  {
    name: 'Tensor de Correa de Accesorios',
    brand: 'Continental',
    price: 78.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Tensor de correa de accesorios, ajuste automático de tensión',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.6,
  },
  {
    name: 'Rodillo Tensor',
    brand: 'Bosch',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Rodillo tensor con rodamiento sellado, guía de correa',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.4,
  },
  {
    name: 'Tensor Manual',
    brand: 'Dayco',
    price: 35.50,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Tensor manual para correas, ajuste manual de tensión',
    compatibility: ['Fiat Grande Punto'],
    inStock: false,
    rating: 4.1,
  },
  {
    name: 'Tensor de Aire Acondicionado',
    brand: 'Gates',
    price: 65.99,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    description: 'Tensor específico para correa de aire acondicionado',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.5,
  },
  {
    name: 'Kit de Tensores',
    brand: 'Continental',
    price: 185.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: 'Kit completo de tensores para distribución y accesorios',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.7,
  },
];

export const beltSubSubsections: SubSubCategory[] = [
  {
    id: 'belts',
    name: 'Correa',
    icon: 'Zap',
    description: 'Correas de distribución, accesorios, aire acondicionado y alternador',
    parts: generateMockParts('belts', beltParts),
  },
  {
    id: 'tensioners',
    name: 'Tensor',
    icon: 'Settings',
    description: 'Tensores automáticos, rodillos tensores y kits de tensores',
    parts: generateMockParts('tensioners', tensionerParts),
  },
];
