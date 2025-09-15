// components/SuspensionAxlesFilters.tsx
'use client';
import React from 'react';
import { Filter, X } from 'lucide-react';

interface SuspensionAxlesFiltersProps {
  onBrandFilter: (brand: string) => void;
  onMaterialFilter: (material: string) => void;
  onClearFilters: () => void;
  activeBrand: string;
  activeMaterial: string;
}

const brandOptions = [
  { value: '', label: 'Todas las marcas' },
  { value: 'Bilstein', label: 'Bilstein' },
  { value: 'Sachs', label: 'Sachs' },
  { value: 'Monroe', label: 'Monroe' },
  { value: 'Lemförder', label: 'Lemförder' },
  { value: 'TRW', label: 'TRW' },
  { value: 'Febi', label: 'Febi' },
  { value: 'SKF', label: 'SKF' },
  { value: 'FAG', label: 'FAG' },
  { value: 'NSK', label: 'NSK' },
];

const materialOptions = [
  { value: '', label: 'Todos los materiales' },
  { value: 'acero', label: 'Acero' },
  { value: 'caucho', label: 'Caucho' },
  { value: 'fundición', label: 'Fundición' },
  { value: 'inoxidable', label: 'Inoxidable' },
  { value: 'templado', label: 'Templado' },
];

export default function SuspensionAxlesFilters({
  onBrandFilter,
  onMaterialFilter,
  onClearFilters,
  activeBrand,
  activeMaterial
}: SuspensionAxlesFiltersProps) {
  const hasActiveFilters = activeBrand || activeMaterial;

  return (
    <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 border-l-4 border-red-600">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-red-600" />
          <h4 className="text-lg font-bold text-red-600">Filtros de Suspensión Ejes</h4>
        </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Filtro por marca */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Marca
          </label>
          <select
            value={activeBrand}
            onChange={(e) => onBrandFilter(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-600 focus:border-transparent"
          >
            {brandOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por material */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Material
          </label>
          <select
            value={activeMaterial}
            onChange={(e) => onMaterialFilter(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-600 focus:border-transparent"
          >
            {materialOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Indicador de filtros activos */}
      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap gap-2">
          {activeBrand && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Marca: {activeBrand}
              <button
                onClick={() => onBrandFilter('')}
                className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-red-400 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-0"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {activeMaterial && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Material: {activeMaterial}
              <button
                onClick={() => onMaterialFilter('')}
                className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-red-400 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-0"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
