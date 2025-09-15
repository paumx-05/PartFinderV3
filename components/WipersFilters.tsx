// components/WipersFilters.tsx
'use client';
import React from 'react';
import { Filter, X } from 'lucide-react';

interface WipersFiltersProps {
  typeFilter: string;
  onTypeFilterChange: (type: string) => void;
  brandFilter: string;
  onBrandFilterChange: (brand: string) => void;
}

export default function WipersFilters({
  typeFilter,
  onTypeFilterChange,
  brandFilter,
  onBrandFilterChange,
}: WipersFiltersProps) {
  const types = [
    { id: 'concentrado', name: 'Concentrado', description: 'Líquidos concentrados' },
    { id: 'listo', name: 'Listo para Usar', description: 'Listo para usar' },
    { id: 'anticongelante', name: 'Anticongelante', description: 'Resistente al frío' },
    { id: 'premium', name: 'Premium', description: 'Productos premium' },
    { id: 'organico', name: 'Orgánico', description: 'Productos orgánicos' },
    { id: 'invierno', name: 'Invierno', description: 'Especial para invierno' },
    { id: 'delantera', name: 'Delantera', description: 'Escobillas delanteras' },
    { id: 'trasera', name: 'Trasera', description: 'Escobillas traseras' },
    { id: 'kit', name: 'Kit Completo', description: 'Kits completos' },
    { id: 'economica', name: 'Económica', description: 'Productos económicos' },
  ];

  const brands = [
    { id: 'sonax', name: 'Sonax', description: 'Productos Sonax' },
    { id: 'turtle wax', name: 'Turtle Wax', description: 'Productos Turtle Wax' },
    { id: 'prestone', name: 'Prestone', description: 'Productos Prestone' },
    { id: 'rain-x', name: 'Rain-X', description: 'Productos Rain-X' },
    { id: 'ecoclean', name: 'EcoClean', description: 'Productos EcoClean' },
    { id: 'bosch', name: 'Bosch', description: 'Productos Bosch' },
    { id: 'valeo', name: 'Valeo', description: 'Productos Valeo' },
    { id: 'michelin', name: 'Michelin', description: 'Productos Michelin' },
    { id: 'generic', name: 'Generic', description: 'Productos genéricos' },
  ];

  const hasActiveFilters = typeFilter || brandFilter;

  const clearFilters = () => {
    onTypeFilterChange('');
    onBrandFilterChange('');
  };

  return (
    <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 border-l-4 border-red-600">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-bold text-red-600 flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          Filtros de Limpia Parabrisas
        </h4>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-1 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
            <span>Limpiar filtros</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tipo de Producto */}
        <div>
          <h5 className="text-sm font-semibold text-gray-300 mb-3">Tipo de Producto</h5>
          <div className="space-y-2">
            {types.map((type) => (
              <button
                key={type.id}
                onClick={() => onTypeFilterChange(typeFilter === type.id ? '' : type.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  typeFilter === type.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                <div className="font-medium">{type.name}</div>
                <div className="text-xs opacity-75">{type.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Marca */}
        <div>
          <h5 className="text-sm font-semibold text-gray-300 mb-3">Marca</h5>
          <div className="space-y-2">
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => onBrandFilterChange(brandFilter === brand.id ? '' : brand.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  brandFilter === brand.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                <div className="font-medium">{brand.name}</div>
                <div className="text-xs opacity-75">{brand.description}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-gray-600">
          <h5 className="text-sm font-semibold text-gray-300 mb-2">Filtros activos:</h5>
          <div className="flex flex-wrap gap-2">
            {typeFilter && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-600 text-white">
                Tipo: {types.find(t => t.id === typeFilter)?.name}
                <button
                  onClick={() => onTypeFilterChange('')}
                  className="ml-1 hover:bg-red-700 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {brandFilter && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-600 text-white">
                Marca: {brands.find(b => b.id === brandFilter)?.name}
                <button
                  onClick={() => onBrandFilterChange('')}
                  className="ml-1 hover:bg-red-700 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
