// components/SuperchargingFilters.tsx
'use client';
import React from 'react';
import { Filter, X } from 'lucide-react';

interface SuperchargingFiltersProps {
  onBrandFilter: (brand: string) => void;
  onMaterialFilter: (material: string) => void;
  onClearFilters: () => void;
  activeBrand: string;
  activeMaterial: string;
}

const brandOptions = [
  { value: '', label: 'Todas las marcas' },
  { value: 'Garrett', label: 'Garrett' },
  { value: 'BorgWarner', label: 'BorgWarner' },
  { value: 'Magneti Marelli', label: 'Magneti Marelli' },
  { value: 'Continental', label: 'Continental' },
  { value: 'Fiat', label: 'Fiat' },
  { value: 'Bosch', label: 'Bosch' },
  { value: 'Castrol', label: 'Castrol' },
  { value: 'Mann-Filter', label: 'Mann-Filter' },
  { value: 'Corteco', label: 'Corteco' },
  { value: 'Febi', label: 'Febi' },
  { value: 'Forge Motorsport', label: 'Forge Motorsport' },
  { value: 'Silicone Intakes', label: 'Silicone Intakes' },
  { value: 'Gates', label: 'Gates' },
  { value: 'Norma', label: 'Norma' },
];

const materialOptions = [
  { value: '', label: 'Todos los materiales' },
  { value: 'fundición', label: 'Fundición' },
  { value: 'aluminio', label: 'Aluminio' },
  { value: 'cerámico', label: 'Cerámico' },
  { value: 'silicona', label: 'Silicona' },
  { value: 'goma', label: 'Goma resistente' },
  { value: 'cobre', label: 'Cobre' },
  { value: 'acero', label: 'Acero inoxidable' },
  { value: 'grafito', label: 'Grafito' },
  { value: 'vitón', label: 'Vitón' },
];

export default function SuperchargingFilters({
  onBrandFilter,
  onMaterialFilter,
  onClearFilters,
  activeBrand,
  activeMaterial,
}: SuperchargingFiltersProps) {
  const hasActiveFilters = activeBrand || activeMaterial;

  return (
    <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 border-l-4 border-red-600">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-sm font-bold text-red-600 flex items-center space-x-2">
          <Filter className="w-4 h-4" />
          <span>Filtros de Sobrealimentación</span>
        </h5>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors text-xs"
          >
            <X className="w-3 h-3" />
            <span>Limpiar</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Filtro por marca */}
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-2">Marca</label>
          <select
            value={activeBrand}
            onChange={(e) => onBrandFilter(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-sm text-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
          >
            {brandOptions.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por material */}
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-2">Material</label>
          <select
            value={activeMaterial}
            onChange={(e) => onMaterialFilter(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-sm text-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
          >
            {materialOptions.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filtros activos */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-gray-600">
          <div className="flex flex-wrap gap-2">
            {activeBrand && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-600 bg-opacity-20 text-red-300 border border-red-600 border-opacity-30">
                {brandOptions.find((b: any) => b.value === activeBrand)?.label}
                <button
                  onClick={() => onBrandFilter('')}
                  className="ml-2 text-red-400 hover:text-red-300"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {activeMaterial && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-600 bg-opacity-20 text-red-300 border border-red-600 border-opacity-30">
                {materialOptions.find((m: any) => m.value === activeMaterial)?.label}
                <button
                  onClick={() => onMaterialFilter('')}
                  className="ml-2 text-red-400 hover:text-red-300"
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
