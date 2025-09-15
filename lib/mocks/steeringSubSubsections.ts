// lib/mocks/steeringSubSubsections.ts
import { SubSubCategory } from '@/lib/types/parts';

export const steeringSubSubsections: SubSubCategory[] = [
  {
    id: 'steering-ball-joints',
    name: 'Rótulas de dirección',
    description: 'Rótulas superiores, inferiores, izquierda, derecha, con y sin tornillo',
    icon: 'Settings',
    parts: [
      {
        id: 'steering-ball-joints-1',
        name: 'Rótula de Dirección Superior Lemförder',
        brand: 'Lemförder',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Rótula de dirección superior izquierda, con tornillo, alta calidad OEM',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'steering-ball-joints'
      },
      {
        id: 'steering-ball-joints-2',
        name: 'Rótula de Dirección Inferior TRW',
        brand: 'TRW',
        price: 38.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Rótula de dirección inferior derecha, sin tornillo, material resistente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'steering-ball-joints'
      },
      {
        id: 'steering-ball-joints-3',
        name: 'Rótula de Dirección Febi',
        brand: 'Febi',
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Rótula de dirección superior derecha, con tornillo, buena calidad',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'steering-ball-joints'
      },
      {
        id: 'steering-ball-joints-4',
        name: 'Rótula de Dirección Moog',
        brand: 'Moog',
        price: 52.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Rótula de dirección inferior izquierda, sin tornillo, premium',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.8,
        category: 'steering-ball-joints'
      },
      {
        id: 'steering-ball-joints-5',
        name: 'Rótula de Dirección Delphi',
        brand: 'Delphi',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Rótula de dirección económica, con tornillo, estándar',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.2,
        category: 'steering-ball-joints'
      }
    ]
  },
  {
    id: 'axial-ball-joints',
    name: 'Rótulas axiales',
    description: 'Rótulas axiales, rótulas de transmisión, rótulas de cardán',
    icon: 'RotateCcw',
    parts: [
      {
        id: 'axial-ball-joints-1',
        name: 'Rótula Axial GKN',
        brand: 'GKN',
        price: 65.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Rótula axial delantera, diámetro 45mm, material resistente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'axial-ball-joints'
      },
      {
        id: 'axial-ball-joints-2',
        name: 'Rótula de Transmisión Lobro',
        brand: 'Lobro',
        price: 55.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Rótula de transmisión trasera, diámetro 42mm, alta durabilidad',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'axial-ball-joints'
      },
      {
        id: 'axial-ball-joints-3',
        name: 'Rótula de Cardán SKF',
        brand: 'SKF',
        price: 48.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Rótula de cardán, diámetro 38mm, rodamiento de bolas',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'axial-ball-joints'
      },
      {
        id: 'axial-ball-joints-4',
        name: 'Rótula Axial Febi',
        brand: 'Febi',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Rótula axial económica, diámetro 40mm, buena calidad',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.2,
        category: 'axial-ball-joints'
      },
      {
        id: 'axial-ball-joints-5',
        name: 'Rótula de Transmisión TRW',
        brand: 'TRW',
        price: 42.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Rótula de transmisión, diámetro 44mm, material premium',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.7,
        category: 'axial-ball-joints'
      }
    ]
  },
  {
    id: 'steering-column',
    name: 'Columna de dirección',
    description: 'Columnas de dirección, crucetas, juntas universales, manguitos',
    icon: 'Navigation',
    parts: [
      {
        id: 'steering-column-1',
        name: 'Columna de Dirección Lemförder',
        brand: 'Lemförder',
        price: 125.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Columna de dirección completa, longitud ajustable, airbag compatible',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'steering-column'
      },
      {
        id: 'steering-column-2',
        name: 'Cruceta de Dirección TRW',
        brand: 'TRW',
        price: 35.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Cruceta de dirección, junta universal, material resistente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'steering-column'
      },
      {
        id: 'steering-column-3',
        name: 'Junta Universal Febi',
        brand: 'Febi',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta universal de dirección, fácil instalación, buena calidad',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'steering-column'
      },
      {
        id: 'steering-column-4',
        name: 'Manguito de Dirección Moog',
        brand: 'Moog',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Manguito de dirección, protección contra polvo y humedad',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.2,
        category: 'steering-column'
      },
      {
        id: 'steering-column-5',
        name: 'Columna de Dirección Delphi',
        brand: 'Delphi',
        price: 95.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Columna de dirección estándar, longitud fija, económica',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.5,
        category: 'steering-column'
      }
    ]
  },
  {
    id: 'rack-and-pinion',
    name: 'Conjunto de cremallera',
    description: 'Cremalleras de dirección, terminales, bieletas, kits de reparación',
    icon: 'Cog',
    parts: [
      {
        id: 'rack-and-pinion-1',
        name: 'Cremallera de Dirección Lemförder',
        brand: 'Lemförder',
        price: 185.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Cremallera de dirección completa, hidráulica, alta precisión',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'rack-and-pinion'
      },
      {
        id: 'rack-and-pinion-2',
        name: 'Terminal de Dirección TRW',
        brand: 'TRW',
        price: 42.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Terminal de dirección exterior, roscado, material resistente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'rack-and-pinion'
      },
      {
        id: 'rack-and-pinion-3',
        name: 'Bieleta de Dirección Febi',
        brand: 'Febi',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Bieleta de dirección, con rótulas, longitud ajustable',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'rack-and-pinion'
      },
      {
        id: 'rack-and-pinion-4',
        name: 'Kit de Reparación Moog',
        brand: 'Moog',
        price: 75.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit de reparación de cremallera, incluye juntas y tornillos',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'rack-and-pinion'
      },
      {
        id: 'rack-and-pinion-5',
        name: 'Cremallera de Dirección Delphi',
        brand: 'Delphi',
        price: 145.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Cremallera de dirección estándar, eléctrica, buena calidad',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.4,
        category: 'rack-and-pinion'
      }
    ]
  },
  {
    id: 'power-steering-pump',
    name: 'Bomba de dirección',
    description: 'Bombas de dirección hidráulica, bombas eléctricas, depósitos, filtros',
    icon: 'Zap',
    parts: [
      {
        id: 'power-steering-pump-1',
        name: 'Bomba de Dirección TRW',
        brand: 'TRW',
        price: 125.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Bomba de dirección hidráulica, presión 100 bar, caudal 7L/min',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'power-steering-pump'
      },
      {
        id: 'power-steering-pump-2',
        name: 'Bomba Eléctrica Febi',
        brand: 'Febi',
        price: 185.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Bomba de dirección eléctrica, 12V, alta eficiencia energética',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'power-steering-pump'
      },
      {
        id: 'power-steering-pump-3',
        name: 'Depósito de Dirección Lemförder',
        brand: 'Lemförder',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Depósito de líquido de dirección, capacidad 1L, con filtro',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'power-steering-pump'
      },
      {
        id: 'power-steering-pump-4',
        name: 'Filtro de Dirección Delphi',
        brand: 'Delphi',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Filtro de líquido de dirección, alta eficiencia, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'power-steering-pump'
      },
      {
        id: 'power-steering-pump-5',
        name: 'Bomba de Dirección Valeo',
        brand: 'Valeo',
        price: 95.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Bomba de dirección hidráulica económica, presión 85 bar',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.5,
        category: 'power-steering-pump'
      }
    ]
  },
  {
    id: 'boots',
    name: 'Fuelles',
    description: 'Fuelles de rótula, protectores de grasa, kits de reparación',
    icon: 'Shield',
    parts: [
      {
        id: 'boots-1',
        name: 'Fuelle de Rótula Febi',
        brand: 'Febi',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Fuelle de rótula, diámetro 45mm, longitud 65mm, goma resistente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'boots'
      },
      {
        id: 'boots-2',
        name: 'Protector de Grasa Lemförder',
        brand: 'Lemförder',
        price: 8.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Protector de grasa para rótula, diámetro 42mm, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.2,
        category: 'boots'
      },
      {
        id: 'boots-3',
        name: 'Kit de Reparación TRW',
        brand: 'TRW',
        price: 25.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit de reparación de fuelles, incluye abrazaderas y grasa',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'boots'
      },
      {
        id: 'boots-4',
        name: 'Fuelle de Rótula Moog',
        brand: 'Moog',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Fuelle de rótula premium, diámetro 48mm, alta durabilidad',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'boots'
      },
      {
        id: 'boots-5',
        name: 'Fuelle de Rótula Delphi',
        brand: 'Delphi',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Fuelle de rótula económico, diámetro 40mm, buena calidad',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.1,
        category: 'boots'
      }
    ]
  },
  {
    id: 'steering-wheel',
    name: 'Volante/Accesorios',
    description: 'Volantes, airbags, botones de control, cubiertas',
    icon: 'SteeringWheel',
    parts: [
      {
        id: 'steering-wheel-1',
        name: 'Volante TRW',
        brand: 'TRW',
        price: 125.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Volante de dirección, diámetro 370mm, con airbag, cuero',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'steering-wheel'
      },
      {
        id: 'steering-wheel-2',
        name: 'Airbag Febi',
        brand: 'Febi',
        price: 185.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Airbag de volante, compatible con sistema original, alta seguridad',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'steering-wheel'
      },
      {
        id: 'steering-wheel-3',
        name: 'Botones de Control Lemförder',
        brand: 'Lemförder',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Botones de control de volante, radio y teléfono, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'steering-wheel'
      },
      {
        id: 'steering-wheel-4',
        name: 'Cubierta de Volante Delphi',
        brand: 'Delphi',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Cubierta de volante, cuero sintético, antideslizante',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'steering-wheel'
      },
      {
        id: 'steering-wheel-5',
        name: 'Volante Deportivo Valeo',
        brand: 'Valeo',
        price: 95.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Volante deportivo, diámetro 350mm, sin airbag, cuero perforado',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.6,
        category: 'steering-wheel'
      }
    ]
  }
];