// lib/mocks/brakeDiscSubSubsections.ts
import { SubSubCategory } from '@/lib/types/parts';

export const brakeDiscSubSubsections: SubSubCategory[] = [
  {
    id: 'brake-discs',
    name: 'Discos de Freno',
    description: 'Discos ventilados, sólidos, perforados, ranurados, diferentes diámetros y materiales',
    icon: 'Disc',
    parts: [
      {
        id: 'brake-discs-1',
        name: 'Disco de Freno Brembo Ventilado',
        brand: 'Brembo',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Disco de freno ventilado, 280mm, hierro fundido, alta disipación de calor',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'brake-discs'
      },
      {
        id: 'brake-discs-2',
        name: 'Disco de Freno Zimmermann Sólido',
        brand: 'Zimmermann',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Disco de freno sólido, 260mm, hierro fundido, tratamiento anticorrosión',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'brake-discs'
      },
      {
        id: 'brake-discs-3',
        name: 'Disco de Freno ATE Perforado',
        brand: 'ATE',
        price: 75.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Disco de freno perforado, 270mm, ventilado, diseño deportivo',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'brake-discs'
      },
      {
        id: 'brake-discs-4',
        name: 'Disco de Freno TRW Ranurado',
        brand: 'TRW',
        price: 65.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Disco de freno ranurado, 275mm, ventilado, mejora el mordiente',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.4,
        category: 'brake-discs'
      },
      {
        id: 'brake-discs-5',
        name: 'Disco de Freno Pagid Carbono',
        brand: 'Pagid',
        price: 125.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Disco de freno de carbono, 290mm, ventilado, para uso intensivo',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.9,
        category: 'brake-discs'
      }
    ]
  },
  {
    id: 'brake-pads',
    name: 'Pastilla de Freno',
    description: 'Pastillas cerámicas, orgánicas, semi-metálicas, racing, económicas',
    icon: 'Square',
    parts: [
      {
        id: 'brake-pads-1',
        name: 'Pastillas de Freno Brembo Cerámicas',
        brand: 'Brembo',
        price: 55.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Pastillas de freno cerámicas, bajo ruido, poca polución, larga duración',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'brake-pads'
      },
      {
        id: 'brake-pads-2',
        name: 'Pastillas de Freno Ferodo Orgánicas',
        brand: 'Ferodo',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Pastillas de freno orgánicas, económicas, buen rendimiento general',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'brake-pads'
      },
      {
        id: 'brake-pads-3',
        name: 'Pastillas de Freno Bosch Semi-metálicas',
        brand: 'Bosch',
        price: 35.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Pastillas de freno semi-metálicas, buen mordiente, durabilidad media',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'brake-pads'
      },
      {
        id: 'brake-pads-4',
        name: 'Pastillas de Freno Textar Racing',
        brand: 'Textar',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Pastillas de freno racing, alto rendimiento, para uso deportivo',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'brake-pads'
      },
      {
        id: 'brake-pads-5',
        name: 'Pastillas de Freno Pagid Económicas',
        brand: 'Pagid',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Pastillas de freno económicas, buena relación calidad-precio',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.1,
        category: 'brake-pads'
      }
    ]
  },
  {
    id: 'brake-calipers',
    name: 'Pinza de Freno',
    description: 'Pinzas fijas, flotantes, monobloque, de 2 pistones, de 4 pistones',
    icon: 'Settings',
    parts: [
      {
        id: 'brake-calipers-1',
        name: 'Pinza de Freno Brembo Fija 2 Pistones',
        brand: 'Brembo',
        price: 189.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Pinza de freno fija, 2 pistones, hierro fundido, alta calidad',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'brake-calipers'
      },
      {
        id: 'brake-calipers-2',
        name: 'Pinza de Freno ATE Flotante',
        brand: 'ATE',
        price: 125.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Pinza de freno flotante, 1 pistón, aluminio, ligera y eficiente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'brake-calipers'
      },
      {
        id: 'brake-calipers-3',
        name: 'Pinza de Freno TRW Monobloque',
        brand: 'TRW',
        price: 165.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Pinza de freno monobloque, 4 pistones, aluminio, máxima rigidez',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'brake-calipers'
      },
      {
        id: 'brake-calipers-4',
        name: 'Pinza de Freno Bosch 2 Pistones',
        brand: 'Bosch',
        price: 95.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Pinza de freno 2 pistones, hierro fundido, estándar OEM',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'brake-calipers'
      },
      {
        id: 'brake-calipers-5',
        name: 'Pinza de Freno Pagid 4 Pistones Racing',
        brand: 'Pagid',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Pinza de freno 4 pistones racing, aluminio, máximo rendimiento',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.9,
        category: 'brake-calipers'
      }
    ]
  },
  {
    id: 'wear-sensors',
    name: 'Sensores de desgaste',
    description: 'Sensores de desgaste, cables de sensor, conectores, sistemas de alerta',
    icon: 'AlertTriangle',
    parts: [
      {
        id: 'wear-sensors-1',
        name: 'Sensor de Desgaste Bosch',
        brand: 'Bosch',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Sensor de desgaste de pastillas, cable incluido, alerta temprana',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'wear-sensors'
      },
      {
        id: 'wear-sensors-2',
        name: 'Cable de Sensor ATE',
        brand: 'ATE',
        price: 12.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Cable de sensor de desgaste, 1 metro, conector incluido',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'wear-sensors'
      },
      {
        id: 'wear-sensors-3',
        name: 'Conector de Sensor TRW',
        brand: 'TRW',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Conector para sensor de desgaste, resistente al agua, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.2,
        category: 'wear-sensors'
      },
      {
        id: 'wear-sensors-4',
        name: 'Sistema de Alerta Valeo',
        brand: 'Valeo',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Sistema completo de alerta de desgaste, sensor y cable incluidos',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'wear-sensors'
      },
      {
        id: 'wear-sensors-5',
        name: 'Sensor de Desgaste Febi',
        brand: 'Febi',
        price: 15.75,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Sensor de desgaste económico, buena calidad, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.1,
        category: 'wear-sensors'
      }
    ]
  }
];
