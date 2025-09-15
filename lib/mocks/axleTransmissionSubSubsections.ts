// lib/mocks/axleTransmissionSubSubsections.ts
import { SubSubCategory } from '@/lib/types/parts';

export const axleTransmissionSubSubsections: SubSubCategory[] = [
  {
    id: 'driveshaft',
    name: 'Árbol de transmisión',
    description: 'Árboles de transmisión, juntas universales, cojinetes, tornillos, arandelas',
    icon: 'RotateCcw',
    parts: [
      {
        id: 'driveshaft-1',
        name: 'Árbol de Transmisión SKF',
        brand: 'SKF',
        price: 285.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Árbol de transmisión completo, longitud 1200mm, diámetro 65mm, balanceo dinámico, material acero',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'driveshaft'
      },
      {
        id: 'driveshaft-2',
        name: 'Junta Universal Febi',
        brand: 'Febi',
        price: 85.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta universal, ángulo 45°, material acero templado, lubricación permanente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'driveshaft'
      },
      {
        id: 'driveshaft-3',
        name: 'Cojinete Árbol Sachs',
        brand: 'Sachs',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Cojinete de árbol de transmisión, diámetro interior 25mm, exterior 52mm, rodamiento sellado',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'driveshaft'
      },
      {
        id: 'driveshaft-4',
        name: 'Tornillos Árbol LuK',
        brand: 'LuK',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Set tornillos árbol transmisión, M8x20mm, acero inoxidable, incluye arandelas',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'driveshaft'
      },
      {
        id: 'driveshaft-5',
        name: 'Árbol Transmisión GKN',
        brand: 'GKN',
        price: 325.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Árbol de transmisión premium, longitud 1200mm, diámetro 65mm, balanceo de precisión',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.9,
        category: 'driveshaft'
      }
    ]
  },
  {
    id: 'drive-axles',
    name: 'Palieres',
    description: 'Palieres, juntas homocinéticas, cojinetes, tornillos, tuercas',
    icon: 'Zap',
    parts: [
      {
        id: 'drive-axles-1',
        name: 'Paliere SKF',
        brand: 'SKF',
        price: 185.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Paliere completo, longitud 800mm, diámetro 32mm, junta homocinética, material acero',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'drive-axles'
      },
      {
        id: 'drive-axles-2',
        name: 'Junta Homocinética Febi',
        brand: 'Febi',
        price: 95.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta homocinética, ángulo 45°, 6 bolas, material acero templado, lubricación permanente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'drive-axles'
      },
      {
        id: 'drive-axles-3',
        name: 'Cojinete Paliere Sachs',
        brand: 'Sachs',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Cojinete de paliere, diámetro interior 32mm, exterior 72mm, rodamiento sellado',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'drive-axles'
      },
      {
        id: 'drive-axles-4',
        name: 'Tornillos Paliere LuK',
        brand: 'LuK',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Set tornillos paliere, M12x1.5x25mm, acero inoxidable, incluye tuercas',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'drive-axles'
      },
      {
        id: 'drive-axles-5',
        name: 'Paliere GKN',
        brand: 'GKN',
        price: 225.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Paliere premium, longitud 800mm, diámetro 32mm, junta homocinética de precisión',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.8,
        category: 'drive-axles'
      }
    ]
  },
  {
    id: 'joint-kit',
    name: 'Articulación/Kit',
    description: 'Articulaciones, kits de reparación, juntas, cojinetes, grasa',
    icon: 'Link',
    parts: [
      {
        id: 'joint-kit-1',
        name: 'Kit Articulación SKF',
        brand: 'SKF',
        price: 125.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Kit completo articulación, incluye junta, cojinetes, grasa y tornillos',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'joint-kit'
      },
      {
        id: 'joint-kit-2',
        name: 'Articulación Febi',
        brand: 'Febi',
        price: 75.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Articulación individual, ángulo máximo 45°, material acero templado, lubricación permanente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'joint-kit'
      },
      {
        id: 'joint-kit-3',
        name: 'Kit Reparación Sachs',
        brand: 'Sachs',
        price: 85.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit de reparación articulación, incluye cojinetes, grasa y herramientas',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'joint-kit'
      },
      {
        id: 'joint-kit-4',
        name: 'Grasa Articulación LuK',
        brand: 'LuK',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Grasa para articulaciones, 400g, temperatura -40°C a +120°C, base litio',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'joint-kit'
      },
      {
        id: 'joint-kit-5',
        name: 'Kit Articulación GKN',
        brand: 'GKN',
        price: 145.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit premium articulación, incluye todos los componentes y grasa de alta calidad',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.8,
        category: 'joint-kit'
      }
    ]
  },
  {
    id: 'boot',
    name: 'Fuelle',
    description: 'Fuelles, abrazaderas, grasa, kits de reparación',
    icon: 'Shield',
    parts: [
      {
        id: 'boot-1',
        name: 'Fuelle SKF',
        brand: 'SKF',
        price: 25.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Fuelle de transmisión, diámetro 65mm, longitud 120mm, material caucho resistente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'boot'
      },
      {
        id: 'boot-2',
        name: 'Abrazadera Fuelle Febi',
        brand: 'Febi',
        price: 8.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Abrazadera para fuelle, diámetro 65mm, material acero inoxidable, presión alta',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'boot'
      },
      {
        id: 'boot-3',
        name: 'Kit Fuelle Sachs',
        brand: 'Sachs',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit completo fuelle, incluye fuelle, abrazaderas y grasa',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'boot'
      },
      {
        id: 'boot-4',
        name: 'Grasa Fuelle LuK',
        brand: 'LuK',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Grasa para fuelle, 200g, temperatura -30°C a +100°C, base litio',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'boot'
      },
      {
        id: 'boot-5',
        name: 'Fuelle GKN',
        brand: 'GKN',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Fuelle premium, diámetro 65mm, longitud 120mm, material caucho de alta calidad',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.8,
        category: 'boot'
      }
    ]
  },
  {
    id: 'differential-seals',
    name: 'Diferencial/Retenes',
    description: 'Retenes de diferencial, juntas, aceites, filtros, tornillos',
    icon: 'Settings',
    parts: [
      {
        id: 'differential-seals-1',
        name: 'Retén Diferencial SKF',
        brand: 'SKF',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Retén de diferencial, diámetro 45mm, material caucho nitrilo, resistencia alta temperatura',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'differential-seals'
      },
      {
        id: 'differential-seals-2',
        name: 'Junta Diferencial Febi',
        brand: 'Febi',
        price: 18.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de diferencial, material fibra, resistencia aceite y temperatura, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'differential-seals'
      },
      {
        id: 'differential-seals-3',
        name: 'Aceite Diferencial Sachs',
        brand: 'Sachs',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Aceite diferencial, SAE 80W-90, 1L, viscosidad alta, protección contra desgaste',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'differential-seals'
      },
      {
        id: 'differential-seals-4',
        name: 'Filtro Diferencial LuK',
        brand: 'LuK',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Filtro de diferencial, material papel, eficiencia 99%, fácil reemplazo',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'differential-seals'
      },
      {
        id: 'differential-seals-5',
        name: 'Kit Retenes GKN',
        brand: 'GKN',
        price: 65.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit completo retenes diferencial, incluye retenes, juntas y aceite',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.8,
        category: 'differential-seals'
      }
    ]
  }
];
