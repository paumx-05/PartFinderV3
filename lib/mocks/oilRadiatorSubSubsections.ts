// lib/mocks/oilRadiatorSubSubsections.ts
import { SubSubCategory } from '@/lib/types/parts';

export const oilRadiatorSubSubsections: SubSubCategory[] = [
  {
    id: 'oil-radiator-gaskets',
    name: 'Juntas',
    description: 'Juntas de radiador, juntas de intercambiador, juntas de válvula termostática',
    icon: 'Shield',
    parts: [
      {
        id: 'oil-radiator-gaskets-1',
        name: 'Junta de Radiador de Aceite Nissens',
        brand: 'Nissens',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Junta de radiador de aceite, material goma resistente, diámetro 120mm, temperatura -40°C a +150°C',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'oil-radiator-gaskets'
      },
      {
        id: 'oil-radiator-gaskets-2',
        name: 'Junta de Intercambiador Behr',
        brand: 'Behr',
        price: 22.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de intercambiador aceite-agua, material silicona, grosor 2mm, presión 3 bar',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'oil-radiator-gaskets'
      },
      {
        id: 'oil-radiator-gaskets-3',
        name: 'Junta de Válvula Termostática Valeo',
        brand: 'Valeo',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de válvula termostática, material goma EPDM, diámetro 85mm, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'oil-radiator-gaskets'
      },
      {
        id: 'oil-radiator-gaskets-4',
        name: 'Set de Juntas Febi',
        brand: 'Febi',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Set completo de juntas para radiador de aceite, incluye todas las juntas necesarias',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'oil-radiator-gaskets'
      },
      {
        id: 'oil-radiator-gaskets-5',
        name: 'Junta de Radiador Delphi',
        brand: 'Delphi',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de radiador económica, material goma estándar, diámetro 110mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.2,
        category: 'oil-radiator-gaskets'
      }
    ]
  },
  {
    id: 'oil-radiator-complete',
    name: 'Radiador de Aceite',
    description: 'Radiadores de aceite, intercambiadores, núcleos, válvulas termostáticas',
    icon: 'Oil',
    parts: [
      {
        id: 'oil-radiator-complete-1',
        name: 'Radiador de Aceite Nissens',
        brand: 'Nissens',
        price: 145.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Radiador de aceite completo, refrigeración por aire, aluminio, dimensiones 300x200x40mm, presión 3 bar',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'oil-radiator-complete'
      },
      {
        id: 'oil-radiator-complete-2',
        name: 'Intercambiador Aceite-Agua Behr',
        brand: 'Behr',
        price: 125.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Intercambiador aceite-agua, aluminio, conexiones roscadas M20x1.5, eficiencia 85%',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'oil-radiator-complete'
      },
      {
        id: 'oil-radiator-complete-3',
        name: 'Núcleo de Radiador Valeo',
        brand: 'Valeo',
        price: 95.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Núcleo de radiador de aceite, cobre, dimensiones 280x180x35mm, alta conductividad térmica',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'oil-radiator-complete'
      },
      {
        id: 'oil-radiator-complete-4',
        name: 'Válvula Termostática Febi',
        brand: 'Febi',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Válvula termostática de aceite, apertura 85°C, latón, presión 2.5 bar',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'oil-radiator-complete'
      },
      {
        id: 'oil-radiator-complete-5',
        name: 'Radiador de Aceite Delphi',
        brand: 'Delphi',
        price: 135.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Radiador de aceite premium, refrigeración mixta, aluminio, dimensiones 320x220x45mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.7,
        category: 'oil-radiator-complete'
      }
    ]
  }
];
