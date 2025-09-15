// components/IgnitionFilters.tsx
'use client';
import React from 'react';
import { Filter, X } from 'lucide-react';

interface IgnitionFiltersProps {
  onTechnologyFilter: (technology: string) => void;
  onTypeFilter: (type: string) => void;
  onClearFilters: () => void;
  activeTechnology: string;
  activeType: string;
}

export default function IgnitionFilters({
  onTechnologyFilter,
  onTypeFilter,
  onClearFilters,
  activeTechnology,
  activeType,
}: IgnitionFiltersProps) {
  const technologies = [
    { id: 'plomo-acido', name: 'Plomo-ácido', description: 'Baterías tradicionales' },
    { id: 'efb', name: 'EFB', description: 'Enhanced Flooded Battery' },
    { id: 'agm', name: 'AGM', description: 'Absorbent Glass Mat' },
    { id: 'cobre', name: 'Cobre', description: 'Electrodos de cobre' },
    { id: 'iridio', name: 'Iridio', description: 'Electrodos de iridio' },
    { id: 'platino', name: 'Platino', description: 'Electrodos de platino' },
  ];

  const types = [
    { id: 'bateria', name: 'Batería', description: 'Sistemas de batería' },
    { id: 'bujias', name: 'Bujías', description: 'Bujías de encendido' },
    { id: 'precalentamiento', name: 'Precalentamiento', description: 'Bujías de precalentamiento' },
    { id: 'bobinas', name: 'Bobinas', description: 'Bobinas de encendido' },
  ];

  const hasActiveFilters = activeTechnology || activeType;

  return (
    <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 border-l-4 border-red-600">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-bold text-red-600 flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          Filtros de Encendido
        </h4>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center space-x-1 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
            <span>Limpiar filtros</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Technology Filter */}
        <div>
          <h5 className="text-sm font-semibold text-gray-300 mb-3">Tecnología</h5>
          <div className="space-y-2">
            {technologies.map((technology) => (
              <button
                key={technology.id}
                onClick={() => onTechnologyFilter(technology.id === activeTechnology ? '' : technology.id)}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-sm transition-all duration-200 ${
                  activeTechnology === technology.id
                    ? 'bg-red-600 bg-opacity-20 border-l-4 border-red-600 text-red-400'
                    : 'hover:bg-gray-700 hover:bg-opacity-50 text-gray-200 hover:text-white'
                }`}
              >
                <span className="font-medium">{technology.name}</span>
                <span className="text-xs text-gray-400">{technology.description}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div>
          <h5 className="text-sm font-semibold text-gray-300 mb-3">Tipo</h5>
          <div className="space-y-2">
            {types.map((type) => (
              <button
                key={type.id}
                onClick={() => onTypeFilter(type.id === activeType ? '' : type.id)}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-sm transition-all duration-200 ${
                  activeType === type.id
                    ? 'bg-red-600 bg-opacity-20 border-l-4 border-red-600 text-red-400'
                    : 'hover:bg-gray-700 hover:bg-opacity-50 text-gray-200 hover:text-white'
                }`}
              >
                <span className="font-medium">{type.name}</span>
                <span className="text-xs text-gray-400">{type.description}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <h6 className="text-sm font-semibold text-gray-300 mb-2">Filtros activos:</h6>
          <div className="flex flex-wrap gap-2">
            {activeTechnology && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-600 bg-opacity-20 text-red-400 border border-red-600">
                Tecnología: {technologies.find(t => t.id === activeTechnology)?.name}
                <button
                  onClick={() => onTechnologyFilter('')}
                  className="ml-1 hover:text-red-300"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {activeType && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-600 bg-opacity-20 text-red-400 border border-red-600">
                Tipo: {types.find(t => t.id === activeType)?.name}
                <button
                  onClick={() => onTypeFilter('')}
                  className="ml-1 hover:text-red-300"
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
