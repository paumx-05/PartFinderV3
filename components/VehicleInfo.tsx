// components/VehicleInfo.tsx
'use client';
import React from 'react';
import ClientSearch from './ClientSearch';

interface VehicleInfoProps {
  vehicleData: {
    vin: string;
    brand: string;
    model: string;
    year: string;
  };
  plate: string;
  onPlateChange: (newPlate: string) => void;
  onSearch: (newPlate: string) => void;
}

export default function VehicleInfo({ vehicleData, plate, onPlateChange, onSearch }: VehicleInfoProps) {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 p-3 sm:p-6 shadow-md border-b-4 border-red-600">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
          <div className="bg-gray-800 bg-opacity-70 p-3 sm:p-4 rounded-lg border-l-4 border-red-600">
            <h2 className="text-base sm:text-lg font-bold text-red-600 mb-2">Información del Vehículo</h2>
            <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-200">
              <div><strong>VIN:</strong> {vehicleData.vin}</div>
              <div><strong>Marca:</strong> {vehicleData.brand}</div>
              <div><strong>Modelo:</strong> {vehicleData.model}</div>
              <div><strong>Año:</strong> {vehicleData.year}</div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              className="p-2 sm:p-3 bg-gray-800 border border-gray-600 rounded text-gray-200 flex-1 text-sm sm:text-base"
              value={plate}
              onChange={(e) => onPlateChange(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') onSearch(plate); }}
              placeholder="Matrícula"
            />
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 rounded text-sm sm:text-base whitespace-nowrap"
              onClick={() => onSearch(plate)}
            >
              Buscar
            </button>
          </div>
        </div>
        
        {/* Client Search Section */}
        <div className="mt-4">
          <ClientSearch />
        </div>
      </div>
    </header>
  );
}

