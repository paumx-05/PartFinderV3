// lib/mocks/thermostatSubSubsections.ts
import { SubSubCategory } from '@/lib/types/parts';

export const thermostatSubSubsections: SubSubCategory[] = [
  {
    id: 'thermostat-complete',
    name: 'Termostato',
    description: 'Termostatos, sensores de temperatura, válvulas',
    icon: 'Gauge',
    parts: [
      {
        id: 'thermostat-complete-1',
        name: 'Termostato Behr',
        brand: 'Behr',
        price: 25.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Termostato completo, apertura 87°C, cera termostática, latón, incluye sensor',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'thermostat-complete'
      },
      {
        id: 'thermostat-complete-2',
        name: 'Sensor de Temperatura Febi',
        brand: 'Febi',
        price: 18.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Sensor de temperatura de refrigerante, NTC, 12V, respuesta rápida',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'thermostat-complete'
      },
      {
        id: 'thermostat-complete-3',
        name: 'Válvula Termostática Gates',
        brand: 'Gates',
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Válvula termostática, apertura 85°C, latón, presión 1.2 bar, alta precisión',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'thermostat-complete'
      },
      {
        id: 'thermostat-complete-4',
        name: 'Termostato Continental',
        brand: 'Continental',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Termostato económico, apertura 89°C, plástico resistente, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'thermostat-complete'
      },
      {
        id: 'thermostat-complete-5',
        name: 'Termostato Aisin',
        brand: 'Aisin',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Termostato premium, apertura 91°C, latón cromado, alta durabilidad',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.7,
        category: 'thermostat-complete'
      }
    ]
  },
  {
    id: 'thermostat-gaskets',
    name: 'Juntas',
    description: 'Juntas de termostato, juntas de tapa, juntas de válvula',
    icon: 'Shield',
    parts: [
      {
        id: 'thermostat-gaskets-1',
        name: 'Junta de Termostato Behr',
        brand: 'Behr',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Junta de termostato, material goma resistente, diámetro 75mm, temperatura -40°C a +150°C',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'thermostat-gaskets'
      },
      {
        id: 'thermostat-gaskets-2',
        name: 'Junta de Tapa Febi',
        brand: 'Febi',
        price: 6.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de tapa de termostato, material goma, grosor 1.5mm, presión 1.2 bar',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'thermostat-gaskets'
      },
      {
        id: 'thermostat-gaskets-3',
        name: 'Junta de Válvula Gates',
        brand: 'Gates',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de válvula termostática, material goma EPDM, diámetro 35mm, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'thermostat-gaskets'
      },
      {
        id: 'thermostat-gaskets-4',
        name: 'Set de Juntas Continental',
        brand: 'Continental',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Set completo de juntas para termostato, incluye todas las juntas necesarias',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'thermostat-gaskets'
      },
      {
        id: 'thermostat-gaskets-5',
        name: 'Junta de Termostato Aisin',
        brand: 'Aisin',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de termostato premium, material goma silicona, diámetro 78mm, alta resistencia',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.7,
        category: 'thermostat-gaskets'
      }
    ]
  }
];
