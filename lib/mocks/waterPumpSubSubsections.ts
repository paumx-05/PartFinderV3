// lib/mocks/waterPumpSubSubsections.ts
import { SubSubCategory } from '@/lib/types/parts';

export const waterPumpSubSubsections: SubSubCategory[] = [
  {
    id: 'water-pump-complete',
    name: 'Bomba de agua',
    description: 'Bombas de agua, kits de reparación, poleas, correas',
    icon: 'Droplets',
    parts: [
      {
        id: 'water-pump-complete-1',
        name: 'Bomba de Agua Aisin',
        brand: 'Aisin',
        price: 85.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Bomba de agua completa, caudal 180L/min, presión 1.2 bar, aluminio, incluye polea',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'water-pump-complete'
      },
      {
        id: 'water-pump-complete-2',
        name: 'Kit de Reparación Gates',
        brand: 'Gates',
        price: 45.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit de reparación de bomba de agua, incluye polea, correa y tornillos',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'water-pump-complete'
      },
      {
        id: 'water-pump-complete-3',
        name: 'Polea de Bomba Febi',
        brand: 'Febi',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Polea de bomba de agua, diámetro 120mm, material resistente, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'water-pump-complete'
      },
      {
        id: 'water-pump-complete-4',
        name: 'Correa de Bomba Continental',
        brand: 'Continental',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Correa de bomba de agua, longitud 1125mm, goma resistente, alta durabilidad',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'water-pump-complete'
      },
      {
        id: 'water-pump-complete-5',
        name: 'Bomba de Agua Dayco',
        brand: 'Dayco',
        price: 65.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Bomba de agua económica, caudal 150L/min, hierro fundido, incluye polea',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.2,
        category: 'water-pump-complete'
      }
    ]
  },
  {
    id: 'water-pump-gaskets',
    name: 'Juntas',
    description: 'Juntas de bomba, juntas de tapa, juntas de eje',
    icon: 'Shield',
    parts: [
      {
        id: 'water-pump-gaskets-1',
        name: 'Junta de Bomba Aisin',
        brand: 'Aisin',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Junta de bomba de agua, material goma resistente, diámetro 95mm, temperatura -40°C a +150°C',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'water-pump-gaskets'
      },
      {
        id: 'water-pump-gaskets-2',
        name: 'Junta de Tapa Gates',
        brand: 'Gates',
        price: 12.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de tapa de bomba, material goma, grosor 2mm, presión 1.5 bar',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'water-pump-gaskets'
      },
      {
        id: 'water-pump-gaskets-3',
        name: 'Junta de Eje Febi',
        brand: 'Febi',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de eje de bomba, material goma EPDM, diámetro 45mm, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'water-pump-gaskets'
      },
      {
        id: 'water-pump-gaskets-4',
        name: 'Set de Juntas Continental',
        brand: 'Continental',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Set completo de juntas para bomba de agua, incluye todas las juntas necesarias',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'water-pump-gaskets'
      },
      {
        id: 'water-pump-gaskets-5',
        name: 'Junta de Bomba Dayco',
        brand: 'Dayco',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de bomba económica, material goma estándar, diámetro 90mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.1,
        category: 'water-pump-gaskets'
      }
    ]
  }
];
