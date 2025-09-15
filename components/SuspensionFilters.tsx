// components/SuspensionFilters.tsx
'use client';
import React from 'react';
import { Filter, X } from 'lucide-react';

interface SuspensionFiltersProps {
  typeFilter: string;
  onTypeFilterChange: (type: string) => void;
  materialFilter: string;
  onMaterialFilterChange: (material: string) => void;
}

export default function SuspensionFilters({
  typeFilter,
  onTypeFilterChange,
  materialFilter,
  onMaterialFilterChange,
}: SuspensionFiltersProps) {
  const types = [
    { id: 'superior', name: 'Superior', description: 'Rótulas superiores' },
    { id: 'inferior', name: 'Inferior', description: 'Rótulas inferiores' },
    { id: 'exterior', name: 'Exterior', description: 'Terminales exteriores' },
    { id: 'interior', name: 'Interior', description: 'Terminales interiores' },
    { id: 'axial', name: 'Axial', description: 'Rótulas axiales' },
    { id: 'transmision', name: 'Transmisión', description: 'Rótulas de transmisión' },
    { id: 'cardan', name: 'Cardán', description: 'Rótulas de cardán' },
    { id: 'fuelle', name: 'Fuelle', description: 'Fuelles de protección' },
  ];

  const materials = [
    { id: 'acero', name: 'Acero', description: 'Componentes de acero' },
    { id: 'aluminio', name: 'Aluminio', description: 'Componentes de aluminio' },
    { id: 'goma', name: 'Goma', description: 'Componentes de goma' },
    { id: 'plastico', name: 'Plástico', description: 'Componentes de plástico' },
    { id: 'poliuretano', name: 'Poliuretano', description: 'Componentes de poliuretano' },
    { id: 'metal', name: 'Metal', description: 'Componentes metálicos' },
  ];

  const hasActiveFilters = typeFilter || materialFilter;

  const clearFilters = () => {
    onTypeFilterChange('');
    onMaterialFilterChange('');
  };

  return (
    <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 border-l-4 border-red-600">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-bold text-red-600 flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          Filtros de Rótulas
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
        {/* Tipo de Rótula */}
        <div>
          <h5 className="text-sm font-semibold text-gray-300 mb-3">Tipo de Rótula</h5>
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

        {/* Material */}
        <div>
          <h5 className="text-sm font-semibold text-gray-300 mb-3">Material</h5>
          <div className="space-y-2">
            {materials.map((material) => (
              <button
                key={material.id}
                onClick={() => onMaterialFilterChange(materialFilter === material.id ? '' : material.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  materialFilter === material.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                <div className="font-medium">{material.name}</div>
                <div className="text-xs opacity-75">{material.description}</div>
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
            {materialFilter && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-600 text-white">
                Material: {materials.find(m => m.id === materialFilter)?.name}
                <button
                  onClick={() => onMaterialFilterChange('')}
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
