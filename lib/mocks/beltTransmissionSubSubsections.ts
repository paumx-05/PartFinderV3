// lib/mocks/beltTransmissionSubSubsections.ts
import { SubSubCategory } from '@/lib/types/parts';

export const beltTransmissionSubSubsections: SubSubCategory[] = [
  {
    id: 'timing-belt-kit',
    name: 'Correa Distribución/Kit',
    description: 'Correas de distribución, kits completos, tensores, poleas, juntas',
    icon: 'Cog',
    parts: [
      {
        id: 'timing-belt-kit-1',
        name: 'Kit Correa Distribución Gates',
        brand: 'Gates',
        price: 145.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Kit completo correa distribución, 118 dientes, longitud 1180mm, incluye tensor y polea guía',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'timing-belt-kit'
      },
      {
        id: 'timing-belt-kit-2',
        name: 'Correa Distribución Contitech',
        brand: 'Contitech',
        price: 85.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Correa de distribución, 118 dientes, longitud 1180mm, material caucho con fibra de vidrio',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'timing-belt-kit'
      },
      {
        id: 'timing-belt-kit-3',
        name: 'Tensor Distribución Dayco',
        brand: 'Dayco',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Tensor de correa distribución, automático, rango 15-25N, material resistente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'timing-belt-kit'
      },
      {
        id: 'timing-belt-kit-4',
        name: 'Polea Guía Bosch',
        brand: 'Bosch',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Polea guía distribución, diámetro 70mm, material plástico resistente, rodamiento sellado',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'timing-belt-kit'
      },
      {
        id: 'timing-belt-kit-5',
        name: 'Kit Distribución SKF',
        brand: 'SKF',
        price: 165.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit premium correa distribución, incluye correa, tensor, polea guía y juntas',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.9,
        category: 'timing-belt-kit'
      }
    ]
  },
  {
    id: 'poly-v-belt-kit',
    name: 'Correa Poli V/Kit',
    description: 'Correas poli V, kits de accesorios, tensores, poleas, abrazaderas',
    icon: 'Zap',
    parts: [
      {
        id: 'poly-v-belt-kit-1',
        name: 'Correa Poli V Gates',
        brand: 'Gates',
        price: 25.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Correa poli V, 6 canales, longitud 1125mm, perfil PK, material caucho EPDM',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'poly-v-belt-kit'
      },
      {
        id: 'poly-v-belt-kit-2',
        name: 'Kit Accesorios Contitech',
        brand: 'Contitech',
        price: 85.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit accesorios poli V, incluye correa, tensor automático y polea tensora',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'poly-v-belt-kit'
      },
      {
        id: 'poly-v-belt-kit-3',
        name: 'Tensor Poli V Dayco',
        brand: 'Dayco',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Tensor correa poli V, automático, rango 10-20N, material acero galvanizado',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'poly-v-belt-kit'
      },
      {
        id: 'poly-v-belt-kit-4',
        name: 'Polea Tensora Bosch',
        brand: 'Bosch',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Polea tensora poli V, diámetro 60mm, 6 canales, rodamiento sellado',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'poly-v-belt-kit'
      },
      {
        id: 'poly-v-belt-kit-5',
        name: 'Correa Poli V SKF',
        brand: 'SKF',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Correa poli V económica, 6 canales, longitud 1125mm, material estándar',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.3,
        category: 'poly-v-belt-kit'
      }
    ]
  },
  {
    id: 'v-belt-kit',
    name: 'Correa Trapezoidal/Kit',
    description: 'Correas trapezoidales, kits completos, tensores, poleas, tornillos',
    icon: 'Circle',
    parts: [
      {
        id: 'v-belt-kit-1',
        name: 'Correa Trapezoidal Gates',
        brand: 'Gates',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Correa trapezoidal, perfil A, longitud 1000mm, ángulo 40°, material caucho',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'v-belt-kit'
      },
      {
        id: 'v-belt-kit-2',
        name: 'Kit Completo Contitech',
        brand: 'Contitech',
        price: 65.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit completo correa trapezoidal, incluye correa, tensor y tornillos',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'v-belt-kit'
      },
      {
        id: 'v-belt-kit-3',
        name: 'Tensor Trapezoidal Dayco',
        brand: 'Dayco',
        price: 25.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Tensor correa trapezoidal, ajuste manual, rango 8-15N, material acero',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'v-belt-kit'
      },
      {
        id: 'v-belt-kit-4',
        name: 'Polea Trapezoidal Bosch',
        brand: 'Bosch',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Polea correa trapezoidal, diámetro 120mm, perfil A, material hierro fundido',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'v-belt-kit'
      },
      {
        id: 'v-belt-kit-5',
        name: 'Tornillos Tensión SKF',
        brand: 'SKF',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Set tornillos tensión correa, M8x20mm, acero inoxidable, incluye arandelas',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.2,
        category: 'v-belt-kit'
      }
    ]
  },
  {
    id: 'alternator-pulley',
    name: 'Polea Alternador',
    description: 'Poleas de alternador, poleas desacopladoras, tornillos, arandelas',
    icon: 'Settings',
    parts: [
      {
        id: 'alternator-pulley-1',
        name: 'Polea Alternador Gates',
        brand: 'Gates',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Polea alternador, 6 canales, diámetro 60mm, conexión roscada M12x1.25',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'alternator-pulley'
      },
      {
        id: 'alternator-pulley-2',
        name: 'Polea Desacopladora Contitech',
        brand: 'Contitech',
        price: 125.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Polea desacopladora alternador, 6 canales, diámetro 60mm, sistema OAP',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'alternator-pulley'
      },
      {
        id: 'alternator-pulley-3',
        name: 'Polea Alternador Dayco',
        brand: 'Dayco',
        price: 38.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Polea alternador estándar, 6 canales, diámetro 60mm, material acero',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'alternator-pulley'
      },
      {
        id: 'alternator-pulley-4',
        name: 'Tornillo Polea Bosch',
        brand: 'Bosch',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Tornillo polea alternador, M12x1.25x25mm, acero inoxidable, incluye arandela',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'alternator-pulley'
      },
      {
        id: 'alternator-pulley-5',
        name: 'Arandela Polea SKF',
        brand: 'SKF',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Arandela polea alternador, diámetro exterior 20mm, interior 12mm, acero',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.3,
        category: 'alternator-pulley'
      }
    ]
  }
];
