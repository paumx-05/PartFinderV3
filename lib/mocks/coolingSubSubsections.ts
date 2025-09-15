// lib/mocks/coolingSubSubsections.ts
import { SubSubCategory } from '@/lib/types/parts';

export const coolingSubSubsections: SubSubCategory[] = [
  {
    id: 'water-pump',
    name: 'Bomba de agua',
    description: 'Bombas de agua, kits de reparación, juntas, poleas, correas',
    icon: 'Droplets',
    parts: [
      {
        id: 'water-pump-1',
        name: 'Bomba de Agua Aisin',
        brand: 'Aisin',
        price: 85.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Bomba de agua completa, caudal 180L/min, presión 1.2 bar, aluminio',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'water-pump'
      },
      {
        id: 'water-pump-2',
        name: 'Kit de Reparación Gates',
        brand: 'Gates',
        price: 45.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit de reparación de bomba de agua, incluye juntas y tornillos',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'water-pump'
      },
      {
        id: 'water-pump-3',
        name: 'Junta de Bomba Febi',
        brand: 'Febi',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de bomba de agua, material resistente, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'water-pump'
      },
      {
        id: 'water-pump-4',
        name: 'Polea de Bomba Continental',
        brand: 'Continental',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Polea de bomba de agua, diámetro 120mm, material resistente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'water-pump'
      },
      {
        id: 'water-pump-5',
        name: 'Bomba de Agua Dayco',
        brand: 'Dayco',
        price: 65.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Bomba de agua económica, caudal 150L/min, hierro fundido',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.2,
        category: 'water-pump'
      }
    ]
  },
  {
    id: 'water-radiator',
    name: 'Radiador de agua',
    description: 'Radiadores de agua, núcleos, tanques, válvulas, tapones',
    icon: 'Thermometer',
    parts: [
      {
        id: 'water-radiator-1',
        name: 'Radiador de Agua Nissens',
        brand: 'Nissens',
        price: 125.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Radiador de agua completo, núcleo de aluminio, capacidad 5L',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'water-radiator'
      },
      {
        id: 'water-radiator-2',
        name: 'Núcleo de Radiador Behr',
        brand: 'Behr',
        price: 85.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Núcleo de radiador, aluminio, dimensiones 600x400x40mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'water-radiator'
      },
      {
        id: 'water-radiator-3',
        name: 'Tanque de Radiador Valeo',
        brand: 'Valeo',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Tanque superior de radiador, plástico resistente, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'water-radiator'
      },
      {
        id: 'water-radiator-4',
        name: 'Válvula de Radiador Febi',
        brand: 'Febi',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Válvula de purga de radiador, latón, presión 1.5 bar',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'water-radiator'
      },
      {
        id: 'water-radiator-5',
        name: 'Radiador de Agua Delphi',
        brand: 'Delphi',
        price: 95.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Radiador de agua estándar, núcleo de cobre, capacidad 4.5L',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.5,
        category: 'water-radiator'
      }
    ]
  },
  {
    id: 'oil-radiator',
    name: 'Radiador de Aceite',
    description: 'Radiadores de aceite, intercambiadores, válvulas termostáticas',
    icon: 'Oil',
    parts: [
      {
        id: 'oil-radiator-1',
        name: 'Radiador de Aceite Nissens',
        brand: 'Nissens',
        price: 145.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Radiador de aceite, refrigeración por aire, aluminio, presión 3 bar',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'oil-radiator'
      },
      {
        id: 'oil-radiator-2',
        name: 'Intercambiador Behr',
        brand: 'Behr',
        price: 95.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Intercambiador aceite-agua, aluminio, conexiones roscadas',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'oil-radiator'
      },
      {
        id: 'oil-radiator-3',
        name: 'Válvula Termostática Valeo',
        brand: 'Valeo',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Válvula termostática de aceite, apertura 85°C, latón',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'oil-radiator'
      },
      {
        id: 'oil-radiator-4',
        name: 'Radiador de Aceite Febi',
        brand: 'Febi',
        price: 115.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Radiador de aceite económico, refrigeración por agua, cobre',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'oil-radiator'
      },
      {
        id: 'oil-radiator-5',
        name: 'Radiador de Aceite Delphi',
        brand: 'Delphi',
        price: 125.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Radiador de aceite premium, refrigeración mixta, aluminio',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.7,
        category: 'oil-radiator'
      }
    ]
  },
  {
    id: 'fan',
    name: 'Ventilador',
    description: 'Ventiladores eléctricos, ventiladores mecánicos, embragues, motores',
    icon: 'Fan',
    parts: [
      {
        id: 'fan-1',
        name: 'Ventilador Eléctrico Behr',
        brand: 'Behr',
        price: 95.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Ventilador eléctrico, diámetro 350mm, 12V, 2 velocidades',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'fan'
      },
      {
        id: 'fan-2',
        name: 'Embrague de Ventilador Valeo',
        brand: 'Valeo',
        price: 65.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Embrague de ventilador mecánico, termostático, diámetro 380mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'fan'
      },
      {
        id: 'fan-3',
        name: 'Motor de Ventilador Febi',
        brand: 'Febi',
        price: 55.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Motor de ventilador eléctrico, 12V, 120W, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'fan'
      },
      {
        id: 'fan-4',
        name: 'Ventilador Mecánico Delphi',
        brand: 'Delphi',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Ventilador mecánico, diámetro 360mm, plástico resistente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'fan'
      },
      {
        id: 'fan-5',
        name: 'Ventilador Eléctrico Aisin',
        brand: 'Aisin',
        price: 85.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Ventilador eléctrico premium, diámetro 340mm, 3 velocidades',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.8,
        category: 'fan'
      }
    ]
  },
  {
    id: 'thermostat',
    name: 'Termostato',
    description: 'Termostatos, juntas, sensores de temperatura, válvulas',
    icon: 'Gauge',
    parts: [
      {
        id: 'thermostat-1',
        name: 'Termostato Behr',
        brand: 'Behr',
        price: 25.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Termostato, apertura 87°C, cera termostática, latón',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'thermostat'
      },
      {
        id: 'thermostat-2',
        name: 'Sensor de Temperatura Febi',
        brand: 'Febi',
        price: 18.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Sensor de temperatura de refrigerante, NTC, 12V',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'thermostat'
      },
      {
        id: 'thermostat-3',
        name: 'Termostato Gates',
        brand: 'Gates',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Termostato económico, apertura 85°C, plástico resistente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'thermostat'
      },
      {
        id: 'thermostat-4',
        name: 'Junta de Termostato Continental',
        brand: 'Continental',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de termostato, goma resistente, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.2,
        category: 'thermostat'
      },
      {
        id: 'thermostat-5',
        name: 'Termostato Aisin',
        brand: 'Aisin',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Termostato premium, apertura 89°C, latón cromado',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.7,
        category: 'thermostat'
      }
    ]
  },
  {
    id: 'pipes-clamps',
    name: 'Tubería y sujección',
    description: 'Mangueras, tuberías, abrazaderas, conectores, válvulas',
    icon: 'Pipe',
    parts: [
      {
        id: 'pipes-clamps-1',
        name: 'Manguera Superior Gates',
        brand: 'Gates',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Manguera superior de radiador, longitud 600mm, goma resistente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'pipes-clamps'
      },
      {
        id: 'pipes-clamps-2',
        name: 'Manguera Inferior Continental',
        brand: 'Continental',
        price: 42.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Manguera inferior de radiador, longitud 800mm, goma reforzada',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'pipes-clamps'
      },
      {
        id: 'pipes-clamps-3',
        name: 'Abrazaderas Dayco',
        brand: 'Dayco',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Set de abrazaderas, acero inoxidable, diámetro 25-50mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'pipes-clamps'
      },
      {
        id: 'pipes-clamps-4',
        name: 'Conector Febi',
        brand: 'Febi',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Conector de manguera, latón, rosca M16x1.5, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.2,
        category: 'pipes-clamps'
      },
      {
        id: 'pipes-clamps-5',
        name: 'Válvula de Purga Aisin',
        brand: 'Aisin',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Válvula de purga de aire, latón, presión 1.2 bar',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.6,
        category: 'pipes-clamps'
      }
    ]
  },
  {
    id: 'expansion-tank',
    name: 'Depósito/Vaso de expansión',
    description: 'Depósitos de expansión, vasos de expansión, tapones, sensores de nivel',
    icon: 'Container',
    parts: [
      {
        id: 'expansion-tank-1',
        name: 'Depósito de Expansión Nissens',
        brand: 'Nissens',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Depósito de expansión completo, capacidad 2L, plástico resistente, incluye tapón',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'expansion-tank'
      },
      {
        id: 'expansion-tank-2',
        name: 'Vaso de Expansión Behr',
        brand: 'Behr',
        price: 55.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Vaso de expansión, capacidad 1.5L, material resistente a altas temperaturas',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'expansion-tank'
      },
      {
        id: 'expansion-tank-3',
        name: 'Tapón de Depósito Valeo',
        brand: 'Valeo',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Tapón de depósito de expansión, presión 1.2 bar, válvula de alivio integrada',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'expansion-tank'
      },
      {
        id: 'expansion-tank-4',
        name: 'Sensor de Nivel Febi',
        brand: 'Febi',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Sensor de nivel de líquido refrigerante, 12V, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'expansion-tank'
      },
      {
        id: 'expansion-tank-5',
        name: 'Depósito de Expansión Delphi',
        brand: 'Delphi',
        price: 38.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Depósito de expansión económico, capacidad 1.8L, plástico estándar',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.2,
        category: 'expansion-tank'
      }
    ]
  }
];
