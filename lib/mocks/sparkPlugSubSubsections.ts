// lib/mocks/sparkPlugSubSubsections.ts
import { SubSubCategory, Part } from '@/lib/types/parts';

const generateMockParts = (subsubcategoryId: string, baseParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[]): Part[] => {
  return baseParts.map((part, index) => ({
    ...part,
    id: `${subsubcategoryId}-${index + 1}`,
    category: 'maintenance',
    subcategory: 'ignition',
    subsubcategory: 'spark-plugs',
    subsubsubcategory: subsubcategoryId,
  }));
};

// Bujías de Encendido
const ignitionSparkPlugParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[] = [
  {
    name: 'Bujías Encendido NGK BKR6E',
    brand: 'NGK',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Bujías de encendido estándar, 4 unidades, electrodo central de cobre',
    compatibility: ['Fiat Grande Punto 1.4'],
    inStock: true,
    rating: 4.6,
  },
  {
    name: 'Bujías Iridium BKR6EIX',
    brand: 'NGK',
    price: 28.50,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Bujías de iridio premium, 4 unidades, mayor durabilidad y rendimiento',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.8,
  },
  {
    name: 'Bujías Platino BKR6EQUP',
    brand: 'NGK',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Bujías de platino, 4 unidades, electrodo doble para mejor combustión',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.7,
  },
  {
    name: 'Bujías Encendido Bosch FR7DPP',
    brand: 'Bosch',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Bujías de encendido Bosch, 4 unidades, electrodo de platino',
    compatibility: ['Fiat Grande Punto'],
    inStock: false,
    rating: 4.5,
  },
];

// Bujías de Precalentamiento
const preheatingSparkPlugParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[] = [
  {
    name: 'Bujías Precalentamiento Beru GS105',
    brand: 'Beru',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Bujías de precalentamiento para motores diésel, 4 unidades, encendido rápido',
    compatibility: ['Fiat Grande Punto 1.3 Multijet'],
    inStock: true,
    rating: 4.5,
  },
  {
    name: 'Bujías Precalentamiento Bosch 0250203007',
    brand: 'Bosch',
    price: 52.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Bujías de precalentamiento Bosch, 4 unidades, sistema de precalentamiento rápido',
    compatibility: ['Fiat Grande Punto 1.3 Multijet'],
    inStock: true,
    rating: 4.6,
  },
  {
    name: 'Bujías Precalentamiento NGK Y-101R',
    brand: 'NGK',
    price: 48.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Bujías de precalentamiento NGK, 4 unidades, alta resistencia',
    compatibility: ['Fiat Grande Punto 1.3 Multijet'],
    inStock: true,
    rating: 4.4,
  },
  {
    name: 'Bujías Precalentamiento Valeo 0250302017',
    brand: 'Valeo',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Bujías de precalentamiento Valeo, 4 unidades, encendido instantáneo',
    compatibility: ['Fiat Grande Punto 1.3 Multijet'],
    inStock: false,
    rating: 4.3,
  },
];

export const sparkPlugSubSubsections: SubSubCategory[] = [
  {
    id: 'ignition-spark-plugs',
    name: 'Bujías de Encendido',
    icon: 'Zap',
    description: 'Bujías de encendido para motores gasolina, diferentes materiales',
    parts: generateMockParts('ignition-spark-plugs', ignitionSparkPlugParts),
  },
  {
    id: 'preheating-spark-plugs',
    name: 'Bujías de Precalentamiento',
    icon: 'Thermometer',
    description: 'Bujías de precalentamiento para motores diésel',
    parts: generateMockParts('preheating-spark-plugs', preheatingSparkPlugParts),
  },
];
