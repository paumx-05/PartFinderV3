// lib/mocks/exhaustSubSubsections.ts
import { SubSubCategory } from '@/lib/types/parts';

export const exhaustSubSubsections: SubSubCategory[] = [
  {
    id: 'catalyst',
    name: 'Catalizador',
    description: 'Catalizadores, convertidores catalíticos, juntas, abrazaderas',
    icon: 'Filter',
    parts: [
      {
        id: 'catalyst-1',
        name: 'Catalizador Bosal',
        brand: 'Bosal',
        price: 185.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Catalizador completo, diámetro 76mm, longitud 300mm, material cerámico, Euro 4',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'catalyst'
      },
      {
        id: 'catalyst-2',
        name: 'Convertidor Catalítico Walker',
        brand: 'Walker',
        price: 225.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Convertidor catalítico, diámetro 80mm, longitud 350mm, material metálico, Euro 5',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'catalyst'
      },
      {
        id: 'catalyst-3',
        name: 'Junta de Catalizador Febi',
        brand: 'Febi',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de catalizador, material goma resistente, diámetro 76mm, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'catalyst'
      },
      {
        id: 'catalyst-4',
        name: 'Abrazadera de Catalizador Delphi',
        brand: 'Delphi',
        price: 25.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Abrazadera de catalizador, acero inoxidable, diámetro 76-80mm, presión alta',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'catalyst'
      },
      {
        id: 'catalyst-5',
        name: 'Catalizador Valeo',
        brand: 'Valeo',
        price: 165.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Catalizador económico, diámetro 72mm, longitud 280mm, material cerámico, Euro 3',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.2,
        category: 'catalyst'
      }
    ]
  },
  {
    id: 'particulate-filter',
    name: 'Filtro de partículas',
    description: 'Filtros de partículas, sensores de presión, válvulas EGR',
    icon: 'Shield',
    parts: [
      {
        id: 'particulate-filter-1',
        name: 'Filtro de Partículas Bosal',
        brand: 'Bosal',
        price: 485.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Filtro de partículas DPF, diámetro 120mm, longitud 400mm, material cerámico, Euro 6',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.8,
        category: 'particulate-filter'
      },
      {
        id: 'particulate-filter-2',
        name: 'Sensor de Presión Walker',
        brand: 'Walker',
        price: 85.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Sensor de presión DPF, 12V, rango 0-5 bar, conexión eléctrica, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'particulate-filter'
      },
      {
        id: 'particulate-filter-3',
        name: 'Válvula EGR Febi',
        brand: 'Febi',
        price: 125.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Válvula EGR, 12V, actuador eléctrico, material resistente a altas temperaturas',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'particulate-filter'
      },
      {
        id: 'particulate-filter-4',
        name: 'Filtro FAP Delphi',
        brand: 'Delphi',
        price: 425.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Filtro de partículas FAP, diámetro 115mm, longitud 380mm, material cerámico',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'particulate-filter'
      },
      {
        id: 'particulate-filter-5',
        name: 'Kit de Limpieza Valeo',
        brand: 'Valeo',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Kit de limpieza DPF, líquido limpiador, incluye instrucciones, fácil aplicación',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.3,
        category: 'particulate-filter'
      }
    ]
  },
  {
    id: 'exhaust-manifold',
    name: 'Colector de escape',
    description: 'Colectores de escape, juntas, tornillos, abrazaderas',
    icon: 'Pipe',
    parts: [
      {
        id: 'exhaust-manifold-1',
        name: 'Colector de Escape Bosal',
        brand: 'Bosal',
        price: 125.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Colector de escape, 4 cilindros, material hierro fundido, diámetro 45mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'exhaust-manifold'
      },
      {
        id: 'exhaust-manifold-2',
        name: 'Junta de Colector Walker',
        brand: 'Walker',
        price: 22.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de colector de escape, material goma resistente, 4 agujeros, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'exhaust-manifold'
      },
      {
        id: 'exhaust-manifold-3',
        name: 'Tornillos de Colector Febi',
        brand: 'Febi',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Set de tornillos para colector, M8x25mm, acero inoxidable, incluye arandelas',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'exhaust-manifold'
      },
      {
        id: 'exhaust-manifold-4',
        name: 'Colector de Escape Delphi',
        brand: 'Delphi',
        price: 145.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Colector de escape premium, 4 cilindros, material acero inoxidable, diámetro 48mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'exhaust-manifold'
      },
      {
        id: 'exhaust-manifold-5',
        name: 'Abrazadera de Colector Valeo',
        brand: 'Valeo',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Abrazadera de colector, acero inoxidable, diámetro 45-48mm, presión alta',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.2,
        category: 'exhaust-manifold'
      }
    ]
  },
  {
    id: 'silencer',
    name: 'Silenciador',
    description: 'Silenciadores, resonadores, juntas, abrazaderas',
    icon: 'Volume2',
    parts: [
      {
        id: 'silencer-1',
        name: 'Silenciador Bosal',
        brand: 'Bosal',
        price: 95.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Silenciador trasero, diámetro 63mm, longitud 400mm, nivel de ruido 72dB, material acero',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'silencer'
      },
      {
        id: 'silencer-2',
        name: 'Resonador Walker',
        brand: 'Walker',
        price: 65.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Resonador central, diámetro 60mm, longitud 250mm, nivel de ruido 68dB',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'silencer'
      },
      {
        id: 'silencer-3',
        name: 'Junta de Silenciador Febi',
        brand: 'Febi',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de silenciador, material goma resistente, diámetro 63mm, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'silencer'
      },
      {
        id: 'silencer-4',
        name: 'Silenciador Deportivo Delphi',
        brand: 'Delphi',
        price: 185.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Silenciador deportivo, diámetro 76mm, longitud 450mm, nivel de ruido 85dB, acero inoxidable',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'silencer'
      },
      {
        id: 'silencer-5',
        name: 'Abrazadera de Silenciador Valeo',
        brand: 'Valeo',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Abrazadera de silenciador, acero inoxidable, diámetro 60-65mm, presión media',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.2,
        category: 'silencer'
      }
    ]
  },
  {
    id: 'exhaust-pipes',
    name: 'Tubos',
    description: 'Tubos de escape, codos, juntas, abrazaderas',
    icon: 'Pipe',
    parts: [
      {
        id: 'exhaust-pipes-1',
        name: 'Tubo de Escape Bosal',
        brand: 'Bosal',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Tubo de escape, diámetro 63mm, longitud 800mm, material acero, incluye codos',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'exhaust-pipes'
      },
      {
        id: 'exhaust-pipes-2',
        name: 'Codo de Escape Walker',
        brand: 'Walker',
        price: 25.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Codo de escape 90°, diámetro 63mm, radio 100mm, material acero, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'exhaust-pipes'
      },
      {
        id: 'exhaust-pipes-3',
        name: 'Junta de Tubo Febi',
        brand: 'Febi',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Junta de tubo de escape, material goma resistente, diámetro 63mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.2,
        category: 'exhaust-pipes'
      },
      {
        id: 'exhaust-pipes-4',
        name: 'Tubo Deportivo Delphi',
        brand: 'Delphi',
        price: 75.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Tubo de escape deportivo, diámetro 76mm, longitud 1000mm, acero inoxidable',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'exhaust-pipes'
      },
      {
        id: 'exhaust-pipes-5',
        name: 'Abrazadera de Tubo Valeo',
        brand: 'Valeo',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Abrazadera de tubo, acero inoxidable, diámetro 60-65mm, presión media',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.1,
        category: 'exhaust-pipes'
      }
    ]
  },
  {
    id: 'lambda-sensor',
    name: 'Sonda Lambda',
    description: 'Sondas lambda, cables, conectores, juntas',
    icon: 'Activity',
    parts: [
      {
        id: 'lambda-sensor-1',
        name: 'Sonda Lambda Bosch',
        brand: 'Bosch',
        price: 85.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Sonda lambda, 4 cables, voltaje 0.1-0.9V, conector original, fácil instalación',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.7,
        category: 'lambda-sensor'
      },
      {
        id: 'lambda-sensor-2',
        name: 'Sonda Lambda NGK',
        brand: 'NGK',
        price: 75.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Sonda lambda universal, 4 cables, voltaje 0.1-0.9V, cable 300mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'lambda-sensor'
      },
      {
        id: 'lambda-sensor-3',
        name: 'Cable de Sonda Febi',
        brand: 'Febi',
        price: 25.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Cable de sonda lambda, 4 conductores, longitud 500mm, aislamiento resistente',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.4,
        category: 'lambda-sensor'
      },
      {
        id: 'lambda-sensor-4',
        name: 'Conector de Sonda Delphi',
        brand: 'Delphi',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Conector de sonda lambda, 4 pines, material resistente, fácil conexión',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'lambda-sensor'
      },
      {
        id: 'lambda-sensor-5',
        name: 'Sonda Lambda Valeo',
        brand: 'Valeo',
        price: 65.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Sonda lambda económica, 4 cables, voltaje 0.1-0.9V, cable 250mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.2,
        category: 'lambda-sensor'
      }
    ]
  },
  {
    id: 'temperature-sensors',
    name: 'Sensores Temperatura',
    description: 'Sensores de temperatura, cables, conectores, juntas',
    icon: 'Thermometer',
    parts: [
      {
        id: 'temperature-sensors-1',
        name: 'Sensor Temperatura Bosch',
        brand: 'Bosch',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        description: 'Sensor de temperatura escape, rango -40°C a +800°C, 12V, conector original',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.6,
        category: 'temperature-sensors'
      },
      {
        id: 'temperature-sensors-2',
        name: 'Sensor Temperatura NGK',
        brand: 'NGK',
        price: 28.50,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Sensor de temperatura universal, rango -40°C a +600°C, 12V, cable 200mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.5,
        category: 'temperature-sensors'
      },
      {
        id: 'temperature-sensors-3',
        name: 'Cable de Sensor Febi',
        brand: 'Febi',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Cable de sensor temperatura, 2 conductores, longitud 300mm, aislamiento térmico',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.3,
        category: 'temperature-sensors'
      },
      {
        id: 'temperature-sensors-4',
        name: 'Conector de Sensor Delphi',
        brand: 'Delphi',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Conector de sensor temperatura, 2 pines, material resistente al calor',
        compatibility: ['Fiat Grande Punto'],
        inStock: true,
        rating: 4.2,
        category: 'temperature-sensors'
      },
      {
        id: 'temperature-sensors-5',
        name: 'Sensor Temperatura Valeo',
        brand: 'Valeo',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
        description: 'Sensor de temperatura económico, rango -40°C a +400°C, 12V, cable 150mm',
        compatibility: ['Fiat Grande Punto'],
        inStock: false,
        rating: 4.1,
        category: 'temperature-sensors'
      }
    ]
  }
];
