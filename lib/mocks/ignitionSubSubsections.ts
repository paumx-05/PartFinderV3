// lib/mocks/ignitionSubSubsections.ts
import { SubSubCategory, Part } from '@/lib/types/parts';

const generateMockParts = (subsubcategoryId: string, baseParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[]): Part[] => {
  return baseParts.map((part, index) => ({
    ...part,
    id: `${subsubcategoryId}-${index + 1}`,
    category: 'maintenance',
    subcategory: 'ignition',
    subsubcategory: subsubcategoryId,
  }));
};

// Batería
const batteryParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[] = [
  {
    name: 'Batería 12V 60Ah',
    brand: 'Varta',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Batería de plomo-ácido, 12V 60Ah, libre mantenimiento',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.5,
  },
  {
    name: 'Batería 12V 70Ah',
    brand: 'Bosch',
    price: 95.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Batería de plomo-ácido, 12V 70Ah, mayor capacidad',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.6,
  },
  {
    name: 'Batería EFB 12V 60Ah',
    brand: 'Exide',
    price: 125.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Batería EFB (Enhanced Flooded Battery), 12V 60Ah',
    compatibility: ['Fiat Grande Punto'],
    inStock: false,
    rating: 4.7,
  },
  {
    name: 'Batería AGM 12V 70Ah',
    brand: 'Odyssey',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Batería AGM (Absorbent Glass Mat), 12V 70Ah, premium',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.8,
  },
];

// Bujías de Encendido
const ignitionSparkPlugParts: Omit<Part, 'id' | 'category' | 'subcategory' | 'subsubcategory'>[] = [
  {
    name: 'Bujías Encendido NGK BKR6E',
    brand: 'NGK',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Bujías de encendido, 4 unidades, electrodo central de cobre',
    compatibility: ['Fiat Grande Punto 1.4'],
    inStock: true,
    rating: 4.6,
  },
  {
    name: 'Bujías Iridium BKR6EIX',
    brand: 'NGK',
    price: 28.50,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Bujías de iridio, 4 unidades, mayor durabilidad',
    compatibility: ['Fiat Grande Punto'],
    inStock: true,
    rating: 4.8,
  },
  {
    name: 'Bujías Platino BKR6EQUP',
    brand: 'NGK',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Bujías de platino, 4 unidades, electrodo doble',
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
    description: 'Bujías de precalentamiento para motores diésel, 4 unidades',
    compatibility: ['Fiat Grande Punto 1.3 Multijet'],
    inStock: true,
    rating: 4.5,
  },
  {
    name: 'Bujías Precalentamiento Bosch 0250203007',
    brand: 'Bosch',
    price: 52.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    description: 'Bujías de precalentamiento, 4 unidades, sistema rápido',
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

export const ignitionSubSubsections: SubSubCategory[] = [
  {
    id: 'battery',
    name: 'Batería',
    icon: 'Battery',
    description: 'Baterías de 12V, EFB, AGM, diferentes capacidades',
    parts: generateMockParts('battery', batteryParts),
  },
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
