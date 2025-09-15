// lib/mocks/suspensionAxlesSubSubsections.ts
import { SubSubCategory } from '@/lib/types/parts';

export const suspensionAxlesSubSubsections: SubSubCategory[] = [
  {
    id: 'shock-absorbers',
    name: 'Amortiguadores',
    description: 'Amortiguadores delanteros, amortiguadores traseros, kits de montaje',
    icon: 'Zap',
    parts: [
      {
        id: 'shock-absorbers-1',
        name: 'Amortiguador Delantero Bilstein',
        brand: 'Bilstein',
        price: 125.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Amortiguador delantero izquierdo, gas, presión 2.5 bar, material acero',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'shock-absorbers'
      },
      {
        id: 'shock-absorbers-2',
        name: 'Amortiguador Trasero Sachs',
        brand: 'Sachs',
        price: 95.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Amortiguador trasero derecho, aceite, presión 1.8 bar, material acero',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'shock-absorbers'
      },
      {
        id: 'shock-absorbers-3',
        name: 'Kit Montaje Monroe',
        brand: 'Monroe',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit de montaje amortiguador, incluye tornillos, arandelas y juntas',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'shock-absorbers'
      }
    ]
  },
  {
    id: 'shock-mounting',
    name: 'Fijación amortiguador/cojinete',
    description: 'Cojinetes de amortiguador, tornillos, arandelas, juntas',
    icon: 'Settings',
    parts: [
      {
        id: 'shock-mounting-1',
        name: 'Cojinete Amortiguador Lemförder',
        brand: 'Lemförder',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Cojinete de amortiguador superior, diámetro 45mm, material caucho',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'shock-mounting'
      },
      {
        id: 'shock-mounting-2',
        name: 'Tornillos Fijación Febi',
        brand: 'Febi',
        price: 15.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Set tornillos fijación amortiguador, M10x25mm, acero inoxidable',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'shock-mounting'
      },
      {
        id: 'shock-mounting-3',
        name: 'Junta Amortiguador SKF',
        brand: 'SKF',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de amortiguador, material goma resistente, diámetro 40mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.2,
        category: 'shock-mounting'
      }
    ]
  },
  {
    id: 'wheel-bearing',
    name: 'Buje/Cojinete Rueda',
    description: 'Cojinetes de rueda, bujes de suspensión, retenes, tornillos',
    icon: 'Circle',
    parts: [
      {
        id: 'wheel-bearing-1',
        name: 'Cojinete Rueda SKF',
        brand: 'SKF',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Cojinete de rueda delantero, diámetro 62mm, rodamiento sellado',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'wheel-bearing'
      },
      {
        id: 'wheel-bearing-2',
        name: 'Buje Suspensión FAG',
        brand: 'FAG',
        price: 28.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Buje de suspensión trasero, diámetro 35mm, material caucho',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'wheel-bearing'
      },
      {
        id: 'wheel-bearing-3',
        name: 'Retén Cojinete NSK',
        brand: 'NSK',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Retén de cojinete de rueda, diámetro 62mm, material caucho nitrilo',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'wheel-bearing'
      }
    ]
  },
  {
    id: 'control-arm',
    name: 'Brazo oscilante',
    description: 'Brazos oscilantes delanteros, brazos oscilantes traseros, bujes de brazo',
    icon: 'Link',
    parts: [
      {
        id: 'control-arm-1',
        name: 'Brazo Oscilante Delantero Lemförder',
        brand: 'Lemförder',
        price: 185.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Brazo oscilante delantero izquierdo, longitud 350mm, material acero',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'control-arm'
      },
      {
        id: 'control-arm-2',
        name: 'Brazo Oscilante Trasero TRW',
        brand: 'TRW',
        price: 145.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Brazo oscilante trasero derecho, longitud 280mm, material acero',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'control-arm'
      },
      {
        id: 'control-arm-3',
        name: 'Buje Brazo Oscilante Febi',
        brand: 'Febi',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Buje de brazo oscilante, diámetro 25mm, material caucho resistente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'control-arm'
      }
    ]
  },
  {
    id: 'suspension-ball-joints',
    name: 'Rótulas de suspensión',
    description: 'Rótulas superiores, rótulas inferiores, kits de reparación',
    icon: 'RotateCcw',
    parts: [
      {
        id: 'suspension-ball-joints-1',
        name: 'Rótula Superior Lemförder',
        brand: 'Lemförder',
        price: 65.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Rótula superior de suspensión, ángulo 15°, material acero templado',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'suspension-ball-joints'
      },
      {
        id: 'suspension-ball-joints-2',
        name: 'Rótula Inferior TRW',
        brand: 'TRW',
        price: 55.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Rótula inferior de suspensión, ángulo 20°, material acero templado',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'suspension-ball-joints'
      },
      {
        id: 'suspension-ball-joints-3',
        name: 'Kit Reparación Rótulas Febi',
        brand: 'Febi',
        price: 85.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit de reparación rótulas, incluye rótula superior e inferior',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'suspension-ball-joints'
      }
    ]
  },
  {
    id: 'hub-carrier',
    name: 'Mangueta',
    description: 'Manguetas delanteras, manguetas traseras, tornillos, cojinetes',
    icon: 'Cog',
    parts: [
      {
        id: 'hub-carrier-1',
        name: 'Mangueta Delantera Lemförder',
        brand: 'Lemförder',
        price: 125.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Mangueta delantera izquierda, diámetro 62mm, material fundición',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'hub-carrier'
      },
      {
        id: 'hub-carrier-2',
        name: 'Mangueta Trasera TRW',
        brand: 'TRW',
        price: 95.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Mangueta trasera derecha, diámetro 55mm, material fundición',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'hub-carrier'
      },
      {
        id: 'hub-carrier-3',
        name: 'Tornillos Mangueta Febi',
        brand: 'Febi',
        price: 25.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Set tornillos mangueta, M12x30mm, acero inoxidable, incluye arandelas',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'hub-carrier'
      }
    ]
  },
  {
    id: 'tie-rods',
    name: 'Tirantes/Bieletas',
    description: 'Tirantes de suspensión, bieletas estabilizadoras, rótulas',
    icon: 'Zap',
    parts: [
      {
        id: 'tie-rods-1',
        name: 'Tirante Suspensión Lemförder',
        brand: 'Lemförder',
        price: 75.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Tirante de suspensión delantero, longitud 200mm, material acero',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'tie-rods'
      },
      {
        id: 'tie-rods-2',
        name: 'Bieleta Estabilizadora TRW',
        brand: 'TRW',
        price: 45.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Bieleta estabilizadora trasera, longitud 150mm, con rótulas',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'tie-rods'
      },
      {
        id: 'tie-rods-3',
        name: 'Rótula Tirante Febi',
        brand: 'Febi',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Rótula de tirante, ángulo 25°, material acero templado',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'tie-rods'
      }
    ]
  },
  {
    id: 'stabilizer-bar',
    name: 'Barra estabilizadora',
    description: 'Barras estabilizadoras, enlaces estabilizadores, bujes de barra',
    icon: 'Activity',
    parts: [
      {
        id: 'stabilizer-bar-1',
        name: 'Barra Estabilizadora Lemförder',
        brand: 'Lemförder',
        price: 95.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Barra estabilizadora delantera, diámetro 22mm, longitud 1200mm, material acero',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'stabilizer-bar'
      },
      {
        id: 'stabilizer-bar-2',
        name: 'Enlace Estabilizador TRW',
        brand: 'TRW',
        price: 35.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Enlace estabilizador, longitud 180mm, con rótulas en ambos extremos',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'stabilizer-bar'
      },
      {
        id: 'stabilizer-bar-3',
        name: 'Buje Barra Estabilizadora Febi',
        brand: 'Febi',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Buje de barra estabilizadora, diámetro 22mm, material caucho resistente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.2,
        category: 'stabilizer-bar'
      }
    ]
  }
];
