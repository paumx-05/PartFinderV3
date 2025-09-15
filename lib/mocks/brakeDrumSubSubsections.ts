// lib/mocks/brakeDrumSubSubsections.ts
import { SubSubCategory } from '@/lib/types/parts';

export const brakeDrumSubSubsections: SubSubCategory[] = [
  {
    id: 'brake-kits',
    name: 'Kit de Frenos',
    description: 'Kits completos con zapatas, cilindros, muelles, guías y tornillos',
    icon: 'Package',
    parts: [
      {
        id: 'brake-kits-1',
        name: 'Kit Completo de Frenos Bendix',
        brand: 'Bendix',
        price: 125.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Kit completo de frenos de tambor: zapatas, cilindros, muelles, guías y tornillos',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'brake-kits'
      },
      {
        id: 'brake-kits-2',
        name: 'Kit Premium de Frenos Ferodo',
        brand: 'Ferodo',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit premium de frenos de tambor, incluye zapatas de alta calidad y cilindros',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'brake-kits'
      },
      {
        id: 'brake-kits-3',
        name: 'Kit Básico de Frenos TRW',
        brand: 'TRW',
        price: 65.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit básico de frenos de tambor, zapatas y cilindros de rueda',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'brake-kits'
      },
      {
        id: 'brake-kits-4',
        name: 'Kit de Frenos ATE Completo',
        brand: 'ATE',
        price: 95.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit completo de frenos de tambor ATE, incluye todos los componentes necesarios',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.6,
        category: 'brake-kits'
      },
      {
        id: 'brake-kits-5',
        name: 'Kit de Frenos Valeo Económico',
        brand: 'Valeo',
        price: 55.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Kit económico de frenos de tambor, buena relación calidad-precio',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.2,
        category: 'brake-kits'
      }
    ]
  },
  {
    id: 'wheel-cylinders',
    name: 'Cilindro de Rueda',
    description: 'Cilindros de rueda, cilindros de freno trasero, kits de reparación',
    icon: 'Circle',
    parts: [
      {
        id: 'wheel-cylinders-1',
        name: 'Cilindro de Rueda ATE',
        brand: 'ATE',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Cilindro de rueda de freno de tambor, pistón de 19mm, hierro fundido',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'wheel-cylinders'
      },
      {
        id: 'wheel-cylinders-2',
        name: 'Cilindro de Rueda TRW',
        brand: 'TRW',
        price: 28.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Cilindro de rueda de freno trasero, pistón de 17mm, aluminio',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'wheel-cylinders'
      },
      {
        id: 'wheel-cylinders-3',
        name: 'Cilindro de Rueda Bosch',
        brand: 'Bosch',
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Cilindro de rueda de freno, pistón de 18mm, tratamiento anticorrosión',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'wheel-cylinders'
      },
      {
        id: 'wheel-cylinders-4',
        name: 'Kit de Reparación Bendix',
        brand: 'Bendix',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit de reparación de cilindro de rueda, incluye pistones y juntas',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'wheel-cylinders'
      },
      {
        id: 'wheel-cylinders-5',
        name: 'Cilindro de Rueda Febi',
        brand: 'Febi',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Cilindro de rueda económico, pistón de 16mm, buena calidad',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.1,
        category: 'wheel-cylinders'
      }
    ]
  },
  {
    id: 'brake-shoes',
    name: 'Zapata de Freno',
    description: 'Zapatas de freno, forros de zapata, kits de zapatas',
    icon: 'Square',
    parts: [
      {
        id: 'brake-shoes-1',
        name: 'Zapatas de Freno Ferodo',
        brand: 'Ferodo',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Zapatas de freno de tambor, material orgánico, diámetro 180mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'brake-shoes'
      },
      {
        id: 'brake-shoes-2',
        name: 'Zapatas de Freno Bendix',
        brand: 'Bendix',
        price: 38.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Zapatas de freno de tambor, material semi-metálico, diámetro 185mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'brake-shoes'
      },
      {
        id: 'brake-shoes-3',
        name: 'Forros de Zapata TRW',
        brand: 'TRW',
        price: 25.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Forros de zapata de freno, material orgánico, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'brake-shoes'
      },
      {
        id: 'brake-shoes-4',
        name: 'Kit de Zapatas ATE',
        brand: 'ATE',
        price: 52.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit de zapatas de freno, incluye zapatas y muelles de retorno',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'brake-shoes'
      },
      {
        id: 'brake-shoes-5',
        name: 'Zapatas de Freno Pagid',
        brand: 'Pagid',
        price: 35.75,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Zapatas de freno de tambor, material cerámico, bajo ruido',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.7,
        category: 'brake-shoes'
      }
    ]
  },
  {
    id: 'brake-drums',
    name: 'Tambor de Freno',
    description: 'Tambores de freno, tambores ventilados, tambores sólidos',
    icon: 'Disc',
    parts: [
      {
        id: 'brake-drums-1',
        name: 'Tambor de Freno ATE',
        brand: 'ATE',
        price: 75.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Tambor de freno de hierro fundido, diámetro interno 180mm, ventilado',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'brake-drums'
      },
      {
        id: 'brake-drums-2',
        name: 'Tambor de Freno TRW',
        brand: 'TRW',
        price: 65.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Tambor de freno sólido, diámetro interno 185mm, tratamiento anticorrosión',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'brake-drums'
      },
      {
        id: 'brake-drums-3',
        name: 'Tambor Ventilado Bosch',
        brand: 'Bosch',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Tambor de freno ventilado, mejor disipación de calor, diámetro 190mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'brake-drums'
      },
      {
        id: 'brake-drums-4',
        name: 'Tambor de Freno Bendix',
        brand: 'Bendix',
        price: 55.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Tambor de freno sólido, diámetro interno 175mm, acabado galvanizado',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'brake-drums'
      },
      {
        id: 'brake-drums-5',
        name: 'Tambor de Freno Valeo',
        brand: 'Valeo',
        price: 48.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Tambor de freno económico, diámetro interno 180mm, buena calidad',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.2,
        category: 'brake-drums'
      }
    ]
  }
];
