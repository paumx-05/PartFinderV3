// lib/mocks/brakesSubSubsections.ts
import { SubSubCategory, Part } from '@/lib/types/parts';

const generateMockParts = (subsubcategoryId: string, baseParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[]): Part[] => {
  return baseParts.map((part, index) => ({
    ...part,
    id: `${subsubcategoryId}-${index + 1}`,
    category: 'maintenance',
    subcategory: 'brakes',
    subsubcategory: subsubcategoryId,
  }));
};

// Freno de Disco
const discBrakeParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[] = [
  {
    name: 'Pastillas Freno Disco Delantero',
    brand: 'Brembo',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Pastillas de freno de disco delantero, material cerámico, compatible con Fiat Grande Punto',
    compatibility: ['Fiat Grande Punto 1.4'],
    inStock: true,
    rating: 4.7,
  },
  {
    name: 'Discos Freno Delanteros Ventilados',
    brand: 'Ferodo',
    price: 89.50,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Discos de freno ventilados delanteros, Ø 280mm, grosor 25mm',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.5,
  },
  {
    name: 'Sensores Desgaste Pastillas',
    brand: 'Bosch',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Sensores de desgaste para pastillas de freno, kit 2 unidades',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.3,
  },
  {
    name: 'Pastillas Freno Disco Trasero',
    brand: 'TRW',
    price: 38.75,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Pastillas de freno de disco trasero, material orgánico, kit 4 pastillas',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.4,
  },
  {
    name: 'Discos Freno Traseros Macizos',
    brand: 'ATE',
    price: 65.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Discos de freno macizos traseros, Ø 240mm, grosor 10mm',
    compatibility: ['Fiat Grande Punto'],
    inStock: false,
    rating: 4.2,
  },
  {
    name: 'Kit Pastillas + Discos Delanteros',
    brand: 'Brembo',
    price: 125.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Kit completo pastillas y discos delanteros, material premium, incluye sensores',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.8,
  },
];

// Freno de Tambor
const drumBrakeParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[] = [
  {
    name: 'Zapatas Freno Tambor Trasero',
    brand: 'Bendix',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Zapatas de freno para tambor trasero, kit 4 zapatas, material sinterizado',
    compatibility: ['Fiat Grande Punto 1.4'],
    inStock: true,
    rating: 4.5,
  },
  {
    name: 'Tambores Freno Traseros',
    brand: 'Ferodo',
    price: 78.50,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Tambores de freno traseros, Ø 180mm, fundición gris',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.3,
  },
  {
    name: 'Bombines Freno Traseros',
    brand: 'TRW',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Bombines de freno traseros, cilindros de rueda, kit 2 unidades',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.4,
  },
  {
    name: 'Kit Reparación Freno Tambor',
    brand: 'ATE',
    price: 95.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Kit completo reparación freno tambor: zapatas, tambores, bombines, resortes',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.6,
  },
  {
    name: 'Resortes Freno Tambor',
    brand: 'Valeo',
    price: 15.75,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Resortes de retorno para freno de tambor, kit completo',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.1,
  },
  {
    name: 'Zapatas Freno Tambor Premium',
    brand: 'Bendix',
    price: 52.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Zapatas de freno premium para tambor, material cerámico, mayor durabilidad',
    compatibility: ['Fiat Grande Punto'],
    inStock: false,
    rating: 4.7,
  },
];

export const brakesSubSubsections: SubSubCategory[] = [
  {
    id: 'disc-brake',
    name: 'Freno de Disco',
    icon: 'Disc',
    description: 'Pastillas de freno de disco, discos de freno, sensores de desgaste',
    parts: generateMockParts('disc-brake', discBrakeParts),
  },
  {
    id: 'drum-brake',
    name: 'Freno de Tambor',
    icon: 'Circle',
    description: 'Zapatas de freno, tambores de freno, bombines, kits de reparación',
    parts: generateMockParts('drum-brake', drumBrakeParts),
  },
];