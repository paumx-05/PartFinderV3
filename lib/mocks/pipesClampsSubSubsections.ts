// lib/mocks/pipesClampsSubSubsections.ts
import { SubSubCategory } from '@/lib/types/parts';

export const pipesClampsSubSubsections: SubSubCategory[] = [
  {
    id: 'water-pipes',
    name: 'Tubos de agua',
    description: 'Mangueras, tuberías, conectores, válvulas',
    icon: 'Pipe',
    parts: [
      {
        id: 'water-pipes-1',
        name: 'Manguera Superior Gates',
        brand: 'Gates',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Manguera superior de radiador, longitud 600mm, goma resistente, diámetro interno 32mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'water-pipes'
      },
      {
        id: 'water-pipes-2',
        name: 'Manguera Inferior Continental',
        brand: 'Continental',
        price: 42.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Manguera inferior de radiador, longitud 800mm, goma reforzada, diámetro interno 35mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'water-pipes'
      },
      {
        id: 'water-pipes-3',
        name: 'Conector Dayco',
        brand: 'Dayco',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Conector de manguera, latón, rosca M20x1.5, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'water-pipes'
      },
      {
        id: 'water-pipes-4',
        name: 'Válvula de Purga Febi',
        brand: 'Febi',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Válvula de purga de aire, latón, presión 1.2 bar, rosca M12x1.5',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.2,
        category: 'water-pipes'
      },
      {
        id: 'water-pipes-5',
        name: 'Tubería de Agua Aisin',
        brand: 'Aisin',
        price: 55.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Tubería de agua completa, longitud 1200mm, cobre, diámetro 28mm, incluye conectores',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.6,
        category: 'water-pipes'
      }
    ]
  },
  {
    id: 'clamps-brackets',
    name: 'Bridas/sujección',
    description: 'Abrazaderas, bridas, conectores, tornillos',
    icon: 'Wrench',
    parts: [
      {
        id: 'clamps-brackets-1',
        name: 'Abrazaderas Gates',
        brand: 'Gates',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Set de abrazaderas, acero inoxidable, diámetro 25-50mm, incluye tornillos',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'clamps-brackets'
      },
      {
        id: 'clamps-brackets-2',
        name: 'Brida Continental',
        brand: 'Continental',
        price: 22.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Brida de sujección, aluminio, diámetro 40mm, presión 2 bar, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'clamps-brackets'
      },
      {
        id: 'clamps-brackets-3',
        name: 'Conector Dayco',
        brand: 'Dayco',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Conector de brida, latón, rosca M16x1.5, presión 1.5 bar',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'clamps-brackets'
      },
      {
        id: 'clamps-brackets-4',
        name: 'Tornillos Febi',
        brand: 'Febi',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Set de tornillos para bridas, acero inoxidable, M8x20mm, incluye arandelas',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.2,
        category: 'clamps-brackets'
      },
      {
        id: 'clamps-brackets-5',
        name: 'Kit de Sujección Aisin',
        brand: 'Aisin',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit completo de sujección, incluye abrazaderas, bridas y tornillos',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.7,
        category: 'clamps-brackets'
      }
    ]
  }
];
